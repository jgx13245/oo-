function City(container,provice) {
    this.container=container;
    //这是省份吧省名发给page,page在发给我这个页面的
    this.provice = provice;
    //下面的几个方法记得顺序，先执行什么，再执行什么，否咋报错。
    this.createDom();
    this.chooseDefault();
    this.bindEvents();
}
$.extend(City.prototype,{
    createDom:function() {
        this.elem = $("<select><option>重庆</option><option>北京</option></select>")
        this.container.append(this.elem);
    },
    bindEvents:function() {
        this.elem.on("change",$.proxy(this.handleElementChaneg,this));
    },
    chooseDefault:function() {
        //省传过来什么。我市就默认是什么
       // console.log(this.provice);
        this.elem.val(this.provice);
    },
    handleElementChaneg:function(e) {
        //因为val()  是jqueru的语法，所以要加$()
       // console.log($(e.target).val());
       $(this).trigger(new $.Event("change",{
           city:$(e.target).val()
       }))
    },
    getCity:function() {
        return this.elem.val();
    },
    setCity:function(city){
        this.elem.val(city)
        $(this).trigger(new $.Event("change",{
            city:city
        }))
    }
})