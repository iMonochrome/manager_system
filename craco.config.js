const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#a48d4f",
              "@layout-header-background": "#a48d4f",
              "@border-radius-base": "2px",
              // "@btn-border-width": "1px 1px 3px 1px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
