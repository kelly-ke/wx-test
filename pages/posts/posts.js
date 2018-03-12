//logs.js
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
    var posts_content = [
      {
        date: "Sep 18 2016",
        title: '正是虾肥蟹壮时',
        post_img: "/images/post/crab.png",
        content: "菊黄蟹正肥",
        view_num: "18",
        collect_num: "56",
        author_img: "/images/avatar/1.png"
      },
      {
        date: "Mar 12 2017",
        title: '比利林恩的中场战事',
        post_img: "/images/post/bl.png",
        content: "李安导演作品",
        view_num: "112",
        collect_num: "96",
        author_img: "/images/avatar/2.png"
      }
    ]


    this.setData({
      posts_key: posts_content
    });
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
