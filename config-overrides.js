const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = function(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "page": resolve("src/page"), 
    "components": resolve("src/components"),  
    "color" : resolve("src/theme/color"),  
    "typography" : resolve("src/theme/typography"), 
    "themeComponents" : resolve("src/theme/components"), 
    "helpers": resolve("src/helpers"),  
  });

  return config;
};