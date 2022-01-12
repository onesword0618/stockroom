# Scaffold

## Add Library

```bash
 // create project
 mkdir stockroom && cd stockroom
 npm init -y
 mkdir dist
 mkdir webpack

 // typescript
 npm i -D typescript @types/node ts-node nodemon

 // prettier / eslint
 npm i -D prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier

 // create config files
 npx tsc --init
 npx eslint --init
 touch nodemon.json

 // webpack
 npm i -D webpack webpack-cli webpack-merge webpack-node-externals ts-loader
 touch webpack/base.config.js
 touch webpack/development.config.js
 touch webpack/production.config.js

 // tools
 npm i -D rimraf npm-run-all lint-staged simple-git-hooks

 // express
 npm i express express-generator
 npm i -D @types/express

 // test
 npm i -D jest ts-jest @types/jest supertest

 // test config
 npx ts-jest config:init

```

### Library Documents

[ts-node](https://typestrong.org/ts-node/)
[nodemon](https://nodemon.io/)
[npm-run-all](https://github.com/mysticatea/npm-run-all#readme)
[lint-staged](https://github.com/okonet/lint-staged#readme)
[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks#readme)
[rimraf](https://github.com/isaacs/rimraf#readme)
[eslint](https://eslint.org/)
[prettier](https://prettier.io/)
[typescript](https://www.typescriptlang.org/)
[webpack](https://webpack.js.org/)
[express](https://expressjs.com/)

### Plugin Documents

- eslint

[eslint-config-airbnb-base](https://github.com/airbnb/javascript#readme)
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import#readme)
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)

- Webpack

[webpack-cli](https://github.com/webpack/webpack-cli#readme)
[webpack-merge](https://github.com/survivejs/webpack-merge#readme)
[webpack-node-externals](https://github.com/liady/webpack-node-externals#readme)
[ts-loader](https://github.com/TypeStrong/ts-loader#readme)

### Suport Documents

[bodyparser-is-deprecated-express-4](https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4)
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21)
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)

### Docker

docker-compose up -d
docker-compose down
docker volume ls
docker volume rm XXX
