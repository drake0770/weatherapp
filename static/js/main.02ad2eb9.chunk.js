(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{109:function(e,a,t){e.exports=t.p+"static/media/arrowup.67350507.png"},110:function(e,a,t){e.exports=t.p+"static/media/arrowdown.37484ed8.png"},115:function(e,a,t){e.exports=t.p+"static/media/logo1.e3802a71.PNG"},116:function(e,a,t){e.exports=t.p+"static/media/search.51d951a3.png"},117:function(e,a,t){e.exports={error:"InputComponent_error__2g6Nb",errorData:"InputComponent_errorData__1RyhN",but:"InputComponent_but__2Tfsn"}},120:function(e,a,t){e.exports={page:"Bottom_page__1raI0"}},121:function(e,a,t){e.exports=t.p+"static/media/dbg.64e39ab7.png"},122:function(e,a,t){e.exports=t.p+"static/media/n2.773e9c96.jpg"},127:function(e,a,t){e.exports=t(262)},13:function(e,a,t){e.exports={mainWeatherContainer:"TodaysWeatherData_mainWeatherContainer__3h5AS",cityNameTitle:"TodaysWeatherData_cityNameTitle__2jm-w",text:"TodaysWeatherData_text__fRV1Z",mainTemperatureValue:"TodaysWeatherData_mainTemperatureValue__2riGT",flexContainer:"TodaysWeatherData_flexContainer__sIvfY"}},132:function(e,a,t){},133:function(e,a,t){},15:function(e,a,t){e.exports={dailyPage:"DailyWeather_dailyPage__UYpIG",dailyTitle:"DailyWeather_dailyTitle__10_2U",dataDiv:"DailyWeather_dataDiv__obHI1",weatherForFewDaysMainContainer:"DailyWeather_weatherForFewDaysMainContainer__2B8EQ",darken:"DailyWeather_darken__1_kgD",oneDayContainer:"DailyWeather_oneDayContainer__3Yk9L",iconContainer:"DailyWeather_iconContainer__27Kqw",gridCont:"DailyWeather_gridCont__2FxTx"}},19:function(e,a,t){e.exports={page:"Header_page__yVdpC",headerContainer:"Header_headerContainer__27TnC",searchPlaceInputContainer:"Header_searchPlaceInputContainer__3jF25",searchForm:"Header_searchForm__9yFw3",searchIconContainer:"Header_searchIconContainer__3DszL",hidenSubmit:"Header_hidenSubmit__PdW9o",logoContainer:"Header_logoContainer__296Da",formContainer:"Header_formContainer__3fT-j",searchIconDiv:"Header_searchIconDiv__18yC-",openModalDiv:"Header_openModalDiv__2dzS_"}},20:function(e,a,t){e.exports={page:"MainPage_page__eAtzm",toogleButton:"MainPage_toogleButton__3H6ub",pcMode:"MainPage_pcMode__khR1r",arrowContainer:"MainPage_arrowContainer__3z0UW",mymove:"MainPage_mymove__2g27B",openDescription:"MainPage_openDescription__1_syR",new:"MainPage_new__2QsRK",closeDescription:"MainPage_closeDescription__x3DIB",close:"MainPage_close__bTvTo"}},26:function(e,a,t){e.exports={flexScrollContainer:"HourlyWeather_flexScrollContainer__2YPWD",hourlyTitle:"HourlyWeather_hourlyTitle__T4-z5",weatherForFewDaysMainContainer:"HourlyWeather_weatherForFewDaysMainContainer__JpwA8",weatherForFewDaysLittleContainer:"HourlyWeather_weatherForFewDaysLittleContainer__1tPdK",iconContainer:"HourlyWeather_iconContainer__18_ca",minutes:"HourlyWeather_minutes__1jG9J",temp:"HourlyWeather_temp__2WHin"}},262:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(35),c=t.n(o),i=(t(132),t(133),t(124)),l=t(20),s=t.n(l),u=(t(26),t(51)),m=t.n(u),d=function(e){return n.a.createElement("div",{className:m.a.mainWeatherContainer},e.currentWeather.map((function(e){return n.a.createElement("div",{key:e.city_name},n.a.createElement("div",{className:m.a.cityNameTitle},e.city_name),n.a.createElement("div",null,e.weather.description),n.a.createElement("div",{className:m.a.mainTemperatureValue},Math.round(e.temp),"\xb0"))})))},_=t(13),h=t.n(_),p=function(e){var a=function(e){var a=e.split(":");return+a[0]+3+":"+a[1]};return n.a.createElement("div",{className:h.a.mainWeatherContainer},e.currentWeather.map((function(e){return n.a.createElement("div",{className:h.a.flexContainer,key:e.app_temp},n.a.createElement("div",{className:h.a.text},"\u0410\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u0438\u0439 \u0442\u0438\u0441\u043a: ",n.a.createElement("b",null,Math.round(e.pres))),n.a.createElement("div",{className:h.a.text},"\u0421\u0445\u0456\u0434 \u0441\u043e\u043d\u0446\u044f: ",n.a.createElement("b",null,a(e.sunrise))),n.a.createElement("div",{className:h.a.text},"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u044f\u043a: ",n.a.createElement("b",null,e.app_temp,"\xb0")),n.a.createElement("div",{className:h.a.text},"\u0428\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0442\u0440\u0443: ",n.a.createElement("b",null,Math.round(e.wind_spd),"\u043a\u043c./\u0433\u043e\u0434.")),n.a.createElement("div",{className:h.a.text},"\u041d\u0430\u043f\u0440\u044f\u043c \u0432\u0456\u0442\u0440\u0443: ",n.a.createElement("b",null,e.wind_cdir_full)),n.a.createElement("div",{className:h.a.text},"\u0412\u0438\u0434\u0438\u043c\u0456\u0441\u0442\u044c: ",n.a.createElement("b",null,Math.round(e.vis),"\u043a\u043c.")),n.a.createElement("div",{className:h.a.text},"\u0417\u0430\u0445\u0456\u0434 \u0441\u043e\u043d\u0446\u044f: ",n.a.createElement("b",null,a(e.sunset))),n.a.createElement("div",{className:h.a.text},"\u0412\u0456\u0434\u043d\u043e\u0441\u043d\u0430 \u0432\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c: ",n.a.createElement("b",null,e.rh,"%")),n.a.createElement("div",{className:h.a.text},"\u0425\u043c\u0430\u0440\u043d\u0456\u0441\u0442\u044c: ",n.a.createElement("b",null,e.clouds,"%")),n.a.createElement("div",{className:h.a.text},"\u041e\u043f\u0430\u0434\u0438: ",n.a.createElement("b",null,e.precip,"\u043c\u043c/\u0433\u043e\u0434")))})))},E=t(109),g=t.n(E),y=t(110),v=t.n(y),f=function(e){var a=Object(r.useState)(!1),t=Object(i.a)(a,2),o=t[0],c=t[1],l=function(){c(!o)};return n.a.createElement("div",{className:s.a.page},n.a.createElement(d,{currentWeather:e.currentWeather}),!o&&n.a.createElement("div",{className:s.a.toogleButton}," ",n.a.createElement("span",{onClick:l},n.a.createElement("div",{className:s.a.arrowContainer}," ",n.a.createElement("img",{src:v.a,alt:"img"})))),o&&n.a.createElement("div",{className:s.a.openDescription},n.a.createElement(p,{currentWeather:e.currentWeather})),n.a.createElement("div",{className:s.a.pcMode},n.a.createElement(p,{currentWeather:e.currentWeather})),!o&&n.a.createElement("div",{className:s.a.closeDescription}),o&&n.a.createElement("div",{className:s.a.toogleButton}," ",n.a.createElement("span",{onClick:l},n.a.createElement("div",{className:s.a.arrowContainer}," ",n.a.createElement("img",{src:g.a,alt:"img"})))))},C=t(70),b=t.n(C),W=t(111),w=t(21),N=t(112),D="b53365960c064944b5b93c7f84ad25ca",x=N.create({baseURL:"https://api.weatherbit.io/v2.0/"},[]),M=function(e){return x.get("current?city=".concat(e,"&lang=uk&key=").concat(D))},O=function(e){return x.get("forecast/daily?city=".concat(e,"&lang=uk&key=").concat(D))},j={currentWeather:[],dailyWeatherContainer:[],hourlyWeatherContainer:[],someErrorOccured:!1,errorMessage:"",isFeaching:!1},k=function(e){return{type:"setError",text:e}},F=function(e){return function(){var a=Object(W.a)(b.a.mark((function a(t){var r,n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0!==e&&""!==e.trim()){a.next=4;break}t(k("\u041f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443 \u043c\u0456\u0441\u0442\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c:)")),a.next=12;break;case 4:return a.next=6,M(e);case 6:return r=a.sent,a.next=9,O(e);case 9:n=a.sent,t(T(!1)),200===r.status&&200===n.status?t((o=r.data.data,c=n.data.data,{type:"currentWeather",current:o,daily:c,hourly:void 0})):204===r.status||204===n.status?t(k("\u0414\u0430\u043d\u0435 \u043c\u0456\u0441\u0442\u043e \u043d\u0430\u0436\u0430\u043b\u044c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0435. \u041c\u043e\u0436\u043b\u0438\u0432\u043e \u0412\u0438 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043f\u043e\u043c\u0438\u043b\u043a\u0443. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u0449\u0435 \u0440\u0430\u0437. ")):t(k("\u041d\u0430\u0436\u0430\u043b\u044c \u0441\u0442\u0430\u043b\u0430\u0441\u044c \u044f\u043a\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u043f\u0456\u0437\u043d\u0456\u0448\u0435"));case 12:case"end":return a.stop()}var o,c}),a)})));return function(e){return a.apply(this,arguments)}}()},T=function(e){return{type:"preLoader",isFeaching:e}},H=t(8),I=t(6),P=t(25),S=Object(I.d)(P.e,Object(H.b)((function(e){return{currentWeather:e.main.currentWeather,hourlyWeatherContainer:e.main.hourlyWeatherContainer}}),{getCurrentWeather:F}))((function(e){return Object(r.useEffect)((function(){e.getCurrentWeather("\u041b\u044c\u0432\u0456\u0432")}),[]),n.a.createElement(f,{getCurrentWeather:e.getCurrentWeather,currentWeather:e.currentWeather,dailyWeatherContainer:e.dailyWeatherContainer,getHourlyWeather:e.getHourlyWeather,hourlyWeatherContainer:e.hourlyWeatherContainer})})),B=t(19),L=t.n(B),z=t(115),R=t.n(z),V=t(116),A=t.n(V),Y=t(264),G=t(263),J=t(125),U=t(117),q=t.n(U),K=function(e){var a=e.input,t=e.meta,r=Object(J.a)(e,["input","meta"]);return n.a.createElement("div",null,n.a.createElement("div",{className:t.error&&t.touched?q.a.error:null},n.a.createElement("input",Object.assign({},a,r))),n.a.createElement("div",null,t.error&&t.touched&&n.a.createElement("span",null,t.error)))},Q=Object(G.a)({form:"search"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:L.a.searchForm},n.a.createElement("div",{className:L.a.searchPlaceInputContainer},n.a.createElement(Y.a,{component:K,name:"search",placeholder:"...\u0412\u0435\u0434\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e"})),n.a.createElement("div",{className:L.a.searchIconDiv},n.a.createElement("button",null,n.a.createElement("div",{className:L.a.searchIconContainer},n.a.createElement("img",{src:A.a,alt:"img"})))))})),X=t(119),Z=t.n(X),$=t(40),ee=t.n($),ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#2581b7"},overlay:{zIndex:1e3}},te=function(e){return n.a.createElement(Z.a,{isOpen:e.modalIsOpen,onRequestClose:e.closeModal,ariaHideApp:!1,style:ae,contentLabel:"Cart Modal"},n.a.createElement("div",{className:ee.a.modal},n.a.createElement("div",null,n.a.createElement("span",{className:ee.a.button,onClick:e.closeModal},"\u2716")),n.a.createElement("div",{className:ee.a.text}," ",e.text),n.a.createElement("div",null,n.a.createElement("button",{className:ee.a.close,onClick:e.closeModal},"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"))))},re=function(e){return n.a.createElement("div",{className:L.a.page},n.a.createElement("div",{className:L.a.headerContainer},n.a.createElement("div",{className:L.a.logoContainer},n.a.createElement("img",{src:R.a,alt:"logo"})),n.a.createElement(Q,{onSubmit:function(a){e.getCurrentWeather(a.search)}})),n.a.createElement(te,{text:e.errorMessage,modalIsOpen:e.someErrorOccured,closeModal:e.deleteError}))},ne=Object(H.b)((function(e){return{currentWeather:e.main.currentWeather,someErrorOccured:e.main.someErrorOccured,errorMessage:e.main.errorMessage}}),{getCurrentWeather:F,deleteError:function(){return{type:"deleteError"}}})(re),oe=t(120),ce=t.n(oe),ie=t(15),le=t.n(ie),se=["\u041d\u0435\u0434\u0456\u043b\u044f","\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0421\u0435\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440","\u041f`\u044f\u0442\u043d\u0438\u0446\u044f","\u0421\u0443\u0431\u043e\u0442\u0430"],ue=function(e){return n.a.createElement("div",{className:le.a.dailyPage},n.a.createElement("hr",null),n.a.createElement("div",{className:le.a.dailyTitle},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 16 \u0434\u043d\u0456\u0432"),n.a.createElement("div",{className:le.a.weatherForFewDaysMainContainer},e.dailyWeatherContainer.map((function(e){return n.a.createElement("div",{className:le.a.oneDayContainer,key:e.datetime},n.a.createElement("div",{className:le.a.gridCont},se[new Date(e.datetime).getDay()]),n.a.createElement("div",{className:le.a.dataDiv},function(e){var a=(e=new Date(e)).getFullYear(),t=e.getMonth();(t=+t+1)<10&&(t="0"+t);var r=e.getDate()<10?"0"+e.getDate():e.getDate();return e=r+"."+t+"."+a}(e.datetime)),n.a.createElement("div",{className:le.a.iconContainer},n.a.createElement("img",{src:"https://www.weatherbit.io/static/img/icons/".concat(e.weather.icon,".png"),alt:"a"})),n.a.createElement("div",{className:le.a.gridCont},Math.round(e.high_temp),"\xb0"),n.a.createElement("div",{className:"".concat(le.a.gridCont,"+ ' ' + ").concat(le.a.darken," ")},Math.round(e.low_temp),"\xb0"))}))))},me=function(e){return n.a.createElement("div",{className:ce.a.page},n.a.createElement(ue,{dailyWeatherContainer:e.dailyWeatherContainer}))},de=Object(H.b)((function(e){return{dailyWeatherContainer:e.main.dailyWeatherContainer}}),{})(me),_e=t(121),he=t.n(_e),pe=t(122),Ee=t.n(pe),ge=t(75),ye=t.n(ge),ve=function(){return n.a.createElement("div",{className:ye.a.body},n.a.createElement("img",{className:ye.a.img,alt:"Loading...",src:"https://pascnet.org/wp-content/plugins/use-your-drive/css/clouds/cloud_loading_256.gif"}))};var fe=Object(H.b)((function(e){return{isFeaching:e.main.isFeaching}}),{})((function(e){return Object(r.useEffect)((function(){var e=(new Date).getHours();e<20&&e>7?(document.body.style.background="url(".concat(he.a,") no-repeat"),document.body.style.backgroundSize="cover"):(document.body.style.background="url(".concat(Ee.a,")"),document.body.style.backgroundSize="cover")}),[]),n.a.createElement("div",{className:"App"},e.isFeaching&&n.a.createElement(ve,null),n.a.createElement(ne,null),n.a.createElement(P.a,{path:"/weatherapp/",render:function(){return n.a.createElement(S,null)}}),n.a.createElement(de,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=t(123),be=t(265),We=Object(I.c)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"currentWeather":return Object(w.a)(Object(w.a)({},e),{},{currentWeather:a.current,dailyWeatherContainer:a.daily,hourlyWeatherContainer:a.hourly});case"setError":return Object(w.a)(Object(w.a)({},e),{},{someErrorOccured:!0,errorMessage:a.text});case"preLoader":return Object(w.a)(Object(w.a)({},e),{},{isFeaching:a.isFeaching});case"deleteError":return Object(w.a)(Object(w.a)({},e),{},{someErrorOccured:!1});default:return e}},form:be.a}),we=Object(I.e)(We,Object(I.a)(Ce.a)),Ne=t(49);c.a.render(n.a.createElement(H.a,{store:we},n.a.createElement(Ne.a,null,n.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,a,t){e.exports={modal:"ErrorModalWindow_modal__2cHda",button:"ErrorModalWindow_button__fAc5E",close:"ErrorModalWindow_close__3yp6C",text:"ErrorModalWindow_text__3jgV1"}},51:function(e,a,t){e.exports={mainWeatherContainer:"MainWeather_mainWeatherContainer__LejXC",cityNameTitle:"MainWeather_cityNameTitle__1npbt",mainTemperatureValue:"MainWeather_mainTemperatureValue__RSpiS"}},75:function(e,a,t){e.exports={body:"Preloader_body__2paEz",img:"Preloader_img__2qSca"}}},[[127,1,2]]]);
//# sourceMappingURL=main.02ad2eb9.chunk.js.map