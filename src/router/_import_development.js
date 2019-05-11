module.exports = file => require('@/views/' + file + '.vue').default // vue-loader at least v13.0.0+
// module.exports = function (file) {
//   console.log('@/views/' + file + '.vue');
//   return require('@/views/' + file + '.vue').default;
// };
