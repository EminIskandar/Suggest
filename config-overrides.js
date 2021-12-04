const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = function(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "page": resolve("src/page"), 
    "components": resolve("src/components"),  
    "colors" : resolve("src/theme/colors"),  
    "typography" : resolve("src/theme/typography"), 
    "themeComponents" : resolve("src/theme/components"), 
  });

  return config;
};