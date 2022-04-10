module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗的宽度 retina高清屏，1点2个像素
      viewportHeight: 667, //视窗高度
      unitPrecision: 5, //指定px转换为视窗单位值的小数位
      // unitToConvert: "px", //需要转化的单位
      viewportUnit: "vw", //转换的视窗单位
      //指定不需要转换的组件的css类名,包含即可
      selectorBlackList: ["tab-bar"], //黑名单
      minPixelValue: 1, //小于等于1px不转换
      mediaQuery: false, //允许媒体查询转换
      // exclude: [/Tabbar/], //忽略文件
    },
  },
};
