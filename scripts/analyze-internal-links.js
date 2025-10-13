const fs = require('fs');
const path = require('path');

// Load data files
const servicePages = require('../src/data/servicePages.json');
const tier2Config = require('../src/data/configs/tier2-subjects.json');

console.log('\n🌳 HUB-AND-SPOKE LINK TREE VISUALIZATION\n');
console.log('='.repeat(80));

// Build relationship map
const relationships = new Map();

// Map T1 slugs for easy lookup
const t1Slugs = new Set(servicePages.map(page => page.slug));

// For each T1 page
servicePages.forEach(page => {
  const t1Slug = page.slug;
  
  // Extract all links from T1 content
  const links = extractLinks(JSON.stringify(page));
  
  // Find T2 pages this T1 links to
  const t2Children = links.filter(link => 
    link.startsWith('/do-my-') || 
    link.startsWith('/write-my-') ||
    link.startsWith('/essay-editing') ||
    link.startsWith('/proofread-my') ||
    link.startsWith('/case-study') ||
    link.startsWith('/discussion-board') ||
    link.startsWith('/personal-statement') ||
    link.startsWith('/speech-writing') ||
    link.startsWith('/book-movie-review')
  ).map(link => link.split('/').filter(p => p).pop())
   .filter((link, index, self) => self.indexOf(link) === index); // Remove duplicates
  
  // Find other T1 pages this T1 links to
  const t1Siblings = links.filter(link => {
    const slug = link.split('/').filter(p => p).pop();
    return t1Slugs.has(slug) && slug !== t1Slug;
  }).map(link => link.split('/').filter(p => p).pop())
   .filter((link, index, self) => self.indexOf(link) === index); // Remove duplicates
  
  relationships.set(t1Slug, {
    type: 'T1',
    t2Children,
    t1Siblings,
    focusKeyword: page.focusKeyword
  });
});

// For each T2 page
tier2Config.subjects.forEach(subject => {
  const t2Slug = subject.slug;
  
  relationships.set(t2Slug, {
    type: 'T2',
    name: subject.name,
    category: subject.category,
    parentT1s: subject.parentT1Links.map(link => link.slug),
    siblingT2s: subject.siblingT2Links.map(link => link.slug)
  });
});

// Display tree structure
console.log('\n📊 HUB-AND-SPOKE STRUCTURE\n');

servicePages.forEach((page, index) => {
  const data = relationships.get(page.slug);
  const isLast = index === servicePages.length - 1;
  
  console.log(`\n${'━'.repeat(80)}`);
  console.log(`🔵 T1 HUB: ${page.slug.toUpperCase()}`);
  console.log(`   📌 Focus: ${data.focusKeyword}`);
  
  // Show T1 → T1 connections
  if (data.t1Siblings.length > 0) {
    console.log(`\n   🔗 Connects to ${data.t1Siblings.length} other T1 hubs:`);
    data.t1Siblings.forEach((sibling, idx) => {
      const isLastSibling = idx === data.t1Siblings.length - 1;
      console.log(`   ${isLastSibling ? '└' : '├'}─➤ ${sibling}`);
    });
  }
  
  // Show T1 → T2 connections
  if (data.t2Children.length > 0) {
    console.log(`\n   🌿 Links to ${data.t2Children.length} T2 spoke pages:`);
    data.t2Children.forEach((child, idx) => {
      const isLastChild = idx === data.t2Children.length - 1;
      const t2Data = relationships.get(child);
      const prefix = isLastChild ? '└' : '├';
      
      if (t2Data) {
        console.log(`   ${prefix}──🟢 ${child}`);
        console.log(`   ${isLastChild ? ' ' : '│'}     └─ ${t2Data.name} (${t2Data.category})`);
      } else {
        console.log(`   ${prefix}──🟢 ${child}`);
      }
    });
  } else {
    console.log(`\n   ⚠️  No T2 children linked from content`);
  }
});

// Show T2 clusters
console.log(`\n\n${'━'.repeat(80)}`);
console.log('\n🔍 T2 SPOKE CLUSTERS (Grouped by Category)\n');

// Group T2s by category
const categories = {};
tier2Config.subjects.forEach(subject => {
  if (!categories[subject.category]) {
    categories[subject.category] = [];
  }
  categories[subject.category].push(subject);
});

Object.entries(categories).forEach(([category, subjects]) => {
  console.log(`\n📁 ${category.toUpperCase()} (${subjects.length} pages)`);
  
  subjects.forEach((subject, idx) => {
    const isLast = idx === subjects.length - 1;
    const data = relationships.get(subject.slug);
    
    console.log(`${isLast ? '└' : '├'}──🟢 ${subject.slug}`);
    
    // Show parent T1s
    if (data.parentT1s.length > 0) {
      console.log(`${isLast ? ' ' : '│'}   ⬆️  Parents: ${data.parentT1s.join(', ')}`);
    }
    
    // Show sibling T2s
    if (data.siblingT2s.length > 0) {
      console.log(`${isLast ? ' ' : '│'}   ↔️  Siblings: ${data.siblingT2s.slice(0, 3).join(', ')}${data.siblingT2s.length > 3 ? '...' : ''}`);
    }
  });
});

// Summary
console.log(`\n\n${'━'.repeat(80)}`);
console.log('\n📈 TREE SUMMARY\n');
console.log(`Total Hubs (T1): ${servicePages.length}`);
console.log(`Total Spokes (T2): ${tier2Config.subjects.length}`);
console.log(`Categories: ${Object.keys(categories).length}`);
console.log(`\nHub-to-Spoke Ratio: 1:${(tier2Config.subjects.length / servicePages.length).toFixed(1)}`);

console.log('\n' + '='.repeat(80) + '\n');

// Helper function to extract links from content
function extractLinks(content) {
  const linkRegex = /href=['"]([^'"]+)['"]/g;
  const links = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  return links.filter(link => link.startsWith('/') && !link.includes('http'));
}