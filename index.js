'use strict';

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless
    this.options = options
    this.hooks = {
      'before:package:initialize': this.checkStage.bind(this),
      'before:deploy:function:initialize': this.checkStage.bind(this)
    }
  }

  checkStage() {
    let stage = this.options.stage ? this.options.stage : this.serverless.service.provider.stage

    if (!this.serverless.service.custom.stages || !Array.isArray(this.serverless.service.custom.stages)) {
      throw new Error(`A "stages" array must be defined in your serverless.yml's "custom" section.`)
    } else {
      if (this.serverless.service.custom.stages.indexOf(stage) === -1) {
        throw new Error(`'${stage}' is not a valid deployment stage. Add it to your serverless.yml's "custom.stages" section.`)
      }
    }
  } // end checkStage

} // end class

module.exports = ServerlessPlugin;
