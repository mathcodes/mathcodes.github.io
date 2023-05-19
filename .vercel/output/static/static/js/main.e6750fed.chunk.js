(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{42:function(e,t,r){"use strict";var a=r(8),s=r(1);t.a=function(){var e=Object(s.useState)(localStorage.theme),t=Object(a.a)(e,2),r=t[0],n=t[1],c="dark"===r?"light":"dark";return Object(s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(c),e.classList.add(r),localStorage.setItem("theme",r)}),[r,c]),[c,n]}},46:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);r(46);var a=r(60),s=r(1),n=(r(48),r(13)),c=r(5),l=function(){var e=Object(c.l)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},o=r(11),i=r(43),d=r(4);var m=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"flex flex-row text-lg text-ternary-dark dark:text-ternary-light",children:[Object(d.jsx)("a",{style:{height:"3rem",paddingBottom:"1em"},href:"https://www.jonchristie.net",target:"__blank",className:" flex text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:Object(d.jsx)("img",{src:"https://www.jonchristie.net/favicon.png",alt:"Jon Christie Logo",className:"p-40"})}),"\xa0 \xa9 ",(new Date).getFullYear(),Object(d.jsx)("a",{href:"https://github.com/mathcodes/mathcodes.github.io",target:"__blank",className:"flex hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"Jon Christie"})]})})},x=[{id:1,icon:Object(d.jsx)(o.c,{}),url:"https://github.com/mathcodes"},{id:3,icon:Object(d.jsx)(o.m,{}),url:"https://twitter.com/jcircle9"},{id:4,icon:Object(d.jsx)(o.e,{}),url:"https://www.linkedin.com/in/jonpchristie"},{id:5,icon:Object(d.jsx)(o.o,{}),url:"https://www.youtube.com/@TheJonChristie"},{id:6,icon:Object(d.jsx)(i.a,{}),url:"https://medium.com/@jcircle9"}],b=function(){return Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"flex flex-col items-center justify-center mb-12 font-general-regular sm:mb-28",children:[Object(d.jsx)("p",{className:"mb-5 text-3xl sm:text-4xl text-primary-dark dark:text-primary-light",children:"Follow me"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:x.map((function(e){return Object(d.jsx)("a",{href:e.url,target:"__blank",className:"p-4 text-gray-400 duration-300 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)}))})]}),Object(d.jsx)(m,{})]})})},j=r(8),h=r(42),u=(r.p,r.p,r.p,r(59)),g=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),r=t[0],a=t[1],c=Object(h.a)(),l=Object(j.a)(c,2),i=l[0],m=l[1];return Object(d.jsx)(u.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:Object(d.jsxs)("div",{className:"z-10 block max-w-screen-lg py-6 xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center",children:[Object(d.jsxs)("div",{className:"flex items-center justify-between px-4 ",children:[Object(d.jsx)("div",{className:"flex items-center justify-between px-4 ",children:Object(d.jsx)("div",{children:Object(d.jsx)(n.b,{to:"/",children:Object(d.jsx)(o.d,{color:"white",width:"20rem"})})})}),Object(d.jsx)("div",{onClick:function(){return m(i)},"aria-label":"Theme Switcher",className:"block p-3 ml-0 shadow-sm cursor-pointer sm:hidden bg-primary-light dark:bg-ternary-dark rounded-xl",children:"dark"===i?Object(d.jsx)(o.i,{className:"text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"}):Object(d.jsx)(o.l,{className:"text-xl text-gray-200 hover:text-gray-50"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){a(!r)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"fill-current h-7 w-7 text-secondary-dark dark:text-ternary-light",children:r?Object(d.jsx)(o.n,{className:"text-3xl"}):Object(d.jsx)(o.h,{className:"text-3xl"})})})})]}),Object(d.jsxs)("div",{className:r?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(d.jsx)(n.b,{to:"/projects",className:"block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about",className:"block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 ","aria-label":"About",children:"About"}),Object(d.jsx)(n.b,{to:"/services",className:"block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 ","aria-label":"About",children:"Services"}),Object(d.jsx)(n.b,{to:"/contact",className:"block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 ","aria-label":"Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none hover:bg-orange-600",children:[Object(d.jsx)(n.b,{to:"/projects",className:"block p-2 mb-2 text-lg text-left rounded shadow-lg shadow-primary-dark hover:shadow-orange-500 text-primary-dark dark:text-ternary-light hover:text-orange-500 sm:mx-4 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about",className:"block p-2 mb-2 text-lg text-left rounded shadow-lg text-primary-dark dark:text-ternary-light hover:text-orange-500 sm:mx-4 sm:py-2","aria-label":"About",children:"About"}),Object(d.jsx)(n.b,{to:"/services",className:"block p-2 mb-2 text-lg text-left rounded shadow-lg text-primary-dark dark:text-ternary-light hover:text-orange-600 sm:mx-4 sm:py-2","aria-label":"About",children:"Services"}),Object(d.jsx)(n.b,{to:"/contact",className:"block p-2 mb-2 text-lg text-left rounded shadow-lg text-primary-dark dark:text-ternary-light hover:text-orange-600 sm:mx-4 sm:py-2","aria-label":"Contact",children:"Contact"})]}),Object(d.jsx)("div",{className:"flex-col items-center justify-between hidden sm:flex md:flex-row",children:Object(d.jsx)("div",{onClick:function(){return m(i)},"aria-label":"Theme Switcher",className:"p-3 ml-8 shadow-sm cursor-pointer bg-primary-light dark:bg-ternary-dark rounded-xl",children:"dark"===i?Object(d.jsx)(o.i,{className:"text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"}):Object(d.jsx)(o.l,{className:"text-xl text-gray-200 hover:text-gray-50"})})})]})})},p=(r(56),function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),r=t[0],a=t[1];Object(s.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}));var n=function(){!r&&window.pageYOffset>400?a(!0):r&&window.pageYOffset<=400&&a(!1)};return window.addEventListener("scroll",n),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o.b,{className:"scrollToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:r?"flex":"none",padding:5}})})}),O=Object(s.lazy)((function(){return r.e(4).then(r.bind(null,70))})),f=Object(s.lazy)((function(){return r.e(5).then(r.bind(null,73))})),y=Object(s.lazy)((function(){return r.e(6).then(r.bind(null,69))})),k=Object(s.lazy)((function(){return r.e(7).then(r.bind(null,71))})),v=Object(s.lazy)((function(){return Promise.all([r.e(3),r.e(9)]).then(r.bind(null,74))})),w=Object(s.lazy)((function(){return r.e(8).then(r.bind(null,72))}));var N=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:"transition duration-300 bg-secondary-light dark:bg-primary-dark",children:[Object(d.jsxs)(n.a,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(g,{}),Object(d.jsx)(s.Suspense,{fallback:"",children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/",element:Object(d.jsx)(y,{})}),Object(d.jsx)(c.a,{path:"projects",element:Object(d.jsx)(k,{})}),Object(d.jsx)(c.a,{path:"about",element:Object(d.jsx)(O,{})}),Object(d.jsx)(c.a,{path:"contact",element:Object(d.jsx)(f,{})}),Object(d.jsx)(c.a,{path:"services",element:Object(d.jsx)(v,{})}),Object(d.jsx)(c.a,{path:"resources",element:Object(d.jsx)(w,{})})]})}),Object(d.jsx)(b,{})]}),Object(d.jsx)(p,{})]})})},C=function(e){e&&e instanceof Function&&r.e(10).then(r.bind(null,68)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),a(e),s(e),n(e),c(e)}))},S=r(44),T=document.getElementById("root");Object(S.createRoot)(T).render(Object(d.jsx)(N,{})),C()}},[[57,1,2]]]);
//# sourceMappingURL=main.e6750fed.chunk.js.map