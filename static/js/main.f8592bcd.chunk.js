(this["webpackJsonptraffic-lights"]=this["webpackJsonptraffic-lights"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(8),a=n.n(i),s=(n(13),n(3)),o=n(4),u=n(6),l=n(5),b=(n(14),n(15),n(2)),j=n.n(b),f=n(0),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.currentColor;return console.log("render .....",e),Object(f.jsxs)("div",{className:"trafficlights",children:[Object(f.jsx)("div",{className:j()("bulb","red",{active:0===e})}),Object(f.jsx)("div",{className:j()("bulb","orange",{active:2===e})}),Object(f.jsx)("div",{className:j()("bulb","blue",{active:1===e})})]})}}]),n}(r.Component),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).timers=6e4,e.state={currentColor:0,time_remaining:e.timers},setInterval((function(){e.setState({currentColor:e.getNextColor(e.state.currentColor),time_remaining:e.timers})}),e.timers),setInterval((function(){e.setState({time_remaining:e.state.time_remaining-1e3})}),1e3),e}return Object(o.a)(n,[{key:"getNextColor",value:function(e){switch(e){case 0:return 1;case 1:return 2;default:return 0}}},{key:"render",value:function(){var e=this.state,t=e.currentColor,n=e.time_remaining;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:j()("trafficlights_timer",{redback:0===t},{blueback:1===t},{orageback:2===t}),children:n/1e3}),Object(f.jsx)(m,{currentColor:t})]})}}]),n}(r.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(d,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.f8592bcd.chunk.js.map