# rn-jwt
JSON Web Token sign and verify for React Native without native lib bindings (hopefully).

Installation & Usage
------
```javascript
npm install -s kacao/rn-jwt
```
```javascript
const jwt = require('jwt');
let encoded = jwt.sign({test: 'test'}, 'secret');
try {
  let decoded = jwt.verify(encoded, 'secret');
} catch (err) {
  // failed to verify
  console.log(err);
}
```
