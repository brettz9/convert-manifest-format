# convert-manifest-format

Converts between Firefox and Chrome's flavor of WebExtensions
Manifest v3.

The following changes may be made:

1. Firefox currently still requires a `background.scripts` array,
while Chrome requires a `background.service_worker` string.

Note that if you are moving from Firefox, you should import all
of your scripts besides the main one so that there is only one
script left in `background.scripts`.

See <https://stackoverflow.com/a/75203925/271577>
for more background.

2. If the Firefox mode is chosen and `incognito: "split"` is found,
options will be given to keep, remove, or change the value (since
"split" is [currently not supported](https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/incognito.html)).

3. If the Firefox mode is chosen, any `options_page` value will be converted
    to `"options_ui": {"page": "..."}`.

## Install

```shell
npm i -D convert-manifest-format
```

## Usage

To convert to Chrome:

```shell
convert-manifest-format --chrome
```

To convert to Firefox:

```shell
convert-manifest-format --firefox
```
