(function(e){function t(t){for(var c,a,s=t[0],l=t[1],i=t[2],p=0,b=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],c=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var c={},n={app:0},r=[];function a(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=c,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(o,c,function(t){return e[t]}.bind(null,c));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"194a":function(e,t,o){},"2a0a":function(e,t,o){},"35ac":function(e,t,o){"use strict";o("194a")},"4c2d":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var c=o("7a23");function n(e,t,o,n,r,a){const s=Object(c["x"])("Clean"),l=Object(c["x"])("Default");return"clean"==e.$route.meta.template?(Object(c["q"])(),Object(c["d"])(s,{key:0})):(Object(c["q"])(),Object(c["d"])(l,{key:1}))}var r=o("6c02");const a=Object(c["C"])("data-v-46012630");Object(c["t"])("data-v-46012630");const s={pageTitle:"Welcome"},l=Object(c["g"])("h1",null,[Object(c["g"])("span",{style:{color:"var(--text-secondary)"}},"Jaan"),Object(c["f"])(),Object(c["g"])("br"),Object(c["g"])("span",{style:{color:"var(--primary)"}},"J"),Object(c["g"])("span",{style:{color:"var(--text-secondary)"}},"Pro"),Object(c["f"])("grammer ")],-1),i=Object(c["g"])("p",null,"I'm currently still working on this site! Check back later for the latest and greatest!",-1),d={class:"projectContainer"},p={class:"skillContainer"};Object(c["r"])();const b=a((e,t,o,n,r,a)=>{const b=Object(c["x"])("PortfolioItem"),u=Object(c["x"])("Skillbox");return Object(c["q"])(),Object(c["d"])("div",s,[l,i,Object(c["g"])("div",d,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(r.projects,e=>(Object(c["q"])(),Object(c["d"])(b,Object(c["l"])({key:e},e),null,16))),128))]),Object(c["g"])("div",p,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(r.skills,e=>(Object(c["q"])(),Object(c["d"])(u,Object(c["l"])({key:e},e),null,16))),128))])])}),u=Object(c["C"])("data-v-99aca70c");Object(c["t"])("data-v-99aca70c");const j={class:"skillbox"};Object(c["r"])();const v=u((e,t,o,n,r,a)=>{const s=Object(c["x"])("Progressbar");return Object(c["q"])(),Object(c["d"])("div",j,[Object(c["g"])("h3",null,Object(c["z"])(o.label),1),Object(c["g"])(s,{progress:o.progress},null,8,["progress"]),Object(c["g"])("p",null,Object(c["z"])(o.description),1)])}),g=Object(c["C"])("data-v-5e020584"),f=g((e,t,o,n,r,a)=>(Object(c["q"])(),Object(c["d"])("div",null,[Object(c["g"])("div",{class:"bar",style:{width:r.actualProgress+"%"}},null,4)])));var O={name:"Progressbar",props:["progress"],data(){return{actualProgress:0}},mounted(){setTimeout(()=>this.actualProgress=this.progress,300)}};o("71d2");O.render=f,O.__scopeId="data-v-5e020584";var h=O,m={name:"Skillbox",props:["progress","label","description"],components:{Progressbar:h}};o("35ac");m.render=v,m.__scopeId="data-v-99aca70c";var y=m;const w=Object(c["C"])("data-v-88e1c67e");Object(c["t"])("data-v-88e1c67e");const x={class:"ProjectTitle"},k={class:"projectImage"},C={class:"projectDescription"};Object(c["r"])();const P=w((e,t,o,n,r,a)=>(Object(c["q"])(),Object(c["d"])("div",{class:"projectbox",onClick:t[1]||(t[1]=(...e)=>a.projectBoxClicked&&a.projectBoxClicked(...e))},[Object(c["g"])("h2",x,Object(c["z"])(o.label),1),Object(c["g"])("div",k,[Object(c["g"])("img",{src:o.previewimage,class:"projectPreview"},null,8,["src"])]),Object(c["g"])("div",C,[Object(c["g"])("p",null,Object(c["z"])(o.description),1)])])));var _={name:"PortfolioItem",props:["label","description","previewimage"],data(){return{clone:void 0,originalElement:void 0}},methods:{projectBoxClicked(e){this.openFullscreen(e.target),console.log("yes")},openFullscreen(e){if(null!=e&&!e.classList.contains("closeFullscreen"))if(e.classList.contains("projectbox")&&!e.classList.contains("clone")){var t={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight},o=e.cloneNode(!0);e.parentNode.append(o),o.classList.add("clone"),o.style.position="absolute",o.style.top=t.top+"px",o.style.left=t.left+"px",o.style.margin="0",o.addEventListener("click",this.closeFullscreen);let r=o.getElementsByClassName("projectImage"),a=o.getElementsByClassName("projectDescription");for(let e=0;e<r.length;e++){let t=r[e],o=a[e];setTimeout(()=>{t.classList.add("open"),o.classList.add("open")},900)}this.originalElement=e,this.clone=o;var c=window.scrollX,n=window.scrollY;window.onscroll=function(){window.scrollTo(c,n)},setTimeout(()=>{o.style.width="100%",o.style.height="100%",o.style.top=window.scrollY+"px",o.style.left="0px"},100)}else this.openFullscreen(e.parentElement)},closeFullscreen(e){e.preventDefault();var t={top:this.originalElement.offsetTop,left:this.originalElement.offsetLeft,width:this.originalElement.offsetWidth,height:this.originalElement.offsetHeight};this.clone.style.top=t.top+"px",this.clone.style.left=t.left+"px",this.clone.style.width=t.width+"px",this.clone.style.height=t.height-1+"px",this.clone.style.margin="auto";let o=this.clone.getElementsByClassName("projectImage"),c=this.clone.getElementsByClassName("projectDescription");for(let n=0;n<o.length;n++){let e=o[n],t=c[n];e.classList.remove("open"),t.classList.remove("open")}window.onscroll=function(){},setTimeout(()=>{this.clone.remove()},1500)}}};o("5f0a");_.render=P,_.__scopeId="data-v-88e1c67e";var T=_,I=[{label:"Web technologies",progress:55,description:"Followed a course on this at Utrecht University."},{label:"C#",progress:100,description:"Main language used during the bachelors at Utrecht University. Also used when programming Unity games."},{label:"JavaScript",progress:70,description:"Used extensively in some personal web projects, as well as in some projects for others."}],q=[{label:"Raytracer",previewimage:"raytracer.png",description:"For my bachelor's course in Graphics I made a very simple ray tracer in a team of three. This raytracer is made in C# and build on an openTK framework. I mainly worked on the shooting of rays from the screen and making the reflections work."}],E={name:"Home",components:{Skillbox:y,PortfolioItem:T},data(){return{skills:I,projects:q}}};o("eaec");E.render=b,E.__scopeId="data-v-46012630";var L=E;const N=[{path:"/:catchAll(.*)",component:L}],S=Object(r["a"])({history:Object(r["b"])(),routes:N});var F=S;const B=Object(c["C"])("data-v-454a5e20");Object(c["t"])("data-v-454a5e20");const D={id:"page"};Object(c["r"])();const U=B((e,t,o,n,r,a)=>{const s=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])("div",D,[Object(c["g"])(s)])});var J={};J.render=U,J.__scopeId="data-v-454a5e20";var M=J;const z=Object(c["C"])("data-v-0e6e0265");Object(c["t"])("data-v-0e6e0265");const H={id:"page"};Object(c["r"])();const W=z((e,t,o,n,r,a)=>{const s=Object(c["x"])("Navigation"),l=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(s),Object(c["g"])("div",H,[Object(c["g"])(l,{onPageTitle:a.pageTitleChanged,id:"content"},null,8,["onPageTitle"])])],64)}),A=Object(c["C"])("data-v-14de5e23");Object(c["t"])("data-v-14de5e23");const Y=Object(c["e"])('<div class="headerLogo" data-v-14de5e23><img src="logo.svg" data-v-14de5e23></div><nav data-v-14de5e23><div class="navlink" data-v-14de5e23><a class="active" href="/" data-v-14de5e23>Home</a></div><div class="navlink" data-v-14de5e23><a href="#about" data-v-14de5e23>About</a></div></nav>',2);Object(c["r"])();const G=A((e,t,o,n,r,a)=>(Object(c["q"])(),Object(c["d"])("header",null,[Y])));var K={name:"Navigation"};o("e3bb");K.render=G,K.__scopeId="data-v-14de5e23";var R=K,X={components:{Navigation:R},methods:{pageTitleChanged(e){this.title=e,console.log(e)}}};o("f2fc");X.render=W,X.__scopeId="data-v-0e6e0265";var $=X,Q={name:"app",router:F.router,components:{Clean:M,Default:$}};o("9a88");Q.render=n;var V=Q;Object(c["c"])(V).use(F).mount("#app")},"5f0a":function(e,t,o){"use strict";o("2a0a")},"6c84":function(e,t,o){},"71d2":function(e,t,o){"use strict";o("fbde")},"762b":function(e,t,o){},"9a88":function(e,t,o){"use strict";o("4c2d")},a0d5:function(e,t,o){},e3bb:function(e,t,o){"use strict";o("6c84")},eaec:function(e,t,o){"use strict";o("762b")},f2fc:function(e,t,o){"use strict";o("a0d5")},fbde:function(e,t,o){}});
//# sourceMappingURL=app.0c647e66.js.map