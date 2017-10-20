'use strict';

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.stage = this.options.stage ? this.options.stage : this.serverless.service.provider.stage

    this.hooks = {
      'before:package:initialize': this.checkStage.bind(this),
      'before:deploy:function:initialize': this.checkStage.bind(this)
    };

  }

  checkStage() {
    if (!this.serverless.service.custom.stages || !Array.isArray(this.serverless.service.custom.stages)) {
      throw new Error(`A "stages" array must be defined in your serverless.yml's "custom" section.`)
    } else {
      if (this.serverless.service.custom.stages.indexOf(this.stage) === -1) {
        throw new Error(`'${this.stage}' is not a valid deployment stage. Add it to your serverless.yml's "custom.stages" section.`)
      }
    }
  }


}

module.exports = ServerlessPlugin;
