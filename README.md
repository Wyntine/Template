# Project Template

## Description

This project template is designed for my personal TypeScript projects. It uses ESLint, TypeScript and configs for consistent developments across my projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project template, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/Wyntine/Template.git
cd Template
```

2. **Install dependencies:**

```
npm install
```

## Usage

This section provides an overview of how to use the project template for your development needs.

### Linting

To lint the project files using ESLint, run:

```
npm run lint
```

### Building

**Note**: If you do not want to build the project (just using TypeScript to run the project), you may want to change settings in `tsconfig.json`

To build the project for production, run:

```
npm run build
```

### Development

To run without building the project, run:

```
npm start
```

This command will compile the TypeScript files and create a production-ready build in the `dist` directory.

## Scripts

Here are the scripts available in this project template:

- `start`: Run the project without building.
- `build`: Build the project for production.
- `lint`: Checks for TypeScript errors, lints with ESLint and formats with Prettier.
- `test`: Run the project's tests using Vitest.

Some of them are for development use and are not generally needed to be used seperately:

- `prepack`: Lints and builds the project before packaging.
- `eslint`: ESLint linting script.
- `typeCheck`: TypeScript type checking with TSC.
- `test:coverage`: Generates code coverage report.
- `test:run`: Runs the tests once.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Commit your changes and push them to your forked repository.
5. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Additional Information

For more information on how to use this project template or if you encounter any issues, please open an issue on the [GitHub repository](https://github.com/Wyntine/Template).
