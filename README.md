# ts-react-toolbox
> Opinionated toolbox boilerplate to create Typescript React components

# Install

```
yarn add ts-react-toolbox -D
```

# Setup

After you have installed it, run this from the root of your package:

```
$ node_modules/.bin/ts-react-toolbox init
```

That will add all the boilerplate and scripts to your project

# Contains

* Typescript ✅
* React + ReactDom ✅
* Webpack + WebpackDevServer ✅
* Jest ✅
* Examples ✅
* StyledComponents boilerplate ✅
* Travis config ✅
* Static site generation ✅
* TSLint ✅
* Prettier ✅
* Git hooks ❌
* Bundle size analyzer ❌

# Folder structure

* `__tests__`
* `custom-typings`
* `example`
* `src`

# Commands

* **init**: Initializes project
* **dev**: webpack-dev-server
* **test**: jest + watch mode
* **build**: Typescript build
* **release**: build + run tests + version bump + publish to registry
* **static**: deploys example to github pages
* **lint**: tslint
* **format**: prettier
* **analyze**: webpack-bundle-analyzer

# Inspired by

Dan Abramov - The Melting Pot of JavaScript : https://www.youtube.com/watch?v=G39lKaONAlA
