(this.webpackJsonpfrogsleap=this.webpackJsonpfrogsleap||[]).push([[0],{25:function(e,t,a){},30:function(e,t,a){e.exports=a(48)},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),o=(a(35),a(18)),s=a(12),i=a(29),m=a(11),u=a(27),p=a(7),d={data:"",label:"hello",id:"abcd"},v=a(15),f={trending:{offset:0},loading:!1},E={data:[]},h={data:[],name:[]},b=Object(m.c)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEST_REDUX":return Object(p.a)({},e,{data:t.payload});default:return e}},giphy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TRENDING_GIFS":case"SEARCH_GIFS":return Object(p.a)({},e,{trending:t.payload,loading:!1});case"GET_MORE_TRENDING_GIFS":return Object(p.a)({},e,{trending:Object(p.a)({},t.payload,{data:[].concat(Object(v.a)(e.trending.data),Object(v.a)(t.payload.data))}),loading:!1});case"GIPHY_LOADING":return Object(p.a)({},e,{loading:!0});default:return e}},getcolor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COLOR":var a=t.payload,n=a.rowIdx,c=a.columnIdx,l=a.newColor;return e.data[n][c]=l,Object(p.a)({},e,{data:Object(v.a)(e.data)});case"GENERATE_TILES":return Object(p.a)({},e,{data:t.payload});default:return e}},saveColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_COLOR":return Object(p.a)({},e,{data:t.payload});case"NAME_COLOR":return Object(p.a)({},e,{name:t.payload});default:return e}}}),g=[u.a],y=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()?Object(m.d)(m.a.apply(void 0,g),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):m.a.apply(void 0,g),O=Object(m.e)(b,{},y),w=a(2),N=a(3),j=a(5),_=a(4),k=[{label:"About us",url:"/"},{label:"Our Technology",url:"/our-technology"},{label:"Volunteer Travel",url:"/Volunteer Travel"},{label:"Achivement",url:"/Achivement"},{label:"Upcoming Event",url:"/upcomimg-event"}],S=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.link;return c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",to:a},t))}}]),a}(n.Component),x=(a(41),function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("iframe",{id:"video_background",src:"https://player.vimeo.com/video/245391977?autoplay=1&loop=1&volume=0",preload:"auto",muted:!0,volume:"0",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),c.a.createElement("nav",{className:"nav"},c.a.createElement("div",{className:"nav-logo-wrap"},c.a.createElement("img",{src:"https://i.imgur.com/rTLOgiz.png",className:"logo"})),c.a.createElement("ul",{className:"nav-list"},k.map((function(e,t){return c.a.createElement(S,{key:t,label:e.label,link:e.url})})))),c.a.createElement("div",{className:"hero-content"},c.a.createElement("h1",{className:"hero-content-title"},"Experience our Viet Nam")))}}]),a}(n.Component)),T=[{icon:"far fa-clock",number:"9",content:" n\u0103m ho\u1ea1t \u0111\u1ed9ng."},{icon:"fas fa-walking",number:"?",content:"chuy\u1ebfn \u0111i."},{icon:"fas fa-map-marked-alt",number:"?",content:"\u0111\u1ecba ph\u01b0\u01a1ng \u0111\xe3 \u0111\u1ebfn."},{icon:"fas fa-handshake",number:"?",content:"\u0111\u1ed1i t\xe1c."}],C=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props,t=e.icon,a=e.number,n=e.content;return c.a.createElement("div",{className:"statistic-item"},c.a.createElement("i",{className:t}),c.a.createElement("div",{className:"statistic-item-content"},c.a.createElement("span",{className:"statistic-item-content-number"},a),c.a.createElement("span",{className:"statistic-item-content-text"},n)))}}]),a}(n.Component),I=(a(42),function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"statistic"},T.map((function(e,t){return c.a.createElement(C,{key:t,icon:e.icon,number:e.number,content:e.content})})))}}]),a}(n.Component)),D=(a(43),[{url:"http://www.veo.com.vn/wp-content/uploads/2018/11/B\u1ea3n-Gi\u1ed1c-min.jpg"},{url:"http://www.veo.com.vn/wp-content/uploads/2018/11/b%E1%BA%A3n-c%E1%BB%8Fi-min.jpg"},{url:"http://www.veo.com.vn/wp-content/uploads/2018/11/B\u1eafc-S\u01a1n.jpg"},{url:"http://www.veo.com.vn/wp-content/uploads/2018/11/\u0110i\u1ec7n-Bi\xean.jpg"},{url:"http://www.veo.com.vn/wp-content/uploads/2018/11/workcamp-H\u1ea1-Th\xe0nh-min.jpg"},{url:"http://www.veo.com.vn/wp-content/uploads/2018/11/Sapa-min.jpg"}]),q=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){var e;return Object(w.a)(this,a),(e=t.call(this)).state={},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props.url;return c.a.createElement("li",{className:"myslides"},c.a.createElement("div",{className:"myslides-main"},c.a.createElement("div",{className:"myslides-image",style:{background:"url(".concat(e,")")}})))}}]),a}(n.Component),L=1,R=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){var e;return Object(w.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.showSlides(L)},e.mousedown=function(t){var a=t.clientX;e.state.click;console.log("mousedown t\u1ea1i",a),e.setState({click:!0}),e.setState({mousedown_location:a})},e.mouseup=function(){console.log("mouseup"),e.setState({click:!1})},e.mousemove=function(t){var a=e.state,n=a.click,c=a.mousedown_location;if(!0!==n)return!1;console.log("mousemove");var l=t.clientX-c;l>5?e.plusSlides(1):l<-5&&e.plusSlides(-1)},e.plusSlides=function(t){e.showSlides(L+=t),console.log("plusSlides")},e.showSlides=function(e){var t,a,n,c,l;console.log("showSlides");var r=document.getElementsByClassName("myslides");for(e>r.length&&(L=1),e<1&&(L=r.length),L-1===5?(n=4,c=0,a=3,l=1):L-1===0?(n=5,a=4,l=2,c=1):L-1===4?(n=3,a=2,l=0,c=5):L-1===1?(n=0,a=5,l=3,c=2):(n=L-2,c=L,a=L-3,l=L+1),t=0;t<r.length;t++)r[t].style.opacity="0";console.log("tr\xe1i gi\u1eefa ph\u1ea3i",a,"/",n,"/",L-1,"/",c,"/",l),r[a].style.opacity="0",r[a].style.left="-966px",r[a].style.transform="matrix3d(0.379526, 0, -0.241785, 0.000201487, 0, 0.45, 0, 0, 0.5373, 0, 0.843391, -0.000702826, 150, 0, 0, 1)",r[n].style.opacity="0.5",r[n].style.left="-366px",r[n].style.transform="matrix3d(0.379526, 0, -0.241785, 0.000201487, 0, 0.45, 0, 0, 0.5373, 0, 0.843391, -0.000702826, 150, 0, 0, 1)",r[L-1].style.opacity="1",r[L-1].style.left="234px",r[L-1].style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",r[c].style.opacity="0.5",r[c].style.left="834px",r[c].style.transform="matrix3d(0.379526, 0, 0.241785, -0.000201487, 0, 0.45, 0, 0, -0.5373, 0, 0.843391, -0.000702826, -150, 0, 0, 1)",r[l].style.opacity="0",r[l].style.left="1434px",r[l].style.transform="matrix3d(0.379526, 0, 0.241785, -0.000201487, 0, 0.45, 0, 0, -0.5373, 0, 0.843391, -0.000702826, -150, 0, 0, 1)"},e.state={click:!1,mousedown_location:""},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this;this.state.click;return console.log("render"),c.a.createElement("div",{className:"activities"},c.a.createElement("ul",{className:"slideshow-container",draggable:"true"},D.map((function(e,t){return c.a.createElement(q,{key:t,url:e.url,index:t})}))),c.a.createElement("a",{className:"prev",onClick:function(){return e.plusSlides(-1)}},"\u276e"),c.a.createElement("a",{className:"next",onClick:function(){return e.plusSlides(1)}},"\u276f"))}}]),a}(n.Component),A=(a(44),function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"videos"},c.a.createElement("div",{className:"videos-left"},c.a.createElement("span",{className:"videos-title"},"What is Lorem Ipsum?"),c.a.createElement("span",{className:"videos-content"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")),c.a.createElement("div",{className:"videos-right"},c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nUDS2fzt7sY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}}]),a}(n.Component)),G=(a(45),function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"quotes"},c.a.createElement("div",{className:"quotes-left"},c.a.createElement("img",{className:"quotes-left-img",src:"https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",alt:"#"})),c.a.createElement("div",{className:"quotes-right"},c.a.createElement("i",{class:"fas fa-quote-left"}),c.a.createElement("div",{className:"quotes-right-content"},'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"'),c.a.createElement("div",{className:"quotes-right-name"},"Nguyen Thi A"),c.a.createElement("div",{className:"quotes-right-position"},"Positon")))}}]),a}(n.Component)),X=(a(46),function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"partners"},c.a.createElement("h1",{className:"partners-title"},"Our Partners"),c.a.createElement("div",{className:"partners-content"},c.a.createElement("img",{className:"partners-img",src:"https://static.ybox.vn/2019/1/6/1547309411129-51.gif",alt:"#"}),c.a.createElement("img",{className:"partners-img",src:"https://static.ybox.vn/2019/1/6/1547309411129-51.gif",alt:"#"}),c.a.createElement("img",{className:"partners-img",src:"https://static.ybox.vn/2019/1/6/1547309411129-51.gif",alt:"#"}),c.a.createElement("img",{className:"partners-img",src:"https://static.ybox.vn/2019/1/6/1547309411129-51.gif",alt:"#"}),c.a.createElement("img",{className:"partners-img",src:"https://static.ybox.vn/2019/1/6/1547309411129-51.gif",alt:"#"})))}}]),a}(n.Component)),B=(a(47),function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer-left"},c.a.createElement("div",{className:"footer-left-icon"},c.a.createElement("i",{class:"fas fa-home"}),c.a.createElement("span",null,"  \u0110\u1ecba ch\u1ec9: xxx ")),c.a.createElement("div",{className:"footer-left-icon"},c.a.createElement("i",{class:"far fa-envelope"})," ",c.a.createElement("span",null,"  Mail: frogsleapvietnam@gmail.com ")),c.a.createElement("div",{className:"footer-left-icon"},c.a.createElement("i",{class:"fas fa-phone"}),c.a.createElement("span",null,"  S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: +84 97 4239 122 "))),c.a.createElement("div",{className:"footer-right"},c.a.createElement("span",{className:"footer-right-title"},"Connect with us"),c.a.createElement("i",{class:"fab fa-facebook"}),c.a.createElement("i",{class:"fab fa-youtube"})))}}]),a}(n.Component));a(25);var M=function(){return c.a.createElement(i.a,{store:O},c.a.createElement("div",{className:"app"},c.a.createElement(o.a,null,c.a.createElement(x,null),c.a.createElement(I,null),c.a.createElement(R,null),c.a.createElement(A,null),c.a.createElement(G,null),c.a.createElement(X,null),c.a.createElement(B,null),c.a.createElement(s.b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.2d9fac55.chunk.js.map