(this.webpackJsonpnatcakes=this.webpackJsonpnatcakes||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bolo Branco","username":"White Cake","image":"bolo_branco.jpg"},{"id":2,"name":"Bolo Branco detalhes Vermelho","username":"White Cake","image":"bolo_branco_verm.jpg"},{"id":3,"name":"Bolo de Oreo","username":"White Cake","image":"bolo_oreo.jpg"},{"id":5,"name":"Bolo para Viagem","username":"Cake togo","image":"bolo_delivery.jpg"},{"id":6,"name":"Cupcake Brigadeiro","username":"White Cake","image":"cupcake_brigadeiro.jpg"},{"id":8,"name":"Torta de Limao","username":"Torta","image":"tortinha_limao.jpg"}]')},,,function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){var o={"./bolo_branco.jpg":18,"./bolo_branco_verm.jpg":19,"./bolo_delivery.jpg":20,"./bolo_oreo.jpg":21,"./bolo_oreo2.jpg":22,"./bolo_rosa.jpg":23,"./cupcake_branco.jpg":24,"./cupcake_brigadeiro.jpg":25,"./tortinha_limao.jpg":26};function n(e){var a=r(e);return t(a)}function r(e){if(!t.o(o,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=r,e.exports=n,n.id=17},function(e,a,t){e.exports=t.p+"static/media/bolo_branco.9c74e9a9.jpg"},function(e,a,t){e.exports=t.p+"static/media/bolo_branco_verm.04bd7043.jpg"},function(e,a,t){e.exports=t.p+"static/media/bolo_delivery.a9810192.jpg"},function(e,a,t){e.exports=t.p+"static/media/bolo_oreo.dc9cf0e3.jpg"},function(e,a,t){e.exports=t.p+"static/media/bolo_oreo2.abc48995.jpg"},function(e,a,t){e.exports=t.p+"static/media/bolo_rosa.4625c915.jpg"},function(e,a,t){e.exports=t.p+"static/media/cupcake_branco.84fa478b.jpg"},function(e,a,t){e.exports=t.p+"static/media/cupcake_brigadeiro.a45a9780.jpg"},function(e,a,t){e.exports=t.p+"static/media/tortinha_limao.9c0ea2c5.jpg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(2),c=t.n(r),i=(t(14),t(3)),l=t(4),s=t(7),m=t(5),u=t(8),p=(t(15),t(16),function(e){return n.a.createElement("div",{className:"card-container"},n.a.createElement("img",{className:"img",alt:"cake",src:t(17)("./"+e.cake.image)}),n.a.createElement("h2",{key:e.cake.id}," ",e.cake.name),n.a.createElement("p",null,e.cake.username))}),d=function(e){return n.a.createElement("div",{className:"card-list"},e.cake.map((function(e){return n.a.createElement(p,{key:e.id,cake:e})})))},g=(t(27),function(e){var a=e.placeholder,t=e.handleChange;return n.a.createElement("input",{className:"search",type:"search",placeholder:a,onChange:t})}),h=(t(28),t(29),function(){return n.a.createElement("div",{className:"footer-cotainer"},n.a.createElement("a",{className:"afooter",href:"https://github.com/kaiqmo"},n.a.createElement("h1",{className:"h1Footer"},"Git Kaique")))}),f=t(6),b=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).handleChange=function(a){e.setState({searchField:a.target.value})},e.state={cakes:f,searchField:""},e}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.cakes,t=e.searchField,o=a.filter((function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())}));return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Nat CakeDex"),n.a.createElement(g,{placeholder:"Search Cake",handleChange:this.handleChange}),n.a.createElement(d,{cake:o}),n.a.createElement(h,null))}}]),a}(o.Component);c.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fcdf2bb1.chunk.js.map