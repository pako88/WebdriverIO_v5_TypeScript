declare namespace WebdriverIO {
  interface Config {
      afterScenario?: any;
      cucumberOpts?: any;
      mochaOpts?: any;
      featureFlags?: any;
      automationProtocol?: string;
      capabilities?: Array<object>;
  }
}

declare module '@rpii/wdio-html-reporter'