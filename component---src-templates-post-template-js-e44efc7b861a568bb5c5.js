(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{J4bc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return D}));var n=a("q1tI"),o=a.n(n),r=a("Zttt"),s=a("Wbzz"),l=a("7Qib"),i=a("d+ly"),u=a.n(i),c=a("gGy4"),m=function(){var e=Object(c.b)().author;return o.a.createElement("div",{className:u.a.author},o.a.createElement("p",{className:u.a.author__bio},e.bio,o.a.createElement("a",{className:u.a["author__bio-twitter"],href:Object(l.a)("github",e.contacts.github),rel:"noopener noreferrer",target:"_blank"},o.a.createElement("strong",null,e.name)," on Github")))},d=a("RPjP"),p=a.n(d),f=function(e){var t=e.postTitle,a=e.postSlug,n=Object(c.b)(),r=n.url,s=n.disqusShortname;return s?o.a.createElement(p.a,{shortname:s,identifier:t,title:t,url:r+a}):null},_=a("Mvws"),g=a.n(_),b=a("6ldB"),h=a.n(b),y=function(e){var t=e.body,a=e.title;return o.a.createElement("div",{className:g.a.content},o.a.createElement("h1",{className:g.a.content__title},a),o.a.createElement("div",{className:g.a.content__adsense},o.a.createElement(h.a.Google,{client:"ca-pub-8178483925350112",slot:"9831022320",style:{display:"block"},format:"auto",responsive:"true"}),o.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"),o.a.createElement(h.a.Google,{client:"ca-pub-8178483925350112",slot:"3457185660",style:{display:"block"},format:"auto",responsive:"true"}),o.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");")),o.a.createElement("div",{className:g.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},v=a("wd/R"),w=a.n(v),E=a("myfg"),N=a.n(E),k=function(e){var t=e.date;return o.a.createElement("div",{className:N.a.meta},o.a.createElement("p",{className:N.a.meta__date},"Published ",w()(t).format("D MMM YYYY")))},O=a("WXWR"),j=a.n(O),P=function(e){var t=e.tags,a=e.tagSlugs;return o.a.createElement("div",{className:j.a.tags},o.a.createElement("ul",{className:j.a.tags__list},a&&a.map((function(e,a){return o.a.createElement("li",{className:j.a["tags__list-item"],key:t[a]},o.a.createElement(s.Link,{to:e,className:j.a["tags__list-item-link"]},t[a]))}))))},q=a("gt/k"),S=a.n(q),T=function(e){var t=e.post,a=t.html,n=t.fields,r=n.tagSlugs,l=n.slug,i=t.frontmatter,u=i.tags,c=i.title,d=i.date;return o.a.createElement("div",{className:S.a.post},o.a.createElement(s.Link,{className:S.a["post__home-button"],to:"/"},"All Articles"),o.a.createElement("div",{className:S.a.post__content},o.a.createElement(y,{body:a,title:c})),o.a.createElement("div",{className:S.a.post__footer},o.a.createElement(k,{date:d}),u&&r&&o.a.createElement(P,{tags:u,tagSlugs:r}),o.a.createElement(m,null)),o.a.createElement(h.a.Google,{client:"ca-pub-8178483925350112",slot:"4028849540",format:"auto",style:{display:"block"},responsive:"true",className:S.a.post__adsense}),o.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"),o.a.createElement("div",{className:S.a.post__comments},o.a.createElement(f,{postSlug:l,postTitle:t.frontmatter.title})))},D="1848161170";t.default=function(e){var t=e.data,a=Object(c.b)(),n=a.title,s=a.subtitle,l=t.markdownRemark.frontmatter,i=l.title,u=l.description,m=l.socialImage,d=null!==u?u:s,p=void 0!==m?m.publicURL:void 0;return o.a.createElement(r.a,{title:i+" - "+n,description:d,socialImage:p},o.a.createElement(T,{post:t.markdownRemark}))}},Mvws:function(e,t,a){e.exports={content:"Content-module--content--1tfQQ",content__title:"Content-module--content__title--1qFLI",content__adsense:"Content-module--content__adsense--2etgT",content__body:"Content-module--content__body--2bfha"}},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";a("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=l(a("q1tI")),s=l(a("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(e,t){var a=t.onNewComment,n=t.language,o=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var r in o)e.page[r]=o[r];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var p=function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return c.some((function(e){return e===a}))?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return r.default.createElement("div",t,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(r.default.Component);p.displayName="DisqusThread",p.propTypes={id:s.default.string,shortname:s.default.string.isRequired,identifier:s.default.string,title:s.default.string,url:s.default.string,category_id:s.default.string,onNewComment:s.default.func,language:s.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},WXWR:function(e,t,a){e.exports={tags:"Tags-module--tags--1oNz4",tags__list:"Tags-module--tags__list--2UTD-","tags__list-item":"Tags-module--tags__list-item--b7tap","tags__list-item-link":"Tags-module--tags__list-item-link--1hQL0"}},"d+ly":function(e,t,a){e.exports={author:"Author-module--author--2kf8a","author__bio-twitter":"Author-module--author__bio-twitter--MufFK"}},"gt/k":function(e,t,a){e.exports={post__footer:"Post-module--post__footer--1BvmJ",post__comments:"Post-module--post__comments--2T8dL",post__adsense:"Post-module--post__adsense--gscF4","post__home-button":"Post-module--post__home-button--3zx_9"}},myfg:function(e,t,a){e.exports={meta__date:"Meta-module--meta__date--3FNDv"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-e44efc7b861a568bb5c5.js.map