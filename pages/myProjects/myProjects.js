// pages/myProjects/myProjects.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    projects: [  
      {  
        id: 1,
        name: '城市智能交通分析',  
        brief: '通过大数据分析优化城市交通流量，提供实时交通信息和建议。',
        // 可以添加更多项目属性，如id、图片等  
      },  
      // 可以添加更多项目数据  
    ] ,
    
    selectedButton:'' 
  },  

  onLoad: function() {  
    const app = getApp();  
    this.setData({  
      selectedButton: app.globalData.selectedProjectType  
    });  
  },  
  onButtonClick: function(event) {  
    const buttonType = event.currentTarget.dataset.type;  
    const app = getApp();  
    app.globalData.selectedProjectType = buttonType; // 更新全局状态  
  
    if (buttonType === 'initiated') {  
      // 如果已经在页面1，则不需要跳转  
      // 但如果需要刷新数据，可以在这里调用相关函数  
    } else if (buttonType === 'participated') {  
      wx.navigateTo({  
        url: '/pages/myInvolvedProjects/myInvolvedProjects', // 跳转到页面
        success: function() {  
          // 可以在这里做一些额外的操作，比如发送数据到页面 
        }  
      });  
    }  
  },
  
  navigateToProjectDetails: function(event) {  
    const project = event.currentTarget.dataset.project;  
    // 这里假设项目详情页面通过项目名称作为参数进行跳转  
    // 在实际应用中，应该使用唯一标识符（如id）作为参数  
    wx.navigateTo({  
      url: `/pages/initProjectDetails/initProjectDetails?id=${project.id}`  
    });  
  } , 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})