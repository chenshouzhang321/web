var path = require("path"),
　　fs = require('fs'),
　　webpack = require("webpack");

var vendors = [
　　'vue', 
　　'vue-router', 
　　'vuex'
];

module.exports = {
　　entry: {
　　　　vendor: vendors
　　},
　　output: {
		path: path.join(__dirname, 'static/js'), // 打包后文件输出的位置
		filename: '[name].dll.js',
		library: '[name]_library'
　　},
　　plugins: [
　　　　new webpack.DllPlugin({
　　　　　　path: path.join(__dirname, "dist", "manifest.json"),
　　　　　　name: "[name]_[hash]",
　　　　　　context: __dirname
　　　　})
　　]
};