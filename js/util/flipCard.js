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
    console.log(card.info.imgSrc);
    placeholder.setAttribute('data-roman-numeral', card.info.romanNumeral);
    placeholder.setAttribute('data-en-name', card.info.enName);
  }, 250);
}
