// 通过root，在页面初始化以及页面resize时，计算卡牌宽高，以使得卡牌尺寸为整数px
function computeSize() {
  const root = document.documentElement;
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  // 如果屏幕过小
  if (winW < 300 / 0.26 || winH < 518 / 0.37) {
    // 则需要重新调整卡牌尺寸
    // 卡牌是img，只要设置宽/高，另一项尺寸是会自动调整的
    // 如果为竖屏
    if (winH > winW) {
      root.style.setProperty('--card-height', Math.floor(winH * 0.37) + 'px');
    }
    else {
      root.style.setProperty('--card-width', Math.floor(winW * 0.26) + 'px');
    }
  }
}