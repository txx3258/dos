//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
  },
  cancel: function () {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },

 
  globalData:{
    userInfo:null
  }
})