function Provice(container) {
    this.container=container;
    this.createDom();
    this.bindEvents();
    this.provice="重庆";
}
$.extend(Provice.prototype,{
    createDom:function() {
        this.elem = $("<select><option>重庆</option><option>北京</option></select>")
        this.container.append(this.elem);
    },
    bindEvents:function() {
        this.elem.on("change",$.proxy(this.handleElementChaneg,this));
    },
    handleElementChaneg:function(e) {
        //因为val()  是jqueru的语法，所以要加$()
       // console.log($(e.target).val());
       this.provice = $(e.target).val()
       $(this).trigger(new $.Event("change",{
           provice: this.provice 
       }))
    },
    getProvice:function() {
        //通过这个方法吧属性暴露出去，外面的page  调用这个方法使用这个属性
        return this.provice
    }
})