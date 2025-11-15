const fs = require('fs');
const path = require('path');

// Path to writers.json
const writersPath = path.join(__dirname, '../src/data/writers.json');

console.log('🧹 Cleaning premium reviews...\n');

// Read the file
const writersData = JSON.parse(fs.readFileSync(writersPath, 'utf8'));

let totalCleaned = 0;
let writersUpdated = 0;

// Process each writer
writersData.forEach(writer => {
  if (writer.premiumReviews && writer.premiumReviews.length > 0) {
    writersUpdated++;
    
    // Remove date and orderNumber from each premium review
    writer.premiumReviews = writer.premiumReviews.map(review => {
      const cleaned = { ...review };
      
      // Delete the fields we don't want
      delete cleaned.date;
      delete cleaned.orderNumber;
      
      totalCleaned++;
      return cleaned;
    });
    
    console.log(`✅ ${writer.name}: Cleaned ${writer.premiumReviews.length} premium reviews`);
  }
  
  // Also remove lastOrder field from writer
  if (writer.lastOrder) {
    delete writer.lastOrder;
  }
});

// Write back to file with pretty formatting
fs.writeFileSync(writersPath, JSON.stringify(writersData, null, 2), 'utf8');

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ SUCCESS! Cleaned ${totalCleaned} premium reviews across ${writersUpdated} writers`);
console.log(`✅ Also removed 'lastOrder' field from all writers`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log('📝 Changes saved to:', writersPath);
console.log('\n💡 Next steps:');
console.log('   1. Review the changes in writers.json');
console.log('   2. Run: npm run seed:supabase');
console.log('   3. Commit and push changes\n');