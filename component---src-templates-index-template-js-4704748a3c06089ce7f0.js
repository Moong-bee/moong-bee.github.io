/*! For license information please see component---src-templates-index-template-js-4704748a3c06089ce7f0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),r=a("iSRb"),o=a.n(r),m=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:o.a.author},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:Object(l.withPrefix)(t.photo),className:o.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?i.a.createElement("h1",{className:o.a.author__title},i.a.createElement(l.Link,{className:o.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:o.a.author__title},i.a.createElement(l.Link,{className:o.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:o.a.author__subtitle},t.bio))},c=a("7Qib"),s=a("euHg"),_=a.n(s),u=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:_.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),p=a.n(d),f=function(e){var t=e.contacts;return i.a.createElement("div",{className:p.a.contacts},i.a.createElement("ul",{className:p.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:p.a["contacts__list-item"],key:e},i.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(c.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(u,{name:e,icon:Object(c.b)(e)}))):null}))))},g=a("Nrk+"),h=a.n(g),v=function(e){var t=e.copyright;return i.a.createElement("div",{className:h.a.copyright},t)},b=a("je8k"),E=a.n(b),k=function(e){var t=e.menu;return i.a.createElement("nav",{className:E.a.menu},i.a.createElement("ul",{className:E.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:E.a["menu__list-item"],key:e.path},i.a.createElement(l.Link,{to:e.path,className:E.a["menu__list-item-link"],activeClassName:E.a["menu__list-item-link--active"]},e.label))}))))},N=a("SySy"),x=a.n(N),P=a("gGy4"),y=function(e){var t=e.isIndex,a=Object(P.b)(),n=a.author,l=a.copyright,r=a.menu;return i.a.createElement("div",{className:x.a.sidebar},i.a.createElement("div",{className:x.a.sidebar__inner},i.a.createElement(m,{author:n,isIndex:t}),i.a.createElement(k,{menu:r}),i.a.createElement(f,{contacts:n.contacts}),i.a.createElement(v,{copyright:l})))}},"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--Bm0MP","feed__item-title":"Feed-module--feed__item-title--34sOw","feed__item-title-link":"Feed-module--feed__item-title-link--2qfTF","feed__item-description":"Feed-module--feed__item-description--2_Zuy","feed__item-meta-time":"Feed-module--feed__item-meta-time--3hc6b","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--2GeAw","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--lAu1I","feed__item-readmore":"Feed-module--feed__item-readmore--rMfbv","feed__item-thumbnail":"Feed-module--feed__item-thumbnail--2bRZb","feed__item-cont":"Feed-module--feed__item-cont--1FYID"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),i=a.n(n),l=a("wd/R"),r=a.n(l),o=a("Wbzz"),m=a("1xLx"),c=a.n(m),s=function(e){var t=e.edges;return i.a.createElement("div",{className:c.a.feed},t.map((function(e){return i.a.createElement("div",{className:c.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:c.a["feed__item-thumbnail"]},i.a.createElement("img",{src:e.node.frontmatter.socialImage.publicURL})),i.a.createElement("div",{className:c.a["feed__item-cont"]},i.a.createElement("div",{className:c.a["feed__item-meta"]},i.a.createElement("time",{className:c.a["feed__item-meta-time"],dateTime:r()(e.node.frontmatter.date).format("MMMM D, YYYY")},r()(e.node.frontmatter.date).format("DD MMMM YYYY")),i.a.createElement("span",{className:c.a["feed__item-meta-divider"]}),i.a.createElement("span",{className:c.a["feed__item-meta-category"]},i.a.createElement(o.Link,{to:e.node.fields.categorySlug,className:c.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),i.a.createElement("h2",{className:c.a["feed__item-title"]},i.a.createElement(o.Link,{className:c.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:c.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(o.Link,{className:c.a["feed__item-readmore"],to:e.node.fields.slug},"Read")))})))}},"999l":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return _}));var n=a("q1tI"),i=a.n(n),l=a("Zttt"),r=a("/d1K"),o=a("6V6j"),m=a("RXmK"),c=a("v0M6"),s=a("gGy4"),_="775228009";t.default=function(e){var t=e.data,a=e.pageContext,n=Object(s.b)(),_=n.title,u=n.subtitle,d=a.currentPage,p=a.hasNextPage,f=a.hasPrevPage,g=a.prevPagePath,h=a.nextPagePath,v=t.allMarkdownRemark.edges,b=d>0?"Posts - Page "+d+" - "+_:_;return i.a.createElement(l.a,{title:b,description:u},i.a.createElement(r.a,{isIndex:!0}),i.a.createElement(m.a,null,i.a.createElement(o.a,{edges:v}),i.a.createElement(c.a,{prevPagePath:g,nextPagePath:h,hasPrevPage:f,hasNextPage:p})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1YLES"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--V2155",page__inner:"Page-module--page__inner--3xzwp",page__title:"Page-module--page__title--t1zKX",page__body:"Page-module--page__body--1A7TB"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),r=a.n(l),o=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)((function(){l.current.scrollIntoView()})),i.a.createElement("div",{ref:l,className:r.a.page},i.a.createElement("div",{className:r.a.page__inner},t&&i.a.createElement("h1",{className:r.a.page__title},t),i.a.createElement("div",{className:r.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--1zM7S",sidebar__inner:"Sidebar-module--sidebar__inner--2Tprz"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--3T_m0",pagination__prev:"Pagination-module--pagination__prev--3tRFv","pagination__prev-link":"Pagination-module--pagination__prev-link--2vesn","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--1Fxw2",pagination__next:"Pagination-module--pagination__next--19bJd","pagination__next-link":"Pagination-module--pagination__next-link--3ln7y","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--AsM50"}},UbMB:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===l)for(var r in n)a.call(n,r)&&n[r]&&e.push(this&&this[r]||r)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--3fb7G",contacts__list:"Contacts-module--contacts__list--27zok","contacts__list-item":"Contacts-module--contacts__list-item--1Adud","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2L60c"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--1T2h2"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--HnDWV",author__title:"Author-module--author__title--ZztQd","author__title-link":"Author-module--author__title-link--BY7f8",author__subtitle:"Author-module--author__subtitle--3hbMX"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--2aN3O",menu__list:"Menu-module--menu__list--1uKDu","menu__list-item":"Menu-module--menu__list-item--27cxj","menu__list-item-link":"Menu-module--menu__list-item-link--29Sd-","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2HzKy"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),l=a("UbMB"),r=a.n(l),o=a("Wbzz"),m=a("WlAH"),c=a("U4DU"),s=a.n(c),_=r.a.bind(s.a),u=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,l=e.hasPrevPage,r=_({"pagination__prev-link":!0,"pagination__prev-link--disable":!l}),c=_({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:s.a.pagination},i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(o.Link,{rel:"prev",to:l?t:"/",className:r},m.b.PREV_PAGE)),i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(o.Link,{rel:"next",to:n?a:"/",className:c},m.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-4704748a3c06089ce7f0.js.map