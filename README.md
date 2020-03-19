# VAR.js

<div style="text-align:center">
    <img alt="varjs logo" style="height:200px" src="./assets/logo.svg" />
</div>

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fmutterpedro%2Fvarjs%2Fbadge&style=for-the-badge)](https://actions-badge.atrox.dev/mutterpedro/varjs/goto)

## Motivation

**VAR.js** stands for **Various Automated Reviews JS**, and its name is inspired in the [VAR system](https://en.wikipedia.org/wiki/Video_assistant_referee) used in soccer games, which stands for **Video Assistant Referee**. Basically they do a similar job, they review things. VAR.js reviews if required tasks defined by the **developer team** is running successfully in a **push** or in a new **pull request**, for example. And soccer VAR reviews controversial game **moves** that need the **referee** attention. In an analogy, the game moves would be the PRs and pushes and the referee would be the developer.

## Introduction

In practice, VAR.js is a very simple **GitHub action** that runs tasks defined in the **package.json** scripts session. Basically he calls `npm run $INPUT_SCRIPT` for you in any [event](https://help.github.com/en/actions/reference/events-that-trigger-workflows) you want.

VAR.js offers an environment with the latest version of **nodejs** and **npm** and it also includes the stable version of **docker**. So in your scripts you can run node, docker and, of course, your dependencies.

## Usage

To install **VAR.js** in your repository, basically, you need to create a **YAML** file in your `.github/workflows` folder, then you provide access to your repository files to VAR.js (`uses: actions/checkout@version`) and then provide the name of the script you want to run in the **SCRIPT** input, for example:

```yaml
name: Your workflow
on:
  - push
  - pull_request
jobs:
  lint:
    name: Linting project
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: VAR.js
        uses: MutterPedro/varjs@v1.0.1
        with:
          SCRIPT: "format"
  test:
    name: Testing project
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: VAR.js
        uses: MutterPedro/varjs@v1.0.1
        with:
          SCRIPT: "test"
  build:
    name: Building project
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: VAR.js
        uses: MutterPedro/varjs@v1.0.1
        with:
          SCRIPT: "build"
```

## Built With

- Typescript
- Docker
- GitHub Actions

## Contributing

Please read [CONTRIBUTING.md](https://github.com/MutterPedro/varjs/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/MutterPedro/varjs/tags).

## Authors

- **Pedro Mutter** - _Initial work_ - [MutterPedro](https://github.com/MutterPedro)

See also the list of [contributors](https://github.com/MutterPedro/varjs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
