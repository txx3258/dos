//welfare.js
var util = require('../../utils/util.js')
Page({
  data: {
    urlList: {
      "sunImage": "https://modao.cc/uploads2/images/738/7383133/raw_1485002896.png",
      "runImage": "https://modao.cc/uploads2/images/738/7383239/raw_1485004176.png",
      "rightImage": "/images/welfare/arrowRight.png",
      "homeImage": "/images/welfare/home.png",
    },
    welfareList: [
      { "name": "DOS红包节", "color": "#E84E40" }, { "name": "DOS图书馆", "color": "#FFA726" }, { "name": "DOS缘梦园", "color": "#F4FC00" }, { "name": "爱奇艺VIP", "color": "#2BAF2B" }, { "name": "DOS月分红", "color": "#738FFE" }, { "name": "DOS圆梦帮", "color": "#78909C" }, { "name": "DOS年终奖", "color": "#AB47BC" }
    ],
    buttonPosition:{
      "toTop": [],
      "toLeft": []
    }

  },

  returnHomePage: function () {
    console.log("点击");
    wx.switchTab({
      url: "../activities/activities"
    });
  },

  //用于计算button的位置，根据button数量，用余弦函数得到。
  getButtonPosition: function() {
    var length = this.data.welfareList.length;
    console.log(length);
    var toTop = [], toLeft = [];
    for(let i = 0; i < length; i++) {
      toTop[i] = 1000.0 / length * (i + 0.5);
      let a = -200.0, w = 2 * 3.14159 / 720 , x = toTop[i];
      toLeft[i] = a * Math.cos(w * x) + 200.0;
    }
    this.setData({buttonPosition: {toTop, toLeft}});
  },

  onLoad: function () {
    console.log("onload");
    this.getButtonPosition();
    console.log(this.data.buttonPosition)
  }
})
