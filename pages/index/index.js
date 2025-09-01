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
  }
})
