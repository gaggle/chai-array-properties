# chai-array-properties
a chai plugin to assert array properties

---

## Installation
```
npm install gaggle/chai-array-properties --save-dev
```

---

## Usage

```
import * as chai from "chai"
import { chaiArrayProperties } from "chai-array-properties
chai.use(chaiArrayProperties);
```

### properties

Asserts the property keys have expected values.

```
expect([ {foo: "ham"}, {foo: "spam"}, {foo: "bacon"} ])
  .to.have.properties("foo", ["ham", "spam", "bacon"])
```
