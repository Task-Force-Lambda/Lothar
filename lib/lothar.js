!function(n){var r={};function t(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return n[a].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=n,t.c=r,t.d=function(n,r,a){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)t.d(a,e,function(r){return n[r]}.bind(null,e));return a},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=0)}([function(n,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return a}));t(1);class a{async chartLoaded(n,r){$(r).removeClass("d-none"),$(n).remove()}async pagePlaceholdersInitialize(n){for(var r=0;r<n.length;r++)$(n[r]).addClass("d-none")}test(){alert("Ready to do some ghostin' ! "),document.getElementsByTagName("body").innerHtml("<h1 class='lotharsEdgeTester'>Lothar's Edge</h1>")}}},function(n,r,t){var a=t(2);"string"==typeof a&&(a=[[n.i,a,""]]);var e={insert:"head",singleton:!1};t(4)(a,e);a.locals&&(n.exports=a.locals)},function(n,r,t){(n.exports=t(3)(!1)).push([n.i,'.lotharsEdgeTester{\r\n    color:coral;\r\n    \r\n}\r\n\r\n.ph-item{position:relative;display:flex;flex-wrap:wrap;padding:30px 15px 15px;overflow:hidden;margin-bottom:30px;background-color:#fff;border:1px solid #e6e6e6;border-radius:2px}.ph-item,.ph-item *,.ph-item :after,.ph-item :before{box-sizing:border-box}.ph-item:before{content:" ";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:phAnimation .8s linear infinite;animation:phAnimation .8s linear infinite;background:linear-gradient(90deg,hsla(0,0%,100%,0) 46%,hsla(0,0%,100%,.35) 50%,hsla(0,0%,100%,0) 54%) 50% 50%}.ph-item>*{flex:1 1 auto;display:flex;flex-flow:column;padding-right:15px;padding-left:15px}.ph-row{display:flex;flex-wrap:wrap;margin-bottom:7.5px}.ph-row div{height:10px;margin-bottom:7.5px;background-color:#ced4da}.ph-row .big,.ph-row.big div{height:20px;margin-bottom:15px}.ph-row .empty{background-color:hsla(0,0%,100%,0)}.ph-col-2{flex:0 0 16.66667%}.ph-col-4{flex:0 0 33.33333%}.ph-col-6{flex:0 0 50%}.ph-col-8{flex:0 0 66.66667%}.ph-col-10{flex:0 0 83.33333%}.ph-col-12{flex:0 0 100%}.ph-avatar{position:relative;width:100%;min-width:60px;background-color:#ced4da;margin-bottom:15px;border-radius:50%;overflow:hidden}.ph-avatar:before{content:" ";display:block;padding-top:100%}.ph-picture{width:100%;height:120px;background-color:#ced4da;margin-bottom:15px}@-webkit-keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}\r\n\r\n.ghostColor {\r\n    background-color: #ced4da;\r\n}\r\n\r\n\r\nbody {\r\n    background: #f5f5f5;\r\n}\r\n\r\n.empty {\r\n    font-family: verdana;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n    .empty h3 {\r\n        font-size: 1.6em;\r\n        font-weight: normal;\r\n    }\r\n\r\n.chartGhost {\r\n    position: relative;\r\n    box-shadow: 0px 0px 0.1em rgba(0, 0, 0, 0.25);\r\n    width: 100%;\r\n    height: 400px;\r\n    overflow: hidden;\r\n}\r\n\r\n.no-chart-data {\r\n    background: #fff;\r\n    min-height: 400px;\r\n    height:92% !important;\r\n    display: block;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n    .no-chart-data .title {\r\n        color: #757575;\r\n        position: absolute;\r\n        display: flex;\r\n        left: 50%;\r\n        top: 50%;\r\n        margin-right: -50%;\r\n        transform: translate(-50%, -100%);\r\n        z-index: 100;\r\n    }\r\n\r\n    .no-chart-data .y-axis, .no-chart-data .x-axis {\r\n        position: absolute;\r\n        left: 25px;\r\n        bottom: 25px;\r\n    }\r\n\r\n    .no-chart-data .y-axis {\r\n        height: 350px;\r\n        width: 1px;\r\n        border-left: 2px solid #f5f5f5;\r\n    }\r\n\r\n    .no-chart-data .x-axis {\r\n        height: 1px;\r\n        width: 95%;\r\n        border-bottom: 2px solid #f5f5f5;\r\n    }\r\n\r\n    .no-chart-data .bars {\r\n        position: absolute;\r\n        display: inline-block;\r\n        bottom: 15px;\r\n        /*left: 35px;*/\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        background: rgba(0, 0, 0, .1);\r\n    }\r\n\r\n        .no-chart-data .bars .bar {\r\n            background-color: #ced4da;\r\n            display: inline-block;\r\n            position: absolute;\r\n            min-height: 5px;\r\n            width: 3%;\r\n            max-width: 25px;\r\n            bottom: 10px;\r\n            margin: 0 0.8%;\r\n            border-top: 1px solid #fff;\r\n            border-left: 1px solid #fff;\r\n            border-right: 1px solid #fff;\r\n        }\r\n\r\n            .no-chart-data .bars .bar.bar-0 {\r\n                height: 258px;\r\n                display: inline-block;\r\n                margin-left: 1%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-1 {\r\n                height: 117px;\r\n                display: inline-block;\r\n                margin-left: 5%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-2 {\r\n                height: 312px;\r\n                display: inline-block;\r\n                margin-left: 9%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-3 {\r\n                height: 70px;\r\n                display: inline-block;\r\n                margin-left: 13%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-4 {\r\n                height: 325px;\r\n                display: inline-block;\r\n                margin-left: 17%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-5 {\r\n                height: 244px;\r\n                display: inline-block;\r\n                margin-left: 21%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-6 {\r\n                height: 83px;\r\n                display: inline-block;\r\n                margin-left: 25%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-7 {\r\n                height: 36px;\r\n                display: inline-block;\r\n                margin-left: 29%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-8 {\r\n                height: 167px;\r\n                display: inline-block;\r\n                margin-left: 33%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-9 {\r\n                height: 277px;\r\n                display: inline-block;\r\n                margin-left: 37%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-10 {\r\n                height: 299px;\r\n                display: inline-block;\r\n                margin-left: 41%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-11 {\r\n                height: 128px;\r\n                display: inline-block;\r\n                margin-left: 45%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-12 {\r\n                height: 210px;\r\n                display: inline-block;\r\n                margin-left: 49%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-13 {\r\n                height: 181px;\r\n                display: inline-block;\r\n                margin-left: 53%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-14 {\r\n                height: 120px;\r\n                display: inline-block;\r\n                margin-left: 57%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-15 {\r\n                height: 310px;\r\n                display: inline-block;\r\n                margin-left: 61%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-16 {\r\n                height: 354px;\r\n                display: inline-block;\r\n                margin-left: 65%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-17 {\r\n                height: 253px;\r\n                display: inline-block;\r\n                margin-left: 69%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-18 {\r\n                height: 222px;\r\n                display: inline-block;\r\n                margin-left: 73%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-19 {\r\n                height: 193px;\r\n                display: inline-block;\r\n                margin-left: 77%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-20 {\r\n                height: 210px;\r\n                display: inline-block;\r\n                margin-left: 81%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-21 {\r\n                height: 142px;\r\n                display: inline-block;\r\n                margin-left: 85%;\r\n            }\r\n\r\n            .no-chart-data .bars .bar.bar-22 {\r\n                height: 120px;\r\n                display: inline-block;\r\n                margin-left: 89%;\r\n            }\r\n\r\n    .no-chart-data .lines {\r\n        position: absolute;\r\n        display: inline-block;\r\n        bottom: 15px;\r\n        left: 35px;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        background: rgba(0, 0, 0, .1);\r\n    }\r\n\r\n        .no-chart-data .lines .overlay {\r\n            background: blue;\r\n            display: block;\r\n            width: 100%;\r\n            height: inherit;\r\n        }\r\n\r\n        .no-chart-data .lines .line {\r\n            background: #f5f5f5;\r\n            display: inline-block;\r\n            position: absolute;\r\n            min-height: 15px;\r\n            width: 14.28%;\r\n            bottom: 10px;\r\n            margin: 0 0.8%;\r\n            border-top: 1px solid #fff;\r\n            overflow: hidden;\r\n        }\r\n\r\n            .no-chart-data .lines .line.line-0 {\r\n                margin-left: 1%;\r\n            }\r\n\r\n            .no-chart-data .lines .line.line-1 {\r\n                margin-left: 15.28%;\r\n            }\r\n\r\n            .no-chart-data .lines .line.line-2 {\r\n                margin-left: 29.56%;\r\n            }\r\n\r\n            .no-chart-data .lines .line.line-3 {\r\n                margin-left: 43.84%;\r\n            }\r\n\r\n            .no-chart-data .lines .line.line-4 {\r\n                margin-left: 58.12%;\r\n            }\r\n\r\n            .no-chart-data .lines .line.line-5 {\r\n                margin-left: 72.4%;\r\n            }\r\n\r\n            .no-chart-data .lines .line.line-6 {\r\n                margin-left: 86.68%;\r\n            }\r\n\r\n            .no-chart-data .lines .line .line-0 {\r\n                height: 200px;\r\n            }\r\n\r\n            .no-chart-data .lines .line .line-1 {\r\n                height: 400px;\r\n            }\r\n\r\n            .no-chart-data .lines .line .slope {\r\n                display: block;\r\n                background: white;\r\n                width: 300%;\r\n                height: 100px;\r\n                margin-top: -50%;\r\n                margin-left: -50%;\r\n            }\r\n\r\n                .no-chart-data .lines .line .slope:nth-of-type(1) {\r\n                    -ms-transform: rotate(-25deg);\r\n                    /* IE 9 */\r\n                    -webkit-transform: rotate(-25deg);\r\n                    /* Chrome, Safari, Opera */\r\n                    transform: rotate(-25deg);\r\n                }\r\n\r\n    .no-chart-data .radial {\r\n        text-align: center;\r\n    }\r\n\r\n        .no-chart-data .radial .outer-circle {\r\n            position: absolute;\r\n            top: 50%;\r\n            left: 50%;\r\n            margin-top: -150px;\r\n            margin-left: -150px;\r\n            display: block;\r\n            background: #f5f5f5;\r\n            width: 300px;\r\n            height: 300px;\r\n            border-radius: 50%;\r\n        }\r\n\r\n        .no-chart-data .radial .inner-circle {\r\n            position: absolute;\r\n            top: 50%;\r\n            left: 50%;\r\n            margin-top: -100px;\r\n            margin-left: -100px;\r\n            display: block;\r\n            background: #fff;\r\n            width: 200px;\r\n            height: 200px;\r\n            border-radius: 50%;\r\n        }\r\n\r\n\r\n\r\n        ',""])},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",a=n[3];if(!a)return t;if(r&&"function"==typeof btoa){var e=(o=a,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot).concat(n," */")}));return[t].concat(i).concat([e]).join("\n")}var o,l,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(t,"}"):t})).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},e=0;e<this.length;e++){var i=this[e][0];null!=i&&(a[i]=!0)}for(var o=0;o<n.length;o++){var l=n[o];null!=l[0]&&a[l[0]]||(t&&!l[2]?l[2]=t:t&&(l[2]="(".concat(l[2],") and (").concat(t,")")),r.push(l))}},r}},function(n,r,t){"use strict";var a,e={},i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}();function l(n,r){for(var t=[],a={},e=0;e<n.length;e++){var i=n[e],o=r.base?i[0]+r.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(l):t.push(a[o]={id:o,parts:[l]})}return t}function s(n,r){for(var t=0;t<n.length;t++){var a=n[t],i=e[a.id],o=0;if(i){for(i.refs++;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(g(a.parts[o],r))}else{for(var l=[];o<a.parts.length;o++)l.push(g(a.parts[o],r));e[a.id]={id:a.id,refs:1,parts:l}}}}function d(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var a=t.nc;a&&(n.attributes.nonce=a)}if(Object.keys(n.attributes).forEach((function(t){r.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(r);else{var e=o(n.insert||"head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}return r}var c,p=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function h(n,r,t,a){var e=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=p(r,e);else{var i=document.createTextNode(e),o=n.childNodes;o[r]&&n.removeChild(o[r]),o.length?n.insertBefore(i,o[r]):n.appendChild(i)}}function f(n,r,t){var a=t.css,e=t.media,i=t.sourceMap;if(e&&n.setAttribute("media",e),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var b=null,u=0;function g(n,r){var t,a,e;if(r.singleton){var i=u++;t=b||(b=d(r)),a=h.bind(null,t,i,!1),e=h.bind(null,t,i,!0)}else t=d(r),a=f.bind(null,t,r),e=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;a(n=r)}else e()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=i());var t=l(n,r);return s(t,r),function(n){for(var a=[],i=0;i<t.length;i++){var o=t[i],d=e[o.id];d&&(d.refs--,a.push(d))}n&&s(l(n,r),r);for(var c=0;c<a.length;c++){var p=a[c];if(0===p.refs){for(var h=0;h<p.parts.length;h++)p.parts[h]();delete e[p.id]}}}}}]);