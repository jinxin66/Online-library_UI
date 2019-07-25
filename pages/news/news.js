// pages/news/news.js
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,

  },
  onLoad: function (options) {

  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
  toNewsDetail: function () {
    wx.redirectTo({
      url: '../news-detail/news-detail',
    })
  },
})