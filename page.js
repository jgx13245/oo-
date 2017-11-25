function Page() {
  this.container = $("#root")
  this.init();
  this.provice="";
  this.city="";
}
$.extend(Page.prototype,{
    init:function() {
       this.createProvice();
       this.createCity();
       this.createDis();
       this.bindEvents();
    },
    createProvice:function() {
        //调用provice省份的方法暴露的接口获得省份
        var provice =new Provice(this.container);
        this.provice = provice.getProvice();
        //--????????????????-----
        this.proviceObj = provice
    },
    handleProviceChange:function(e) {
        //点击就会进行相应的变化
        //console.log(e.provice)
        this.cityObj.setCity(e.provice);
    },
    createCity:function() {
        //吧从省份那里获得的名称发给城市，城市要使用
        var city = new City(this.container,this.provice);
        //调用getCity城市的方法暴露的接口获得城市。
        this.city = city.getCity();
        this.cityObj = city; 
    },
    createDis:function() {
        //从城市哪里得来的城市口，给区用，
        this.disObj = new Dis(this.container,this.city);
    },
       //-----注意，从这里开始，要进行联动了----------------- 
    bindEvents:function() {
        $(this.proviceObj).on("change",$.proxy(this.handleProviceChange,this)) 
        $(this.cityObj).on("change",$.proxy(this.handleCityChange,this)) 
    },
    handleCityChange:function(e) {
        this.city = e.city;
        this.disObj.setDis(this.city);
    }
})