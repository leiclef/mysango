(function () {
  'use strict';
  // humberger-menu-script
  var $navTrigger = document.getElementById('nav-trigger');
  var $navContents = document.getElementById('nav-contents');

  function navOpenFunc() {
    $navContents.classList.add('nav-open');
  }

  function navCloseFunc() {
    $navContents.classList.remove('nav-open');
  }

  $navTrigger.addEventListener('click', function () {
    $navTrigger.classList.toggle('is-active');
    if ($navContents.classList.contains('nav-open')) {
      navCloseFunc();
    } else {
      navOpenFunc();
    }
  });

  // slide-show-script
  function fadeIn(node, duration) {
    if (getComputedStyle(node).display !== 'none') return;

    if (node.style.display === 'none') {
      node.style.display = '';
    } else {
      node.style.display = 'block';
    }
    node.style.opacity = 0;

    var start = performance.now();

    requestAnimationFrame(function tick(timestamp) {
      var easing = (timestamp - start) / duration;
      node.style.opacity = Math.min(easing, 1);
      if (easing < 1) {
        requestAnimationFrame(tick);
      } else {
        node.style.opacity = '';
      }
    });
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

  var $spImage = new Array(
    "main-image-item11",
    "main-image-item12",
    "main-image-item13",
    "main-image-item14",
    "main-image-item15"
  );

  var $xsImage = new Array(
    "main-image-item21",
    "main-image-item22",
    "main-image-item23",
    "main-image-item24"
  );
  var $spnowCnt = -1;
  var $spnextCnt = 1;
  var $xsnowCnt = -1;
  var $xsnextCnt = 1;
  function spimageChange() {
    if (window.matchMedia("(max-width: 410px)").matches) {
      $spnowCnt = -1;
      $spnextCnt = 1;
      for (var i = 0; i < $spImage.length; i++) {
        var $elem = document.getElementById($spImage[i])
        if (i == 0) {
          $elem.style.display = "block";
        } else {
          $elem.style.display = "none";
        }
      }
    } else {
      if ($spnowCnt < 0) {
        $spnowCnt += 1
      } else {
        var $nowId = $spImage[$spnowCnt];
        var $nextId = $spImage[$spnextCnt];
        var $nowelem = document.getElementById($nowId);
        var $nextelem = document.getElementById($nextId);

        fadeIn($nextelem, 3000);

        fadeOut($nowelem, 3000);


        $spnowCnt = $spnextCnt;
        $spnextCnt = ($spnextCnt + 1 < $spImage.length) ? $spnextCnt + 1 : 0;
      }
    }
    setTimeout(spimageChange, 5000)
  }
  spimageChange();

  function xsimageChange() {
    if (window.matchMedia("(min-width: 411px)").matches) {
      $xsnowCnt = -1;
      $xsnextCnt = 1;
      for (var i = 0; i < $xsImage.length; i++) {
        var $elem = document.getElementById($xsImage[i])
        if (i == 0) {
          $elem.style.display = "block";
        } else {
          $elem.style.display = "none";
        }
      }
    } else {
      if ($xsnowCnt < 0) {
        $xsnowCnt += 1
      } else {
        var $nowId = $xsImage[$xsnowCnt];
        var $nextId = $xsImage[$xsnextCnt];
        var $nowelem = document.getElementById($nowId);
        var $nextelem = document.getElementById($nextId);

        fadeIn($nextelem, 3000);

        fadeOut($nowelem, 3000);


        $xsnowCnt = $xsnextCnt;
        $xsnextCnt = ($xsnextCnt + 1 < $xsImage.length) ? $xsnextCnt + 1 : 0;
      }
    }
    setTimeout(xsimageChange, 5000)
  }
  xsimageChange();
})();