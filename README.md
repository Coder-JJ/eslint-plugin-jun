# eslint-plugin-jun

eslint-plugin-jun

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint -D
```

Next, install `eslint-plugin-jun`:

```
$ npm i eslint-plugin-jun -D
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jun` globally.

## Usage

Add `jun` to the `plugins` section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "jun"
  ]
}
```

Then configure the rules you want to use under the `extends` section, there are six rule groups in total:

```json
{
  "extends": [
    "plugin:jun/es-dev"
  ]
}
```

```json
{
  "extends": [
    "plugin:jun/es-prod"
  ]
}
```

```json
{
  "extends": [
    "plugin:jun/ts-dev"
  ]
}
```

```json
{
  "extends": [
    "plugin:jun/ts-prod"
  ]
}
```

```json
{
  "extends": [
    "plugin:jun/react-dev"
  ]
}
```

```json
{
  "extends": [
    "plugin:jun/react-prod"
  ]
}
```

You can also use list of rules together, configs below means your project use `Typescript` + `React` in `prod` env:

```json
{
  "plugins": [
    "jun"
  ],
  "extends": [
    "plugin:jun/ts-prod",
    "plugin:jun/react-prod"
  ]
}
```
