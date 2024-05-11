
    // 通过创建Image对象的方式，预加载单个图片
    function preloadImage(url) {
      var img = new Image();
      img.src = url;
    }
    // 按打乱后的次序，预加载所有卡牌的图片
    function preloadImages() {
      this.cardIdList.forEach(cardId => {
        preloadImage(this.cardInfo[cardId].imgSrc);
      })
    }