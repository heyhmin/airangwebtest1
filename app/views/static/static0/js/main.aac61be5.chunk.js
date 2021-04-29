(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(27),r=n.n(s),c=n(14),o=(n(69),n(5)),i=n(6),l=n(13),d=n(8),u=n(7),h=n(18),j=n(4),m=(n(74),n(75),n(29)),b=n.n(m),g=n(22),O=n.n(g),v=n(30),p=n.n(v),f="REGISTER_SUCCESS",x="REGISTER_FAIL",N="LOGIN_SUCCESS",y="LOGIN_FAIL",k="LOGOUT",S="SET_MESSAGE",w="CLEAR_MESSAGE",C=n(21),L=n.n(C),E="${process.env.API_URL}/",I=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"login",value:function(e,t){return L.a.post(E+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n){return L.a.post(E+"signup",{username:e,email:t,password:n})}}]),e}()),U=n(0),B=function(e){if(!e)return Object(U.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(l.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(l.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(l.a)(a)),a.state={username:"",password:"",loading:!1},a}return Object(i.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),this.form.validateAll();var n,a,s=this.props,r=s.dispatch,c=s.history;0===this.checkBtn.context._errors.length?r((n=this.state.username,a=this.state.password,function(e){return I.login(n,a).then((function(t){return e({type:N,payload:{user:t}}),Promise.resolve()}),(function(t){var n=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:y}),e({type:S,payload:n}),Promise.reject()}))})).then((function(){c.push("/profile"),window.location.reload()})).catch((function(){t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.isLoggedIn,a=t.message;return n?Object(U.jsx)(j.a,{to:"/profile"}):Object(U.jsx)("div",{className:"col-md-12",children:Object(U.jsxs)("div",{className:"card card-container",children:[Object(U.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(U.jsxs)(b.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t},children:[Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"username",children:"Username"}),Object(U.jsx)(O.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[B]})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"password",children:"Password"}),Object(U.jsx)(O.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[B]})]}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(U.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(U.jsx)("span",{children:"Login"})]})}),a&&Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("div",{className:"alert alert-danger",role:"alert",children:a})}),Object(U.jsx)(p.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(a.Component);var A=Object(h.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,message:e.message.message}}))(P),T=n(62),M=function(e){if(!e)return Object(U.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},R=function(e){if(!Object(T.isEmail)(e))return Object(U.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},_=function(e){if(e.length<3||e.length>20)return Object(U.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},D=function(e){if(e.length<6||e.length>40)return Object(U.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleRegister=a.handleRegister.bind(Object(l.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(l.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(l.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(l.a)(a)),a.state={username:"",email:"",password:"",successful:!1},a}return Object(i.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t,n,a,s=this;e.preventDefault(),this.setState({successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&this.props.dispatch((t=this.state.username,n=this.state.email,a=this.state.password,function(e){return I.register(t,n,a).then((function(t){return e({type:f}),e({type:S,payload:t.data.message}),Promise.resolve()}),(function(t){var n=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:x}),e({type:S,payload:n}),Promise.reject()}))})).then((function(){s.setState({successful:!0})})).catch((function(){s.setState({successful:!1})}))}},{key:"render",value:function(){var e=this,t=this.props.message;return Object(U.jsx)("div",{className:"col-md-12",children:Object(U.jsxs)("div",{className:"card card-container",children:[Object(U.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(U.jsxs)(b.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"username",children:"Username"}),Object(U.jsx)(O.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[M,_]})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"email",children:"Email"}),Object(U.jsx)(O.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[M,R]})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"password",children:"Password"}),Object(U.jsx)(O.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[M,D]})]}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),t&&Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:t})}),Object(U.jsx)(p.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(a.Component);var G=Object(h.b)((function(e){return{message:e.message.message}}))(F);function J(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var W="${process.env.API_URL}/",$=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getPublicContent",value:function(){return L.a.get(W+"all")}},{key:"getUserBoard",value:function(){return L.a.get(W+"user",{headers:J()})}},{key:"getModeratorBoard",value:function(){return L.a.get(W+"mod",{headers:J()})}},{key:"getAdminBoard",value:function(){return L.a.get(W+"admin",{headers:J()})}}]),e}()),q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;$.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(U.jsx)("div",{className:"container",children:Object(U.jsx)("header",{className:"jumbotron",children:Object(U.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)("header",{className:"jumbotron",children:Object(U.jsxs)("h3",{children:[Object(U.jsx)("strong",{children:e.username})," Profile"]})}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(U.jsx)("strong",{children:"Authorities:"}),Object(U.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(U.jsx)("li",{children:e},t)}))})]}):Object(U.jsx)(j.a,{to:"/login"})}}]),n}(a.Component);var H=Object(h.b)((function(e){return{user:e.auth.user}}))(z),K=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;$.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(U.jsx)("div",{className:"container",children:Object(U.jsx)("header",{className:"jumbotron",children:Object(U.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;$.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(U.jsx)("div",{className:"container",children:Object(U.jsx)("header",{className:"jumbotron",children:Object(U.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;$.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(U.jsx)("div",{className:"container",children:Object(U.jsx)("header",{className:"jumbotron",children:Object(U.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),X=n(10),Y=Object(X.a)(),Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(l.a)(a)),a.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},Y.listen((function(t){e.dispatch({type:w})})),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.user;e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){this.props.dispatch((function(e){I.logout(),e({type:k})}))}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,a=e.showAdminBoard;return Object(U.jsx)(j.c,{history:Y,children:Object(U.jsxs)("div",{children:[Object(U.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(U.jsx)(c.b,{to:"/",className:"navbar-brand",children:"bezKoder"}),Object(U.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(c.b,{to:"/home",className:"nav-link",children:"Home"})}),n&&Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(c.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),a&&Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(c.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(c.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(U.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(c.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(U.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(c.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(c.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(U.jsx)("div",{className:"container mt-3",children:Object(U.jsxs)(j.d,{children:[Object(U.jsx)(j.b,{exact:!0,path:["/","/home"],component:q}),Object(U.jsx)(j.b,{exact:!0,path:"/login",component:A}),Object(U.jsx)(j.b,{exact:!0,path:"/register",component:G}),Object(U.jsx)(j.b,{exact:!0,path:"/profile",component:H}),Object(U.jsx)(j.b,{path:"/user",component:K}),Object(U.jsx)(j.b,{path:"/mod",component:Q}),Object(U.jsx)(j.b,{path:"/admin",component:V})]})})]})})}}]),n}(a.Component);var ee=Object(h.b)((function(e){return{user:e.auth.user}}))(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(20),ne=n(63),ae=n(64),se=n(17),re=JSON.parse(localStorage.getItem("user")),ce=re?{isLoggedIn:!0,user:re}:{isLoggedIn:!1,user:null},oe={},ie=Object(te.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:case x:return Object(se.a)(Object(se.a)({},e),{},{isLoggedIn:!1});case N:return Object(se.a)(Object(se.a)({},e),{},{isLoggedIn:!0,user:a.user});case y:case k:return Object(se.a)(Object(se.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S:return{message:a};case w:return{message:""};default:return e}}}),le=[ae.a],de=Object(te.createStore)(ie,Object(ne.composeWithDevTools)(te.applyMiddleware.apply(void 0,le)));r.a.render(Object(U.jsx)(c.a,{children:Object(U.jsx)(h.a,{store:de,children:Object(U.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,n){},75:function(e,t,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.aac61be5.chunk.js.map