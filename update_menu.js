const fs = require('fs');
const filepath = 'src/components/ServicesMegaMenu.tsx';
let content = fs.readFileSync(filepath, 'utf-8');

const coreStart = content.indexOf('            {/* ══ Row 1: Core Growth Services [list | detail] ══ */}');
const genStart = content.indexOf('            {/* ══ Row 2: General Packages (full width) ══ */}');
const footerStart = content.indexOf('            {/* ── Footer strip ── */}');

if (coreStart > -1 && genStart > -1 && footerStart > -1) {
    let coreStr = content.substring(coreStart, genStart);
    let genStr = content.substring(genStart, footerStart);
    
    // Switch row numbers and bottom/top borders
    coreStr = coreStr.replace('Row 1: Core Growth Services', 'Row 2: Core Growth Services');
    genStr = genStr.replace('Row 2: General Packages', 'Row 1: General Packages');
    
    // Remove border top from general, add border bottom
    genStr = genStr.replace('borderTop: "1px solid rgba(255,255,255,0.06)",', 'borderBottom: "1px solid rgba(255,255,255,0.06)",');
    genStr = genStr.replace('padding: "16px 24px 20px"', 'padding: "20px 24px 20px"');
    
    let before = content.substring(0, coreStart);
    let after = content.substring(footerStart);
    
    fs.writeFileSync(filepath, before + genStr + coreStr + after);
    console.log("Successfully swapped order.");
} else {
    console.log("Failed to find boundaries.");
}
