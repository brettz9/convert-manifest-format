#!/usr/bin/env node

import {readFile, writeFile} from 'fs/promises';

const manifestPath = './manifest.json';

const file = await readFile(manifestPath);

const manifest = JSON.parse(file);

if (process.argv.includes('--chrome')) {
  manifest.background.service_worker = manifest.background.scripts[0];
  delete manifest.background.scripts;
} else if (process.argv.includes('--firefox')) {
  manifest.background.scripts = [manifest.background.service_worker];
  delete manifest.background.service_worker;
}

const manifestString = JSON.stringify(manifest, null, 2) + '\n';

await writeFile(manifestPath, manifestString);

console.log('Finished writing to ' + manifestPath);
