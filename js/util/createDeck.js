// 生成牌组
function createDeck() {
  // 创建从屏幕顶部划过的手
  const handStartData = {
    className: 'hand',
    style: {
      transform: 'rotate(20deg) translateY(-50%)'
    }
  }
  const handEndData = {
    style: {
      transform: 'rotate(-20deg) translateY(-50%)'
    }
  }
  // 设置一个动画的起始延迟，为了使手机上能正常生成牌组
  const transitionDelay = 1000
  const hand = this.action.createTempElement('img', handStartData, handEndData, transitionDelay);
  // 沿着手的轨迹生成卡牌
  for (let i = 0; i < this.cardInfo.length; i++) {
    const delay = i === this.cardInfo.length - 1 ? 1490 + transitionDelay : 1500 / (this.cardInfo.length - 1) * i + transitionDelay
    setTimeout(() => {
      const handRect = hand.getBoundingClientRect()
      let card = document.createElement('img')
      const cardInHandTransform = {
        x: handRect.left + handRect.width / 2 - hand.offsetWidth / 2,
        y: handRect.top + handRect.height / 2 - hand.offsetHeight / 2,
        r: 20 - 40 / (this.cardInfo.length - 1) * i
      }
      card.classList.add('card')
      card.classList.add('card-in-hand')
      card.src = this.cardBackSrc
      card.style.transform = `translate(${cardInHandTransform.x}px, ${cardInHandTransform.y}px) rotate(${cardInHandTransform.r}deg)`

      // 添加抽牌事件监听器
      card.addEventListener('click', () => {
        if (this.cardFlippedCount === this.spreadInfo.cardCount) {
          return
        }
        var index = this.cardFlippedCount++
        const placeholder = this.dom.placeholderList[index]
        console.log(this.dom.placeholderList);
        const placeholderRect = placeholder.getBoundingClientRect()
        const cardOnTableTransform = {
          x: placeholderRect.left,
          y: placeholderRect.top,
        }
        card.style.transform = `translate(${cardOnTableTransform.x}px, ${cardOnTableTransform.y}px)`
        // 当过渡动画结束
        card.addEventListener('transitionend', () => {
          // 把placeholder的透明度设置为1，
          placeholder.style.opacity = 1
          placeholder.setAttribute('data-roman-numeral', this.spreadInfo.cardMeaning[index]);
          placeholder.classList.add('flippable')
          // 将当前card移除，card变量指向placeholder中的img
          card.remove()
          card = placeholder.img
          // 将placeholder中的img变为可翻开的卡牌
          card.classList.add('flippable')
          // 设置翻牌事件监听器
          card.addEventListener('click', () => { this.action.flipCard(card, index); }, { once: true });
        })
        if (this.cardFlippedCount === this.spreadInfo.cardCount) {
          // 播放收牌动画
          // 移除牌组中所有卡牌的抽牌事件监听器
        }
      }, { once: true })

      // 加入到dom中
      document.body.appendChild(card)

      // 设置延迟时间，若为最后一张牌则延迟时间为2000，否则为2000 / (总张数 - 1) * i
    }, delay);
  }
}

