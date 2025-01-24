"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[501],{9501:(D,C,p)=>{p.r(C),p.d(C,{ContactModule:()=>z});var u=p(6814),w=p(5861),l=p(8330),v=p(6348),e=p(5879),M=p(9862),h=p(6223);const b=["captchaWrapperElem"];let d=(()=>{class n{constructor(t){this.zone=t,this.scriptElemId="ngx-catpcha-script",this.windowGrecaptcha="grecaptcha",this.windowGrecaptchaEnterprise="enterprise",this.windowOnLoadCallbackProperty="ngx_captcha_onload_callback",this.windowOnLoadEnterpriseCallbackProperty="ngx_captcha_onload_enterprise_callback",this.globalDomain="recaptcha.net",this.defaultDomain="google.com",this.enterpriseApi="enterprise.js",this.defaultApi="api.js"}registerCaptchaScript(t,i,a,r){if(this.grecaptchaScriptLoaded(t.useEnterprise))return void this.zone.run(t.useEnterprise?()=>{a(window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise])}:()=>{a(window[this.windowGrecaptcha])});t.useEnterprise?window[this.getCallbackName(!0)]=()=>this.zone.run(a.bind(this,window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise])):window[this.getCallbackName(!1)]=()=>this.zone.run(a.bind(this,window[this.windowGrecaptcha]));const o=document.createElement("script");o.id=this.scriptElemId,o.innerHTML="",o.src=this.getCaptchaScriptUrl(t,i,r),o.async=!0,o.defer=!0,document.getElementsByTagName("head")[0].appendChild(o)}cleanup(){const t=document.getElementById(this.scriptElemId);t&&t.remove(),window[this.getCallbackName()]=void 0,window[this.windowGrecaptcha]=void 0}grecaptchaScriptLoaded(t){return!!(window[this.getCallbackName(t)]&&window[this.windowGrecaptcha]&&(t&&window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]||window[this.windowGrecaptcha].execute))}getCallbackName(t){return t?this.windowOnLoadEnterpriseCallbackProperty:this.windowOnLoadCallbackProperty}getLanguageParam(t){return t?`&hl=${t}`:""}getCaptchaScriptUrl(t,i,a){return`https://www.${t.useGlobalDomain?this.globalDomain:this.defaultDomain}/recaptcha/${t.useEnterprise?this.enterpriseApi:this.defaultApi}?onload=${this.getCallbackName(t.useEnterprise)}&render=${i}${this.getLanguageParam(a)}`}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(e.R0b))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),y=(()=>{class n{constructor(t,i,a,r){this.renderer=t,this.zone=i,this.injector=a,this.scriptService=r,this.captchaElemPrefix="ngx_captcha_id_",this.setupCaptcha=!0,this.useGlobalDomain=!1,this.useEnterprise=!1,this.type="image",this.tabIndex=0,this.success=new e.vpe,this.load=new e.vpe,this.reset=new e.vpe,this.ready=new e.vpe,this.error=new e.vpe,this.expire=new e.vpe,this.setupAfterLoad=!1,this.resetCaptchaAfterSuccess=!1,this.onChange=o=>{},this.onTouched=o=>{},this.isLoaded=!1}ngAfterViewInit(){this.control=this.injector.get(h.a5,void 0,e.XFs.Optional)?.control}ngAfterViewChecked(){this.setupCaptcha&&(this.setupCaptcha=!1,this.setupComponent())}ngOnChanges(t){t&&t.hl&&!t.hl.firstChange&&t.hl.currentValue!==t.hl.previousValue&&this.scriptService.cleanup(),t&&t.useGlobalDomain&&!t.useGlobalDomain.firstChange&&t.useGlobalDomain.currentValue!==t.useGlobalDomain.previousValue&&this.scriptService.cleanup(),this.setupCaptcha=!0}getResponse(){return this.reCaptchaApi.getResponse(this.captchaId)}getCaptchaId(){return this.captchaId}resetCaptcha(){this.zone.run(()=>{this.reCaptchaApi.reset(),this.onChange(void 0),this.onTouched(void 0),this.reset.next()})}getCurrentResponse(){return this.currentResponse}reloadCaptcha(){this.setupComponent()}ensureCaptchaElem(t){const i=document.getElementById(t);if(!i)throw Error(`Captcha element with id '${t}' was not found`);this.captchaElem=i}renderReCaptcha(){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.captchaId=this.reCaptchaApi.render(this.captchaElemId,this.getCaptchaProperties()),this.ready.next()},0)})}handleCallback(t){this.currentResponse=t,this.success.next(t),this.zone.run(()=>{this.onChange(t),this.onTouched(t)}),this.resetCaptchaAfterSuccess&&this.resetCaptcha()}getPseudoUniqueNumber(){return(new Date).getUTCMilliseconds()+Math.floor(9999*Math.random())}setupComponent(){this.captchaSpecificSetup(),this.createAndSetCaptchaElem(),this.scriptService.registerCaptchaScript({useGlobalDomain:this.useGlobalDomain,useEnterprise:this.useEnterprise},"explicit",t=>{this.onloadCallback(t)},this.hl)}onloadCallback(t){if(this.reCaptchaApi=t,!this.reCaptchaApi)throw Error("ReCaptcha Api was not initialized correctly");this.isLoaded=!0,this.load.next(),this.renderReCaptcha(),this.setupAfterLoad&&(this.setupAfterLoad=!1,this.setupComponent())}generateNewElemId(){return this.captchaElemPrefix+this.getPseudoUniqueNumber()}createAndSetCaptchaElem(){if(this.captchaElemId=this.generateNewElemId(),!this.captchaElemId)throw Error("Captcha elem Id is not set");if(!this.captchaWrapperElem)throw Error("Captcha DOM element is not initialized");this.captchaWrapperElem.nativeElement.innerHTML="";const t=this.renderer.createElement("div");t.id=this.captchaElemId,this.renderer.appendChild(this.captchaWrapperElem.nativeElement,t),setTimeout(()=>{this.captchaElemId&&this.ensureCaptchaElem(this.captchaElemId)},0)}writeValue(t){}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}handleErrorCallback(){this.zone.run(()=>{this.onChange(void 0),this.onTouched(void 0)}),this.error.next()}handleExpireCallback(){this.expire.next(),this.resetCaptcha()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(e.zs3),e.Y36(d))},n.\u0275dir=e.lG2({type:n,inputs:{siteKey:"siteKey",useGlobalDomain:"useGlobalDomain",useEnterprise:"useEnterprise",type:"type",hl:"hl",tabIndex:"tabIndex"},outputs:{success:"success",load:"load",reset:"reset",ready:"ready",error:"error",expire:"expire"},features:[e.TTD]}),n})();var f=function(n){return n[n.InvisibleReCaptcha=0]="InvisibleReCaptcha",n[n.ReCaptcha2=1]="ReCaptcha2",n}(f||{});let O=(()=>{class n extends y{constructor(t,i,a,r){super(t,i,a,r),this.renderer=t,this.zone=i,this.injector=a,this.scriptService=r,this.windowOnErrorCallbackProperty="ngx_captcha_error_callback",this.windowOnExpireCallbackProperty="ngx_captcha_expire_callback",this.theme="light",this.size="normal",this.recaptchaType=f.ReCaptcha2}ngOnChanges(t){super.ngOnChanges(t)}ngOnDestroy(){window[this.windowOnErrorCallbackProperty]={},window[this.windowOnExpireCallbackProperty]={}}captchaSpecificSetup(){this.registerCallbacks()}getCaptchaProperties(){return{sitekey:this.siteKey,callback:t=>this.zone.run(()=>this.handleCallback(t)),"expired-callback":()=>this.zone.run(()=>this.handleExpireCallback()),"error-callback":()=>this.zone.run(()=>this.handleErrorCallback()),theme:this.theme,type:this.type,size:this.size,tabindex:this.tabIndex}}registerCallbacks(){window[this.windowOnErrorCallbackProperty]=super.handleErrorCallback.bind(this),window[this.windowOnExpireCallbackProperty]=super.handleExpireCallback.bind(this)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(e.zs3),e.Y36(d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ngx-recaptcha2"]],viewQuery:function(t,i){if(1&t&&e.Gf(b,5),2&t){let a;e.iGM(a=e.CRH())&&(i.captchaWrapperElem=a.first)}},inputs:{theme:"theme",size:"size"},features:[e._Bn([{provide:h.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}]),e.qOj,e.TTD],decls:2,vars:0,consts:[["captchaWrapperElem",""]],template:function(t,i){1&t&&e._UZ(0,"div",null,0)},encapsulation:2}),n})(),P=(()=>{class n{constructor(t,i){this.scriptService=t,this.zone=i}execute(t,i,a,r,o){this.executeAsPromise(t,i,r).then(a).catch(s=>o?o(s):console.error(s))}executeAsPromise(t,i,a){return new Promise((r,o)=>{this.scriptService.registerCaptchaScript(a||{},t,I=>{this.zone.runOutsideAngular(()=>{try{I.execute(t,{action:i}).then(g=>this.zone.run(()=>r(g)))}catch(g){o(g)}})})})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(d),e.LFG(e.R0b))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[d,P],imports:[u.ez]}),n})();const E=["area"],A=["form"],T=function(n){return{show:n}};let _=(()=>{class n{constructor(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275dir=e.lG2({type:n,selectors:[["form-property"]]})}return n})(),S=(()=>{class n{constructor(t){this.httpClient=t,this.name="",this.email="",this.company="",this.captcha="",this.ready=!1,this.sent=!1,this.formSchema=l.z.object({name:l.z.string().min(3),email:l.z.string().email(),company:l.z.string().min(2),message:l.z.string().min(5),recaptcha:l.z.string().min(10)}),setTimeout(()=>{this.clean()},1800)}getter(t){return this[`${t}`].length>0}setter(t,i){this[`${t}`]=i}checkKey(t,i){"Tab"==t.key&&(t.preventDefault(),i.setRangeText("\t",i.selectionStart,i.selectionStart,"end"))}send(t){var i=this;return(0,w.Z)(function*(){const a=t.value;if(!i.formSchema.safeParse(a).success||i.captcha.length<10)return;let r=i.area.nativeElement.value.replaceAll("\n","<br>");function o(){v.p8.to(this.form.nativeElement,{opacity:0,duration:1}).then(()=>{this.form.nativeElement.remove(),this.sent=!0})}r=r.replaceAll("\t","&nbsp;&nbsp;&nbsp;&nbsp;"),i.httpClient.post("https://mail-service-4o2h.onrender.com/contact",JSON.stringify({name:a.name,email:a.email,company:a.company,message:r,captcha:i.captcha})).subscribe(s=>{s.success?o.call(i):alert("Somethink goes wrong, pleas try again later.")})})()}check(t){this.captcha=t}clean(){this.formsElements.forEach(t=>{})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(M.eN))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-contact"]],viewQuery:function(i,a){if(1&i&&(e.Gf(E,5),e.Gf(A,5),e.Gf(_,5)),2&i){let r;e.iGM(r=e.CRH())&&(a.area=r.first),e.iGM(r=e.CRH())&&(a.form=r.first),e.iGM(r=e.CRH())&&(a.formsElements=r)}},decls:68,vars:7,consts:[["src","./assets/images/continents.png","titl","Image of world","alt","Image of world"],["id","greetings",3,"ngClass"],["src","./assets/logo/big_logo.png","title","logo","alt","logo"],[3,"ngSubmit"],["form","","contactForm","ngForm"],[1,"sender"],[1,"senderDetails"],["for","Name",3,"ngClass"],["ngModel","","type","text","autocomplete","name","name","name",3,"input"],["name",""],["for","Email",3,"ngClass"],["ngModel","","type","email","autocomplete","email","name","email",3,"input"],["email",""],[3,"ngClass"],["ngModel","","type","text","autocomplete","additional-name","name","company",3,"input"],["company",""],["ngModel","","name","message","cols","31","rows","13",3,"keydown"],["area",""],["ngModel","","name","recaptcha","siteKey","6LdxSBgpAAAAADeT9iTchQK0pmENafLb83Id5v8r","name","recaptcha",3,"useGlobalDomain","success"],["captchaElem",""],["type","submit",1,"send"],["itemprop","location","itemscope","","itemtype","https://schema.org/Place",1,"contact"],["itemprop","address","itemscope","","itemtype","https://schema.org/PostalAddress"],["itemprop","addressRegion"],["itemprop","streetAddress"],["itemprop","addressLocality"],["itemprop","telephone"],["itemprop","email"]],template:function(i,a){if(1&i){const r=e.EpF();e._UZ(0,"img",0),e.TgZ(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"h3"),e._uU(4,"Thanks for your question."),e.qZA(),e.TgZ(5,"p"),e._uU(6,"We will response during: 16h"),e.qZA()(),e.TgZ(7,"form",3,4),e.NdJ("ngSubmit",function(){e.CHM(r);const s=e.MAs(9);return e.KtG(a.send(s))}),e.TgZ(10,"div",5)(11,"div",6)(12,"form-property")(13,"div")(14,"label",7),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"input",8,9),e.NdJ("input",function(){e.CHM(r);const s=e.MAs(17);return e.KtG(a.setter("name",s.value))}),e.qZA()()()(),e.TgZ(18,"div",6)(19,"form-property")(20,"div")(21,"label",10),e._uU(22,"Email"),e.qZA(),e.TgZ(23,"input",11,12),e.NdJ("input",function(){e.CHM(r);const s=e.MAs(24);return e.KtG(a.setter("email",s.value))}),e.qZA()()()(),e.TgZ(25,"div",6)(26,"form-property")(27,"div")(28,"label",13),e._uU(29,"Company"),e.qZA(),e.TgZ(30,"input",14,15),e.NdJ("input",function(){e.CHM(r);const s=e.MAs(31);return e.KtG(a.setter("company",s.value))}),e.qZA()()()()(),e.TgZ(32,"form-property")(33,"textarea",16,17),e.NdJ("keydown",function(s){e.CHM(r);const m=e.MAs(34);return e.KtG(a.checkKey(s,m))}),e.qZA()(),e.TgZ(35,"ngx-recaptcha2",18,19),e.NdJ("success",function(s){return a.check(s)}),e.qZA(),e.TgZ(37,"button",20),e._uU(38,"Send"),e.qZA()(),e.TgZ(39,"div",21)(40,"div",22)(41,"h2"),e._uU(42,"CONTACT"),e.qZA(),e.TgZ(43,"h4"),e._uU(44,"ITELITE"),e.qZA(),e.TgZ(45,"h5",23),e._uU(46,"Poland"),e.qZA(),e.TgZ(47,"p",24),e._uU(48,"Terenowa 42"),e.qZA(),e.TgZ(49,"p",25),e._uU(50,"Poland, Wroc\u0142aw 52-231"),e.qZA(),e.TgZ(51,"p",26),e._uU(52,"T: +48 713 230 180"),e.qZA(),e.TgZ(53,"p",27),e._uU(54,"adas@itelite.net"),e.qZA()(),e.TgZ(55,"div")(56,"h4"),e._uU(57,"ITELITE ANTENNAS Inc"),e.qZA(),e.TgZ(58,"h5",23),e._uU(59,"USA"),e.qZA(),e.TgZ(60,"p",24),e._uU(61,"930 State Highway 132 N"),e.qZA(),e.TgZ(62,"p",25),e._uU(63,"Natalia, Texas 78059"),e.qZA(),e.TgZ(64,"p",26),e._uU(65,"T: +1.305.677.9293"),e.qZA(),e.TgZ(66,"p",27),e._uU(67,"adas@itelite.net"),e.qZA()()()}2&i&&(e.xp6(1),e.Q6J("ngClass",e.VKq(5,T,a.sent)),e.xp6(13),e.Q6J("ngClass",a.getter("name")?"static":""),e.xp6(7),e.Q6J("ngClass",a.getter("email")?"static":""),e.xp6(7),e.Q6J("ngClass",a.getter("company")?"static":""),e.xp6(7),e.Q6J("useGlobalDomain",!1))},dependencies:[u.mk,h._Y,h.Fj,h.JJ,h.JL,h.On,h.F,O,_],styles:["img[_ngcontent-%COMP%]{position:absolute;filter:sepia() grayscale(1)}#greetings[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     .show{display:flex!important;flex-direction:column;width:500px;height:485px;animation:_ngcontent-%COMP%_show .8s ease-in;margin:auto;transform:translateY(15%)}[_nghost-%COMP%]     .show img{margin:20px auto;position:relative}[_nghost-%COMP%]     .show h3, [_nghost-%COMP%]     .show p{text-align:center}form[_ngcontent-%COMP%]{position:relative;z-index:2;padding:23vh 25px 10vh;display:flex;flex-direction:column;width:min-content;margin:auto}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]{display:flex;gap:23px}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]{position:relative}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]{width:100%;display:block}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fff}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#585858;font-size:18px}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;left:5px;top:0;transition:top .2s ease-in}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label.static[_ngcontent-%COMP%]{top:-25px!important}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:none;position:relative;background-color:transparent}form[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .senderDetails[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:has(input:focus)   label[_ngcontent-%COMP%]{top:-25px}form[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]{width:100%;display:block}form[_ngcontent-%COMP%]   form-property[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{margin-top:20px;border:none;outline:none;padding:18px 24px;width:100%}form[_ngcontent-%COMP%]   ngx-recaptcha2[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:15px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:20%}.contact[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;margin:90px auto auto;padding-bottom:70px;display:flex;gap:105px}.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;margin-bottom:14px;letter-spacing:2px}.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:absolute;top:50%;left:-175%;font-size:300px;font-weight:600;line-height:40.02%;width:1200px;height:155px;color:#f6f8fb;text-shadow:0px 0px 2px rgb(212,207,207);z-index:-1}.contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:44px}@keyframes _ngcontent-%COMP%_show{0%{opacity:0}to{opacity:1}}@media (max-width: 800px){.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%}}@media (max-width: 690px){.sender[_ngcontent-%COMP%]{flex-wrap:wrap}}@media (max-width: 580px){form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:32%;padding:4px 0;margin-top:35px}.contact[_ngcontent-%COMP%]{gap:0px;flex-direction:column}.contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:21px}}"]})}return n})();var Z=p(8642);const k=[{path:"",component:S}];let z=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.ez,h.u5,Z.Bz.forChild(k),x]})}return n})()}}]);
