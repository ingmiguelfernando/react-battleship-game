# Author

Miguel Fernando Patiño Cuellar
ing.miguel.fernando@gmail.com

# Deployed Version (Netlify)

https://battleship-game-raygun-miguel.netlify.app/

# Problem Description

The computer randomly chooses the location of two two-cell "ships" on a board of 8 by 8 cells. Each ship is randomly placed either horizontally or vertically. The user then has 20 guesses to find the two ships.

The user enters a coordinate (text, clicking a cell or other), for example `3,5`, and the computer locates the nearest un-hit ship cell to that coordinate and tells them they're "hot" if they're 1 to 2 cells away, "warm" if they're 3 to 4 cells away, or "cold" if they're further away.

As an example, `3,5` is three cells away from `2,7` because (3 - 2) + (7 - 5) = 3, so they'd be told they were "warm".

If the user correctly guesses a ship's location, they're told they've got a hit, and once both cells are hit the user is notified that the ship has been removed from the board. The game ends when both ships have been sunk by the user, or the user has used up their 20 guesses.

# Used Technologies

`reactJS` `ReduxToolkit` `typescript` `tailwind` `jest` `react testing library`

# Development Binnacle

`Day 1` (3 hours) : Setting the environment up with the boiler plate code (tailwind, reduxToolkit, Typescript, react-router-dom) also the structure of the `redux store` and defining the algorithm to generate dynamics boards and dynamics ships based on redux default configuration, I decided to include 3 possible board dimensions (I called Difficult: `EASY=4`, `MEDIUM=8`, `HARD=12`)

> `Curious fact`, I went to bed at 11 pm to avoid staying up late,
> but I couldn't sleep thinking in the game,
> I keep until 5am without sleep

`Day 2` (2.5 hours) : I defined the method to get the `clue` and the `Correlated Coordinate` and I tested with some scenarios

`Day 3` (3 hours) : I started with the construction of the components and style them, I tried to separate components by concerns. My proposal was :`ShipsCounter`, `TriesCounter`, `GameResult`, `BoardSpace`, `Clue`, `Board`, `Home`, `Play`

`Day 4` (3.5 hours) : styling of components, testing with specific coordinates, and refining types and methods. In this day I take into account a possible performance issue on `boardSpace` component but I solved it using `useMemo` hook.

`Day 5` (2 hours) : I started with the unit tests, creating auxiliary methods and data mocks.

`Day 6` (3.5 hours) : I finished the unit test part, started with the deployment and the documentation.

_Note: I'm not a fan of hardcoded architectures so I decided to keep the game flexible in terms of length of ships, board, tries, also the game is responsive and almost 100% of test coverage_ 😎

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

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
