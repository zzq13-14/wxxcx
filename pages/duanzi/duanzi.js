// pages/duanzi/duanzi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date()) / 1000;
    console.log(timestamp)
    var that = this
    wx.request({
      url: 'http://v.juhe.cn/joke/content/list.php?sort=desc&page=4&pagesize=10&time=' + timestamp + '&key=bf051a1a8d1da4e208f9d4bf425b68e6',
      success: function (res) {
        console.log(res.data)
        //数据请求成功,更新到前台界面
        that.setData({
          content: res.data.result.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.updateShareMenu({
      withShareTicket: true,
      success() { }
    })

  }
})