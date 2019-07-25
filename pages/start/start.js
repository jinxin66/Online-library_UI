// pages/start/start.js
Page({
  data: {
    countdown: 3
  },
  onLoad: function (options) {
    var that = this
    setInterval(function () {
      if ((that.data.countdown - 1) == 0) {
        clearInterval(this);
        wx.redirectTo({
          url: '../login/login',
        })
      }
      that.setData
        ({
          countdown: that.data.countdown - 1
        })
    }, 1000)
  },
  toLogin: function () {
    this.setData
      ({
        countdown: 0
      })
    wx.redirectTo({
      url: '../login/login',
    })
  },
})