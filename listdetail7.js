// pages/listdetail6/listdetail6.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     items: [], 
    itemsss: [],
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  delss: function (event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.itemsss[index];
    if (param.num > 0) {
      param.num--; // 每点一次减少1
    } else {
      param.num = 0; // 最低为0
    }
    // 改变添加按钮的状态
    this.data.itemsss.splice(index, 1, param);
    that.setData({
      itemsss: this.data.itemsss
    });
    let money = 0;
    let num = 0;
    // 将已经确定总价格和数量求和
    this.data.itemsss.forEach(item => {
      money += item.price * item.num;
      num += item.num;
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
  },
  // 点击对应菜单添加按钮
  addss: function (event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.itemsss[index];
    let subOrders = []; // 购物单列表存储数据
    param.num++; // 每点一次增加1
    // 改变添加按钮的状态
    console.log(param);
    this.data.itemsss.splice(index, 1, param);
    that.setData({
      itemsss: this.data.itemsss
    });
    let money = 0;
    let num = 0;
    // 将已经确定总价格和数量求和
    this.data.itemsss.forEach(item => {
      money += item.price * item.num;
      num += item.num; console.log(num);
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
  },
  del: function (event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    if (param.num > 0) {
      param.num--; // 每点一次减少1
    } else {
      param.num = 0; // 最低为0
    }
    // 改变添加按钮的状态
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    let money = 0;
    let num = 0;
    // 将已经确定总价格和数量求和
    this.data.items.forEach(item => {
      money += item.price * item.num;
      num += item.num;
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
  },
  // 点击对应菜单添加按钮
  add: function (event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    let subOrders = []; // 购物单列表存储数据
    param.num++; // 每点一次增加1
    // 改变添加按钮的状态
    console.log(param);
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    let money = 0;
    let num = 0;
    // 将已经确定总价格和数量求和
    this.data.items.forEach(item => {
      money += item.price * item.num;
      num += item.num; console.log(num);
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
  },
  pay: function () {
    let that = this;
    let str = '选中' + that.data.orderCount.num + '件商品，共' + that.data.orderCount.money + '元，是否要支付？'
    wx.showModal({
      title: '提示',
      content: str,
      success: function (res) {
        // 至少选中一个商品才能支付
        if (that.data.orderCount.num !== 0) {
          if (res.confirm) {
            // 打开扫码功能
            wx.scanCode({
              onlyFromCamera: true,
              success: (res) => {
                wx.redirectTo({
                  url: '../pay/pay'
                });
              }
            });
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        } else {
          wx.showToast({
            title: '您未选中任何商品',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  handleCollection(e) {//删吧
    //let isCollected = !this.data.isCollected
   
    let dish = e.currentTarget.dataset.dish; //let index = this.data.index;
   let index=0;

  },

  onLoad: function (options) {
    let that = this;
    // 取出订单传过来的数据
    wx.getStorage({
      
      key: 'isshuju',
      success: function (res) { //res要一维数组！！！     
        console.log("det" + res);
        
        that.setData({
        itemsss: res.data//itemsss数据库一位的数组
        })
      }
    });

  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
let items=[];let q=0;
    this.data.itemsss.forEach((item) => {
      console.log("itemsss" + item);
      if (item.status) { items.push(item); console.log("det" + item.status); }

    }); 
    
    //for (let p = 0; p <= (items.length / 2); p++) { items.pop();}
    this.setData({
      items//
    })
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

  }
})