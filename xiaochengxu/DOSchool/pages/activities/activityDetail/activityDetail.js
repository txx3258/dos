// pages/activities/activityDetail/activityDetail.js
Page({
  data: {
    imageUrls: ['https://modao.cc/uploads2/images/753/7530131/raw_1486869115.jpeg', 'https://modao.cc/uploads2/images/753/7530131/raw_1486869115.jpeg', 'https://modao.cc/uploads2/images/753/7530131/raw_1486869115.jpeg'
    ],
    urls: {
      "heartImage": "/images/activities/thumb.png"
    },
    selections: [
      {
        "title": "查看活动详情", "iconImage": "/images/activities/paper.png"
      },
      {
        "title": "使用地图导航", "iconImage": "/images/activities/map.png"
      },
      {
        "title": "加入活动群聊", "iconImage": "/images/activities/wechat.png"
      },
      {
        "title": "有问题要咨询", "iconImage": "/images/activities/phone.png"
      },
      {
        "title": "给活动写评价", "iconImage": "/images/activities/correct.png"
      },
      {
        "title": "上传图文感想", "iconImage": "/images/activities/upload.png"
      }
    ],

  },


  tapToRegister: function (e) {
    wx.navigateTo({
      url: '/pages/activities/activitiesRegister/activitiesRegister'
    })
  },

  tapButton: function (e) {
    console.log(e);
    var toUrl = "";
    switch (e.target.id) {
      case "button0": return;
        break;
      case "button1": wx.openLocation({
        latitude: 30.652763,
        longitude: 104.09229,
        scale: 28,
        name: '蜜糖小厨',
        address: '时代尊邸7栋31楼3103',
      })
        break;
      case "button2": return;
        break;
      case "button3": return;
        break;
      case "button4": return;
        break;
      case "button5": return;
        break;
    }
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})