import {request} from '../utils/request.js'

export const getBanner = ()=> {
	return request({
		url: "/api/banner/getBannerList",
		method: "GET",
		data: {
			page: 1,
			pageSize: 5,
		}
	})
}