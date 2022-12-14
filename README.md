**![image](https://user-images.githubusercontent.com/3481514/145904252-92e3dc1e-591f-410f-88a1-b4250f4ba6f2.png)

# Reactnative UI library starter

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/03balogun/rn-ui-library-starter/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/03balogun/rn-ui-library-starter/tree/master)

## Introduction
The aim of this project is to help improve developer experience when creating a reactnative UI library.

This repository is an extension of [expo-storybook-starter](https://github.com/dannyhw/expo-storybook-starter) which comes with `@storybook/react-native` and `@storybook/addon-react-native-web`

## What's included 🎉
- Storybook (Expo and RNWeb)


- Typescript support


- Testing(Jest and @testing-library/react-native)


- Linting / Formatting (Eslint and Prettier)


- [Semantic Release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing.
  - [@semantic-release/changelog](https://github.com/semantic-release/changelog) - semantic-release plugin to create or update a changelog file.
  - [@semantic-release/git](https://github.com/semantic-release/git) - semantic-release plugin to commit release assets to the project's git repository


- [Commitizen](https://github.com/commitizen/cz-cli) - Helps us write standardize commit messages that can be used to generate change log when releasing new version of our library.
  - [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) - commitizen adapter for the angular preset of [onventional-changelog](https://github.com/conventional-changelog/conventional-changelog)


- [Husky](https://github.com/typicode/husky) - Enforcing commits with hooks.
  - [commitlint](https://github.com/conventional-changelog/commitlint) - commitlint checks if your commit messages meet the conventional commit format.


- CircleCI configured

## Getting started

To get all the dependencies run

```
yarn install
```

To run on the web use

```
yarn storybook
```

To run on ios or android

```
yarn start
```

Then open the app from the terminal or from the expo ui in ios or android.

## important for ondevice

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```
yarn update-stories
```

To watch the stories files

```
yarn storybook-watcher
```

Note that this is only necessary for when you add or remove a story file.

## Create components
Create your components and export them in `src/index.ts`

## Publishing your package
- You should run `npx semantic-release-cli setup` in your cli to setup for your preferred CI.
- Setup your project on CircleCI
- Goto the project settings to add Environment Variables and values for `NPM_TOKEN` and `GH_TOKEN`
  - [how generate your NPM token](https://docs.npmjs.com/creating-and-viewing-access-tokens)
  - [how generate your github token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- Run deployment, subsequent push to the master or beta branch will roll out new release depending on if there's a new feature, fixes or breaking changes.

## Sample NPM package
- [@03balogun/rn-ui-library-starter](https://www.npmjs.com/package/@03balogun/awesomeuilib)

## Credits
- [expo-storybook-starter](https://github.com/dannyhw/expo-storybook-starter) was created by Daniel Williams
