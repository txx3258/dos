import { Member, members, memberSample, Subject, Activity, subjectSample, activitySample } from "../../../utils/Classes";

var app = getApp();
Page({
  data: {
    imageURL: 'https://modao.cc/uploads3/images/891/8919204/raw_1492662768.jpeg'
  },

  cancel: app.cancel,

  //form按钮提交多个输入框事件
  confirmSubmit: function (e) {
    console.log(e);
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    var weixinID = e.detail.value.weixinID;

    //是会员，则添加活动会员
    for (let i = 0; i < members.length; i++) {
      if (members[i].basicInfo.name == name) {
        activitySample.addMember(members[i]);
        break;
      } 
    }

    //如果不是会员，先加dos会员,再加入活动
    //输入的电话号码须为数字，否则会调用构造函数的报错
    var regex = /\D/g;
    if (!regex.test(phone)) {
      phone = Number.parseInt(phone);
    }
    var member = new Member();
    member.setFromRegister(name, phone, weixinID);
    activity.addMember(member);
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