Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    list: [{
        pagePath: "/pages/home/home",
        iconPath: "/images/tabbar/home_normal.png",
        selectedIconPath: "/images/tabbar/home_selected.png",
        text: "首页"
      },
      {
        pagePath: "/pages/news/news",
        iconPath: "/images/tabbar/search_normal.png",
        selectedIconPath: "/images/tabbar/search_selected.png",
        text: "社区"
      },
      {
        pagePath: "/pages/user/user",
        iconPath: "/images/tabbar/user_normal.png",
        selectedIconPath: "/images/tabbar/user_selected.png",
        text: "我的"
      }
    ]
  },
  methods: {
    switchTab(e) {      
      const url = e.currentTarget.dataset.path
      wx.switchTab({
        url
      })
    }
  },
  pageLifetimes: {
  },
})