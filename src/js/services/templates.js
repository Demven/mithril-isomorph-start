import fs from 'fs';
import path from 'path';

const indexHtmlFilePath = path.join(__dirname, '../../../build/html', 'index.html');
const indexHtml = fs.readFileSync(indexHtmlFilePath, 'utf8');

export default function indexHtmlTemplater(renderPlaceholder, mainContent) {
  return indexHtml.replace(renderPlaceholder, mainContent);
}
