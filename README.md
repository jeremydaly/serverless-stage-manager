# serverless-stage-manager
Super simple [serverless](http://www.serverless.com) plugin for validating stage names before deployment.

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![npm](https://img.shields.io/npm/v/serverless-stage-manager.svg)](https://www.npmjs.com/package/serverless-stage-manager)
[![npm](https://img.shields.io/npm/l/serverless-stage-manager.svg)](https://www.npmjs.com/package/serverless-stage-manager)

## Installation & Configuration

Install the module using npm:
```bash
npm install serverless-stage-manager --save-dev
```

Add `serverless-stage-manager` to the plugin list of your `serverless.yml` file:

```yaml
plugins:
  - serverless-stage-manager
```

Add a `stages` value in the `custom` section of your `serverless.yml` file and specify an array of valid stage names.

```yaml
custom:
  stages:
    - dev
    - staging
    - prod
```

## Usage

When running `serverless deploy` or `serverless deploy function`, it will check to make sure it is a valid stage name before continuing. For example:

```bash
# These will work
serverless deploy -s prod
serverless deploy functon -f funcName -s dev

# These will fail
serverless deploy -s foo
serverless deploy functon -f funcName -s bar
```
