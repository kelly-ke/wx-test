var postsData = require('../../../data/post-data.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId; //currentPostId属性名
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData
    })
    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })
    }
    else {
      var postsCollected = {};
      postsCollected[postId] = false; //当前文章的状态
      wx.setStorageSync('posts_collected', postCollected);
    }

    if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === postId){
      this.setData({
        isPlayingMusic : true
      })
    }
    this.setMusicMonitor();
  },
  setMusicMonitor: function () {
    //监听音乐启动事件
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlayingMusic: true
      })
      app.globalData.g_isPlayingMusic = true;
      app.g_currentMusicPostId = that.data.currentPostId;
    })
    //监听音乐暂停事件
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlayingMusic: false
      })
      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_currentMusicPostId = null;
    })
  },
  //用户收藏按钮事件
  onCollectionTap: function (event) {
    //同步调用
    // this.getPostsCollectedSyc();
    //异步调用
    this.getPostsCollectedAsy();
  },
  getPostsCollectedSyc: function () {
    var that = this;
    var postsCollected = wx.getStorageSync('posts_collected');  //获取缓存
    var postCollected = postsCollected[that.data.currentPostId]; //获取当前文章的收藏状态
    //收藏变成未收藏,未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[that.data.currentPostId] = postCollected; //更新当前变量的缓存值
    that.showToast(postsCollected, postCollected);
  },
  //异步
  getPostsCollectedAsy: function () {
    var that = this;
    wx.getStorage({
      key: 'posts_collected',
      success: function (res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId]; //获取当前文章的收藏状态
        //收藏变成未收藏,未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected; //更新当前变量的缓存值
        that.showToast(postsCollected, postCollected);
      },
    })
  },
  //静态弹框
  // showModal: function (postsCollected,postCollected){
  //   var that = this;
  //   wx.showModal({
  //     title: '收藏',
  //     content: postCollected ?'收藏该文章':'取消收藏',
  //     cancelText: '取消',
  //     cancelColor: '#333',
  //     confirmText: '确认',
  //     confirmColor: '#f5cb32',
  //     success: function (res) {
  //       if (res.confirm) {
  //         wx.setStorageSync('posts_collected', postsCollected);
  //         that.setData({
  //           collected: postCollected
  //         })
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },
  showToast: function (postsCollected, postCollected) {
    var that = this;
    wx.setStorageSync('posts_collected', postsCollected);
    that.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      //显示时长
      duration: 1000,
      //图标,默认是success
      icon: 'success'
    })
  },
  //分享按钮事件
  onShareTap: function (event) {
    var itemList = [
      '微信好友', '朋友圈', 'QQ', '微博'
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#f5cb32',
      success: function (res) {
        // res.cancel //用户是否点击取消
        // res.tapIndex //数组元素的下标
        wx.showModal({
          title: '用户分享到了' + itemList[res.tapIndex],
          content: '用户是否取消?' + res.cancel,
        })
      }
    })
  },
  //音频播放,暂停
  onMusicTap: function () {
    var currentPostId = this.data.currentPostId;
    var postData = postsData.postList[currentPostId];
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    }
    else {
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  }
})