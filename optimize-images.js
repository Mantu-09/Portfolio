import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src', 'assets');

async function processImages() {
  try {
    const files = fs.readdirSync(directoryPath);
    
    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i) && !file.match(/\.webp$/i)) {
        const filePath = path.join(directoryPath, file);
        const fileExt = path.extname(file);
        const fileName = path.basename(file, fileExt);
        const destPath = path.join(directoryPath, `${fileName}.webp`);
        
        // Skip if webp already exists
        if (fs.existsSync(destPath)) {
          console.log(`Skipping ${file}, webp already exists.`);
          continue;
        }

        console.log(`Converting ${file} to WebP...`);
        
        await sharp(filePath)
          .webp({ quality: 80 }) // 80 is a good balance between quality and size
          .toFile(destPath);
          
        console.log(`Successfully converted ${file} to ${fileName}.webp\n`);
      }
    }
    console.log('All image conversions complete!');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processImages();