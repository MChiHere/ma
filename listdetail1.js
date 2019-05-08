//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabTxt: ['一', '二', '三', '四', '五'],//tab文案
    tab: [true, false, false, false, false],
    tabFlag0: true, tabFlag1: false, tabFlag2: false, tabFlag3: false, tabFlag4: false,
    items4: [],//搜索用的
    tabIndex: 0,
    cindex: 0, cindex1: 0,
    // 统计商品数量和价格
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
    // 提交的订单
    //orders: true,
    menus: [{
      id: 1,
      menu: '窗口1'
      }, {
      id: 1,
        menu: '窗口2'
      }, {
      id: 1,
        menu: '窗口3'
      }, {
      id: 1,
      menu: '窗口4'
      }, {
      id: 1,
        menu: '窗口5'
      }, {
      id: 1,
        menu: '窗口6'
      }, {
      id: 1,
        menu: '窗口7'
      }, {
      id: 1,
        menu: '窗口8'
      }, {
      id: 1,
        menu: '窗口9'
      }, {
      id: 1,
        menu: '窗口10'
      }, {
      id: 1,
        menu: '窗口11'
      }, {
      id: 1,
        menu: '窗口12'
      }, {
      id: 1,
        menu: '窗口13'
      }, {
      id: 1,
        menu: '窗口14'
      }, {
      id: 1,
        menu: '窗口15'
      }, {
      id: 1,
        menu: '窗口16'
    }],
    // 商品列表
    items: [[{
      id: 1,
      title: '南辣椒小炒肉1',
      price: 12,
      src: 'image/i.jpg',
      active: false, 
      num: 1
      }, {
      id: 2,
      title: '南辣椒小炒肉2',
      price: 13,
      src: 'image/2.jpg',
        active: false, 
      num: 1
      }, {
      id: 3,
      title: '南辣椒小炒肉3',
      price: 14,
      src: 'image/3.jpg',
        active: false, 
      num: 1
      }, {
      id: 4,
      title: '南辣椒小炒肉4',
      price: 15,
      src: 'image/4.jpg',
        active: false,
      num: 1
      }, {
      id: 5,
      title: '南辣椒小炒肉5',
      price: 16,
      src: 'image/5.jpg',
        active: false, 
      num: 1
      }, {
      id: 6,
      title: '南辣椒小炒肉6',
      price: 17,
      src: 'image/6.jpg',
        active: false, 
      num: 1
      }, {
      id: 7,
      title: '南辣椒小炒肉7',
      price: 18,
      src: 'image/7.jpg',
        active: false, 
      num: 1
      }], [{
      id: 8,
      title: '南辣椒小炒21',
      price: 17,
      src: 'image/6.jpg',
        active: false, 
      num: 1
      },  {
          id: 2,
          title: '南辣椒小炒肉2',
          price: 13,
          src: 'image/2.jpg',
          active: false,
          num: 1
        } ,{
      id: 9,
      title: '南辣椒小炒肉22',
      price: 18,
      src: 'image/7.jpg',
          active: false, 
      num: 1
      }], [{
      id: 10,
      title: '南辣椒小炒1',
      price: 17,
      src: 'image/6.jpg',
        active: false, 
      num: 1
      }, {
      id: 7,
      title: '南辣椒小炒肉2',
      price: 18,
      src: 'image/7.jpg',
          active: false, 
      num: 1
      }], [{
        id: 6, title: '南辣椒小炒肉1', price: 17, src: 'image/6.jpg', active: false, 
      num: 1
      }, {
          id: 7, title: '南辣椒小炒肉2', price: 18, src: 'image/7.jpg', active: false, num: 1, 
      }], [{
      id: 1,
      title: '南辣椒小炒肉1',
      price: 12,
      src: 'image/i.jpg',
        active: false, 
      num: 1
      }, {
      id: 2,
      title: '南辣椒小炒肉2',
      price: 13,
      src: 'image/2.jpg',
          active: false, 
      num: 1
      }, {
      id: 3,
      title: '南辣椒小炒肉3',
      price: 14,
      src: 'image/3.jpg',
          active: false, 
      num: 1
      }, {
      id: 4,
      title: '南辣椒小炒肉4',
      price: 15,
      src: 'image/4.jpg',
          active: false, 
      num: 1
      }, {
      id: 5,
      title: '南辣椒小炒肉5',
      price: 16,
      src: 'image/5.jpg',
          active: false, 
      num: 1
        }, {
      id: 6,
      title: '南辣椒小炒肉6',
      price: 17,
      src: 'image/6.jpg',
          active: false, 
      num: 1
     }, {
      id: 7,
      title: '南辣椒小炒肉7',
      price: 18,
      src: 'image/7.jpg',
          active: false, 
      num: 1
    }],],
  menus1: [{
      id: 12,
      menu: '菜单二的一'
    }, {
      id: 12,
      menu: '菜单er'
    }, {
      id: 12,
      menu: '菜单三'
    }, {
      id: 12,
      menu: '菜单四'
    }, {
      id: 12,
      menu: '菜单we五'
    }, {
      id: 12,
      menu: '菜单六'
    }, {
      id: 12,
      menu: '菜单'
    }, {
      id: 12,
      menu: '菜单'
    }, {
      id: 12,
      menu: '菜单五'
    }, {
      id: 12,
      menu: '菜单五'
    }, {
      id: 12,
      menu: '菜单五'
    }, {
      id: 12,
      menu: '菜单五'
    }, {
      id: 12,
      menu: '菜单五'
    }, {
      id: 12,
      menu: '菜单五'
    }, {
      id: 12,
      menu: '菜单五'
    }, {
      id: 12,
      menu: '菜单五'
    }],
    // 商品列表
  itemser: [[{
      id: 1,
      title: '1湖南辣椒小炒肉12222',
      price: 12,
      src: 'image/i.jpg',
      active: false, 
      num: 1
    }, {
      id: 2,
      title: '1湖南辣椒小炒肉2',
      price: 13,
      src: 'image/2.jpg',
        active: false, 
      num: 1
    }, {
      id: 3,
      title: '1湖南辣椒小炒肉3',
      price: 14,
      src: 'image/3.jpg',
        active: false, 
      num: 1
    }, {
      id: 4,
      title: '1湖南辣椒小炒肉4',
      price: 15,
      src: 'image/4.jpg',
        active: false,
      num: 1
      }, {
      id: 5,
      title: '1湖南辣椒小炒肉5',
      price: 16,
      src: 'image/5.jpg',
        active: false, 
      num: 1
      }, {
      id: 6,
      title: '1湖南辣椒小炒肉6',
      price: 17,
      src: 'image/6.jpg',
        active: false,
      num: 1
      }, {
      id: 7,
      title: '1湖南辣椒小炒肉7',
      price: 18,
      src: 'image/7.jpg',
        active: false, 
      num: 1
     }], [{
      id: 8,
      title: '2湖南辣椒小炒21',
      price: 17,
      src: 'image/6.jpg',
        active: false, 
      num: 1
     }, {
      id: 9,
      title: '2湖南辣椒小炒肉22',
      price: 18,
      src: 'image/7.jpg',
          active: false, 
      num: 1
     }], [{
      id: 10,
      title: '3湖南辣椒小炒1',
      price: 17,
      src: 'image/6.jpg',
        active: false,
      num: 1
     }, {
      id: 7,
      title: '3湖南辣椒小炒肉2',
      price: 18,
      src: 'image/7.jpg',
          active: false, 
      num: 1
     }], [{
        id: 6, title: '4湖南辣椒小炒肉1', price: 17, src: 'image/6.jpg', active: false, 
      num: 1
      }, {
          id: 7, title: '4湖南辣椒小炒肉2', price: 18, src: 'image/7.jpg', active: false, num: 1,
      }], [{
      id: 1,
      title: '5湖南辣椒小炒肉1',
      price: 12,
      src: 'image/i.jpg',
        active: false, 
      num: 1
      }, {
      id: 2,
      title: '5湖南辣椒小炒肉2',
      price: 13,
      src: 'image/2.jpg',
          active: false, 
      num: 1
     }, {
      id: 3,
      title: '5湖南辣椒小炒肉3',
      price: 14,
      src: 'image/3.jpg',
          active: false, 
      num: 1
     }, {
      id: 4,
      title: '5湖南辣椒小炒肉4',
      price: 15,
      src: 'image/4.jpg',
          active: false, 
      num: 1
      }, {
      id: 5,
      title: '5湖南辣椒小炒肉5',
      price: 16,
      src: 'image/5.jpg',
          active: false, 
      num: 1
      }, {
      id: 6,
      title: '5湖南辣椒小炒肉6',
      price: 17,
      src: 'image/6.jpg',
          active: false, 
      num: 1
      }, {
      id: 7,
      title: '5湖南辣椒小炒肉7',
      price: 18,
      src: 'image/7.jpg',
          active: false, 
      num: 1
      }],],
  },
  filterTab: function (e) {//横按钮
    var data = [false, false, false, false, false], index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    if (index == 4) {
      this.setData({
        tabFlag4: true,
      })
    } else {
      this.setData({
        tabFlag4: false, 
      })
    }if (index == 3) {
      this.setData({
        tabFlag3: true
      })
    } else {
      this.setData({
        tabFlag3: false, 
      })
    }
    if (index == 2) {
      this.setData({
        tabFlag2: true,
      })
    } else {
      this.setData({
        tabFlag2: false,
      })
    }if (index == 1) {
      this.setData({
        tabFlag1: true,
      }); //console.log('item.id=' + tabFlag1);
    } else {
      this.setData({
        tabFlag1: false, 
      })
    }if (index == 0) {
      this.setData({
        tabFlag0: true,
      })
    }else {
      this.setData({
        tabFlag0: false, 
      })
    }
    this.setData({
      tab: data,
    })
  },
  // 下拉刷新
  formSubmit2: function (e) {//搜索
    var that = this;
    //var formData = e.detail.value.id; //获取表单所有name=id的值,值 
    var formData = e.detail.value;

    let cai = [];

    this.data.items4.forEach(item => {
      if (formData == item.title) {
        cai.push(item);
        console.log(formData + "cai=" + item)
        console.log(formData + "cai=" + cai.title + item.price)
      };
    });
    this.data.items4.forEach(item => {
      let q = []; let p = [];
      for (let i = 0; i < item.title.length; i++) {//每一个title
        q.push(item.title.charAt(i)); //console.log(q.join('') + 'q=' + q);
        //if (formData == q.join('')) { cai.push(item); }//console.log(q.join('') + 'q=');
      }
      let j = 0;
      q.forEach((ite) => {
        for (; j < formData.length - 1; j++) { p.push(ite); }
        p.push(ite); if (formData == p.join('')) { cai.push(item); console.log('村的就是我！' + p.join('')); }; console.log('p.join=' + p.join('')); p.shift(ite); 
        
      })
    })
    that.setData({ cai })
    console.log(formData + "cai=" + cai)

  },
  
  handleCollection(e) {//控圈圈的
      let cindex = this.data.cindex;
      let dish = e.currentTarget.dataset.dish; let index = parseInt(e.target.dataset.index);
      let ti = e.currentTarget.dataset.ti;
  
    let obj = [];
    if (this.data.tabFlag0) {
      this.data.items[cindex].forEach((item) => {
        if (item.id == dish) {
          item.status = !item.status //|| false
        }
      }); let i = 0; this.data.items.forEach((item, cin) => {
        this.data.items[cin].forEach((item, ind) => {
          obj[i++] = item.status; console.log("一个全存 " + item.status + ' ' + this.data.items[cin][ind].status + ' index+' + cin + ind);
        });
      }); 
      wx.setStorage({
        key: 'isCollected',
        data: obj,
        success: () => { console.log("前半部分"); }
      });
      this.data.items[cindex].forEach((item) => {
        if (item.id == dish) {
          wx.showToast({
            title: item.status ? '喜欢' : '不喜欢',
            icon: 'success_no_circle'
          })
        }
      }) ;this.setData({
        items: this.data.items,
        
      }) 
    } if (this.data.tabFlag1) {
      this.data.itemser[cindex].forEach((item) => {
        if (item.id == dish) {
          item.status = !item.status //|| false
        }
      })
      this.setData({
        //items: this.data.items,
        itemser: this.data.itemser,
      }); let i = 0;
      //this.data.items.forEach((ww, qq) => { i += this.data.items[qq].length })
      this.data.itemser.forEach((item, cin2) => {
        this.data.itemser[cin2].forEach((item, ind2) => {
          obj.push(item.status)
          console.log("二个全存 " + item.status + '  ' + this.data.items[cin2][ind2].status + ' index+' + cin2 + ind2);
        }); wx.setStorage({
          key: 'isCollectedhu',
          data: obj,
          success: () => { console.log("后半部分"); }
        });
      this.data.itemser[cindex].forEach((item) => {
        if (item.id == dish) {
          wx.showToast({
            title: item.status ? '喜欢' : '不喜欢',
            icon: 'success_no_circle'
          })
        }
      });
    })}
      //提示用户
    
   
      //把data中的index放到新let出来的index中,因为下面要把index也存进去,要用index来判断你收藏了哪个页面
    /*let i = 0; this.data.items.forEach((item, cin) => {
      this.data.items[cin].forEach((item, ind) => {
        obj[i++]=item.status; console.log("一个全存 " + item.status+' ' + this.data.items[cin][ind].status + ' index+' + cin + ind); 
      });
    }); 
      //首先去看一下缓存的数据
  
    //let i = 0;
   // this.data.items.forEach((ww, qq) => { i += this.data.items[qq].length })
    this.data.itemser.forEach((item, cin2) => {
      this.data.itemser[cin2].forEach((item, ind2) => {
        obj.push (item.status)
        console.log("二个全存 " + item.status +'  '+ this.data.items[cin2][ind2].status + ' index+' + cin2 + ind2);
      });
    });*/

  },
  
 
  onPullDownRefresh: function () {
    setTimeout(() => {
      wx.showToast({
        title: '成功加载数据',
        icon: 'success',
        duration: 500
      });
      wx.stopPullDownRefresh()
    }, 500);
  },
  tabMenu: function (event) {
    let index = event.target.dataset.index;
    let id = event.target.dataset.id,
      index1 = parseInt(event.target.dataset.index);
    
    if(id=1){this.setData({
      tabIndex: index,
      cindex: index1
    });}
  }, /*tabMenu1: function (event) {
    let index = event.target.dataset.index;
    let id = event.target.dataset.id,
      index1 = parseInt(event.target.dataset.index);
      if(id=12){
    this.setData({
      tabIndex: index,
      cindex1: index1
    });}
  },*/
  // 点击去购物车结账
  card: function () {
    let that = this;
    // 判断是否有选中商品
    if (that.data.orderCount.num !== 0) {
      // 跳转到购物车订单也
      wx.redirectTo({
        url: '../order/order'
      });
    } else {
      wx.showToast({
        title: '您未选中任何商品',
        icon: 'none',
        duration: 2000
      })
    }
  },
  addOrder: function (event) {
    let that = this;
    //let id = event.target.dataset.id;
    let index = event.target.dataset.index; let cindex = event.target.dataset.cindex;
    let param = this.data.items[cindex][index];
    let index1 = event.target.dataset.index;//let cindex1 = event.target.dataset.cindex;let param1 = this.data.itemser[cindex1][index];
     /*let cindex2 = event.target.dataset.cindex;
    let param2 = this.data.items2[cindex2][index]; let cindex3 = event.target.dataset.cindex;
    let param3 = this.data.items3[cindex3][index]; let cindex4 = event.target.dataset.cindex;
    let param4 = this.data.items4[cindex4][index];*/
    let subOrders = []; // 购物单列表存储数据
    if (this.data.tabFlag0==true)//其实没必要但好分辨啊
      param.active ? param.active = false : param.active = true;
    if (this.data.tabFlag1 == true)param1.active ? param1.active = false : param1.active = true;
    /* param2.active = !param2.active; param3.active = !param3.active;
     param4.active = !param4.active;*/
    
    // 改变添加按钮的状态
    /*for (var i = 0; i < this.data.items.length; i++){
      if (i == cindex) { this.data.items[cindex].splice(index, 1, param);}
    } */this.data.items[cindex].splice(index, 1, param);
    //this.data.itemser[cindex1].splice(index, 1, param1);
    /* this.data.items2[cindex2].splice(index, 1, param2);
    this.data.items3[cindex3].splice(index, 1, param3); this.data.items4[cindex4].splice(index, 1, param4);*/
    /*this.data.items.forEach(function (item, indexq, obj) {
      if (indexq == cindex) {
        this.data.items.splice(index, 1, param);
      }
    });*/
    /*wx.setStorage({
      key: "items",
      data: this.data.items
    }); wx.setStorage({
      key: "itemser",
      data: this.data.itemser
    });*/
    that.setData({
      items: this.data.items, //itemser: this.data.itemser,
       /*items2: this.data.items2, items3: this.data.items3,
       items4: this.data.items4,*/
    });

    // 将已经确定的菜单添加到购物单列表
    /*this.data.items.forEach(function(item,index,obj) {
      if (item.active) {
        subOrders.push(item);
      }
    });*/
    for (let i = 0, a = this.data.items; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j].active) { subOrders.push(a[i][j]); }
      }
    } /*for (let i = 0, a = this.data.itemser; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j].active) { subOrders.push(a[i][j]); }
      }
    }*/ /*for (let i = 0, a = this.data.items2; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j].active) { subOrders.push(a[i][j]); }
      }
    } for (let i = 0, a = this.data.items3; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j].active) { subOrders.push(a[i][j]); }
      }
    } for (let i = 0, a = this.data.items4; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j].active) { subOrders.push(a[i][j]); }
      }
    }*/
     //that.setData({
     // subOrders//: this.data.items
    //});
    // 判断底部提交菜单显示隐藏
    if (subOrders.length == 0) {
      that.setData({
        bottomFlag: false
      });
    } else {
      that.setData({
        bottomFlag: true
      });
    }
    let money = 0;
    let num = subOrders.length;
    subOrders.forEach(item => {
      money += item.price; // 总价格求和
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
    // 将选中的商品存储在本地
    wx.setStorage({
      key: "orders",
      data: subOrders
    });

  },
  onLoad: function () {
    //let detailStorage = wx.getStorageSync('isCollected'); 
   
   /* if (!detailStorage) { //如果没有收藏
      wx.setStorageSync('isCollected', {}); console.log(detailStorage)
    }*/
    //如果收藏了
    //this.data.items.forEach((item) => {
   
      //console.log("detailStorage" + detailStorage);
    wx.getStorage({
      key:'isCollected',
      success: (data) => {
        let x = 0;
        this.data.items.forEach((item, cindex) => {
          this.data.items[cindex].forEach((item, index) => {
            this.data.items[cindex][index].status = data.data[x]; x++; console.log(cindex + ' ' + index + 'a 一的 ' + "  chuanle1  " + data.data[x] + "  实际获得的  " + this.data.items[cindex][index].status);
            this.setData({
              items: this.data.items,//items全表幅了true，所以当false是pop是行不通的，应为改不了收藏页面的东西
            })
          })
        })
      }});
        wx.getStorage({
          key: 'isCollectedhu',
          success: (data) => {
            let x = 0;
        this.data.itemser.forEach((item, cindex) => {
          this.data.itemser[cindex].forEach((item, index) => {
            this.data.itemser[cindex][index].status = data.data[x++]; console.log(cindex + ' ' + index + 'a 二的 ' + "  chuanle1  " + data.data[x] + "  实际获得的  " + this.data.itemser[cindex][index].status);
            this.setData({
              itemser: this.data.itemser,//items全表幅了true，所以当false是pop是行不通的，应为改不了收藏页面的东西
            })
          })
        })}
    })
    
      
    





    /*wx.getStorage({
      key: 'items',
      success: function (res) {
        console.log("成功传值 data="+res.data);
        let items=res.data
        this.setData({
          items//: res.data
        });}})*/
    let items4=[] ;//= this.data.items4;//shujuku
    this.data.items.forEach((item, cin1) => {
      this.data.items[cin1].forEach((item2, cin2) => {
        items4.push(this.data.items[cin1][cin2]);

      })
    }); this.data.itemser.forEach((item, cin1) => {
      this.data.itemser[cin1].forEach((item2, cin2) => {
        items4.push(this.data.itemser[cin1][cin2]);

      })
    }); 
    this.setData({ items4 });
 
    
  }, 
  onUnload: function () {//开始   
    let items4444 = []// = this.data.items4444;//shujuku
    let x = 0, i = 0;
    /*wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        this.data.items.forEach((item1, cin1) => {
          this.data.items[cin1].forEach((item2, cin2) => {
            this.data.items[cin1][cin2].status = data.data[x++];
            items4444[i++] = this.data.items[cin1][cin2];
          })
        });
      }
    })
    wx.getStorage({
      key: 'isCollectedhu',
      success: (data) => {
        console.log("一次" );
        this.data.itemser.forEach((item1, cin1) => {
          this.data.items[cin1].forEach((item2, cin2) => {
            this.data.items[cin1][cin2].status = data.data[x++];
            items4444[i++] = this.data.items[cin1][cin2];
            console.log("一次" + items4444[i]);
          })
        });
      }
    })*/
    let items4 =this.data.items4;
    wx.setStorage({
      key: 'isshuju',
      data: items4,
      success: () => { console.log("一次" + items4); }
    });//结束}
    
  //onunload
  }
})