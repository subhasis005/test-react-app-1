(this.webpackJsonptestreactapp1=this.webpackJsonptestreactapp1||[]).push([[0],{34:function(e,t,n){e.exports=n(62)},39:function(e,t,n){},40:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(30),c=n.n(r),o=(n(39),n(40),n(2)),i=n(3),u=n(5),s=n(4),m=n(11),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/page1"},"Page 1")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/page2"},"Page 2")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/page3"},"Page 3")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/page4"},"Page 4"))))}}]),n}(a.Component),h=n(6),v=n(13),E=n.n(v),d=n(16),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={title:"",description:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://mathsonline.mptprime.com/testmails?metaslug="+this.props.slug;E.a.get(t).then((function(t){var n=t.data,a=n.title,l=n.description;e.setState({title:a,description:l})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement("title",null,this.state.title),l.a.createElement("meta",{name:"description",content:this.state.description})))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={posts:[],isloaded:!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){var n=t.data;e.setState({posts:n,isloaded:!0})})).catch((function(e){console.log(e),alert("Something went wrong!")}))}},{key:"render",value:function(){var e=this.state.posts.map((function(e,t){var n="/post/"+e.id;return l.a.createElement("li",{key:t},l.a.createElement(m.b,{to:n},e.title))})),t=this.state.isloaded;return console.log(t),l.a.createElement("div",null,l.a.createElement(b,{slug:"page_1"}),t?l.a.createElement("ol",null,e):l.a.createElement("p",null,"Please wait..."))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).interval="",e.state={counter:10},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.counter;this.interval=setInterval((function(){0===(t-=1)&&clearInterval(e.interval),e.setState({counter:t})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.counter;return 0===e?l.a.createElement(h.a,{to:"/page4"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{slug:"page_2"}),l.a.createElement("div",null,l.a.createElement("h1",null,e)))}}]),n}(a.Component),j=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={albums:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://jsonplaceholder.typicode.com/albums").then((function(t){var n=t.data.splice(0,5);e.setState({albums:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.albums.map((function(e,t){return l.a.createElement("li",{key:t},e.title)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,e))}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{slug:"page_3"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Page 3"),l.a.createElement(j,null)))}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{slug:"page_4"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Page 4")))}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{slug:"home"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Home")))}}]),n}(a.Component),_=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"404 Not Found"))}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a,l=e.match;Object(o.a)(this,n),a=t.call(this);var r=l.params.id;return a.state={post_id:r,post_title:"",post_details:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://jsonplaceholder.typicode.com/posts/"+this.state.post_id;E.a.get(t).then((function(t){var n=t.data,a=n.title,l=n.body;e.setState({post_title:a,post_details:l})})).catch((function(e){alert("Something went wrong!")}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement("title",null,this.state.post_title),l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("meta",{name:"description",content:this.state.post_details})),l.a.createElement("div",null,l.a.createElement("h1",null,this.state.post_title),l.a.createElement("p",null,this.state.post_details)))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:k}),l.a.createElement(h.b,{path:"/page1",component:f}),l.a.createElement(h.b,{path:"/page2",component:g}),l.a.createElement(h.b,{path:"/page3",component:O}),l.a.createElement(h.b,{path:"/page4",component:y}),l.a.createElement(h.b,{exact:!0,path:"/post/:id",component:w}),l.a.createElement(h.b,{component:_}))}}]),n}(a.Component);var S=function(){return l.a.createElement(m.a,null,l.a.createElement(p,null),l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.5383367c.chunk.js.map