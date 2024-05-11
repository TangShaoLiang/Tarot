// 翻牌
function flipCard(card, index) {
  card.classList.add('flipped');
  card.addEventListener('click', () => { this.showCardInfo(card) });
  setTimeout(() => {
    card.info = this.cardInfo[this.cardIdList[index]];
    card.src = card.info.imgSrc;
    console.log(card.info.imgSrc);
    console.log(card.style.backgroundImage);
    showCardRomanNumeral(card);
    showCardEnName(card);
  }, 250);
}
function showCardRomanNumeral(card) {
  card.setAttribute('data-roman-numeral', card.info.romanNumeral);
}
function showCardEnName(card) {
  card.setAttribute('data-en-name', card.info.enName);
}