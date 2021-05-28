const injectNextDevServer = require("@cypress/react/plugins/next");

process.env.CYPRESS_CT = true;

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  injectNextDevServer(on, config);

  return config;
};
