"use strict";

module.exports = {
  extends: "octane",

  rules: {
    "no-bare-strings": true, // needed for ember-intl
    "no-inline-styles": {
      allowDynamicStyles: true,
    },
    "no-invalid-interactive": {
      ignoredTags: ["canvas"],
    },
  },
};
