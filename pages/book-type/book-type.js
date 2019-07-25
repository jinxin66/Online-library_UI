const app = getApp();
Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    
    elements: [
      { title: '分类1', name: 'bar', color: 'purple', icon: 'vipcard' },
      { title: '分类2', name: 'nav', color: 'mauve', icon: 'formfill' },
      { title: '分类3', name: 'list', color: 'pink', icon: 'list' },
      { title: '分类4', name: 'card', color: 'brown', icon: 'newsfill' },
      { title: '分类5', name: 'form', color: 'red', icon: 'formfill' },
      { title: '分类6', name: 'timeline', color: 'orange', icon: 'timefill' },
      { title: '分类7', name: 'chat', color: 'green', icon: 'messagefill' },
      { title: '分类8', name: 'swiper', color: 'olive', icon: 'album' },
      { title: '分类9', name: 'modal', color: 'grey', icon: 'squarecheckfill' },
      { title: '分类10', name: 'steps', color: 'cyan', icon: 'roundcheckfill' },
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
  }
})
