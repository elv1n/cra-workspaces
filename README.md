
# Run create-react-app 2 with workspaces

[![npm version](https://img.shields.io/npm/v/cra-workspaces.svg)](https://www.npmjs.com/package/cra-workspaces)
[![npm monthly downloads](https://img.shields.io/npm/dm/cra-workspaces.svg)](https://www.npmjs.com/package/cra-workspaces)

> All you have to do is create your app using [create-react-app](https://github.com/facebookincubator/create-react-app) and install cra-workspaces.

⚠️ **Please Note:**

> By doing this you're breaking the ["guarantees"](https://github.com/facebookincubator/create-react-app/issues/99#issuecomment-234657710) that CRA provides. That is to say you now "own" the configs. **No support** will be provided. Proceed with caution.

The goal of this package is to make a monorepo using [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to share common code across a Create React App 2 (CRA).
It runs create-react-app with yarn workspaces without config files or using 'eject'

# Getting started

#### 1) Install cra-workspaces
```bash
$ yard add cra-workspaces -D
```

#### 2) 'Flip' the existing calls to `react-scripts` in `npm` scripts
```diff
  /* package.json */

  "scripts": {
-   "start": "react-scripts start",
+   "start": "cra-workspaces start",
-   "build": "react-scripts build",
+   "build": "cra-workspaces build",
}
```

#### 3) Start the Dev Server
```bash
$ yarn start
```


#### 4) Build your app
```bash
$ yarn build
```