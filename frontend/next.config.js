const path = require("path");

// sassOptions 지정해주기
module.exports = {
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
