# (RN) TV Series

An app made in React Native, that exposes all TV series.

## Screenshots

|                                                                                                                                                                       |                                                                                                                                                                       |                                                                                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="250" alt="Screen Shot 2022-08-17 at 18 01 11" src="https://user-images.githubusercontent.com/8928206/185242566-67457c42-db49-4b4c-89d7-088fb1d2ca23.png"> | <img width="250" alt="Screen Shot 2022-08-17 at 18 01 49" src="https://user-images.githubusercontent.com/8928206/185242582-08586f37-fdb6-4bc9-922c-3a2902d5726d.png"> | <img width="250" alt="Screen Shot 2022-08-17 at 18 01 59" src="https://user-images.githubusercontent.com/8928206/185242584-2c601ea9-8df5-428a-91ac-c4843f216225.png"> |
| <img width="250" alt="Screen Shot 2022-08-17 at 18 02 09" src="https://user-images.githubusercontent.com/8928206/185242590-0a73c5a2-52e5-4d54-81fc-2a805946d364.png"> | <img width="250" alt="Screen Shot 2022-08-17 at 18 02 16" src="https://user-images.githubusercontent.com/8928206/185242593-37a3a5e2-340c-4694-a4b2-71521cc365d7.png"> |

## Getting started

For running this, it's super straightforward and easy.

First, clone the project

```shell
$ git clone git@github.com:IgorMing/rn-tv-series.git
```

move into the project folder, and install the npm dependencies

```shell
$ yarn

# or npm i
```

then, we're just ready for running it on the android platform.

Let's start the bundle

```shell
$ yarn start
```

You can easily reach it by

```shell
$ yarn android
```

or as I do, which is by the Android Studio. Opening it by the `android` folder, and using the AVD from it.

## Workflow

- [x] create a bare RN project
- [x] spike out the api
- [x] fetch the list of shows and show the basic into the screen
- [x] add more details on each list's card
- [x] configure navigation
- [x] integrate the navigation library with the UI Kitten's navigation's approach
- [x] add search UI
- [x] handle the search text with debounce
- [x] request the proper endpoint to get the correct data after searching
- [x] create component for empty results
- [x] create show details screen
- [x] add episode's list to details screen
- [x] create new screen for showing episode details

## Extras

- [x] list with infinite loading behavior

- [ ] Hero animation after clicking onto an item on the list (with [react navigation shared elements](https://github.com/IjzerenHein/react-navigation-shared-element) library)
  - As you can see below, I've implemented the hero animations through screen's navigations, but unforunately the lib mentioned uses the `@react-navigation/stack`, instead of the `@react-navigation/native-stack`, as I was using for the development. That contains the necessary implementation for the search that I've implemented, so for that reason, I decided to rid the animation out from the project. If you'd like to see this implementation, [here's the commit](https://github.com/IgorMing/rn-tv-series/commit/34010cbf4e762d59f5f5f971a60b372174aa0575)

https://user-images.githubusercontent.com/8928206/185242040-5a11e501-4713-47f8-a803-cb9b83f9a5d3.mov

## Decisions while working

- State Management

  - I've decided to keep it simple, just using custom hooks + context API _(if needed)_ for sharing the data.
  - Of course I know the importance of an usage of a third part library for managing this, but I think it's better applicable for bigger applications. _(in other words: If the problem is simple, the solution might be simple as well)_
  - On the second day, while working with the api queries, filtered data, etc, noticed that maybe I could add redux or recoil for managing data. But I think still worth keep going with ephemeral state in a custom hook.

- CSS

  - Just wondered if I might add styled-components, but I think it's not necessary

- Code organization

  - I've decided to keep styles, interfaces/types and component in the same file, for making easier to find where everything is placed

- Debounce
  - For debounce, I tried lodash.debounce first, but after couple problems in the codebase using it and spiking out a hook for caring about that, I decided to install the use-debounce library.

## Informative

- Considering that the challange doc's title is "Android challenge", I put all my attention on the Android build. Of course it does work in both platforms, but **maybe** in iOS we could find some minor UI issues.

- I paid attention to the summary field _(into Details screen)_ . Removing its HTML tag fields.
