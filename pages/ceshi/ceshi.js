//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    name: '我念大学',
    userInfo: {},
    array: [{ msg: "列表第一列" }, { msg: "列表第二列" }],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  dianji: function () {
    console.log('来点我啊')
  },
  changan: function () {
    console.log('长按效果')
  },
  save:function(){
    console.log('save..')

    wx.setStorage({
      key: 'text',
      data: '我是保存数据',
    })
  },
  read:function(){
    wx.getStorage({
      key:'text',
      success: function(res){
        console.log('读取成功:'+res.data)
      },
      fail:function(res){
        console.log('读取失败:'+res.errMsg)
      }
    })
  },
  remove:function(){
    wx.removeStorage({
      key: 'text',
      success: function(res) {
        console.log('remove ok')
        //console.log('remove'+key+'成功!')
      },
    })
  },
  network: function () {
    wx.request({
      url: 'https://www.baidu.com/',
      method:"GET",
      header:{},
      seccess:function(res){
        console.log('请求成功'+res.data)
      },
      faol:function(res){
        console.log('请求失败:'+res.errMsg)
      }
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
