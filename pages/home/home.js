  // pages/home/home.js
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,

    pop_books: [{
      id: 0,
      url: 'http://img3m2.ddimg.cn/23/26/25114442-1_w_3.jpg'
    }, {
      id: 1,
      url: 'http://img3m1.ddimg.cn/12/6/23760111-1_u_163.jpg'
    }, {
      id: 2,
      url: 'http://img3m4.ddimg.cn/29/31/23506094-1_w_1.jpg'
    }, {
      id: 3,
      url: 'http://img3m6.ddimg.cn/63/24/24244866-1_w_3.jpg'
    }, {
      id: 4,
      url: 'http://img3m4.ddimg.cn/79/30/23560594-1_w_6.jpg'
    }],

    book_types: [{
      id: 0,
      name: '教育'
    }, {
        id: 1,
        name: '科幻'
    }, {
        id: 2,
        name: '玄幻'
    }, {
        id: 3,
        name: '文学'
      }],

    may_likes: [{
      id: 0,
      url: 'https://edu-yuedu.bdimg.com/v1/RD/%E6%98%A5%E5%A4%8F/%E5%A4%A9%E8%B0%B4%E8%80%85720x285-1545014171754.jpg'
    }, {
      id: 1,
        url: 'https://img14.360buyimg.com/da/jfs/t1/83705/11/2457/94212/5d26db05E60b90a67/4d059b9b0c700919.jpg!q95.webp'
    }, {
      id: 2,
        url: 'https://edu-yuedu.bdimg.com/v1/RD/5years/720-285-%E5%A6%82%E6%9E%9C-1554368471664.jpg'
    }]
  },
  
  onLoad: function (options) {
    this.towerSwiper('pop_books');
    // 初始化towerSwiper 传已有的数组名即可
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for(let i = 0; i<list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      towerList: list
    })
  },

  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },

  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },

  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.towerList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        towerList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        towerList: list
      })
    }
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  toSearch: function () {
    
  },
  toScan: function () {

  },
  toAllPop: function () {
    wx.redirectTo({
      url: '../book-list/book-list',
    })
  },
  toAllType: function () {
    wx.redirectTo({
      url: '../book-type/book-type',
    })
  },
  toAllLike: function () {
    wx.redirectTo({
      url: '../book-list/book-list',
    })
  },
});