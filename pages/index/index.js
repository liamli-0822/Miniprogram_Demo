// index.js

Page({
  data: {
    selected: 0,
    list: ['Tab1', 'Tab2', 'Tab3'],
  },
  selected(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index
    this.setData({
      selected: index
    })
  },
  itemOneClick() {
    console.log('111111')
    wx.switchTab({ url: '/pages/car/index' })
  },
  itemTwoClick() {
    console.log('222222')
    wx.navigateTo({
      url: '/pages/carList/pages/car1/car1',
    })
  },
  itemThreeClick() {
    console.log('3333333')
    wx.redirectTo({
      url: '/pages/carList/pages/car2/car2',
    })
  }
})
