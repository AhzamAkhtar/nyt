(this.webpackJsonpnyt=this.webpackJsonpnyt||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(12),l=c.n(i),a=(c(21),c.p,c(22),c(4)),r=c.n(a),o=c(5),j=c(0),d=c(6),b=c(7),u=c(9),h=c(8),O=(n.Component,c(3)),x=c(2),p=function(){var e="AM",t="GOOD MORNING",c="",s={},i=(new Date).getHours();i>=0&&i<12&&(e="AM",t="GOOD MORNING",c="fas fa-sun",s.color="yellow"),i>=12&&i<18&&(e="PM",t="GOOD AFTERNOON",c="fas fa-cloud-moon",s.color="yellow"),i>=19&&i<20&&(e="PM",t="GOOD EVENING",c="fas fa-cloud-moon",s.color="orange"),i>=20&&i<=24&&(e="PM",t="GOOD NIGHT",c="fas fa-moon",s.color="yellow");var l=(new Date).getMinutes(),a=Object(n.useState)(i),r=Object(x.a)(a,2),o=r[0],d=r[1],b=Object(n.useState)(l),u=Object(x.a)(b,2),h=u[0],O=u[1],p=Object(n.useState)(e),f=Object(x.a)(p,2),m=f[0],w=f[1],g=Object(n.useState)(t),y=Object(x.a)(g,2),v=y[0],S=y[1],C=Object(n.useState)(c),k=Object(x.a)(C,2),N=k[0],A=k[1];return setInterval((function(){(i=(new Date).getHours())>12&&d(i-12)}),1e3),setInterval((function(){l=(new Date).getMinutes(),O(l<10?l="0"+l:l)}),1e3),setInterval((function(){w(e),S(t),A(c)}),6e4),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{class:"navbar navbar-dark bg-dark",children:Object(j.jsxs)("div",{class:"container-fluid",children:[Object(j.jsxs)("h6",{children:[o,":",h," ",m]}),Object(j.jsx)("h6",{style:{textAlign:"center"},children:v}),Object(j.jsx)("i",{class:N,style:s})]})})})})},f=c.p+"static/media/Balls.a29b36a8.gif",m=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("img",{src:f,alt:"loading"})})}}]),c}(n.Component),w=m,g=function(){var e=Object(n.useState)("nation"),t=Object(x.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),l=Object(x.a)(i,2),a=l[0],d=l[1],b=Object(n.useState)("in"),u=Object(x.a)(b,2),h=u[0],f=u[1],m=Object(n.useState)("NATION"),g=Object(x.a)(m,2),y=g[0],v=g[1],S=Object(n.useState)("INDIA"),C=Object(x.a)(S,2),k=C[0],N=C[1],A=Object(n.useState)("en"),D=Object(x.a)(A,2),I=D[0],T=D[1],E=Object(n.useState)("yellow"),R=Object(x.a)(E,2),L=R[0],F=R[1],U=Object(n.useState)("white"),Y=Object(x.a)(U,2),P=Y[0],z=Y[1],M=Object(n.useState)("white"),G=Object(x.a)(M,2),W=G[0],K=G[1],H=Object(n.useState)("white"),q=Object(x.a)(H,2),B=q[0],J=q[1],Q=Object(n.useState)("white"),V=Object(x.a)(Q,2),X=V[0],Z=V[1],$=Object(n.useState)("white"),_=Object(x.a)($,2),ee=_[0],te=_[1],ce=Object(n.useState)("white"),ne=Object(x.a)(ce,2),se=ne[0],ie=ne[1],le=Object(n.useState)("white"),ae=Object(x.a)(le,2),re=ae[0],oe=ae[1],je=Object(n.useState)(!1),de=Object(x.a)(je,2),be=de[0],ue=de[1];Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue(!0),t="https://gnews.io/api/v4/top-headlines?&token=0f183a18388cbfd80c2def15a25fbfee\n            &country=".concat(h,"&lang=").concat(I,"&topic=").concat(c),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,ue(!1),console.log(s.articles),d(s.articles);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c,h,P]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(j.jsxs)("div",{className:"carousel-indicators",children:[Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(j.jsxs)("div",{className:"carousel-inner",children:[Object(j.jsxs)("div",{className:"carousel-item active",children:[Object(j.jsx)("img",{src:"https://picsum.photos/1900/1003",className:"d-block w-100",alt:"..."}),Object(j.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(j.jsx)("h5",{children:"First slide label"}),Object(j.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),Object(j.jsxs)("div",{className:"carousel-item",children:[Object(j.jsx)("img",{src:"https://picsum.photos/1900/1002",className:"d-block w-100",alt:"..."}),Object(j.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(j.jsx)("h5",{children:"Second slide label"}),Object(j.jsx)("p",{children:"Some representative placeholder content for the second slide."})]})]}),Object(j.jsxs)("div",{className:"carousel-item",children:[Object(j.jsx)("img",{src:"https://picsum.photos/1900/1001",className:"d-block w-100",alt:"..."}),Object(j.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(j.jsx)("h5",{children:"Third slide label"}),Object(j.jsx)("p",{children:"Some representative placeholder content for the third slide."})]})]})]}),Object(j.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(j.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(j.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(j.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(p,{})}),Object(j.jsxs)("ul",{className:"nav justify-content-center my-3",children:[Object(j.jsxs)("span",{style:{fontSize:"1.2rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("nation"),e.preventDefault(),v("NATION"),F("yellow"),J("white"),K("white"),z("white"),Z("white"),te("white"),ie("white"),oe("white")},class:"far fa-flag",style:{color:"".concat(L)}}),"\xa0\xa0"]}),Object(j.jsxs)("span",{style:{fontSize:"1.2rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("world"),e.preventDefault(),v("WORLD"),z("yellow"),F("white"),K("white"),J("white"),Z("white"),te("white"),ie("white"),oe("white")},className:"fas fa-globe",style:{color:"".concat(P)}}),"\xa0\xa0"]}),Object(j.jsxs)("span",{style:{fontSize:"1.2rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("business"),e.preventDefault(),v("BUSINESS"),K("yellow"),F("white"),z("white"),J("white"),Z("white"),te("white"),ie("white"),oe("white")},className:"fas fa-rupee-sign",style:{color:"".concat(W)}}),"\xa0\xa0"]}),Object(j.jsxs)("span",{style:{fontSize:"1.4rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("technology"),e.preventDefault(),v("TECHNOLOGY"),Z("yellow"),F("white"),K("white"),z("white"),J("white"),te("white"),ie("white"),oe("white")},className:"fas fa-microchip",style:{color:"".concat(X)}}),"\xa0\xa0"]}),Object(j.jsxs)("span",{style:{fontSize:"1.4rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("entertainment"),e.preventDefault(),v("ENTERTAINMENT"),J("yellow"),F("white"),K("white"),z("white"),Z("white"),te("white"),ie("white"),oe("white")},className:"fas fa-tv",style:{color:"".concat(B)}}),"\xa0\xa0"]}),Object(j.jsxs)("span",{style:{fontSize:"1.4rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("sports"),e.preventDefault(),v("SPORTS"),te("yellow"),F("white"),K("white"),z("white"),Z("white"),J("white"),ie("white"),oe("white")},className:"fas fa-baseball-ball",style:{color:"".concat(ee)}}),"\xa0\xa0"]}),Object(j.jsxs)("span",{style:{fontSize:"1.4rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("science"),e.preventDefault(),v("SCIENCE"),ie("yellow"),F("white"),K("white"),z("white"),Z("white"),te("white"),J("white"),oe("white")},className:"fas fa-flask",style:{color:"".concat(se)}}),"\xa0\xa0"]}),Object(j.jsxs)("span",{style:{fontSize:"1.4rem",color:"white"},children:[Object(j.jsx)("i",{onClick:function(e){s("health"),e.preventDefault(),v("HEALTH"),oe("yellow"),F("white"),K("white"),z("white"),Z("white"),te("white"),ie("white"),J("white")},className:"fas fa-user-md",style:{color:"".concat(re)}}),"\xa0\xa0"]}),Object(j.jsxs)("div",{class:"dropdown",children:[Object(j.jsx)("a",{class:"btn btn-secondary dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false",children:k}),Object(j.jsxs)("ul",{class:"dropdown-menu","aria-labelledby":"dropdownMenuLink",children:[Object(j.jsx)("li",{onClick:function(e){f("us"),e.preventDefault(),N("U.S")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"U.S"})}),Object(j.jsx)("li",{onClick:function(e){f("au"),e.preventDefault(),N("AUS")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"AUSTRALIA"})}),Object(j.jsx)("li",{onClick:function(e){f("ca"),e.preventDefault(),N("CAN")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"CANADA"})}),Object(j.jsx)("li",{onClick:function(e){f("se"),e.preventDefault(),N("SWE"),T("se")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"SWEDEN"})}),Object(j.jsx)("li",{onClick:function(e){f("ie"),e.preventDefault(),N("IRE"),T("ie")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"IRELAND"})}),Object(j.jsx)("li",{onClick:function(e){f("gb"),e.preventDefault(),N("U.K")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"U.K"})}),Object(j.jsx)("li",{onClick:function(e){f("it"),e.preventDefault(),N("ITALY"),T("it")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"ITALY"})}),Object(j.jsx)("li",{onClick:function(e){f("no"),e.preventDefault(),N("NORWAY"),T("no")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"NORWAY"})}),Object(j.jsx)("li",{onClick:function(e){f("fr"),e.preventDefault(),N("FRA"),T("fr")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"FRANCE"})}),Object(j.jsx)("li",{onClick:function(e){f("de"),e.preventDefault(),N("GER"),T("de")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"GERMANY"})}),Object(j.jsx)("li",{onClick:function(e){f("in"),e.preventDefault(),N("INDIA")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"INDIA"})}),Object(j.jsx)("li",{onClick:function(e){f("ru"),e.preventDefault(),N("RUS"),T("ru")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"RUSSIA"})}),Object(j.jsx)("li",{onClick:function(e){f("pk"),e.preventDefault(),N("PAK")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"PAKISTAN"})})]})]})]}),Object(j.jsxs)("div",{classNameName:"container",children:[Object(j.jsxs)("h1",{style:{color:"white",fontSize:"larger",fontFamily:" 'Cinzel', serif;",marginLeft:"5px"},children:["   ARTICLES ON ",y]}),Object(j.jsxs)("p",{style:Object(O.a)({color:"white",marginLeft:"5px"},"color","skyblue"),children:["SELECTED COUNTRY: ",k," & CATEG: ",y]})]}),Object(j.jsx)("div",{children:be?Object(j.jsx)(w,{}):Object(j.jsx)(j.Fragment,{children:a.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"card my-2",style:{backgroundColor:"black",borderRadius:"8px"},onClick:function(){return window.open(e.url)},children:Object(j.jsxs)("div",{class:"my-4",children:[Object(j.jsx)("img",{src:e.image,class:"card-img-top",alt:"image",style:{borderRadius:"3px"}}),Object(j.jsxs)("div",{class:"card-body",children:[Object(j.jsx)("h5",{style:{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;",fontSize:28},class:"card-title",children:e.title}),Object(j.jsx)("p",{style:{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;"},class:"card-text",children:e.description})]}),Object(j.jsxs)("p",{style:Object(O.a)({color:"white",marginLeft:"8px"},"color","skyblue"),children:["Source: ",e.source.name]}),Object(j.jsx)("p",{style:Object(O.a)({color:"white",marginLeft:"8px"},"color","skyblue"),children:e.publishedAt}),Object(j.jsx)("hr",{style:{backgroundColor:"white"}})]})})})}))})})]})},y=function(){var e,t=Object(n.useState)(!1),c=Object(x.a)(t,2),s=c[0],i=c[1],l=Object(n.useState)("null"),a=Object(x.a)(l,2),d=(a[0],a[1],Object(n.useState)("")),b=Object(x.a)(d,2),u=b[0],h=b[1],p=Object(n.useState)("nation"),f=Object(x.a)(p,2),m=f[0],g=f[1],y=Object(n.useState)([]),v=Object(x.a)(y,2),S=v[0],C=v[1],k=Object(n.useState)("in"),N=Object(x.a)(k,2),A=N[0],D=N[1],I=Object(n.useState)("INDIA"),T=Object(x.a)(I,2),E=T[0],R=T[1],L=Object(n.useState)("en"),F=Object(x.a)(L,2),U=F[0],Y=F[1];Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(r.a.mark((function e(){var t,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),t="https://gnews.io/api/v4/search?q=".concat(m,"&token=0f183a18388cbfd80c2def15a25fbfee\n\n\n            &country=").concat(A,"&lang=").concat(U,"}"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,i(!1),console.log(n.articles),C(n.articles);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[A,m]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{color:"white",fontFamily:"Oswald, sans-serif;",marginLeft:"5px"},children:"SEARCH ANY ARTICLE"}),Object(j.jsx)("div",{class:"input-group input-group-sm mb-3",children:Object(j.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm",placeholder:"Search",onChange:function(e){h(e.target.value)}})}),Object(j.jsxs)("button",{style:{width:"50%",alignItems:"center",justifyContent:"center"},type:"button",class:"btn btn-warning",onClick:function(e){e.preventDefault(),g(u)},children:["Search ",Object(j.jsx)("i",{style:{color:"black"},class:"fas fa-search"})]}),Object(j.jsxs)("div",{class:"btn-group",children:[Object(j.jsx)("button",{type:"button",class:"btn btn-secondary mx-2 my-2",children:E}),Object(j.jsx)("button",{type:"button",class:"btn btn-secondary  dropdown-toggle dropdown-toggle-split my-2","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Toggle Dropdown"})}),Object(j.jsxs)("ul",{class:"dropdown-menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){D("us"),R("U.S"),e.preventDefault()},class:"dropdown-item",children:"U.S"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){D("au"),R("AUSRALIA"),e.preventDefault()},class:"dropdown-item",children:"AUSTRALIA"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){D("ca"),R("CANADA"),e.preventDefault()},class:"dropdown-item",children:"CANADA"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){D("gb"),R("U.K"),e.preventDefault()},class:"dropdown-item",children:"U.K"})}),Object(j.jsx)("li",{onClick:function(e){D("pk"),R("PAKISTAN"),e.preventDefault()},children:Object(j.jsx)("a",{class:"dropdown-item",children:"PAKISTAN"})}),Object(j.jsx)("li",{onClick:function(e){D("in"),e.preventDefault(),R("INDIA")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"INDIA"})}),Object(j.jsx)("li",{onClick:function(e){D("fr"),e.preventDefault(),R("FRA"),Y("fr")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"FRANCE"})}),Object(j.jsx)("li",{onClick:function(e){D("no"),e.preventDefault(),R("NORWAY"),Y("no")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"NORWAY"})}),Object(j.jsx)("li",{onClick:function(e){D("ie"),e.preventDefault(),R("IRE"),Y("ie")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"IRELAND"})}),Object(j.jsx)("li",{onClick:function(e){D("it"),e.preventDefault(),R("ITALY"),Y("it")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"ITALY"})}),Object(j.jsx)("li",{onClick:function(e){D("se"),e.preventDefault(),R("SWE"),Y("se")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"SWEDEN"})}),Object(j.jsx)("li",{onClick:function(e){D("ru"),e.preventDefault(),R("RUS"),Y("ru")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"RUSSIA"})})]})]}),Object(j.jsxs)("p",{style:(e={color:"white",marginLeft:"5px"},Object(O.a)(e,"marginLeft","5px"),Object(O.a)(e,"color","skyblue"),e),children:["SELECTED COUNTRY : ",E.toUpperCase()]}),Object(j.jsx)("div",{children:s?Object(j.jsx)(w,{}):Object(j.jsx)(j.Fragment,{children:S.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"card my-2",style:{backgroundColor:"black",borderRadius:"8px"},onClick:function(){return window.open(e.url)},children:Object(j.jsxs)("div",{class:"my-4",children:[Object(j.jsx)("img",{src:e.image,class:"card-img-top",alt:"image",style:{borderRadius:"3px"}}),Object(j.jsxs)("div",{class:"card-body",children:[Object(j.jsx)("h5",{style:{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;",fontSize:28},class:"card-title",children:e.title}),Object(j.jsx)("p",{style:{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;"},class:"card-text",children:e.description})]}),Object(j.jsxs)("p",{style:Object(O.a)({color:"white",marginLeft:"8px"},"color","skyblue"),children:["Source: ",e.source.name]}),Object(j.jsx)("p",{style:Object(O.a)({color:"white",marginLeft:"8px"},"color","skyblue"),children:e.publishedAt}),Object(j.jsx)("hr",{style:{backgroundColor:"white"}})]})})})}))})})]})};c(25);function v(){var e=[{questionText:"Capital of France",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}],t=Object(n.useState)(0),c=Object(x.a)(t,2),s=c[0],i=c[1],l=Object(n.useState)(!1),a=Object(x.a)(l,2),r=a[0],o=a[1],d=Object(n.useState)(0),b=Object(x.a)(d,2),u=b[0],h=b[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h5",{className:"question-section",children:"TEST YOUR G.K. HERE!"}),r?Object(j.jsxs)("div",{className:"score-section",children:[Object(j.jsxs)("h1",{style:{textAlign:"center"},children:["You Score ",u," out of ",e.length]}),Object(j.jsx)("button",{onClick:function(){o(!1),i(0),h(0)},children:"Reset Quiz"}),Object(j.jsx)("div",{children:u<=2?Object(j.jsx)("h1",{children:"Bad "}):Object(j.jsx)("h1",{children:"Awesome"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"question-section",children:[Object(j.jsxs)("div",{className:"question-count",children:[Object(j.jsxs)("span",{children:["Question ",s+1]}),"/",e.length]}),Object(j.jsx)("div",{className:"question-text",children:e[s].questionText}),Object(j.jsx)("input",{type:"range",min:"0",max:"125",value:25*(s+1)})]}),Object(j.jsx)("div",{className:"answer-section",children:e[s].answerOptions.map((function(t){return Object(j.jsx)("button",{onClick:function(){return function(t){t&&h(u+1);var c=s+1;c<e.length?(i(c),console.log(u)):o(!0)}(t.isCorrect)},children:t.answerText})}))})]})]})}var S=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{style:{fontFamily:"'Oswald', sans-serif;"},class:"navbar navbar-dark bg-dark",children:Object(j.jsx)("div",{class:"container-fluid",children:Object(j.jsx)("span",{style:{color:"yellow"},class:"navbar-brand mb-0 h1",children:"Gnews.io"})})})})},C=function(){var e,t=Object(n.useState)(!1),c=Object(x.a)(t,2),s=c[0],i=c[1],l=Object(n.useState)([]),a=Object(x.a)(l,2),d=a[0],b=a[1],u=Object(n.useState)("in"),h=Object(x.a)(u,2),p=h[0],f=h[1],m=Object(n.useState)("INDIA"),g=Object(x.a)(m,2),y=g[0],v=g[1],S=Object(n.useState)("en"),C=Object(x.a)(S,2),k=C[0],N=C[1];Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(r.a.mark((function e(){var t,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),t="https://gnews.io/api/v4/top-headlines?&token=0f183a18388cbfd80c2def15a25fbfee\n\n\n            &country=".concat(p,"&lang=").concat(k,"}"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,i(!1),console.log(n.articles),b(n.articles);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{style:{color:"white",fontFamily:"Oswald, sans-serif;",marginLeft:"5px"},children:["TOP-HEADLIES IN ",y.toUpperCase()]}),Object(j.jsxs)("div",{class:"btn-group",children:[Object(j.jsx)("button",{type:"button",class:"btn btn-secondary mx-2 my-2",children:y}),Object(j.jsx)("button",{type:"button",class:"btn btn-secondary  dropdown-toggle dropdown-toggle-split my-2","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Toggle Dropdown"})}),Object(j.jsxs)("ul",{class:"dropdown-menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){f("us"),v("U.S"),e.preventDefault()},class:"dropdown-item",children:"U.S"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){f("au"),v("AUSRALIA"),e.preventDefault()},class:"dropdown-item",children:"AUSTRALIA"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){f("ca"),v("CANADA"),e.preventDefault()},class:"dropdown-item",children:"CANADA"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{onClick:function(e){f("gb"),v("U.K"),e.preventDefault()},class:"dropdown-item",children:"U.K"})}),Object(j.jsx)("li",{onClick:function(e){f("pk"),v("PAKISTAN"),e.preventDefault()},children:Object(j.jsx)("a",{class:"dropdown-item",children:"PAKISTAN"})}),Object(j.jsx)("li",{onClick:function(e){f("in"),e.preventDefault(),v("INDIA")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"INDIA"})}),Object(j.jsx)("li",{onClick:function(e){f("fr"),e.preventDefault(),v("FRA"),N("fr")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"FRANCE"})}),Object(j.jsx)("li",{onClick:function(e){f("no"),e.preventDefault(),v("NORWAY"),N("no")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"NORWAY"})}),Object(j.jsx)("li",{onClick:function(e){f("ie"),e.preventDefault(),v("IRE"),N("ie")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"IRELAND"})}),Object(j.jsx)("li",{onClick:function(e){f("it"),e.preventDefault(),v("ITALY"),N("it")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"ITALY"})}),Object(j.jsx)("li",{onClick:function(e){f("se"),e.preventDefault(),v("SWE"),N("se")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"SWEDEN"})}),Object(j.jsx)("li",{onClick:function(e){f("ru"),e.preventDefault(),v("RUS"),N("ru")},children:Object(j.jsx)("a",{class:"dropdown-item",children:"RUSSIA"})})]})]}),Object(j.jsxs)("p",{style:(e={color:"white",marginLeft:"5px"},Object(O.a)(e,"marginLeft","5px"),Object(O.a)(e,"color","skyblue"),e),children:["SELECTED COUNTRY : ",y.toUpperCase()]}),Object(j.jsx)("div",{children:s?Object(j.jsx)(w,{}):Object(j.jsx)(j.Fragment,{children:d.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"card my-2",style:{backgroundColor:"black",borderRadius:"8px"},onClick:function(){return window.open(e.url)},children:Object(j.jsxs)("div",{class:"my-4",children:[Object(j.jsx)("img",{src:e.image,class:"card-img-top",alt:"image",style:{borderRadius:"3px"}}),Object(j.jsxs)("div",{class:"card-body",children:[Object(j.jsx)("h5",{style:{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;",fontSize:28},class:"card-title",children:e.title}),Object(j.jsx)("p",{style:{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;"},class:"card-text",children:e.description})]}),Object(j.jsxs)("p",{style:Object(O.a)({color:"white",marginLeft:"8px"},"color","skyblue"),children:["Source: ",e.source.name]}),Object(j.jsx)("p",{style:Object(O.a)({color:"white",marginLeft:"8px"},"color","skyblue"),children:e.publishedAt}),Object(j.jsx)("hr",{style:{backgroundColor:"white"}})]})})})}))})})]})},k=function(){return navigator.geolocation.getCurrentPosition((function(e){console.log("latitude is"+e.coords.latitude),console.log("longitude is"+e.coords.longitude)}),(function(e){console.log(e.code)})),Object(j.jsx)(j.Fragment,{})},N=function(){return localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):[]},A=function(){var e=Math.floor(3*Math.random());console.log(e);var t=Object(n.useState)(""),c=Object(x.a)(t,2),s=c[0],i=c[1],l=Object(n.useState)(""),a=Object(x.a)(l,2),r=a[0],o=a[1],d=Object(n.useState)(N),b=Object(x.a)(d,2),u=b[0],h=b[1],O=Object(n.useState)(0),p=Object(x.a)(O,2),f=p[0],m=p[1],w=function(){console.log(e),0==e?o("Rock"):1==e?o("Paper"):2==e&&o("Scissors")};return Object(n.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(u))}),[u]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{textAlign:"center"},children:"Rock Paper Scissors"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{style:{color:"lightgreen",marginLeft:"15px"},children:["You Selected :",s]}),Object(j.jsxs)("h3",{style:{color:"orange",marginLeft:"15px"},children:["Computer Selected:",r]})]}),Object(j.jsx)("button",{style:{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"},onClick:function(){i("Rock"),w(),0==e?(h(u),m(f)):1==e?(h(u),m(f+1)):2==e&&(h(u+1),m(f))},children:"Rock"}),Object(j.jsx)("button",{style:{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"},onClick:function(){i("Paper"),w(),0==e?(m(f),h(u+1)):1==e?(m(f),h(u)):2==e&&(m(f+1),h(u))},children:"Paper"}),Object(j.jsx)("button",{style:{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"},onClick:function(){w(),i("Scissors"),0==e?(m(f+1),h(u)):1==e?(m(f),h(u+1)):2==e&&(h(u),m(f))},children:"Scissors"}),Object(j.jsxs)("h3",{style:{color:"lightgreen",marginLeft:"15px"},children:["Your score is ",u]}),Object(j.jsxs)("h3",{style:{color:"orange",marginLeft:"15px"},children:["PC score ",f]}),Object(j.jsx)("button",{style:{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"},onClick:function(){h(0),m(0),o(""),i("")},children:"Reset"})]})},D=function(){return Object(j.jsx)(j.Fragment,{children:function(){var e=new SpeechSynthesisUtterance;e.text="hello how are you , i hope you are doing well",window.speechSynthesis.speak(e),"speechSynthesis"in window?console.log("suported"):console.log("nope")}()})};var I=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(C,{}),Object(j.jsx)(y,{}),Object(j.jsx)(v,{}),Object(j.jsx)("hr",{}),Object(j.jsx)(A,{}),Object(j.jsx)("hr",{}),Object(j.jsx)(S,{}),Object(j.jsx)(k,{}),Object(j.jsx)(D,{})]})};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.132e6f16.chunk.js.map