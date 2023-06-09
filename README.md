# convert-manifest-format

Converts between Firefox and Chrome's flavor of WebExtensions
Manifest v3.

Firefox currently still requires a `background.scripts` array,
while Chrome requires a `background.service_worker` string.

Note that if you are moving from Firefox, you should import all
of your scripts besides the main one so that there is only one
script left in `background.scripts`.

See <https://stackoverflow.com/a/75203925/271577>
for more background.

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
