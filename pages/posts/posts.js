//logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     date : "Nov 18 2016",
     title:"正是虾肥蟹壮时"
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content1 ={
      date:"Sep 18 2016",
      title:'正是虾肥蟹壮时',
      post_img:"/images/post/crab.png",
      content:"菊黄蟹正肥",
      view_num:"112",
      collect_num:"96",
      author_img:"/images/avatar/1.png"
    }
    this.setData(post_content1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
