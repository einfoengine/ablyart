const fs = require('fs');
const path = require('path');

const components = [
  "HeroSection",
  "GrowthCalculatorSection",
  "HotServicesSection",
  "VslSection",
  "ValueFocusSection",
  "ServicesSection",
  "CompanyLogosSection",
  "WhyChooseUsSection",
  "AgitationSection",
  "TestimonialsSection",
  "TechAndSocial",
  "FaqSection",
  "BlogSection"
];

for (const comp of components) {
  const filePath = path.join('/Users/shanewazalmaruf/Projects/ablyart/src/components', `${comp}.tsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if `id?: string` is already in a props type
    if (!content.includes('id?: string')) {
      const propsMatch = content.match(/type\s+(\w+Props)\s*=\s*\{/);
      if (propsMatch) {
         content = content.replace(/type\s+(\w+Props)\s*=\s*\{/, `type $1 = {\n  id?: string;`);
      } else {
         content = content.replace(/export default function (\w+)\(\s*(?:\{\s*([^}]*)\}\s*:\s*\w*Props\s*(=[^{]*)?)?\s*\)\s*\{/, function(match, p1) {
            return `type ${p1}Props = { id?: string };\n\nexport default function ${p1}({ id }: ${p1}Props = {}) {`;
         });
      }
    }

    // Add id to the destructuring if we have a Props object
    content = content.replace(/export default function (\w+)\(\{\s*([^}]*?)\s*\}\s*:\s*\w+Props[^)]*\)/, (match, p1, p2) => {
        if (!p2.includes('id')) {
           return match.replace(p2, p2 ? `${p2}, id` : `id`);
        }
        return match;
    });

    // Add id={id} to the first section or div
    // We only want to do it in the first return statement.
    const returnIndex = content.indexOf('return (');
    if (returnIndex !== -1) {
       let block = content.substring(returnIndex);
       block = block.replace(/<(section|div)([^\>]*?)>/, (match, tag, attrList) => {
          if (attrList.includes('id=')) {
              return `<${tag}${attrList.replace(/id=["'][^"']*["']/, 'id={id}')}>`;
          } else {
              return `<${tag} id={id}${attrList}>`;
          }
       });
       content = content.substring(0, returnIndex) + block;
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${comp}.tsx`);
  } else {
    console.log(`Not found: ${comp}.tsx`);
  }
}
