
// if (process.env.NODE_ENV === "production") {
//   // Load production keys
//   module.exports = require("./keys_prod");
// } else if (process.env.NODE_ENV === "test") {
//   // Load test keys
//   module.exports = require("./keys_test");
// } else {
//   // Load development keys
//   module.exports = require("./keys_dev");
// }
if (process.env.NODE_ENV === "production") {
  // Load production keys
  module.exports = require("./keys_prod");
} else if (process.env.NODE_ENV === "test") {
  // Load test keys
  module.exports = require("./keys_test");
} else {
  // Load development keys
  module.exports = require("./keys_dev");
}
