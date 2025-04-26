const { defineConfig } = require("cypress");
const { existsSync, unlinkSync } = require("fs");
const path = require("path");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    downloadsFolder: 'cypress/downloads',

    setupNodeEvents(on, config) {
      allureWriter(on, config);

      on('task', {
        deleteFile(relativeFilePath) {
          const downloadsFolder = path.resolve('cypress/downloads');
          const fullPath = path.join(downloadsFolder, relativeFilePath);

          if (existsSync(fullPath)) {
            unlinkSync(fullPath);
            return true;
          } else {
            return false;
          }
        }
      });

      return config;
    },

    env: {
      allure: true,
    },
  },
});
