# (RN) TV Series

An app made in React Native, that exposes all TV series.

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

## Extras

- [ ] list with infinite loading behavior
- [ ] Hero animation after clicking onto an item on the list (with [shared elements](https://github.com/IjzerenHein/react-native-shared-element) library)

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
