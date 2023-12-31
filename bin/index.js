#!/usr/bin/env node

import {readFile, writeFile} from 'fs/promises';
import inquirer from 'inquirer';

const manifestPath = './manifest.json';

const file = await readFile(manifestPath);

const manifest = JSON.parse(file);

if (process.argv.includes('--chrome')) {
  if (manifest.background?.scripts?.[0]) {
    manifest.background.service_worker = manifest.background.scripts[0];
    const workerFile = await readFile(manifest.background.scripts[0], 'utf8');
    await writeFile(manifest.background.scripts[0], workerFile);
    delete manifest.background.scripts;
  }
} else if (process.argv.includes('--firefox')) {
  if (manifest.background?.service_worker) {
    manifest.background.scripts = [manifest.background.service_worker];
    const workerFile = await readFile(manifest.background.service_worker, 'utf8');
    await writeFile(manifest.background.service_worker, workerFile);
    delete manifest.background.service_worker;
  }

  if (manifest.incognito === 'split') {
    const {incognito} = await inquirer.prompt([
      {
        type: 'list',
        name: 'incognito',
        message: '`incognito` cannot currently be used with "split" as a value in Firefox. Would you like to...?',
        choices: [
          {
            name: 'Change to "spanning"',
            value: 'spanning'
          },
          {
            name: 'Change to "not_allowed"',
            value: 'not_allowed'
          },
          {
            name: 'Remove',
            value: 'remove'
          },
          {
            name: 'Keep as "split" (not recommended unless you know Firefox to now support the value)',
            value: 'keep'
          }
        ]
      }
    ]);

    switch (incognito) {
      case 'remove':
        delete manifest.incognito;
        break;
      case 'keep':
        break;
      default: // case "spanning": case "not_allowed":
        manifest.incognito = incognito;
        break;
    }
  }
}

const manifestString = JSON.stringify(manifest, null, 2) + '\n';

await writeFile(manifestPath, manifestString);

console.log('Finished writing to ' + manifestPath);
