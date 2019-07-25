// pages/user/user.js
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 1,

    isLogin: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../image/icons/star/empty.png',
    selectedSrc: '../../image/icons/star/full.png',
    halfSrc: '../../image/icons/star/half.png',
    key: 3.5,//评分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    wx.login({
      success: function (res) {
        console.log(res)
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        isLogin: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          isLogin: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            isLogin: true
          })
        }
      })
    }
  },

  //选择便签
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  },

  //获得用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      isLogin: true
    })
  },
  //获取书本信息
  toBookInfo: function () {
    wx.navigateTo({
      url: '../book-info/book-info',
    })
  },
})