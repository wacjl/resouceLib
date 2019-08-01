const path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
let copyData = [
  {
    from: "src/common",
    to: [
      "../fl-enterprise-front/src/resource/common",
      "../fl-admin-front/src/resource/common",
      "../fl-member-front/src/resource/common"
    ]
  },
  {
    from: "src/iviewComponent",
    to: [
      "../fl-enterprise-front/src/resource/iviewComponent",
      "../fl-admin-front/src/resource/iviewComponent"
    ]
  }
];

const copyLink = (function() {
  let arr = [];
  for (var i = 0; i < copyData.length; i++) {
    const item = copyData[i];
    if (item.to instanceof Array) {
      arr = arr.concat(
        item.to.map(to => {
          return getPath({ from: item.from, to });
        })
      );
    } else {
      arr.push(getPath(item));
    }
  }
  return arr;
})();
function getPath(item) {
  return {
    from: path.join(__dirname, item.from),
    to: path.join(__dirname, item.to)
  };
}
module.exports = {
  watch: true,
  entry: "./index.js",
  mode: "development",
  plugins: [new CopyWebpackPlugin(copyLink)]
};
