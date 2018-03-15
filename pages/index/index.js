//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onTap:function(){
    // 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })

    //关闭当前页面，跳转到应用内的某个页面
    wx.switchTab({
        url: '../posts/posts',
      }) 
  },

  onLoad: function () {
    
  },
  
})
