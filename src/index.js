import _ from './util/util';

function Bakuman(config = {}) {
    //初始化画布配置
    this.config = _.extend({
        width: 500,
        height: 500,
        backgroundColor: '#fff',
    }, config);
    // 全局画布；
    this.canvas = null;
    this.ctx = null;
    // 绘制函数队列；
    this.queue = [];
    //绘制规则队列
    this.ruleQueue = [];
    this._init();
}

Bakuman.prototype = {
    //初始化canvas对象
    _init: function () {
        this.canvas = document.createElement('canvas');
        this.setSize(this.config.width,this.config.height);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.save();
        this.setBgColor(this.config.backgroundColor);
    },
    //清空画布
    clear:function(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return this;
    },
    /**
     * 设置画布尺寸
     *  @param {number} - width 画布宽
     *  @param {number} - height 画布高
     */
    setSize:function(width,height){
        this.canvas.width = width;
        this.canvas.height = height;
    },
    /**
     * 设置画布背景
     *  @param {string} - color 背景颜色
     */
    setBgColor:function(color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    },
    addRule:function(rule){},
    removeRule:function(rule){},
    setRule: function (ruleList) {},
    /**
     * 回退上一步操作
     */
    reback:function(){
        this.ruleQueue = [];
    },
    /**
     * 开始绘制
     */
    draw: function (ruleQueue) {
        
    }
}

module.exports = Bakuman;