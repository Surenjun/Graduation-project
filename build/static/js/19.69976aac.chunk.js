(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{259:function(e,t,a){},522:function(e,t,a){"use strict";a.r(t);var n=a(269),o=a(14),c=a(15),r=a(18),i=a(16),l=a(17),s=a(0),u=a.n(s),p=(a(259),a(272)),m=a.n(p),d=a(242),h=a(23),b=a(255),y=m.a.UserName,f=m.a.Password,g=m.a.Mobile,w=m.a.Captcha,E=m.a.Submit,v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={notice:"",type:"tab1",autoLogin:!0},a.onSubmit=function(e,t){"tab1"===a.state.type&&a.setState({notice:""},function(){if(!e&&("\u8bf7\u8f93\u5165\u8d26\u53f7"!==t.username||"\u8bf7\u8f93\u5165\u5bc6\u7801"!==t.password)){console.log("value collected ->",Object(n.a)({},t,{autoLogin:a.state.autoLogin}));var o=t.username,c=t.password,r=t.mobile;b.post("http://surenjun.com:3131/register",{name:o,password:c,phone:r}).then(function(e){var t=e.data;console.log(t),t.sameName&&d.a.error("\u8be5\u7528\u6237\u540d\u5df2\u7ecf\u88ab\u6ce8\u518c"),t.success&&(d.a.success("\u6ce8\u518c\u6210\u529f",1),setTimeout(function(){var e=d.a.loading("\u9875\u9762\u5373\u5c06\u8df3\u8f6c\u5230\u4e3b\u9875",0);setTimeout(function(){e(),a.props.history.push("/")},1e3)},1e3))})}})},a.onTabChange=function(e){a.setState({type:e})},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=document.body.clientHeight+"px";document.documentElement.style.setProperty("--userHeight",e)}},{key:"render",value:function(){return u.a.createElement("div",{id:"container-login"},u.a.createElement(m.a,{style:{width:"400px"},defaultActiveKey:this.state.type,onTabChange:this.onTabChange,onSubmit:this.onSubmit},u.a.createElement("div",null,u.a.createElement("p",{style:{fontSize:"18px",color:"#999"}},"\u8d26\u53f7\u6ce8\u518c"),u.a.createElement(y,{name:"username",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7"}),u.a.createElement(f,{name:"password",placeholder:"\u5bc6\u7801"}),u.a.createElement(f,{name:"password1",placeholder:"\u786e\u8ba4\u5bc6\u7801"}),u.a.createElement(g,{name:"mobile",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}),u.a.createElement(w,{placeholder:"\u9a8c\u8bc1\u7801",onGetCaptcha:function(){return console.log("Get captcha!")},name:"\u9a8c\u8bc1\u7801"})),u.a.createElement(E,null,"\u6ce8\u518c"),u.a.createElement("div",null,"\u5176\u4ed6\u6ce8\u518c\u65b9\u5f0f",u.a.createElement("span",{id:"icon"},u.a.createElement(h.a,{type:"alipay-circle",id:"alipay"}),u.a.createElement(h.a,{type:"weibo-circle",id:"weibo"}),u.a.createElement(h.a,{type:"wechat",id:"wechat"})))))}}]),t}(s.Component);t.default=v}}]);