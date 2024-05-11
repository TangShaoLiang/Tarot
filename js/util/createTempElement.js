// 创建临时元素通用，返回创建的临时元素（元素类型，起始属性，目标属性，自毁延迟时间，自毁前的回调函数）
function createTempElement(elementType, startData, endData, transitionDelay = 0, removeDelay = 0, callback = () => { }) {
  // 创建临时元素
  var tempE = document.createElement(elementType);
  // 设置初始状态
  for (const key in startData) {
    if (key === 'style') {
      for (const k in startData.style) {
        tempE.style[k] = startData.style[k];
      }
    }
    else {
      tempE[key] = startData[key];
    }
  }
  // 加入到dom中
  document.body.appendChild(tempE);
  // 强制渲染
  tempE.clientWidth
  // 设置动画结束后，临时卡牌自动销毁
  tempE.addEventListener('transitionend', () => {
    callback();
    setTimeout(() => {
      tempE.remove();
    }, removeDelay);
  }, { once: true })
  // 设置目标状态，利用transition使临时元素运动
  setTimeout(() => {
    for (const key in endData) {
      if (key === 'style') {
        for (const k in endData.style) {
          tempE.style[k] = endData.style[k];
        }
      }
      else {
        tempE[key] = endData[key];
      }
    }
  }, transitionDelay);
  return tempE
}