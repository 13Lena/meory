(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,image:"http://www.fractal-recursions.com/fractals/fractal-826v6669.jpg",clicked:!1},{id:2,image:"http://www.fractal-recursions.com/fractals/fractal-826x6669.jpg",clicked:!1},{id:3,image:"http://www.fractal-recursions.com/fractals/fractal-82863.jpg",clicked:!1},{id:4,image:"http://www.fractal-recursions.com/fractals/fractal-6962.jpg",clicked:!1},{id:5,image:"http://www.fractal-recursions.com/fractals/fractal-6961.jpg",clicked:!1},{id:6,image:"http://www.fractal-recursions.com/fractals/fractal-6169.jpg",clicked:!1},{id:7,image:"http://www.fractal-recursions.com/fractals/fractal-6669.jpg",clicked:!1},{id:8,image:"http://www.fractal-recursions.com/fractals/fractal-42763.jpg",clicked:!1},{id:9,image:"http://www.fractal-recursions.com/fractals/fractal-121953.jpg",clicked:!1},{id:10,image:"http://www.fractal-recursions.com/fractals/fractal-11961.jpg",clicked:!1},{id:11,image:"http://www.fractal-recursions.com/fractals/fractal-42761.jpg",clicked:!1},{id:12,image:"http://www.fractal-recursions.com/fractals/fractal-596f1434b.jpg",clicked:!1}]},,,,,function(e,a,t){e.exports=t(15)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),l=t(5),n=t.n(l),i=(t(13),t(6)),s=t(1),o=t(3),m=t(2);t(14);var f=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.guess()},className:e.clicked?"cheat":""})))};function u(e){var a,t,c,r=Object(o.a)(e);for(a=r.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),c=r[a],r[a]=r[t],r[t]=c;return r}var d=function(){var e=r.a.useState(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],l=r.a.useState(!1),n=Object(s.a)(l,2),d=n[0],w=n[1],g=r.a.useState(function e(a){var t=Object.getOwnPropertyNames(a),c=!0,r=!1,l=void 0;try{for(var n,i=t[Symbol.iterator]();!(c=(n=i.next()).done);c=!0){var s=a[n.value];"object"===typeof s&&e(s)}}catch(o){r=!0,l=o}finally{try{c||null==i.return||i.return()}finally{if(r)throw l}}return Object.freeze(a)}(m)),p=Object(s.a)(g,2),v=p[0],h=p[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"brand"},r.a.createElement("h1",null,"Memory Game"))),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",{className:"restartB"},r.a.createElement("button",{onClick:function(){c(!1),w(!1),h(u(m))}},"Restart"))))),r.a.createElement("header",{className:"header"},t&&r.a.createElement("h1",null,"Incorrect guess. Please restart to play again."),d&&r.a.createElement("h1",null,"You win! Have a virtual cookie! Restart to play again.")),r.a.createElement("div",{className:"cards"},v.map(function(e,a){return r.a.createElement(f,{id:e.id,key:e.id,image:e.image,clicked:e.clicked,guess:function(){if(!d&&!t)if(e.clicked)c(!0);else{var a=Object(i.a)({},e,{clicked:!0}),r=u([a].concat(Object(o.a)(v.filter(function(e){return e.id!==a.id}))));12===r.filter(function(e){return!0===e.clicked}).length&&w(!0),h(r)}}})})),r.a.createElement("div",{className:"score"},r.a.createElement("h1",null,"Score:"," ",v.reduce(function(e,a){return a.clicked?e+1:e},0))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom text-center"},"Memory Game"),r.a.createElement("div",{className:"bottom text-center"},"Lena Hamilton 2019"))))};n.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.4b13c8e6.chunk.js.map