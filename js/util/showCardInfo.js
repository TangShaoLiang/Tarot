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
    showCardInfoAnimate.bind(this)(card);
  }, 10);
}

// 动画，卡牌逐渐放大并出现到会话框同样的位置
function showCardInfoAnimate(card) {
  // 获取起始位置、尺寸，以及目标位置、尺寸
  const fromImgRect = card.getBoundingClientRect()
  const toImgRect = this.dom.dialogImg.getBoundingClientRect()
  const isUpright = card.info.position === 'upright'
  const start = {
    x: fromImgRect.left,
    y: fromImgRect.top,
    w: fromImgRect.width,
    h: fromImgRect.height
  }
  const end = {
    x: toImgRect.left,
    y: toImgRect.top,
    w: toImgRect.width,
    h: toImgRect.height
  }
  const startData = {
    className: 'card card-dialog-img-show',
    src: card.info.imgSrc,
    style: {
      transform: `translateX(${start.x}px) translateY(${start.y}px) rotate(${isUpright ? 0 : '180'}deg)`,
      transition: `transform ${0.2 + Math.abs((start.x - start.w / 2) - (end.x - end.w / 2)) / window.innerWidth * 0.3 + (isUpright ? 0 : 0.3)}s ease-out`
    }
  }
  const endData = {
    style: {
      transform: `translateX(${end.x + (end.w - start.w) / 2}px) translateY(${end.y + (end.h - start.h) / 2}px) scale(${end.w / start.w})`
    }
  }
  // 创建临时卡牌，运行动画，动画结束后，临时卡牌自动销毁
  this.action.createTempElement('img', startData, endData, 0, 100, () => {
    this.dom.dialog.classList.remove('hidden');
  })
}



// 关闭卡牌详情
function closeCardInfo(event) {
  if (event.target.classList[0] === 'card-dialog' || event.target.classList[0] === 'card-dialog-container') {
    this.dom.dialog.classList.add('hidden');
    this.dom.dialog.close();
  }
}