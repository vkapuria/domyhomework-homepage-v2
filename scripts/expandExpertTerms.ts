import * as fs from 'fs';
import * as path from 'path';

interface Writer {
  id: string;
  name: string;
  specializations: string[];
  subjects: string[];
  [key: string]: any;
}

// Expansion mappings
const skillExpansions: Record<string, string[]> = {
  'Literature Review': ['Textual Analysis', 'Source Evaluation', 'Literary Theory'],
  'Critical Analysis': ['Comparative Analysis', 'Interpretive Writing', 'Close Reading'],
  'Essay Writing': ['Argumentative Essays', 'Expository Writing', 'Persuasive Writing'],
  'Research Papers': ['Data Analysis', 'Scholarly Research', 'Academic Citations'],
  'Business Writing': ['Case Studies', 'Business Plans', 'Market Analysis'],
  'Technical Writing': ['Documentation', 'Technical Reports', 'User Manuals'],
  'Creative Writing': ['Narrative Writing', 'Descriptive Writing', 'Story Development'],
  'Academic Writing': ['Thesis Writing', 'Dissertation Chapters', 'Scholarly Articles']
};

const subjectExpansions: Record<string, string[]> = {
  'Literature': ['Literary Criticism', 'Poetry Analysis', 'Contemporary Literature'],
  'English': ['Composition', 'Rhetoric', 'Grammar'],
  'Writing': ['Content Writing', 'Copywriting', 'Editing'],
  'Chemistry': ['Organic Chemistry', 'Lab Reports', 'Chemical Analysis'],
  'Mathematics': ['Calculus', 'Statistics', 'Problem Solving'],
  'Business': ['Marketing', 'Finance', 'Management'],
  'Psychology': ['Behavioral Studies', 'Research Methods', 'Case Analysis'],
  'History': ['Historical Analysis', 'Primary Sources', 'Historiography'],
  'Science': ['Scientific Method', 'Research Design', 'Data Interpretation']
};

// Generic additions for all writers
const universalTerms = [
  'Academic Writing',
  'Research Methodology',
  'Proofreading',
  'Editing'
];

function expandTerms(writer: Writer): Writer {
  const allTerms = new Set([...writer.specializations, ...writer.subjects]);
  
  // Add expansions based on specializations
  writer.specializations.forEach(spec => {
    const expansions = skillExpansions[spec];
    if (expansions) {
      expansions.forEach(term => allTerms.add(term));
    }
  });
  
  // Add expansions based on subjects
  writer.subjects.forEach(subject => {
    const expansions = subjectExpansions[subject];
    if (expansions) {
      expansions.forEach(term => allTerms.add(term));
    }
  });
  
  // Add 2-3 universal terms if still under 12
  let index = 0;
  while (allTerms.size < 12 && index < universalTerms.length) {
    allTerms.add(universalTerms[index]);
    index++;
  }
  
  // Update writer with combined terms
  writer.subjects = Array.from(allTerms);
  writer.specializations = []; // Clear specializations, all terms now in subjects
  
  console.log(`✅ ${writer.name}: ${writer.subjects.length} terms`);
  
  return writer;
}

// Read writers.json
const filePath = path.join(__dirname, '../src/data/writers.json');
const writers: Writer[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Expand terms for all writers
writers.forEach(writer => {
  expandTerms(writer);
});

// Write back
fs.writeFileSync(filePath, JSON.stringify(writers, null, 2));

console.log('\n✅ All writers updated with expanded terms!');
console.log('📊 Average terms per writer:', 
  Math.round(writers.reduce((sum, w) => sum + w.subjects.length, 0) / writers.length)
);