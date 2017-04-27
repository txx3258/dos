import {Member1, Member2, members} from "../../../utils/Constructors";

var app = getApp();
Page({
  data: {
      imageURL: '/images/userPortrait.jpeg'
  },
  cancel: app.cancel,
  confirmSubmit: function (e) {
    console.log(e);
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    var weixinID = e.detail.value.weixinID;
    var regex = /\D/g;

    if (!regex.test(phone)) {
      phone = Number.parseInt(phone);
    }

    new Member2(name, phone, weixinID);
    console.log(members);
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