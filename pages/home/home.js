//home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    background: ['../../images/cover_a.jpg', '../../images/cover_b.jpg', '../../images/cat_a.png','../../images/cat_d.png']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var array = this.initData();
    this.setData({
      array: array
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: 'Accueil',
    }
  },

  initData: function() {
    var array = [];

    var object1 = new Object();

    object1.img = '../../images/poster_a.jpg';
    object1.title = 'article1';
    object1.author = 'author1';
    object1.watched = '1384 watches';
    object1.comment = '763 comments';
    array[0] = object1;

    var object2 = new Object();

    object2.img = '../../images/poster_b.jpg';
    object2.title = 'article2';
    object2.author = 'author2';
    object2.watched = '463 watches';
    object2.comment = '103 comments';
    array[1] = object2;

    var object3 = new Object();

    object3.img = '../../images/poster_c.jpg';
    object3.title = 'article3';
    object3.author = 'author3';
    object3.watched = '221 watches';
    object3.comment = '53 comments';
    array[2] = object3;

    var object4 = new Object();

    object4.img = '../../images/poster_d.jpg';
    object4.title = 'article4';
    object4.author = 'author4';
    object4.watched = '214 watches';
    object4.comment = '63 comments';
    array[3] = object4;

    return array;
  }
})