(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{269:function(e,t,n){},285:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return o})},530:function(e,t,n){"use strict";n.r(t);var a=n(285),o=n(14),r=n(15),c=n(17),i=n(16),u=n(18),s=n(0),l=n.n(s),p=(n(269),n(292)),m=n.n(p),d=n(242),f=(n(69),n(254)),b=m.a.UserName,h=m.a.Password,g=m.a.Mobile,y=m.a.Captcha,w=m.a.Submit,v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(u)))).state={notice:"",type:"tab1",autoLogin:!0},n.onSubmit=function(e,t){"tab1"===n.state.type&&n.setState({notice:""},function(){if(!e&&("\u8bf7\u8f93\u5165\u8d26\u53f7"!==t.username||"\u8bf7\u8f93\u5165\u5bc6\u7801"!==t.password)){console.log("value collected ->",Object(a.a)({},t,{autoLogin:n.state.autoLogin}));var o=t.username,r=t.password,c=t.password2;t.mobile;f.post("http://surenjun.com:3131/forget",{name:o,password:r,newPassword:c}).then(function(e){var t=e.data;t.success?(d.a.success("\u5bc6\u7801\u4fee\u6539\u6210\u529f",1),setTimeout(function(){var e=d.a.loading("\u5373\u5c06\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762",0);setTimeout(function(){e(),n.props.history.push("/Login")},1e3)},1e3)):t.isReg?d.a.error("\u539f\u5bc6\u7801\u8f93\u5165\u4e0d\u6b63\u786e\uff01"):d.a.error("\u7528\u6237\u540d\u4e0d\u5b58\u5728\uff01")})}})},n.onTabChange=function(e){n.setState({type:e})},n.changeAutoLogin=function(e){n.setState({autoLogin:e.target.checked})},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=document.body.clientHeight+"px";document.documentElement.style.setProperty("--userHeight",e)}},{key:"render",value:function(){return l.a.createElement("div",{id:"container-login"},l.a.createElement(m.a,{style:{width:"400px"},defaultActiveKey:this.state.type,onTabChange:this.onTabChange,onSubmit:this.onSubmit},l.a.createElement("div",null,l.a.createElement("p",{style:{fontSize:"18px",color:"#999"}},"\u4fee\u6539\u8d26\u53f7"),l.a.createElement(b,{name:"username",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7"}),l.a.createElement(h,{name:"password",placeholder:"\u539f\u5bc6\u7801"}),l.a.createElement(h,{name:"password1",placeholder:"\u65b0\u5bc6\u7801"}),l.a.createElement(h,{name:"password2",placeholder:"\u786e\u8ba4\u65b0\u5bc6\u7801"}),l.a.createElement(g,{name:"mobile",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}),l.a.createElement(y,{placeholder:"\u9a8c\u8bc1\u7801",onGetCaptcha:function(){return console.log("Get captcha!")},name:"\u9a8c\u8bc1\u7801"})),l.a.createElement(w,null,"\u786e\u8ba4\u4fee\u6539")))}}]),t}(s.Component);t.default=v}}]);