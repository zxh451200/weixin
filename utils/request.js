const baseUrl='http://localhost:8080'

const request=({url,data,header,method})=>{
	return  new Promise((resolve,reject)=>{
		uni.request({
		    url: baseUrl+url, //仅为示例，并非真实接口地址。
		    data: data,
			method: method,
		    header: {
		        'custom-header': 'hello' ,//自定义请求头信息,
				'x-token':'i am token',
				...header
		    },
		    success: (res) => {
		        resolve(res)
		    },
			fail: (err) => {
				reject(err)
			},
			timeout:30000
		});
	})
}
export {request}