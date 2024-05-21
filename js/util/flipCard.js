// 翻牌
function flipCard(card, index) {
  const placeholder = card.parentElement;
  placeholder.classList.remove('flippable');
  placeholder.classList.add('flipped');
  card.classList.remove('flipable');
  card.classList.add('flipped');

  // 展示卡牌信息详情
  card.addEventListener('click', () => { this.action.showCardInfo(card) });

  // 卡牌垂直于桌面时，切换卡牌图片、名称
  setTimeout(() => {
    // 设置卡牌信息
    card.info = { ...card.info, ...this.cardInfo[this.cardIdList[index]] };
    // 设置卡牌图片
    card.src = card.info.imgSrc;
    // 设置卡牌名称
    card.before.innerText = card.info.romanNumeral;
    // 设置卡牌英文名称
    card.after.innerText = card.info.enName;
    // 随机设置牌位
    if (Math.random() < 0.5) {
      card.classList.add('reversed');
      card.info.position = 'reversed';
      // card.before.innerText += ' (逆位) ';
      card.style.transform = 'rotate(180deg)';
    }
    else {
      card.classList.remove('upright');
      card.info.position = 'upright';
      // card.before.innerText += ' (正位) ';
    }
  }, 250);
}
