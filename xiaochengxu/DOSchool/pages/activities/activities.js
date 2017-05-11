// pages/events/events.js
var app = getApp();
Page({
  data: {
    listData: [
      { "day": "周一", "date": "3月13日", "activity": [{ "name": "收纳整理(线上)", "members": 8 }] },
      { "day": "周二", "date": "3月14日", "activity": [{ "name": "女子防身术", "members": 10 }] },
      { "day": "周三", "date": "3月15日", "activity": [{ "name": "网球", "members": 4 }] },
      { "day": "周四", "date": "3月16日", "activity": [{ "name": "摄影课", "members": 11 }] },
      { "day": "周五", "date": "3月17日", "activity": [{ "name": "吃遍成都", "members": 15 }] },
      {
        "day": "周六", "date": "3月18日", "activity": {
          "morning": [{ "name": "国画", "members": 9 }],
          "afternoon": [{ "name": "茶艺", "members": 5 }],
          "night": [{ "name": "读书会", "members": 24 }]
        }
      },
      {
        "day": "周日", "date": "3月19日", "activity": {
          "morning": [{ "name": "古筝", "members": 8 }],
          "afternoon": [{ "name": "PS", "members": 15 }],
          "night": [{ "name": "长笛", "members": 6 }]
        }
      }
    ],
    urlList:
    {
      "dayTime": ["/images/daytime/suncircle.png", "/images/daytime/sunSolid.png", "/images/daytime/moon.png"],
      "membersCount": "/images/countIcon/people.png",
    },
    "countMembers": 1,

  },

  tapToActivityDetail: function () {
    wx.navigateTo({
      url: "/pages/activities/activityDetail/activityDetail"
    })
  },

  onLoad: function (options) {
    // 根据日期设置本周活动的课程表等活动
    // var date = new Date();
    // switch(date.getDay) {
    //   case 0: this.setData(listData[6].date: date.getMonth + 1 "月" + date.getDate "日");
    //   break;
    // }
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