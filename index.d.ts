// Type definitions for chai-array-properties
// Project: https://github.com/gaggle/chai-array-properties
// TypeScript Version: 3.0

/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Assertion {
      arrayProperty: ChaiArrayProperties.ArrayProperty;
    }

    namespace ChaiArrayProperties {
      interface ArrayProperty {
        (key: any, values: any[]): Assertion;
      }
    }
  }
}

declare function chaiArrayProperties (): Chai.ChaiPlugin;

export = chaiArrayProperties;
