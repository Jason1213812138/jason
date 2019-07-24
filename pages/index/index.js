//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    background: ['demo-text-1', 'demo-text-1'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular:true,
    interval:5000,
    duration: 3000,
    previousMargin: 0,
    nextMargin: 0,
    moveanimation: {},
    animation:{},
    modalHidden:true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    wx.switchTab({
      url: 'pages/index/main'
    })

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
// 信封偏移动画
  
  onReady: function moveanimation() {
    var that = this;
    var i = 0
    var ii = 0
    var circleCount = 0
    

    var animation = wx.createAnimation({
      // duration: 2000,
      duration:500,
      delay:100,
       timingFunction: 'ease-in-out',
       timingFunction:'linear',
      
      transformOrigin:'5% 30% 0'
    })
  setInterval(function () {
    
    //动画的脚本定义必须每次都重新生成，不能放在循环外
    //animation.rotate(360 * (n)).step()

   animation.scale(5.10).step();
    //  animation.translateX(500).step({ duration: 5000 }).translateX(-500).step().rotate(180).step();
    // if (circleCount % 2 == 0) {
      //animation.scale(1.15).step();
    //} else {
      //animation.scale(1.0).step();
    //} 
     //animation.scale(8,8).step();

    // 更新数据
    that.setData({
      // 导出动画示例
      //animationData: animationData.export(),
      
      moveanimation: animation.export(),
      
    })
     ++ii;
     circleCount++;
    
    
   }.bind(that),2000);

  },
  roate: function() {
    
    
    
    var animation = wx.createAnimation({
      
      duration: 3000,
      timingFunction: "linear",
    });
    console.log(111)
    this.animation = animation;

    animation.rotate(45).step();
    this.setData({
      animationData: animation.export()
    })

    this.interval = setInterval(function () {
      animation.translate(30).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 3000)
  },

  

  bindViewTap:function(){
    this.setData({
      modalHidden:!this.data.modalHidden
    })
  },
  modalBindaconfirm:function(){
    this.setData({
      modalHidden:!this.data.modalHidden
    })
  },
  modalBindcancel:function(){
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },

  
  
  


  
})


