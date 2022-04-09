# Author

Miguel Fernando Patiño Cuellar
ing.miguel.fernando@gmail.com

# Problem Description

The computer randomly chooses the location of two two-cell "ships" on a board of 8 by 8 cells. Each ship is randomly placed either horizontally or vertically. The user then has 20 guesses to find the two ships.

The user enters a coordinate (text, clicking a cell or other), for example `3,5`, and the computer locates the nearest un-hit ship cell to that coordinate and tells them they're "hot" if they're 1 to 2 cells away, "warm" if they're 3 to 4 cells away, or "cold" if they're further away.

As an example, `3,5` is three cells away from `2,7` because (3 - 2) + (7 - 5) = 3, so they'd be told they were "warm".

If the user correctly guesses a ship's location, they're told they've got a hit, and once both cells are hit the user is notified that the ship has been removed from the board. The game ends when both ships have been sunk by the user, or the user has used up their 20 guesses.

# Used Technologies

`reactJS` `ReduxToolkit` `typescript` `tailwind` `jest` `react testing library` `

# Deployed Version (Netlify)

https://battleship-game-raygun-miguel.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test --coverage`

Launches the test runner and shows the coverage of the project\

### `yarn icon-sprite`

generate a unique icon sprite file based on the icons in the `src/icons` directory.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
