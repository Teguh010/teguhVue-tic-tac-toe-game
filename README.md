# Tac Toe with Vue.js 
# Play This Game 
click this link to play this game 👉 https://teguh010.github.io/teguh-vue-tic-tac-toe/#/


## Requirements

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= 12.16.1
- yarn >= 1.22.0
- [Visual Studio Code](https://code.visualstudio.com/) with the [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- Recent version of Google Chrome with the [Vue.js devtools extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Install

```bash
yarn install
```

## Usage

```bash
yarn serve
```

## Run unit tests

```bash
yarn test:unit
```

##  Overview

- This Tic Tac Toe Game made by Teguh Badrusalam using Vue Js


## the steps in working on this project

##  Step 1

> The square logic

### Goal

Display an **X** when the player **X** clicks on an empty square, and display an **O** when the player **O** clicks on an empty square.


##  Step 2

> The game status

### Goal

Display **X** and **O** with different colors, display the game status (next player, winner or draw game).


##  Step 3

> Highlight the winner


##  Step 4

> Restart the game

### Goal

Improve the UX (User eXperience) by allowing users to restart the game without reloading the whole application.


##  Step 5 (advanced workshop)

> Routing and shared state

### Goal

Add a lobby page before starting the game. In this lobby, you shall be able to name the players.


#### Configure Vue-Router

- Add the dependency `vue-router` to your package.json with the command `yarn add vue-router`.
- Configure two paths for your app, one for the `Lobby` component and the other one to your `Board` component.
- Change `App.vue` to hold routing logic.
- The app should now point by default to the Lobby component and the restart button should also bring you back to the Lobby.

#### Configure VueX

- Add the dependency `vuex` to your package.json with the command `yarn add vuex`.
- Add player names to the Vuex store to share these data across your components.
- The `Status` component can now retrieve player names from the store.

##  Step 6 (bonus)

> Unit Tests

### Goal

Add unit tests to make sure that the game meets all expectations and to prevent breaking changes.


