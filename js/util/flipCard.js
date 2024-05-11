// 翻牌
function flipCard(card, index) {
  const placeholder = card.parentElement;
  placeholder.classList.remove('flippable');
  placeholder.classList.add('flipped');
  card.classList.remove('flipable');
  card.classList.add('flipped');
  card.addEventListener('click', () => { this.action.showCardInfo(card) });
  setTimeout(() => {
    card.info = this.cardInfo[this.cardIdList[index]];
    card.src = card.info.imgSrc;
    card.before.innerText = card.info.romanNumeral;
    card.after.innerText = card.info.enName;
  }, 250);
}
