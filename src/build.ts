import * as fs from "fs";

function extractEntries(markdownContent: string) {
  const entryRegex = /(#.+)([\s\S]*?)(?=(?:#|$))/g;

  // Extract entries and content between them
  const entriesWithContent = [];
  let match;

  while ((match = entryRegex.exec(markdownContent)) !== null) {
    const entryTitle = match[1].trim();
    const entryContent = match[2].trim();

    const parts = entryTitle.split(/[#-]/).map(p => p.trim()).filter(p => p.length > 0);
    const start = parseInt(parts[0], 16);
    const end = parts.length > 1 ? parseInt(parts[1], 16) : start;
    entriesWithContent.push({ address: start, length: end - start + 1, content: entryContent });
  }

  return entriesWithContent;
}

function extractRamAddresses(name: string) {
  // Example: Read content from entries.md
  const markdownContent = fs.readFileSync(`syntaxes/RAM_${name}.md`, 'utf-8');
  const entries = extractEntries(markdownContent);

  let data = 'import { RamAddress } from "./ram";\n';
  data += `export const ram${name}: RamAddress[] = [\n`;
  entries.forEach(p => {
    data += `{ address: 0x${p.address.toString(16)}, length: ${p.length},\n`;
    data += "  data: `" + p.content + "`\n},\n";
  });
  data += ']\n';

  fs.writeFileSync('src/ramSuperMetroid.ts', data, 'utf-8');
}

extractRamAddresses("SuperMetroid");