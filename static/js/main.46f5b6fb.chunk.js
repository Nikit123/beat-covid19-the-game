(this.webpackJsonpBeat_Covid19_Game=this.webpackJsonpBeat_Covid19_Game||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/covid.2c352da4.svg"},,function(e,t,a){e.exports=a.p+"static/media/globe.5bde68a7.png"},function(e,t,a){e.exports=a.p+"static/media/moving_covid.ab4c37e8.png"},function(e,t,a){e.exports=a.p+"static/media/lab.3b693303.png"},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),c=a.n(l),r=(a(23),a(24),a(13)),i=a.n(r),s=a(9),m=a(10),d=a(12),u=a(11),v=a(15),h=a.n(v),f=a(16),E=a.n(f),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).bounce=function(){var e=n.state.cellDetails;e.vectorX=-e.vectorX,e.vectorY=-e.vectorY,n.setState({cellDetails:e})},n.updateCell=function(){var e=n.state.cellDetails;e.x=e.x+e.vectorX,e.y=e.y+e.vectorY,0==e.vectorX&&0==e.vectorY||n.setState({cellDetails:e})},n.generateCell=function(){var e=Math.ceil(0),t=Math.ceil(document.getElementsByClassName("Header")[0].clientHeight),a=Math.floor(document.getElementsByClassName("Game-body")[0].clientWidth),n=Math.floor(document.getElementsByClassName("Game-body")[0].clientHeight);return{x:Math.floor(Math.random()*(a-e+1)+e),y:Math.floor(Math.random()*(n-t+1)+t),vectorX:0==Math.floor(2*Math.random())?-1:1,vectorY:0==Math.floor(2*Math.random())?-1:1}},n.isCollideWithEarth=function(e){var t=document.getElementsByClassName("Earth")[0];return!(e.x<t.offsetLeft-t.clientWidth/2||e.y<t.offsetTop-t.clientHeight/2||e.x>t.offsetLeft+t.clientWidth/2||e.y>t.offsetTop+t.clientHeight/2)},n.componentDidMount=function(){var e=n.generateCell();n.setState({cellDetails:e})},n.componentDidUpdate=function(){var e=document.getElementsByClassName("Game-body")[0],t=n.state.cellDetails;n.isCollideWithEarth(t)?(t.vectorX=0,t.vectorY=0,n.props.increaseInfection()):(t.x<0&&1!=t.vectorX&&(t.vectorX=1),t.x>e.clientWidth&&-1!=t.vectorX&&(t.vectorX=-1),t.y<document.getElementsByClassName("Header")[0].clientHeight&&1!=t.vectorY&&(t.vectorY=1),t.y>e.clientHeight&&-1!=t.vectorY&&(t.vectorY=-1)),t!=n.state.cellDetails&&n.setState({cellDetails:t}),window.requestAnimationFrame(n.updateCell)},n.state={cellDetails:{x:0,y:0,vectorX:0,vectorY:0}},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.cellDetails;return o.a.createElement("img",{src:E.a,className:"Cell",id:this.props.idProp,onMouseOver:function(){e.bounce()},style:{left:t.x.toString()+"px",top:t.y.toString()+"px"}})}}]),a}(n.Component),p=a(17),y=a.n(p),b=a(3),C=a(8),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={covidCells:[],gameStart:!1,welcomeModal:!1,noEscapeModal:!1,vaccineProgress:0,vaccineAvailable:!1,doomsDayCounter:0,gameOver:!1},e.componentDidMount=function(){e.setState({welcomeModal:!0})},e.createCorona=function(){for(var t=[],a=0;a<10;a++)t.push(o.a.createElement(g,{idProp:a.toString(),increaseInfection:e.increaseInfection}));e.setState({covidCells:t})},e.updateVaccineProgress=function(){var t=e.state.vaccineProgress;t+=2,e.setState({vaccineProgress:t}),t>=100&&e.setState({vaccineAvailable:!0})},e.increaseInfection=function(){var t=e.state.doomsDayCounter;t<3&&t++,t>=3&&e.setState({gameOver:!0}),e.setState({doomsDayCounter:t})},e.startGame=function(){e.setState({welcomeModal:!1}),e.createCorona()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.state.welcomeModal&&o.a.createElement(b.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.state.welcomeModal},o.a.createElement(b.a.Header,null,o.a.createElement(b.a.Title,null,"Beat Covid-19 (The Game)")),o.a.createElement(b.a.Body,null,"Welcome! This is a simple mini game, where you are a doctor/scientist who tries to protect Earth from deadly covid-19 virus while trying to develop a vaccine at the same time. Defend Earth by bouncing back covid virus cells, also try to visit the lab and research vaccine by clicking. Try to develop vaccine before 3 cells infect earth. The fate of human race is in your hands!"),o.a.createElement(b.a.Footer,null,o.a.createElement(C.a,{variant:"secondary",onClick:function(){e.setState({noEscapeModal:!0})}},"Maybe later?"),o.a.createElement(C.a,{variant:"primary",onClick:function(){e.startGame()}},"Save the World!"))),this.state.noEscapeModal&&o.a.createElement(b.a,{show:this.state.noEscapeModal},o.a.createElement(b.a.Header,null,o.a.createElement(b.a.Title,null,"Are you kidding?")),o.a.createElement(b.a.Body,null,"We understand you clicked that button by mistake. Get back now."),o.a.createElement(b.a.Footer,null,o.a.createElement(C.a,{variant:"primary",onClick:function(){e.setState({noEscapeModal:!1})}},"Sorry, take me back."))),this.state.vaccineAvailable?o.a.createElement(b.a,{show:this.state.vaccineAvailable},o.a.createElement(b.a.Header,null,o.a.createElement(b.a.Title,null,"We did it!")),o.a.createElement(b.a.Body,null,"You managed to develop a vaccine in time. Humanity is saved!"),o.a.createElement(b.a.Footer,null,o.a.createElement(C.a,{variant:"primary",onClick:function(){window.location.reload()}},"Wohoo!"))):this.state.covidCells,this.state.gameOver&&o.a.createElement(b.a,{show:this.state.gameOver},o.a.createElement(b.a.Header,null,o.a.createElement(b.a.Title,null,"Oops!")),o.a.createElement(b.a.Body,null,"Earth has been devastated by Covid-19."),o.a.createElement(b.a.Footer,null,o.a.createElement(C.a,{variant:"primary",onClick:function(){window.location.reload()}}," Please, let me start again."))),o.a.createElement("figure",{className:"Earth"},o.a.createElement("figcaption",{style:{color:"cornflowerblue"}},"Lives left : ",3-this.state.doomsDayCounter),o.a.createElement("img",{src:h.a,style:{height:"15vmin"},alt:"Earth"})),o.a.createElement("figure",{className:"Lab"},o.a.createElement("figcaption",{style:{color:"cornflowerblue"}},"Vaccine progress : ",this.state.vaccineProgress," % "),o.a.createElement("img",{src:y.a,alt:"Lab",style:{height:"25vmin"},onClick:function(){e.updateVaccineProgress()}})))}}]),a}(n.Component);var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Header"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4",style:{marginTop:"1%"}},o.a.createElement("img",{src:i.a,className:"Header-logo",alt:"covid"})),o.a.createElement("div",{className:"col-sm-4",style:{color:"cadetblue",marginTop:"1%"}},o.a.createElement("h1",null,"Beat COVID-19 (The Game)")),o.a.createElement("div",{className:"col-sm-4",style:{marginTop:"1%"}},o.a.createElement("img",{src:i.a,className:"Header-logo",alt:"covid"})))),o.a.createElement("div",{className:"Game-body"},o.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.46f5b6fb.chunk.js.map