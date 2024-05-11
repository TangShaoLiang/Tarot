const cardData = [
  {
    number: 0,
    romanNumeral: 'O',
    name: '愚者',
    enName: 'The Fool',
    keyword: '象征新的开始、无忧无虑和自由精神。',
    disc: '愚人是一个站在悬崖边上的年轻人，手持一朵白玫瑰，肩上有一只小狗（象征忠诚）。代表新的旅程和冒险的开始，但也提醒人们对未来保持警惕和谨慎。',
    imgSrc: './img/cardImg/outline/剪影 (0).jpg'
  },
  {
    number: 1,
    romanNumeral: 'I',
    name: '魔术师',
    enName: 'The Magician',
    keyword: '象征力量、控制和意志力。',
    disc: '魔术师是一个站在桌前的人，桌上放有各种象征性的物品，如剑、杯、杖和硬币，代表四大元素。代表创造力和实现目标的能力。',
    imgSrc: './img/cardImg/outline/剪影 (1).jpg'
  },
  {
    number: 2,
    romanNumeral: 'II',
    name: '女祭司',
    enName: 'The High Priestess',
    keyword: '象征直觉、神秘和智慧。',
    disc: '女祭司是一个坐在月亮和两根柱子之间的女性，头戴月亮冠冕，手持一本封闭的书。代表内在的知识和直觉的力量。',
    imgSrc: './img/cardImg/outline/剪影 (2).jpg'
  },
  {
    number: 3,
    romanNumeral: 'III',
    name: '女皇',
    enName: 'The Empress',
    keyword: '象征母性、丰饶和创造力。',
    disc: '女皇是一个坐在宝座上的女性，周围是丰富的自然景色。代表繁荣、生育和女性的力量。',
    imgSrc: './img/cardImg/outline/剪影 (3).jpg'
  },
  {
    number: 4,
    romanNumeral: 'IV',
    name: '皇帝',
    enName: 'The Emperor',
    keyword: '象征权威、领导和组织。',
    disc: '皇帝是一个坐在宝座上的男性，手持一把剑和一个球体。代表秩序、控制和男性的力量。',
    imgSrc: './img/cardImg/outline/剪影 (4).jpg'
  },
  {
    number: 5,
    romanNumeral: 'V',
    name: '教皇',
    enName: 'The Hierophant',
    keyword: '象征传统、信仰和教育。',
    disc: '教皇是一个坐在宝座上的宗教领袖，头戴三重冠，手持三叉戟。代表对知识和智慧的寻求，以及传统和机构的尊重。',
    imgSrc: './img/cardImg/outline/剪影 (5).jpg'
  },
  {
    number: 6,
    romanNumeral: 'VI',
    name: '恋人',
    enName: 'The Lovers',
    keyword: '象征爱情、关系和选择。',
    disc: '恋人是一对亚当和夏娃式的情侣，上方有一个天使。代表爱情和关系中的选择和结合。',
    imgSrc: './img/cardImg/outline/剪影 (6).jpg'
  },
  {
    number: 7,
    romanNumeral: 'VII',
    name: '战车',
    enName: 'The Chariot',
    keyword: '象征胜利、控制和意志力。',
    disc: '战车是一个战士站在一辆由两只狮子拉的马车上。代表通过内在力量和决心克服障碍。',
    imgSrc: './img/cardImg/outline/剪影 (7).jpg'
  },
  {
    number: 8,
    romanNumeral: 'VIII',
    name: '力量',
    enName: 'Strength',
    keyword: '象征勇气、自信和自制力。',
    disc: '力量是一个女性温柔地关闭了一只狮子的嘴。代表内在的力量和克服恐惧的能力。',
    imgSrc: './img/cardImg/outline/剪影 (8).jpg'
  },
  {
    number: 9,
    romanNumeral: 'IX',
    name: '隐者',
    enName: 'The Hermit',
    keyword: '象征内省、反思和寻求智慧。',
    disc: '隐士是一个站在山顶上的老人，手持一根点燃的灯笼。代表寻求指导和内在的真理。',
    imgSrc: './img/cardImg/outline/剪影 (9).jpg'
  },
  {
    number: 10,
    romanNumeral: 'X',
    name: '命运之轮',
    enName: 'Wheel of Fortune',
    keyword: '象征命运、变化和周期。',
    disc: '命运之轮是一个巨大的轮子，上面有各种符号，包括蛇、天使和狮子。代表生活中的变化和周期性事件。',
    imgSrc: './img/cardImg/outline/剪影 (10).jpg'
  },
  {
    number: 11,
    romanNumeral: 'XI',
    name: '正义',
    enName: 'Justice',
    keyword: '象征公平、平衡和法律。',
    disc: '正义是一个坐在宝座上的女性，手持天平和小剑。代表公正和道德的决策。',
    imgSrc: './img/cardImg/outline/剪影 (11).jpg'
  },
  {
    number: 12,
    romanNumeral: 'XII',
    name: '倒吊人',
    enName: 'The Hermit',
    keyword: '象征牺牲、等待和启示。',
    disc: '吊人是一个倒挂的人形，脚踝被绑在一根杆子上。代表自我牺牲和从不同角度看问题。',
    imgSrc: './img/cardImg/outline/剪影 (12).jpg'
  },
  {
    number: 13,
    romanNumeral: 'XIII',
    name: '死神',
    enName: 'Death',
    keyword: '象征结束、转变和新生。',
    disc: '死神是一个穿着黑色盔甲的骑士，骑在白马上。代表生命中的一个阶段的结束和另一个阶段的新开始。',
    imgSrc: './img/cardImg/outline/剪影 (13).jpg'
  },
  {
    number: 14,
    romanNumeral: 'XIV',
    name: '节制',
    enName: 'Temperance',
    keyword: '象征平衡、调和和耐心。',
    disc: '节制是一个天使在两个水杯之间倒水。代表在相反力量之间寻找平衡和和谐。',
    imgSrc: './img/cardImg/outline/剪影 (14).jpg'
  },
  {
    number: 15,
    romanNumeral: 'XV',
    name: '恶魔',
    enName: 'The Devil',
    keyword: '象征欲望、物质主义和束缚。',
    disc: '恶魔是一个坐在宝座上的巴风特，背后有两根燃烧的火炬。代表内心的诱惑和对外在物质的依赖。',
    imgSrc: './img/cardImg/outline/剪影 (15).jpg'
  },
  {
    number: 16,
    romanNumeral: 'XVI',
    name: '塔',
    enName: 'The Tower',
    keyword: '象征崩溃、变革和觉醒。',
    disc: '塔是一个被闪电击中的塔楼，顶部有王冠，人们从塔中坠落。代表生活中的突然变化和崩溃。',
    imgSrc: './img/cardImg/outline/剪影 (16).jpg'
  },
  {
    number: 17,
    romanNumeral: 'XVII',
    name: '星星',
    enName: 'The Star',
    keyword: '象征希望、灵感和信心。',
    disc: '星星是一个裸体女性在河边倒水，周围有七颗星星。代表希望、灵感和对未来的积极展望。',
    imgSrc: './img/cardImg/outline/剪影 (17).jpg'
  },
  {
    number: 18,
    romanNumeral: 'XVIII',
    name: '月亮',
    enName: 'The Moon',
    keyword: '象征直觉、潜意识和幻想。',
    disc: '月亮是一个月亮照耀下的场景，有鱼、蟹和一个长发女性。代表梦境、直觉和对未知的探索。',
    imgSrc: './img/cardImg/outline/剪影 (18).jpg'
  },
  {
    number: 19,
    romanNumeral: 'XIX',
    name: '太阳',
    enName: 'The Sun',
    keyword: '象征快乐、成功和积极性。',
    disc: '太阳是一个太阳照耀下的场景，有孩子、马和太阳花。代表快乐、成功和积极的生活态度。',
    imgSrc: './img/cardImg/outline/剪影 (19).jpg'
  },
  {
    number: 20,
    romanNumeral: 'XX',
    name: '审判',
    enName: 'Judgment',
    keyword: '象征反思、评估和重生。',
    disc: '审判是一个天使吹响号角，周围是复活的人群，他们从坟墓中站起来，面向天空中的光。代表对过去的审视和清算，以及从旧的生活方式中解脱和重生。',
    imgSrc: './img/cardImg/outline/剪影 (20).jpg'
  },
  {
    number: 21,
    romanNumeral: 'XXI',
    name: '世界',
    enName: 'The World',
    keyword: '象征完成、整体性和成就。',
    disc: '世界是一个舞者在一个由各种符号和元素组成的圆形或椭圆形的图案中跳舞，这些符号代表了各个大阿卡纳牌的主题。代表个人旅程的完成、灵魂的觉醒和对生活的全面理解。',
    imgSrc: './img/cardImg/outline/剪影 (21).jpg'
  },
]
