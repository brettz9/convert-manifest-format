# CHANGES for `convert-manifest-format`

## 0.8.1

- fix: ensure `command-line-basics` is published

## 0.8.0

- feat: adds CLI help, version, and update notifier; fixes #6

## 0.7.0

- feat: allow for `--spacing` option to control JSON output (as
    "tab" or the desired number of spaces)

## 0.6.0

- feat: convert `options_page` to `"options_ui": {"page": "..."}` in
    Firefox mode

## 0.5.0

- fix: No longer errs if `background` fields missing
- feat: Firefox prompt for `incognito`

## 0.4.1

- fix: bump `engines` to 14 as per current requirement

## 0.4.0

- fix: avoid handling `type` with Firefox adding support

## 0.3.1

- fix: reorder `type` before `service_worker`

## 0.3.0

- feat: add/remove `type: "module"`

## 0.2.3

- fix: const issue

## 0.2.2

- fix: file reading bug

## 0.2.1

- fix: path bug

## 0.2.0

- feat: comments out or uncomments polyfill import statement

## 0.1.0

- Initial version
