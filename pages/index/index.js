const app = getApp();
Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    
    elements: [
      { title: '操作条', name: 'bar', color: 'purple', icon: 'vipcard' },
      { title: '导航栏 ', name: 'nav', color: 'mauve', icon: 'formfill' },
      { title: '列表', name: 'list', color: 'pink', icon: 'list' },
      { title: '卡片', name: 'card', color: 'brown', icon: 'newsfill' },
      { title: '表单', name: 'form', color: 'red', icon: 'formfill' },
      { title: '时间轴', name: 'timeline', color: 'orange', icon: 'timefill' },
      { title: '聊天', name: 'chat', color: 'green', icon: 'messagefill' },
      { title: '轮播', name: 'swiper', color: 'olive', icon: 'album' },
      { title: '模态框', name: 'modal', color: 'grey', icon: 'squarecheckfill' },
      { title: '步骤条', name: 'steps', color: 'cyan', icon: 'roundcheckfill' },
    ],

    list: [{
      title: '索引列表',
      img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
      url: '../indexes/indexes'
    },
    {
      title: '微动画',
      img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
      url: '../animation/animation'
    },
    {
      title: '全屏抽屉',
      img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
      url: '../drawer/drawer'
    },
    {
      title: '垂直导航',
      img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
      url: '../verticalnav/verticalnav'
    }
    ],
  },

  onLoad: function () {
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
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