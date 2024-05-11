// 展示卡牌详情
function showCardInfo(card) {
  // 设置会话框中卡牌的图片、名称、说明
  this.dom.dialogImg.src = card.info.imgSrc;
  this.dom.dialogInfoTitle.innerText = card.info.name;
  this.dom.dialogInfoKeyword.innerText = card.info.keyword;
  this.dom.dialogInfoDisc.innerText = card.info.disc;
  // 展示带遮罩的会话框
  this.dom.dialog.showModal();
  // 如果不延时10ms（≤1ms不行），首次展示会话框时，end.y会有偏差，在5px左右（原因未知，猜测是由于浏览器的渲染机制，重排需要一定时间）
  setTimeout(() => {
    showCardInfoAnimate(card);
  }, 10);
}

// 动画，卡牌逐渐放大并出现到会话框同样的位置
function showCardInfoAnimate(card) {
  // 获取起始位置、尺寸，以及目标位置、尺寸
  var fromImgRect = card.getBoundingClientRect()
  var toImgRect = this.dom.dialogImg.getBoundingClientRect()
  var start = {
    x: fromImgRect.left,
    y: fromImgRect.top,
    w: fromImgRect.width,
    h: fromImgRect.height
  }
  var end = {
    x: toImgRect.left,
    y: toImgRect.top,
    w: toImgRect.width,
    h: toImgRect.height
  }
  var startData = {
    className: 'card-dialog-img-show',
    src: card.info.imgSrc,
    style: {
      transform: `translateX(${start.x}px) translateY(${start.y}px)`,
      width: `${start.w}px`,
    }
  }
  var endData = {
    style: {
      transform: `translateX(${end.x + (end.w - start.w) / 2}px) translateY(${end.y + (end.h - start.h) / 2}px) scale(${end.w / start.w})`
    }
  }
  // 创建临时卡牌，运行动画，动画结束后，临时卡牌自动销毁
  this.createTempElement('img', startData, endData, 0, 100, () => {
    this.dom.dialog.classList.remove('hidden');
  })
}
// 关闭卡牌详情
function closeCardInfo(event) {
  if (event.target.classList[0] === 'card-dialog' || event.target.classList[0] === 'card-dialog-container') {
    this.dom.dialog.classList.add('hidden');
    setTimeout(() => {
      this.dom.dialog.close();
    }, 100);
  }
}