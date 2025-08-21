import {readFile} from 'fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url))
);

const optionDefinitions = [
  {
    name: 'chrome', alias: 'c', type: Boolean,
    description: 'Whether to convert to the Chrome manifest format. ' +
      'Converts first `background.scripts` to `background.service_worker`.'
  },
  {
    name: 'firefox', alias: 'f', type: Boolean,
    description: 'Whether to convert to the Firefox manifest format.\n' +
      '1. Converts `background.service_worker` to `background.scripts[0]`.\n' +
      '2. If `options_page` is present, will convert to `options_ui.page`.\n' +
      '3. If `incognito` is present and set to "split", will prompt you ' +
      'to change the value to "spanning" or "not_allowed" or will also ' +
      'allow you to "remove" the option or "keep" it as is despite ' +
      'the problem.'
  },
  {
    name: 'spacing', alias: 's', type: String,
    description: 'The `JSON.stringify` spacing to add in converted ' +
      'manifest file. If a number, will ' +
      'indicate the number of spaces',
    typeLabel: '{underline "tab"|<number>}'
  }
];

const cliSections = [
  {
    // Add italics: `{italic textToItalicize}`
    content: pkg.description +
      '\n\n{italic convert-manifest-format --chrome|--firefox [--spacing=tab|<number>]}'
  },
  {
    optionList: optionDefinitions
  }
];

export {optionDefinitions as definitions, cliSections as sections};
