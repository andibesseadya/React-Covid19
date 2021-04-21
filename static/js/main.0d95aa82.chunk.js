(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{43:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(33),s=a.n(r),d=(a(43),a(18)),i=a(10),o=a(22),l=a(21),j=a(15),h=a.n(j),b=(a(32),a(62),a(13)),u=a.n(b),m=a(88),v=a(87),x=a(2),O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(d.a)(this,a),(c=t.call(this,e)).fetchCountries=function(){h.a.get("https://covid19.mathdro.id/api/countries").then((function(e){c.setState({countries:e.data.countries})}))},c.handleChange=function(e){var t=e.target.value;c.props.handleCountryChange(t)},c.state={countries:[],country:""},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchCountries()}},{key:"render",value:function(){return Object(x.jsx)("center",{children:Object(x.jsx)(m.a,{children:Object(x.jsxs)(v.a,{onChange:this.handleChange,children:[Object(x.jsx)("option",{children:"Select Country..."}),this.state.countries.map((function(e){return Object(x.jsx)("option",{value:e.name,children:e.name},e.name)}))]})})})}}]),a}(c.Component),f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(d.a)(this,a),(c=t.call(this,e)).handleCountryChange=function(e){h.a.get("https://covid19.mathdro.id/api/countries/"+e).then((function(e){c.setState({confirm:e.data.confirmed.value,deaths:e.data.deaths.value,recovered:e.data.recovered.value,lastupdate:e.data.lastUpdate})}))},c.getData=function(){h.a.get("https://covid19.mathdro.id/api").then((function(e){c.setState({confirmGlobal:e.data.confirmed.value,deathsGlobal:e.data.deaths.value,recoveredGlobal:e.data.recovered.value,lastupdateGlobal:e.data.lastUpdate})})).catch((function(e){console.log(e.response)}))},c.state={confirmGlobal:null,deathsGlobal:null,recoveredGlobal:null,confirm:null,deaths:null,recovered:null,lastupdate:null,country:null},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(x.jsx)(n.a.Fragment,{children:Object(x.jsxs)("div",{className:"corona-body",children:[Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"name",children:Object(x.jsx)("center",{children:"Covid-19 Tracker"})})}),Object(x.jsx)("center",{children:Object(x.jsx)("p",{className:"lastupdate",children:Object(x.jsxs)("u",{children:["last update: ",new Date(this.state.lastupdate).toDateString()]})})})]}),Object(x.jsxs)("div",{className:"card-deck card-decks",children:[Object(x.jsxs)("div",{className:"card confirm box",children:[Object(x.jsx)("div",{className:"card-title c-title",children:Object(x.jsx)("center",{children:"Confirmed"})}),Object(x.jsx)("div",{className:"card-body c-body text-center",children:Object(x.jsx)(u.a,{start:0,end:this.state.confirmGlobal,duration:1,separator:",",className:"number"})})]}),Object(x.jsxs)("div",{className:"card recovered box",children:[Object(x.jsx)("div",{className:"card-title c-title",children:Object(x.jsx)("center",{children:"Recovered"})}),Object(x.jsx)("div",{className:"card-body c-body text-center",children:Object(x.jsx)(u.a,{start:0,end:this.state.recoveredGlobal,duration:1,separator:",",className:"number"})})]}),Object(x.jsxs)("div",{className:"card deaths box",children:[Object(x.jsx)("div",{className:"card-title c-title",children:Object(x.jsx)("center",{children:"Deaths"})}),Object(x.jsx)("div",{className:"card-body c-body text-center",children:Object(x.jsx)(u.a,{start:0,end:this.state.deathsGlobal,duration:1,separator:",",className:"number"})})]})]}),Object(x.jsx)(O,{handleCountryChange:this.handleCountryChange}),Object(x.jsxs)("div",{className:"card-deck card-decks",children:[Object(x.jsxs)("div",{className:"card confirm box",children:[Object(x.jsx)("div",{className:"card-title c-title",children:Object(x.jsx)("center",{children:"Confirmed"})}),Object(x.jsx)("div",{className:"card-body c-body text-center",children:Object(x.jsx)(u.a,{start:0,end:this.state.confirm,duration:1,separator:",",className:"number"})})]}),Object(x.jsxs)("div",{className:"card recovered box",children:[Object(x.jsx)("div",{className:"card-title c-title",children:Object(x.jsx)("center",{children:"Recovered"})}),Object(x.jsx)("div",{className:"card-body c-body text-center",children:Object(x.jsx)(u.a,{start:0,end:this.state.recovered,duration:1,separator:",",className:"number"})})]}),Object(x.jsxs)("div",{className:"card deaths box",children:[Object(x.jsx)("div",{className:"card-title c-title",children:Object(x.jsx)("center",{children:"Deaths"})}),Object(x.jsx)("div",{className:"card-body c-body text-center",children:Object(x.jsx)(u.a,{start:0,end:this.state.deaths,duration:1,separator:",",className:"number"})})]})]})]})})}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.0d95aa82.chunk.js.map