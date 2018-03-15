var postData = require('../../data/post-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "Nov 18 2016",
    title: "正是虾肥蟹壮时"
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postList:postData.postList
    })
  },
  onPostTap:function(event){
    //event为框架给的事件对象,currentTarget当前鼠标点击的组件,dataset所有自定义属性的集合
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },
  //轮播图点击详情
  onSwiperTap:function(event){
    //target和currentTarget
    // tartet指的是当前点击的组件和currentTarget指的是事件捕获的组件
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }
})
