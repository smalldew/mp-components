//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点击弹出分享组件',
    isScroll: true
  },
  /**
 * 分享组件
 */
  // 点击发送到朋友圈
  _clickShareViewMoments: function (e) {
    var that = this
    that._clickShareViewCancel()
    console.log('点击发送到朋友圈')
  },
  // 点击发送给好友
  _clickShareViewFriends: function (e) {
    var that = this
    that._clickShareViewCancel()
    console.log('点击发送给好友')
  },
  // 点击面对面扫一扫
  _clickShareViewFaces: function (e) {
    var that = this
    that._clickShareViewCancel()
    console.log('点击面对面扫一扫')
  },
  // 点击取消
  _clickShareViewCancel: function (e) {
    var that = this
    that.shareView.hide()
    that.setData({
      isScroll: true
    })
  },
  //事件处理函数
  clickShare: function (e) {
    var that = this
    that.shareView.show()
    that.setData({
      isScroll: false
    })
    console.log('点击弹出分享组件')
  },
  onLoad: function () {

  },
  onReady: function () {
    var that = this
    that.shareView = that.selectComponent("#shareView")
  }
})
