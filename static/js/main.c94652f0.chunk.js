(this["webpackJsonpgestor-psa"]=this["webpackJsonpgestor-psa"]||[]).push([[0],{111:function(e,t,a){e.exports=a(154)},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a(102),c=a(182),l=a(180),s=a(66),m=a.n(s),u=(a(121),function(e){var t=e.children,a=Object(o.a)({palette:{primary:{main:"#47CC31",lighter:function(e){return m()("#47CC31").lighten(e/100).hex()}},secondary:{main:"#B531CC",lighter:function(e){return m()("#B531CC").lighten(e/100).hex()}}}});return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(c.a,{theme:a},t))}),p=a(8);function f(){var e=Object(p.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var d=a(59),g=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"calc(100vh)",backgroundColor:e.palette.background.default,userSelect:"none",transition:"background .5s ease"}}})),b=function(e){var t=e.children,a=g();return r.a.createElement("div",{className:a.root},t)},E=a(103),h=a(183),y=a(186),v=a(187),x=a(101),k=a.n(x),O=a(184),j=a(96),N=a.n(j),w=a(39),C=a(97),z=a.n(C)()((function(e){return{link:{textAlign:"center",textDecoration:"none",outline:0},logo:{width:"auto",height:function(e){return e.height},margin:function(t){return t.showName?0:e.spacing(1.5)}}}})),I=function(e){var t=e.height,a=z({height:t});return r.a.createElement(w.a,{to:"/",className:a.link},r.a.createElement("div",{className:a.logoWrapper},r.a.createElement("img",{src:N.a,className:a.logo,alt:"logo"})))},P=a(98),T=a(56),B=Object(d.a)((function(e){return{tabItem:{textTransform:"none",fontSize:20,fontWeight:600,color:"white"},desktopTabs:{alignItems:"flex-end",position:"absolute",left:"51%",transform:"translateX(-50%)",height:"100%"}}})),S=function(){var e=B();return r.a.createElement(T.a,{tabsProps:{className:e.desktopTabs},tabProps:{className:e.tabItem}})},W=a(189),F=a(33),q=a(185),D=Object(h.a)((function(e){return{title:{color:e.palette.secondary.contrastText,fontWeight:600,fontSize:28}}})),J=function(){var e=Object(p.f)(),t=D(),a=F.a.find((function(t){return e.pathname===t.route||e.pathname.startsWith(t.route+"/")}));return r.a.createElement(W.a,{mdUp:!0},r.a.createElement(q.a,{variant:"h5",className:t.title},a&&a.label||"Not found"))},A=Object(h.a)((function(e){return{appBar:{zIndex:100},separator:{flexGrow:1},menuButton:{color:e.palette.grey[50]},container:{display:"flex",position:"relative"},logo:{width:50,margin:e.spacing(2,0)},title:{display:"flex",alignItems:"center",position:"absolute",left:"51%",transform:"translateX(-50%)",height:"100%"}}})),H=function(){var e=A(),t=r.a.useState(!1),a=Object(E.a)(t,2),i=a[0],o=a[1],c=function(){return o(!0)};return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{position:"static",className:e.appBar},r.a.createElement(O.a,{fixed:!0,className:e.container},r.a.createElement(I,{height:50}),r.a.createElement("div",{className:e.separator}),r.a.createElement(W.a,{smDown:!0},r.a.createElement(S,null)),r.a.createElement(W.a,{mdUp:!0},r.a.createElement("div",{className:e.title},r.a.createElement(J,null)),r.a.createElement(v.a,{className:e.menuButton,onClick:c},r.a.createElement(k.a,{fontSize:"large"}))))),r.a.createElement(P.a,{open:i,onOpen:c,onClose:function(){return o(!1)}}))},R=a(26),U=a(188),X=a(69),G=a(71),Y=a(72),_=Object(d.a)((function(e){return{socialItem:{display:"flex",alignItems:"baseline",justifyContent:"center"},iconWrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:60,height:60,borderRadius:"100%",border:"2px solid ".concat(e.palette.primary.lighter(90)),color:e.palette.primary.lighter(90),transition:"background .2s ease-in-out, color .2s ease-in-out","&:hover":{color:e.palette.primary.main,background:e.palette.primary.lighter(80),border:"2px solid ".concat(e.palette.primary.lighter(80))}}}})),K=[{link:"//github.com/seblaz/",icon:G.a},{link:"//www.linkedin.com/in/sebastian-blazquez/",icon:G.b},{link:"mailto:sebastian.blazquez96@gmail.com",icon:Y.a}],L=function(){var e=_();return r.a.createElement(U.a,{container:!0,spacing:2},K.map((function(t){var a=t.link,n=t.icon;return r.a.createElement(U.a,{item:!0,xs:3,md:2,className:e.socialItem,key:a},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:e.iconWrapper},r.a.createElement(X.a,{icon:n,size:"2x"})))})),r.a.createElement(U.a,{item:!0,xs:3,md:2,className:e.socialItem},r.a.createElement("a",{href:"/",className:e.iconWrapper},r.a.createElement(X.a,{icon:Y.b,size:"2x"}))))},M=Object(d.a)((function(e){return{root:Object(R.a)({display:"flex",justifyContent:"center",color:e.palette.primary.lighter(70),marginTop:e.spacing(2)},e.breakpoints.down("sm"),{marginTop:e.spacing(4)}),item:Object(R.a)({},e.breakpoints.only("xs"),{display:"flex",width:"100%"}),itemContent:Object(R.a)({},e.breakpoints.only("xs"),{margin:"auto"}),text:{display:"inline"},copyright:Object(R.a)({},e.breakpoints.only("sm"),{display:"flex",width:"100%",justifyContent:"center"})}})),Q=function(){var e=M();return r.a.createElement(U.a,{container:!0,spacing:1,className:e.root},r.a.createElement(U.a,{item:!0,className:"".concat(e.item," ").concat(e.copyright)},r.a.createElement("div",{className:e.itemContent},r.a.createElement(q.a,{variant:"h6",className:e.text},"Copyright \xa9 ",(new Date).getFullYear()))))},V=Object(d.a)((function(e){return{appBar:Object(R.a)({marginTop:"auto",zIndex:0,paddingTop:e.spacing(4)},e.breakpoints.down("xs"),{paddingTop:e.spacing(3)}),container:{padding:e.spacing(2,2)},gridContainer:{padding:e.spacing(.5)}}})),Z=function(){var e=V();return r.a.createElement(y.a,{position:"static",className:e.appBar,component:"footer"},r.a.createElement(O.a,{fixed:!0,className:e.container},r.a.createElement(U.a,{container:!0,spacing:2,className:e.gridContainer},r.a.createElement(U.a,{item:!0,xs:12,sm:3},r.a.createElement(I,{height:130})),r.a.createElement(U.a,{item:!0,xs:12,sm:9},r.a.createElement(L,null)),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Q,null)))))},$=a(19),ee=function(e){var t=Object($.a)(e),a=t.push;return Object(n.useEffect)((function(){t.push=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.location;e===r.pathname+r.search+r.hash&&JSON.stringify(n)===JSON.stringify(r.state||{})||a(e,n)}}),[a,t]),r.a.createElement(p.b,{history:t,children:e.children})},te=function(){return r.a.createElement(u,null,r.a.createElement(ee,null,r.a.createElement(b,null,r.a.createElement(f,null),r.a.createElement(H,null),r.a.createElement(F.b,null),r.a.createElement(Z,null))))};Object(i.render)(r.a.createElement(te,null),document.getElementById("root"))},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a(0),r=a.n(n),i=a(8),o=a(26),c=a(183),l=a(184),s=Object(c.a)((function(e){return{wrapper:{margin:e.spacing(2,0)}}})),m=function(e){var t=e.children,a=s();return r.a.createElement(l.a,{fixed:!0},r.a.createElement("div",{className:a.wrapper},t))},u=a(158),p=Object(c.a)((function(e){return{paper:Object(o.a)({padding:e.spacing(5)},e.breakpoints.only("xs"),{padding:e.spacing(2)})}})),f=function(){var e=p();return r.a.createElement(m,null,r.a.createElement(u.a,{className:e.paper},"Home"))},d=a(100),g=function(e){var t=e.title,a=e.description;return r.a.createElement(d.Helmet,{title:"PSA".concat(t?" | "+t:""),meta:[{name:"description",content:a}]})},b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,{title:"404 Not Found",description:"Error, p\xe1gina no encontrada."}),r.a.createElement("div",null,"It looks like you are lost."))},E=a(191),h=a(190),y=a(59),v=Object(y.a)((function(e){return{wrapper:{display:"block","&.page-enter":{opacity:0,transform:"scale(1.1)"},"&.page-enter-active":{opacity:1,transform:"scale(1)",transition:"opacity 600ms, transform 600ms"},"&.page-exit":{position:"absolute",left:0,top:84,width:"100%",opacity:1,transform:"scale(1)"},"&.page-exit-active":{opacity:0,transform:"scale(0.9)",transition:"opacity 600ms, transform 600ms"}}}})),x=function(e){var t=e.location,a=e.children,n=v();return r.a.createElement(E.a,null,r.a.createElement(h.a,{key:t.key,classNames:"page",timeout:600},r.a.createElement("div",{className:n.wrapper},a)))},k=[{label:"Proyectos",route:"/proyectos",Component:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,{title:"Proyectos",description:"Proyectos de Sebasti\xe1n Bl\xe1zquez."}),r.a.createElement(m,null,"Proyectos"))}},{label:"Soporte",route:"/soporte",Component:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,{title:"Experiencia laboral",description:"Experiencia laboral de Sebasti\xe1n Bl\xe1zquez."}),r.a.createElement(m,null,"Experiencia laboral"))}},{label:"Recursos",route:"/recursos",Component:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,{title:"Experiencia laboral",description:"Experiencia laboral de Sebasti\xe1n Bl\xe1zquez."}),r.a.createElement(m,null,"Experiencia laboral"))}}];t.b=function(){var e=Object(i.f)();return r.a.createElement(x,{location:e},r.a.createElement(i.c,{location:e},r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(f,null)),k.map((function(e,t){e.label;var a=e.route,n=e.Component;return r.a.createElement(i.a,{path:a,key:t},r.a.createElement(n,null))})),r.a.createElement(i.a,null,r.a.createElement(b,null))))}},56:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(161),o=a(8),c=a(39),l=a(159),s=a(33);t.a=function(e){var t=e.tabsProps,a=e.tabProps,n=Object(o.f)().pathname.split("/")[1],m=s.a.find((function(e){return e.route==="/".concat(n)}))||!1;return r.a.createElement(i.a,Object.assign({value:m&&m.route},t),s.a.map((function(e,t){var n=e.label,i=e.route;return r.a.createElement(l.a,Object.assign({key:t,to:i,label:n,value:i,component:c.a},a))})))}},96:function(e,t,a){e.exports=a.p+"static/media/logo.f3ef6d24.png"},98:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),i=a(160),o=a(59),c=a(99),l=Object(o.a)((function(e){return{drawerPaper:{background:e.palette.primary.main,minWidth:200,paddingTop:e.spacing(4)}}}));t.a=function(t){var a=t.open,n=t.onClose,o=t.onOpen,s=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),m=l();return r.a.createElement(i.a,{disableBackdropTransition:!s,disableDiscovery:s,anchor:"right",open:a,onClose:n,onOpen:o,classes:{paper:m.drawerPaper}},r.a.createElement(c.a,{onTabClick:n}))}}).call(this,a(88))},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(59),o=a(56),c=Object(i.a)((function(e){return{tabItem:{textTransform:"none",fontSize:20,fontWeight:600,color:"white",maxWidth:"none"},indicator:{left:0},tabWrapper:{alignItems:"baseline"}}}));t.a=function(e){var t=e.onTabClick,a=c();return r.a.createElement(o.a,{tabsProps:{orientation:"vertical",classes:{indicator:a.indicator}},tabProps:{className:a.tabItem,classes:{wrapper:a.tabWrapper},onClick:t}})}}},[[111,1,2]]]);
//# sourceMappingURL=main.c94652f0.chunk.js.map