const path = require('path');
const buildCommon =require('./webpack.common.builder');

const devOptions = {
  proxy: {
    '/contents/svc/*': {
      target: 'https://web.dev.vitality.aia.co.kr:8443',
      onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader('Origin','https://web.dev.vitality.aia.co.kr:8443')
      },
      changeOrigin: true,
    },
  },
};

module.exports = env => {
  return buildCommon(devOptions, env);
};
