"use strict";
const utils_request = require("../utils/request.js");
const getBanner = () => {
  return utils_request.request({
    url: "/api/banner/getBannerList",
    method: "GET",
    data: {
      page: 1,
      pageSize: 5
    }
  });
};
exports.getBanner = getBanner;
