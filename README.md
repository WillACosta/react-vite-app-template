### @react-vite-app-template

---

This is a template with `React` application using `Vite` .
See more details in the next sections.

### Table of contents

- [Resources](#resources)
- [Getting Started](#technical-resources)
- [Patterns](#patterns)
  - [Conventional Commits](#conventional-commits)
- [Unit Test](#unit-testing)

## Resources

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) as build tool
- [Jest](https://jestjs.io/) for unit tests
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pattern

## Getting Started

Before running the application, make sure you have installed:

- [NodeJS](https://nodejs.org/en) (v20.12.1)
- [Pnpm](https://pnpm.io/) (v9.7.0)

1. Clone this repository

```shell
git clone https://github.com/WillACosta/react-vite-app-template.git
```

2. Install the dependencies and execute the application with

```shell
pnpm install && pnpm dev
```

> By executing this command, all required dependencies will be installed, and the application will be served on
> [localhost:5173](http://localhost:5173/).

## Patterns

### Conventional Commits

This project uses `Conventional Commits` to standardize commit messages following the best practices from the
community, in summary you need to use one of the follow patterns when writing commit messages:

```
feat: implemented new features
refactor: usual changes, nor adding something new or solves a bug
fix: bug fixes
chore: common tasks related to build and tools for the project
...
```

> For more examples and detail about this patter, heads to the [official documentation](https://www.conventionalcommits.org/en/v1.0.0/).

## Unit testing

This project uses `jest` and `react-testing-library` to compose unit and components tests, you can find all test definitions
in `__tests__` directory.

```sh
pnpm test
```

Coverage will be collected automatically when running test command, you can see the report using the script inside `/scripts` folder, just runs:

```sh
sh scripts/open-coverage.sh # unix systems
./scripts/open-coverage.sh # windows
```