import {getCliClient} from 'sanity/cli'
import fs from 'node:fs'
import path from 'node:path'

const client = getCliClient({
  apiVersion: '2024-01-01',
})

// Your WEBSITE assets folder
const websiteAssets = 'C:\\Users\\Turkia\\Documents\\GitHub\\Piccolomondo\\assets'

// Only images 1–7 — NO 10.webp
const topImagePaths = [
  path.join(websiteAssets, 'story-photos', '1.webp'),
  path.join(websiteAssets, 'story-photos', '2.webp'),
  path.join(websiteAssets, 'story-photos', '3.webp'),
  path.join(websiteAssets, 'story-photos', '4.webp'),
  path.join(websiteAssets, 'story-photos', '5.webp'),
  path.join(websiteAssets, 'story-photos', '6.webp'),
  path.join(websiteAssets, 'story-photos', '7.webp'),
]

const chairPath = path.join(websiteAssets, 'chair-floating.webp')

async function uploadImage(filePath: string) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }

  console.log(`Uploading: ${filePath}`)

  return client.assets.upload(
    'image',
    fs.createReadStream(filePath),
    {
      filename: path.basename(filePath),
    }
  )
}

async function run() {
  // Find your existing Home Page document
  let home = await client.fetch(
    `*[_type == "homePage"][0]{_id}`
  )

  // If there isn't one yet, create it
  if (!home?._id) {
    home = await client.create({
      _type: 'homePage',
    })

    console.log('Created Home Page document:', home._id)
  }

  console.log('Home Page document:', home._id)

  // Upload the 7 top images
  const uploadedTopImages = []

  for (let i = 0; i < topImagePaths.length; i++) {
    const asset = await uploadImage(topImagePaths[i])

    uploadedTopImages.push({
      _key: `top-image-${i + 1}`,
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    })
  }

  // Upload floating chair
  const chairAsset = await uploadImage(chairPath)

  const chair = {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: chairAsset._id,
    },
  }

  // Put everything into the existing hero object
  await client
    .patch(home._id)
    .set({
      'hero.topImages': uploadedTopImages,
      'hero.chair': chair,
    })
    .commit()

  console.log('')
  console.log('DONE ✅')
  console.log('Added 7 Top Section Images')
  console.log('Added Floating Chair')
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})