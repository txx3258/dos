//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  enterRegister: function () {
    wx.navigateTo({
      url: '../activities/activitiesRegister/activitiesRegister'
    })
  },
  
  onLoad: function () {
  }
})
