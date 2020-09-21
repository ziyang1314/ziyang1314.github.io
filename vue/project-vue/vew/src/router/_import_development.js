module.exports = (file) => { 
  return require('@/view/' + file + '.vue').default;

} // 开发版本直接加载