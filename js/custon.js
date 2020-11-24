/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/favicion.ico");
      $('[rel="shortcut icon"]').attr('href', "/fail.ico");
      document.title = '糟糕，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/fail.ico");
      $('[rel="shortcut icon"]').attr('href', "/favicion.ico");
      document.title = '咦，逗你的！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}