"use strict";(self.webpackChunkanti_drone=self.webpackChunkanti_drone||[]).push([[817],{5817:(b,d,c)=>{c.r(d),c.d(d,{ProductsModule:()=>v});var r=c(6895),_=c(5649),h=c(1554),t=c(8274),p=c(5579),C=c(8068),l=c(9538);const u=["detailsContainer"];function P(o,s){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" Width: ",e.detailsChild.mechanical_properties.width,"cm ")}}function m(o,s){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA(),t.TgZ(2,"div"),t._uU(3),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("Width_1: ",e.detailsChild.mechanical_properties.width[0],"cm"),t.xp6(2),t.hij("Width_2: ",e.detailsChild.mechanical_properties.width[1],"cm")}}function M(o,s){if(1&o&&(t.TgZ(0,"div")(1,"h4"),t._uU(2),t.qZA(),t._UZ(3,"img",25),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu(e.detailsChild.charts.header),t.xp6(1),t.MGl("ngSrc","",e.detailsChild.charts[1],".jpg")}}function O(o,s){if(1&o&&(t.TgZ(0,"div",13,14)(2,"div",15)(3,"div",16)(4,"div",17)(5,"h4"),t._uU(6,"Description"),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"div",18)(10,"h4"),t._uU(11,"Specification"),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA()()(),t.TgZ(14,"div",19),t._UZ(15,"img",20),t.qZA()(),t.TgZ(16,"div",21)(17,"h4"),t._uU(18,"Mechanical Properties"),t.qZA(),t.TgZ(19,"div"),t._uU(20),t.qZA(),t.YNc(21,P,2,1,"div",22),t.YNc(22,m,4,2,"ng-template",null,23,t.W1O),t.TgZ(24,"div"),t._uU(25),t.qZA(),t.TgZ(26,"div"),t._uU(27),t.qZA(),t.TgZ(28,"div"),t._uU(29),t.qZA()(),t.TgZ(30,"div",24)(31,"div")(32,"h4"),t._uU(33),t.qZA(),t._UZ(34,"img",25),t.qZA(),t.YNc(35,M,4,2,"div",26),t.qZA()()),2&o){const e=t.MAs(23),n=t.oxw();t.xp6(8),t.Oqu(n.detailsChild.description),t.xp6(5),t.Oqu(n.detailsChild.specification),t.xp6(2),t.MGl("ngSrc","./assets/images/home/content/content_",n.detailsChild.id,".webp"),t.xp6(5),t.hij(" Length: ",n.detailsChild.mechanical_properties.length,"cm "),t.xp6(1),t.Q6J("ngIf",n.isNumber(n.detailsChild.mechanical_properties.width))("ngIfElse",e),t.xp6(4),t.hij(" Weight: ",n.detailsChild.mechanical_properties.weight," kg "),t.xp6(2),t.hij(" Color: ",n.detailsChild.mechanical_properties.color," "),t.xp6(2),t.hij(" Material: ",n.detailsChild.mechanical_properties.material," "),t.xp6(4),t.Oqu(n.detailsChild.charts.header),t.xp6(1),t.MGl("ngSrc","",n.detailsChild.charts[0],".jpg"),t.xp6(1),t.Q6J("ngIf",n.detailsChild.charts[1])}}let x=(()=>{class o{constructor(){this.toParent=new t.vpe}ngAfterViewInit(){const e=this.detailsContainer.nativeElement.getElementsByClassName("properties");Array.from(e).forEach((n,i)=>{C.p8.fromTo(n,{opacity:0},{opacity:1}).delay(i+1)})}hideDetails(){this.toParent.emit(null)}isNumber(e){return"number"==typeof e}static#t=this.\u0275fac=function(n){return new(n||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-details"]],viewQuery:function(n,i){if(1&n&&t.Gf(u,5),2&n){let a;t.iGM(a=t.CRH())&&(i.detailsContainer=a.first)}},inputs:{detailsChild:"detailsChild"},outputs:{toParent:"toParent"},decls:22,vars:1,consts:[[1,"nav","flex","justify-content-between"],["routerLink","/","ngSrc","./assets/images/logo.png","alt","logo","width","auto","height","auto","priority","",1,"logo"],[1,"nav-list"],["nav_list",""],["routerLink","/"],["routerLink","products"],["routerLink","contact"],["routerLink","news"],[1,"menu"],["bar_menu",""],[1,"content"],["class","particular_details",4,"ngIf"],[3,"click"],[1,"particular_details"],["detailsContainer",""],[1,"box","d-flex","flex-wrap"],[1,"desc","col-lg"],[1,"properties","description"],[1,"properties","specification"],[1,"antenna_image"],["width","auto","height","auto","alt","Antenna image","priority","",3,"ngSrc"],[1,"properties","mechanical_properties"],[4,"ngIf","ngIfElse"],["arr",""],[1,"properties","charts"],["width","auto","height","auto","alt","Chart with realized gain.","priority","",3,"ngSrc"],[4,"ngIf"]],template:function(n,i){1&n&&(t.TgZ(0,"nav",0),t._UZ(1,"img",1),t.TgZ(2,"div",2,3)(4,"ul")(5,"li",4),t._uU(6,"Home"),t.qZA(),t.TgZ(7,"li",5),t._uU(8,"Products"),t.qZA(),t.TgZ(9,"li",6),t._uU(10,"Contact"),t.qZA(),t.TgZ(11,"li",7),t._uU(12,"News"),t.qZA()()(),t.TgZ(13,"div",8,9)(15,"mat-icon"),t._uU(16,"menu"),t.qZA()()(),t.TgZ(17,"div",10),t.YNc(18,O,36,12,"div",11),t._UZ(19,"br"),t.TgZ(20,"mat-icon",12),t.NdJ("click",function(){return i.hideDetails()}),t._uU(21,"close"),t.qZA()()),2&n&&(t.xp6(18),t.Q6J("ngIf",i.detailsChild))},dependencies:[r.O5,l.Hw,p.rH,r.Zd],styles:['.content[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;min-height:650px;flex-wrap:wrap;gap:55px;width:90%;justify-content:space-around;margin:75px auto auto;padding-bottom:20px}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:667px;margin-top:150px}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:100px;font-weight:600;line-height:130.02%;color:#f8be39}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:509px;color:#000;font-size:18px;font-weight:300;line-height:149%;margin-top:30px;margin-bottom:0}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:172px;height:49px;border-radius:15px;border:none;margin-top:30px;background-color:transparent;color:#fff;font-size:18px;font-weight:500;line-height:149%;transition:opacity .8s ease-out;position:relative;overflow:hidden}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{content:"";background-color:#000;position:absolute;z-index:-2;left:0;top:0;width:100%;height:100%;transition:background-color .8s ease}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;height:100%;width:0%;background-color:#2556ec;z-index:-2;transition:width 1.1s ease;transition-delay:.1s}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:after{width:100%}.content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:460px;height:595px;overflow:hidden;display:flex;justify-content:center;align-items:center;flex-direction:column}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:95%;flex-wrap:wrap;position:relative}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{min-width:570px}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .antenna_image[_ngcontent-%COMP%]{width:630px;margin:auto}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .antenna_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:950px;transform:translate(-10%)}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]{width:100%;margin-bottom:95px;padding-bottom:35px;border-bottom:1px dotted rgb(138,133,133)}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .properties.mechanical_properties[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .properties.mechanical_properties[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;gap:33px}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .properties.mechanical_properties[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .properties.mechanical_properties[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:148px;height:37px;background-color:#dddfe2;border-radius:10px;text-align:center;line-height:37px}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:40px;font-weight:400;width:100%}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-weight:300;line-height:149%}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]:last-of-type{border:none}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .line_properties[_ngcontent-%COMP%]{display:block;width:100%;height:1px;background-color:#9e9999;margin:36px 0}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .charts[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;flex-wrap:wrap}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .charts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:42px}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .charts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;font-weight:400;line-height:40.02%;text-align:center;margin-bottom:15px}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   .charts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:650px}.content[_ngcontent-%COMP%]   .particular_details[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;bottom:0%;right:-3%;font-size:35px;width:34px;height:34px;color:#2556ec}.background_header[_ngcontent-%COMP%]{position:absolute;top:590px;left:5%;font-size:300px;font-weight:600;line-height:40.02%;width:1200px;height:155px;color:#f6f8fb;text-shadow:0px 0px 2px rgb(212,207,207);z-index:0}.line[_ngcontent-%COMP%]{position:absolute;bottom:55px;left:50%;transform:translate(-50%);display:block;width:90%;height:1px;background-color:#9e9999}.content[_ngcontent-%COMP%]:nth-of-type(3)   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1){width:785px;height:452px}.content[_ngcontent-%COMP%]:nth-of-type(4)   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1){width:770px;height:330px}.content[_ngcontent-%COMP%]:nth-of-type(4)   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2){width:670px;height:290px}@media (max-width: 1550px){.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:-moz-fit-content!important;width:fit-content!important}}@media (max-width: 1300px){.nav[_ngcontent-%COMP%]{padding-right:0}.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-left:unset;margin:auto}.nav[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;justify-content:space-around}.background_header[_ngcontent-%COMP%]{font-size:300px;left:5%;transform:translate(-17%)}.content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;transform:translate(50%);right:50%!important;bottom:3%!important}}@media (max-width: 800px){nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:200px}.background_header[_ngcontent-%COMP%]{display:none}.content[_ngcontent-%COMP%]{width:100%!important;gap:0px!important;padding-right:20px}.content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{min-width:unset!important}.content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .antenna_image[_ngcontent-%COMP%]{width:90vw!important}.content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .antenna_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:115vw!important;transform:translate(0)}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:70px!important}}@media (max-width: 650px){nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-left:10%}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-top:0;padding:0 20px}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:13vw!important}}@media (max-width: 485px){.content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120%!important;height:auto!important}.content[_ngcontent-%COMP%]{padding:0 1px 0 10px}}'],changeDetection:0})}return o})();function f(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-details",10),t.NdJ("toParent",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hideDetails())}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("detailsChild",e.detailsParent)}}const w=[{path:"",component:(()=>{class o{constructor(e){this.router=e,this.domesticPath=_.w+"home/content"}navigate(){this.router.navigate(["/contact"])}showProductDetails(e){if(!e.target.classList.contains("cover"))return;const n=e.target.getAttribute("data-id"),i=Object.assign({},h.a[`${n}`]);i.id=Number(n)+1,this.detailsParent=i}moveElement(e){e.target.classList.contains("cover")?(this.hoverElement&&this.hoverElement.classList.remove("raise"),e.target.parentElement.classList.add("raise"),this.hoverElement=e.target.parentElement):this.hoverElement&&this.hoverElement.classList.remove("raise")}hideDetails(){this.detailsParent=null}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(p.F0))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:25,vars:5,consts:[[3,"detailsChild","toParent",4,"ngIf"],[1,"products","d-flex","flex-wrap","justify-content-center",3,"mousemove","click"],["products",""],[1,"product"],["data-id","0",1,"cover"],["alt","Antenna image","width","auto","height","auto","priority","",3,"src"],["data-id","1",1,"cover"],["data-id","2",1,"cover"],["data-id","3",1,"cover"],[3,"click"],[3,"detailsChild","toParent"]],template:function(n,i){1&n&&(t.YNc(0,f,1,1,"app-details",0),t.TgZ(1,"div",1,2),t.NdJ("mousemove",function(g){return i.moveElement(g)})("click",function(g){return i.showProductDetails(g)}),t.TgZ(3,"div",3),t._UZ(4,"div",4),t.TgZ(5,"h3"),t._uU(6,"ADAS 1.1 O"),t.qZA(),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"div",3),t._UZ(9,"div",6),t.TgZ(10,"h3"),t._uU(11,"ADAS 2.1 O"),t.qZA(),t._UZ(12,"img",5),t.qZA(),t.TgZ(13,"div",3),t._UZ(14,"div",7),t.TgZ(15,"h3"),t._uU(16,"ADAS 1.1 D"),t.qZA(),t._UZ(17,"img",5),t.qZA(),t.TgZ(18,"div",3),t._UZ(19,"div",8),t.TgZ(20,"h3"),t._uU(21,"ADAS 2.1 D"),t.qZA(),t._UZ(22,"img",5),t.qZA(),t.TgZ(23,"button",9),t.NdJ("click",function(){return i.navigate()}),t._uU(24,"Ask for availability"),t.qZA()()),2&n&&(t.Q6J("ngIf",i.detailsParent),t.xp6(7),t.MGl("src","",i.domesticPath,"/content_1.webp",t.LSH),t.xp6(5),t.MGl("src","",i.domesticPath,"/content_2.webp",t.LSH),t.xp6(5),t.MGl("src","",i.domesticPath,"/content_3.webp",t.LSH),t.xp6(5),t.MGl("src","",i.domesticPath,"/content_4.webp",t.LSH))},dependencies:[r.O5,x],styles:["app-details[_ngcontent-%COMP%]{position:absolute;inset:0;animation:_ngcontent-%COMP%_show .6s ease-in forwards;z-index:12}.products[_ngcontent-%COMP%]{width:100%;max-width:1100px;padding-top:120px;position:relative;margin:auto;padding-bottom:120px}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{width:360px;height:400px;margin-left:15px;position:relative;top:0;padding-top:14px;transition:box-shadow .4s ease-in;transform:rotateX(55deg);border-radius:15px}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{position:absolute;z-index:2;inset:0}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:265px;position:absolute;bottom:3%;right:50%;transform:translate(50%,-50%);text-transform:uppercase;font-family:verdana;font-size:38px;font-weight:700;color:#c5921b}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:-135px;left:-10px;height:455px;width:384px}.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]{position:absolute;bottom:-10px;left:-10px;width:100%;height:10px;background-color:#eab632}.products[_ngcontent-%COMP%]     .raise{box-shadow:5px 12px 19px 7px #afb1bc;animation:_ngcontent-%COMP%_raise .4s ease-in-out forwards}.products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:50px;bottom:30px;width:172px;height:49px;border-radius:15px;border:none;background-color:#171717;color:#fff;font-size:18px;font-weight:500;line-height:149%;overflow:hidden;transition:background-color .6s ease-out}.products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2556ec}@media (max-width: 520px){.products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{width:75%}}@keyframes _ngcontent-%COMP%_raise{0%{top:0}to{top:-20px}}@keyframes _ngcontent-%COMP%_show{0%{background-color:transparent}to{background-color:#f6f8fb}}"]})}return o})()}];let v=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[r.ez,l.Ps,p.Bz.forChild(w)]})}return o})()}}]);