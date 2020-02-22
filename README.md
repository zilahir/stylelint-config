# stylelint-config

This is my personal configuration for [Stylelint](https://github.com/stylelint/stylelint). It includes rules for CSS and SCSS and enforces a reasonable property order.

## Overview

The rules are based on the [sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) and [rational-order](https://github.com/constverum/stylelint-config-rational-order) configurations and include a couple of custom additions and deletions.

The configuration is compatible with [Prettier](https://github.com/prettier/prettier) (if it's configured to use tabs for indentation).

## Usage

1. Install the required packages:

```sh
npm i --save-dev stylelint
npm i --save-dev @zilahir/stylelint-config
```

2. Create a `.stylelintrc.yml` file with the following content in your project root:

```yml
extends: "@ziilahir/stylelint-config"
```

3. Add the linting script(s) you need to your `package.json` file:

```json
{
  "scripts": {
    "lint:css": "stylelint --fix src/**/*.css",
    "lint:scss": "stylelint --fix --syntax scss src/**/*.scss"
  }
}
```
