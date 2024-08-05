"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_banner = require("../../api/banner.js");
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_tag2 + _easycom_uni_section2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_tag + _easycom_uni_section)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const swiperOption = common_vendor.reactive({
      indicatorDots: false,
      autoplay: true,
      interval: 2e3,
      duration: 500
    });
    const getBannerApi = async () => {
      const res = await api_banner.getBanner();
      console.log(1111111111);
      console.log(res);
      console.log(2222222222222);
    };
    getBannerApi();
    common_vendor.reactive({});
    return (_ctx, _cache) => {
      return {
        a: swiperOption.indicatorDots,
        b: swiperOption.autoplay,
        c: swiperOption.interval,
        d: swiperOption.duration,
        e: common_vendor.p({
          column: 4
        }),
        f: common_vendor.p({
          text: "有躺椅",
          type: "warning"
        }),
        g: common_vendor.p({
          title: "为你推荐",
          type: "line",
          padding: true
        }),
        h: common_assets._imports_0
      };
    };
  }
};
wx.createPage(_sfc_main);
