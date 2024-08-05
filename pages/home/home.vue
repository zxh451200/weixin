<template>
	<view class="home">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="swiperOption.indicatorDots"
				:autoplay="swiperOption.autoplay" :interval="swiperOption.interval" :duration="swiperOption.duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="grid">
			<uni-grid :column="4">
				<uni-grid-item>
					<view class="grid-box">鸡</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">鸭</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">鱼</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">肉</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="warp">
			<uni-section title="为你推荐" type="line" padding>
				<view class="recommand">
					<view class="recommand-left">
						1311
					</view>
					<view class="recommand-right">
						<view class="top">
							<text class="title">鱼档</text>
							<text class="integral">5.0分</text>
						</view>
						<view class="middle">
							<view class="left">
								<text>低消20元</text>
							</view>
							<view class="right">
								<text>月售600元</text>
								<text>人均20元</text>
							</view>
						</view>
						<view class="button">
							<uni-tag text="有躺椅" type="warning"></uni-tag>
						</view>
					</view>
				</view>
			</uni-section>
		</view>
		<view>
			<navigator open-type="switchTab" url="/pages/my/my">
				<image src="../../static/uni.png" mode=""></image>
			</navigator>
		</view>
	</view>

</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	
	import {getBanner} from "../../api/banner.js"

	const swiperOption = reactive({
		indicatorDots: false,
		autoplay: true,
		interval: 2000,
		duration: 500,
	})

	const getBannerApi=async()=>{
		const res=await getBanner()
		console.log(1111111111)
		console.log(res)
		console.log(2222222222222)
	}
	getBannerApi()
	const grid = reactive({

	})
</script>

<style lang="scss">
	.uni-margin-wrap {
		padding: 8upx;

		.swiper {
			border-radius: 8upx;
			overflow: hidden;
		}

		.swiper-item {
			width: 100%;
			height: 100%;
		}

		.uni-bg-red {
			background: red;
		}

		.uni-bg-green {
			background: green;
		}

		.uni-bg-blue {
			background: blue;
		}
	}

	.grid {
		margin-top: 12upx;

		.grid-box {
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
	}
	.recommand{
		display: flex;
		gap: 20upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		border:1px solid black;
		border-radius: 8upx;
		&-left{
			width: 200upx;
			height: 200upx;
			background: red;
			border-radius: 8upx;
		}
		&-right{
			flex: 1;
			.top{
				.title{
					font-weight: 500;
				}
				.integral{
					color: green;
					font-size: 10px;
					margin-left: 20upx;
				}
			}
			.middle{
				display: flex;
				justify-content: space-between;
				margin-top: 20upx;
				color: green;
				font-size: 10px;
				text+text{
					margin-left: 20upx;
				}
			}
			.button{
				margin-top: 40upx;
			}
		}
	}
</style>