# (RN) TV Series

An app made in React Native, that exposes all TV series.

## Workflow

- [x] create a bare RN project
- [x] spike out the api
- [x] fetch the list of shows and show the basic into the screen
- [x] add more details on each list's card
- [ ] configure navigation
- [ ] integrate the navigation library with the UI Kitten's navigation's approach

## Decisions while working

- State Management

  - I've decided to keep it simple, just using custom hooks + context API for sharing the data.
  - Of course I know the importance of an usage of a third part library for managing this, but I think it's better applicable for bigger applications. _(in other words: If the problem is simple, the solution might be simple as well)_

- CSS

  - Just wondered if I might add styled-components, but I think it's not necessary

- Code organization
  - I've decided to keep styles, interfaces/types and component in the same file, for making easier to find where everything is placed

## Extra

- [ ] Hero animation after clicking onto an item on the list (with [shared elements](https://github.com/IjzerenHein/react-native-shared-element) library)
