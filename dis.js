function Dis(container,city) {
    this.container=container;
    this.city = city;
    this.createDom();
   
}
$.extend(Dis.prototype,{
    createDom:function() {
        if(this.city==="重庆"){
            this.elem = $("<select><option>江北区</option><option>渝中区</option></select>")
        }else{
            this.elem = $("<select><option>朝阳区</option><option>海淀区</option></select>")
        }
        this.container.append(this.elem);
    },
    setDis:function(city) {
        this.city = city;
        if(this.city==="重庆"){
            this.elem.html("<option>江北区</option><option>渝中区</option>")
        }else{
            this.elem.html("<option>朝阳区</option><option>海淀区</option>")
        }
    }
})