// components/shareView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   * 私有数据
   */
  data: {
    // 弹窗显示控制
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 公有方法
     */
    //隐藏弹框
    hide: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    show: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },

    /**
     * 私有方法
     */
    // 点击分享到朋友圈
    _clickShareViewMoments: function(e) {
      this.triggerEvent("clickShareViewMoments")
    },
    // 点击分享给好友
    _clickShareViewFriends: function (e) {
      this.triggerEvent("clickShareViewFriends")
    },
    // 点击面对面扫一扫
    _clickShareViewFaces: function (e) {
      this.triggerEvent("clickShareViewFaces")
    },
    // 点击取消
    _clickShareViewCancel: function (e) {
      //触发成功回调
      this.triggerEvent("clickShareViewCancel")
    }
  }
})
