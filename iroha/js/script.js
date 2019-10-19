(function () {
  'use strict';
  var $myImage = new Array(
    "main-image-item1",
    "main-image-item2",
    "main-image-item3",
    "main-image-item4",
    "main-image-item5"
  );

  function fadeIn(node, delaytimep) {
    node.style.display = 'block';
    node.style.zIndex = "1";
    node.style.opacity = 0;
    setTimeout(node.style.opacity = 1, delaytimep);
  }

  function fadeOut(node, duration) {
    node.style.opacity = 1;
    var start = performance.now();
    requestAnimationFrame(function tick(timestamp) {
      var easing = (timestamp - start) / duration;
      node.style.opacity = Math.max(1 - easing, 0);
      if (easing < 1) {
        requestAnimationFrame(tick);
      } else {
        node.style.opacity = '';
        node.style.display = 'none';
      }
    });
  }

  var $nowCnt = 0;
  var $nextCnt = 1;
  function myChange() {
    var $nowId = $myImage[$nowCnt];
    var $nextId = $myImage[$nextCnt];
    var $nowelem = document.getElementById($nowId);
    var $nextelem = document.getElementById($nextId);
    $nowelem.style.display = 'block';
    $nowelem.style.zIndex = "3";
    fadeIn($nextelem, 4000);

    if ($nowelem.style.zIndex > $nextelem.style.zIndex) {
      fadeOut($nowelem, 4000);
    }

    $nowCnt = $nextCnt;
    $nextCnt = ($nextCnt + 1 < $myImage.length) ? $nextCnt + 1 : 0;

    setTimeout(myChange, 6000)
  }
  myChange();
})();