# Tic-Tac-Toe with React

A simple, interactive Tic-Tac-Toe game built with React. The project demonstrates reusable components, state management with React Hooks, winner detection, and move history navigation.

## Features

- Two-player gameplay for **X** and **O**
- Automatic winner detection for rows, columns, and diagonals
- Prevents moves after a winner has been determined
- Prevents overwriting an occupied square
- Move history with the ability to jump back to any previous position
- Responsive, component-based React structure

## Demo

Run the project locally to play the game in your browser.

## Tech Stack

- [React](https://react.dev/) 19
- JavaScript
- CSS
- Create React App (`react-scripts`)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) 18 or later
- npm, included with Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chethangowdacscs24-ops/tic-tac-toe-using-react-library-.git
   ```

2. Move into the project directory:

   ```bash
   cd tic-tac-toe-using-react-library-
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode with hot reloading.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Creates an optimized production build in the `build` directory.

### `npm run eject`

Copies the Create React App configuration into the project. This is irreversible, so use it only when necessary.

## Project Structure

```text
src/
├── App.js             # Game state, move history, and time-travel controls
├── Board.js           # Board layout, turns, and click handling
├── CalculateWinner.js # Winner calculation logic
├── Square.js          # Reusable board-square component
├── index.js           # React application entry point
└── styles.css         # Game styling
public/
└── index.html         # HTML entry document
```

## How It Works

1. The game starts with an empty array of nine squares.
2. Players take turns placing `X` and `O` on empty squares.
3. Every move is saved in the game history.
4. `calculateWinner` checks all possible winning combinations.
5. The move list allows players to return to an earlier position and continue from there.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes and test them locally.
4. Commit and push your changes.
5. Open a pull request with a clear description of your update.

## License

No license has been specified for this project yet. Add a license file if you plan to distribute or reuse the code publicly.
