import * as fs from 'fs';
import * as path from 'path';

// Type for writer
interface Writer {
  id: string;
  name: string;
  reviewCount: number;
  [key: string]: any;
}

// Mapping: writer ID → new review count (20% of projects)
const newReviewCounts: Record<string, number> = {
  'claire-h': 77,
  'bella-w': 72,
  'mihir-j': 75,
  'charles-t': 66,
  'greene-s': 62,
  'elijah-m': 61,
  'marie-l': 59,
  'rebecca-e': 51,
  'daria-g': 48,
  'ava-t': 45,
  'vincent-d': 43,
  'ellie-m': 40,
  'aaron-k': 35,
  'lydia-w': 32,
  'anjali-p': 30,
  'paul': 29,
  'david-r': 27,
  'susan-l': 24,
  'arun-n': 22,
  'grace-k': 21,
  'eric-h': 19,
  'eden-m': 18
};

// Read writers.json
const filePath = path.join(__dirname, '../src/data/writers.json');
const writers: Writer[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update review counts
writers.forEach((writer: Writer) => {
  if (newReviewCounts[writer.id]) {
    writer.reviewCount = newReviewCounts[writer.id];
    console.log(`✅ Updated ${writer.name}: ${writer.reviewCount} reviews`);
  }
});

// Write back
fs.writeFileSync(filePath, JSON.stringify(writers, null, 2));
console.log('\n✅ All review counts updated!');