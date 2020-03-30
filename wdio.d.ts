declare namespace WebdriverIO {
  interface Config {
      afterScenario?: any;
      cucumberOpts?: any;
      featureFlags?: any;
      automationProtocol?: string;
  }
}

declare module '@rpii/wdio-html-reporter'