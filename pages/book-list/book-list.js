const app = getApp();
Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,

    list: [{
      id: 0,
      title: '架构探险轻量级微服务架构',
      img: 'http://img3m5.ddimg.cn/63/35/1233785385-1_w_1.jpg',
      url: '../index/index'
    },
      {
        id: 1,
      title: '白帽子讲Web安全',
      img: 'http://img3m4.ddimg.cn/29/31/23506094-1_w_1.jpg',
      url: '../index/index'
    },
    {
      id: 2,
      title: 'Java网络编程',
      img: 'http://img3m4.ddimg.cn/79/30/23560594-1_w_6.jpg',
      url: '../index/index'
    },
    ]
  },

  onLoad: function () {
  },

  methods: {
    toChild(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  }
});