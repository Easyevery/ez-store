!(function(){"use strict";var rr=Object.defineProperty,tr=Object.defineProperties;var or=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var pn=Object.prototype.hasOwnProperty,mn=Object.prototype.propertyIsEnumerable;var gn=(T,m,n)=>m in T?rr(T,m,{enumerable:!0,configurable:!0,writable:!0,value:n}):T[m]=n,K=(T,m)=>{for(var n in m||(m={}))pn.call(m,n)&&gn(T,n,m[n]);if(Fe)for(var n of Fe(m))mn.call(m,n)&&gn(T,n,m[n]);return T},nn=(T,m)=>tr(T,or(m));var rn=(T,m)=>{var n={};for(var r in T)pn.call(T,r)&&m.indexOf(r)<0&&(n[r]=T[r]);if(T!=null&&Fe)for(var r of Fe(T))m.indexOf(r)<0&&mn.call(T,r)&&(n[r]=T[r]);return n};(self.webpackChunkez_store=self.webpackChunkez_store||[]).push([[9229],{99882:function(T,m,n){n.d(m,{E_:function(){return U},nc:function(){return z}});var r=n(67294);function Z(p){var s=[];if(p.length===0)return"";if(typeof p[0]!="string")throw new TypeError("Url must be a string. Received "+p[0]);if(p[0].match(/^[^/:]+:\/*$/)&&p.length>1){var k=p.shift();p[0]=k+p[0]}p[0].match(/^file:\/\/\//)?p[0]=p[0].replace(/^([^/:]+):\/*/,"$1:///"):p[0]=p[0].replace(/^([^/:]+):\/*/,"$1://");for(var c=0;c<p.length;c++){var b=p[c];if(typeof b!="string")throw new TypeError("Url must be a string. Received "+b);b!==""&&(c>0&&(b=b.replace(/^[\/]+/,"")),c<p.length-1?b=b.replace(/[\/]+$/,""):b=b.replace(/[\/]+$/,"/"),s.push(b))}var d=s.join("/");d=d.replace(/\/(\?|&|#[^!])/g,"$1");var S=d.split("?");return d=S.shift()+(S.length>0?"?":"")+S.join("&"),d}function a(){var p;return typeof arguments[0]=="object"?p=arguments[0]:p=[].slice.call(arguments),Z(p)}var I="https://unpkg.com",j="https://registry.npmmirror.com",W=function(s){var k=s.pkg,c=s.version,b=c===void 0?"latest":c,d=s.path,S=s.proxy;switch(S){case"unpkg":return a(I,"".concat(k,"@").concat(b),d);default:return a(j,k,b,"files",d)}},G=n(85893),U=(0,r.createContext)(null),J=null,D=function(s){var k=s.pkg,c=s.version,b=s.path;return W({path:b,pkg:k,proxy:"aliyun",version:c})},z=function(){var s=(0,r.useContext)(U);return s?(s==null?void 0:s.proxy)!=="custom"?function(k){var c=k.pkg,b=k.version,d=k.path;return W({path:d,pkg:c,proxy:s.proxy,version:b})}:(s==null?void 0:s.customCdnFn)||D:D},w=null},18394:function(T,m,n){n.d(m,{Z:function(){return Yn}});var r=n(82656),Z=n(87853),a=n(67294),I=n(13144),j=n.n(I),W=n(53124),G=n(16474),U=n(94423),J=n(48311),D=n(66968),z=n(48132);const w=t=>{const{componentCls:l,colorText:o,fontSize:e,lineHeight:f,fontFamily:x}=t;return{[l]:{color:o,fontSize:e,lineHeight:f,fontFamily:x}}},p=()=>({});var s=(0,z.I$)("App",w,p);const k=()=>a.useContext(D.Z),c=t=>{const{prefixCls:l,children:o,className:e,rootClassName:f,message:x,notification:N,style:Q,component:Y="div"}=t,{getPrefixCls:ce}=(0,a.useContext)(W.E_),ae=ce("app",l),[ue,be,ge]=s(ae),te=j()(be,ae,e,f,ge),re=(0,a.useContext)(D.J),ie=a.useMemo(()=>({message:Object.assign(Object.assign({},re.message),x),notification:Object.assign(Object.assign({},re.notification),N)}),[x,N,re.message,re.notification]),[Le,en]=(0,G.Z)(ie.message),[q,Xn]=(0,J.Z)(ie.notification),[bn,Qn]=(0,U.Z)(),qn=a.useMemo(()=>({message:Le,notification:q,modal:bn}),[Le,q,bn]),er=Y===!1?a.Fragment:Y,nr={className:te,style:Q};return ue(a.createElement(D.Z.Provider,{value:qn},a.createElement(D.J.Provider,{value:ie},a.createElement(er,Object.assign({},Y===!1?void 0:nr),Qn,en,Xn,o))))};c.useApp=k;var b=c,d=n(52335),S=n(99882),v=function(l){var o=document.createElement("link");return o.rel="stylesheet",o.href=l,o},h=(0,a.memo)(function(t){var l=t.url,o=(0,a.useRef)(!1);return(0,a.useEffect)(function(){if(!o.current){o.current=!0;var e=v(l);document.head.append(e)}},[]),null}),g=h,i=n(14408),E,C,P,M,A,B,H,F,$=function(l){var o=l.css,e=l.token,f=l.isDarkMode,x=(0,d.F4)(E||(E=(0,i.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:o(C||(C=(0,i.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:o(P||(P=(0,i.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:o(M||(M=(0,i.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:o(A||(A=(0,i.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),e.gold,e.magenta,e.geekblue,e.cyan,x),markdown:o(B||(B=(0,i.Z)([`
      --lobe-markdown-font-size: 16px;
      --lobe-markdown-header-multiple: 1;
      --lobe-markdown-margin-multiple: 1.5;

      position: relative;

      width: 100%;

      font-size: var(--lobe-markdown-font-size);
      line-height: 1.6;
      word-break: break-word;

      p {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        line-height: 1.6;
        letter-spacing: 0.02em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-block: max(
          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),
          var(--lobe-markdown-font-size)
        );
        font-weight: 600;
      }

      h1 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h2 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))
        );
      }

      h3 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h4 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
        );
      }

      h5 {
        font-size: calc(var(--lobe-markdown-font-size) * 1);
      }

      li {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      ul,
      ol {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline-start: 1em;
        list-style-position: outside;

        li {
          margin-inline-start: 1em;
        }
      }

      ol {
        li {
          &::marker {
            color: `,`;
          }
        }
      }

      ul {
        list-style-type: none;

        li {
          &::before {
            content: '-';
            display: inline-block;
            margin-inline: -1em 0.5em;
            color: `,`;
          }
        }
      }

      strong {
        font-weight: 600;
      }

      code:not(:has(span)) {
        display: inline-block;

        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      kbd {
        cursor: default;
        user-select: none;

        transform: translateY(-0.2em);

        display: inline-block;

        min-width: 1em;
        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1;
        color: `,`;
        text-align: center;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 0.25em;
        box-shadow: 0 2px 0 1px `,`;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }

      blockquote {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 1em;

        color: `,`;

        border-inline-start: solid 4px `,`;
      }

      hr {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);

        border-color: `,`;
        border-style: dashed;
        border-width: 1px;
        border-block-start: none;
        border-inline-start: none;
        border-inline-end: none;
      }

      details {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        padding-block: 0.75em;
        padding-inline: 1em;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        summary {
          cursor: pointer;
          display: flex;
          align-items: center;
          list-style: none;

          &::before {
            content: '';

            position: absolute;
            inset-inline-end: 1.25em;
            transform: rotateZ(-45deg);

            display: block;

            width: 0.4em;
            height: 0.4em;

            font-family: `,`;

            border-block-end: 1.5px solid `,`;
            border-inline-end: 1.5px solid `,`;

            transition: transform 200ms `,`;
          }
        }

        &[open] {
          padding-block-end: 0;

          summary {
            padding-block-end: 12px;
            border-block-end: 1px dashed `,`;

            &::before {
              transform: rotateZ(45deg);
            }
          }
        }
      }

      img,
      video {
        max-width: 100%;
      }

      table {
        overflow: hidden;
        display: table;
        border-spacing: 0;
        border-collapse: collapse;

        box-sizing: border-box;
        width: 100%;
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

        text-align: start;
        overflow-wrap: break-word;

        background: `,`;
        border-radius: `,`px;
        box-shadow: inset 0 0 0 1px `,`;
      }

      thead {
        background: `,`;
      }

      tr {
        box-shadow: inset 0 -1px 0 `,`;
      }

      th,
      td {
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
        vertical-align: top;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;

        > code {
          padding: 0 !important;

          font-family: `,`;
          font-size: 0.875em;
          line-height: 1.6;

          border: none !important;
        }
      }
    `])),e.colorTextSecondary,e.colorTextDescription,e.fontFamilyCode,e.colorFillSecondary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorBgLayout,f?e.colorText:"#333",f?e.colorTextSecondary:"#000",f?e.colorTextSecondary:"#000",e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorTextSecondary,e.colorTextSecondary,e.motionEaseOut,e.colorBorder,e.colorFillTertiary,e.borderRadius,e.colorBorderSecondary,e.colorFillQuaternary,e.colorBorderSecondary,e.fontFamilyCode),noScrollbar:o(H||(H=(0,i.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:o(F||(F=(0,i.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}},R=n(86053),O=n(35493),u=n(54196),y=n(75306);function _(t,l,o){var e=-1,f=t.length;l<0&&(l=-l>f?0:f+l),o=o>f?f:o,o<0&&(o+=f),f=l>o?0:o-l>>>0,l>>>=0;for(var x=Array(f);++e<f;)x[e]=t[e+l];return x}var V=_;function se(t,l,o){var e=t.length;return o=o===void 0?e:o,!l&&o>=e?t:V(t,l,o)}var Ue=se,he="\\ud800-\\udfff",Ne="\\u0300-\\u036f",ye="\\ufe20-\\ufe2f",xe="\\u20d0-\\u20ff",Be=Ne+ye+xe,He="\\ufe0e\\ufe0f",We="\\u200d",Se=RegExp("["+We+he+Be+He+"]");function ke(t){return Se.test(t)}var oe=ke;function Je(t){return t.split("")}var Ce=Je,Te="\\ud800-\\udfff",we="\\u0300-\\u036f",_e="\\ufe20-\\ufe2f",Oe="\\u20d0-\\u20ff",Ze=we+_e+Oe,Ge="\\ufe0e\\ufe0f",$e="["+Te+"]",pe="["+Ze+"]",me="\\ud83c[\\udffb-\\udfff]",Ke="(?:"+pe+"|"+me+")",Ee="[^"+Te+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",Ve="\\u200d",Re=Ke+"?",Ie="["+Ge+"]?",Ye="(?:"+Ve+"(?:"+[Ee,Ae,je].join("|")+")"+Ie+Re+")*",Xe=Ie+Re+Ye,Qe="(?:"+[Ee+pe+"?",pe,Ae,je,$e].join("|")+")",L=RegExp(me+"(?="+me+")|"+Qe+Xe,"g");function ee(t){return t.match(L)||[]}var le=ee;function qe(t){return oe(t)?le(t):Ce(t)}var fe=qe;function Pe(t){return function(l){l=(0,y.Z)(l);var o=oe(l)?fe(l):void 0,e=o?o[0]:l.charAt(0),f=o?Ue(o,1).join(""):l.slice(1);return e[t]()+f}}var vn=Pe,hn=vn("toUpperCase"),yn=hn;function xn(t){return yn((0,y.Z)(t).toLowerCase())}var tn=xn,Sn=n(53683),kn=(0,Sn.Z)(function(t,l,o){return l=l.toLowerCase(),t+(o?tn(l):l)}),Cn=kn,X=n(79535),Tn=function(l){var o,e=l.name,f=l.scale,x=l.appearance;return o={},(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)(o,"".concat(e,"Bg"),f["".concat(x,"A")][1]),"".concat(e,"BgHover"),f["".concat(x,"A")][2]),"".concat(e,"Border"),f[x][4]),"".concat(e,"BorderSecondary"),f[x][3]),"".concat(e,"BorderHover"),f[x][5]),"".concat(e,"Hover"),f[x][10]),"".concat(e),f[x][9]),"".concat(e,"Active"),f[x][7]),"".concat(e,"TextHover"),f["".concat(x,"A")][10]),"".concat(e,"Text"),f["".concat(x,"A")][9]),(0,u.Z)(o,"".concat(e,"TextActive"),f["".concat(x,"A")][7])},wn=function(l){var o=l.name,e=l.scale,f=l.appearance,x={},N=(0,O.Z)(e[f].entries()),Q;try{for(N.s();!(Q=N.n()).done;){var Y=(0,R.Z)(Q.value,2),ce=Y[0],ae=Y[1];ce===0||ce===12||(x["".concat(o).concat(ce)]=ae)}}catch(ie){N.e(ie)}finally{N.f()}var ue=(0,O.Z)(e["".concat(f,"A")].entries()),be;try{for(ue.s();!(be=ue.n()).done;){var ge=(0,R.Z)(be.value,2),te=ge[0],re=ge[1];te===0||te===12||(x["".concat(o).concat(te,"A")]=re)}}catch(ie){ue.e(ie)}finally{ue.f()}return(0,r.Z)((0,r.Z)({},x),Tn({appearance:f,name:o,scale:e}))},_n=function(l){for(var o=l.isDarkMode,e={},f=0,x=Object.entries(X._);f<x.length;f++){var N=(0,R.Z)(x[f],2),Q=N[0],Y=N[1];e=(0,r.Z)((0,r.Z)({},e),wn({appearance:o?"dark":"light",name:Cn(Q),scale:Y}))}return e},ne=function(l){var o=l.type,e=l.scale,f=l.appearance,x=tn(o),N=f==="dark";return(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)({},"color".concat(x,"Bg"),e[f][1]),"color".concat(x,"BgHover"),e[f][2]),"color".concat(x,"Border"),e[f][4]),"color".concat(x,"BorderHover"),e[f][N?5:3]),"color".concat(x,"Hover"),e[f][N?10:8]),"color".concat(x),e[f][9]),"color".concat(x,"Active"),e[f][N?7:10]),"color".concat(x,"TextHover"),e[f][N?10:8]),"color".concat(x,"Text"),e[f][9]),"color".concat(x,"TextActive"),e[f][N?7:10])},Me=function(l){var o=l.scale,e=l.appearance;return{colorBgContainer:e==="dark"?o[e][1]:o[e][0],colorBgElevated:e==="dark"?o[e][2]:o[e][0],colorBgLayout:e==="dark"?o[e][0]:o[e][1],colorBgMask:o.lightA[8],colorBgSpotlight:o[e][5],colorBorder:o[e][4],colorBorderSecondary:o[e][3],colorFill:o["".concat(e,"A")][3],colorFillQuaternary:o["".concat(e,"A")][0],colorFillSecondary:o["".concat(e,"A")][2],colorFillTertiary:o["".concat(e,"A")][1],colorText:o[e][12],colorTextQuaternary:o[e][6],colorTextSecondary:o[e][10],colorTextTertiary:o[e][8]}},on={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},On=ne({appearance:"dark",scale:X._.bnw,type:"Primary"}),an=Me({appearance:"dark",scale:X._.gray}),Zn=ne({appearance:"dark",scale:X._.lime,type:"Success"}),En=ne({appearance:"dark",scale:X._.gold,type:"Warning"}),An=ne({appearance:"dark",scale:X._.red,type:"Error"}),ze=ne({appearance:"dark",scale:X._.blue,type:"Info"}),jn=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},On),an),Zn),En),An),ze),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:ze.colorInfoText,colorLinkActive:ze.colorInfoTextActive,colorLinkHover:ze.colorInfoTextHover,colorTextLightSolid:an.colorBgLayout}),Rn=jn,In=function(l,o){var e=l.primaryColor,f=l.neutralColor,x={},N={},Q=X._[e];Q&&(x=ne({appearance:"dark",scale:Q,type:"Primary"}));var Y=on[f];return Y&&(N=Me({appearance:"dark",scale:Y})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},o),Rn),x),N)},Pn=ne({appearance:"light",scale:X._.bnw,type:"Primary"}),sn=Me({appearance:"light",scale:X._.gray}),Mn=ne({appearance:"light",scale:X._.green,type:"Success"}),zn=ne({appearance:"light",scale:X._.orange,type:"Warning"}),Dn=ne({appearance:"light",scale:X._.volcano,type:"Error"}),De=ne({appearance:"light",scale:X._.geekblue,type:"Info"}),Ln=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},Pn),sn),Mn),zn),Dn),De),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:De.colorInfoText,colorLinkActive:De.colorInfoTextActive,colorLinkHover:De.colorInfoTextHover,colorTextLightSolid:sn.colorBgLayout}),Fn=Ln,Un=function(l,o){var e=l.primaryColor,f=l.neutralColor,x={},N={},Q=X._[e];Q&&(x=ne({appearance:"light",scale:Q,type:"Primary"}));var Y=on[f];return Y&&(N=Me({appearance:"light",scale:Y})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},o),Fn),x),N)},ln='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',Nn='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',cn='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',Bn="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Hn={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[Nn,cn,ln].join(","),fontFamilyCode:[Bn,cn,ln].join(",")},Wn=function(l){var o=l.neutralColor,e=l.appearance,f=l.primaryColor,x=e==="dark";return{algorithm:x?In:Un,token:(0,r.Z)((0,r.Z)({},Hn),{},{neutralColor:o,primaryColor:f})}},ve=n(35360),un,Jn=function(t){return(0,d.iv)(un||(un=(0,i.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding-block: 4px;
    padding-inline: 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }

  @media (max-width: 575px) {
    .`,`-tooltip {
      display: none !important;
    }
  }
`])),t.prefixCls,(0,ve.XV)(t.colorPrimary),t.prefixCls,t.prefixCls,(0,ve.XV)(t.colorPrimary),(0,ve.XV)(t.colorPrimary),(0,ve.XV)(t.colorPrimaryActive),t.prefixCls,t.colorBgLayout,t.colorText,t.borderRadiusSM,t.prefixCls,t.colorText,t.prefixCls,t.colorBgContainer,t.prefixCls,t.prefixCls,t.prefixCls,t.stylish.blur,t.borderRadiusLG,(0,ve.m4)(t.colorBgMask,.1),t.prefixCls,t.colorBorderSecondary,t.boxShadowSecondary,t.prefixCls,t.colorBorderSecondary,t.borderRadius,t.boxShadowSecondary,t.prefixCls)},dn,Gn=function(t){return(0,d.iv)(dn||(dn=(0,i.Z)([`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;
  }

  html {
    overscroll-behavior: none;
    color-scheme: `,`;
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: `,`;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: `,` transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`])),t.isDarkMode?"dark":"light",t.fontFamily,t.fontSize,t.colorTextBase,t.colorBgLayout,t.fontFamilyCode,t.fontFamilyCode,t.yellow9,t.colorFill)},$n=(0,d.vJ)(function(t){var l=t.theme;return[Gn(l),Jn(l)]}),Kn=$n,de=n(85893),Vn=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],fn=(0,a.memo)(function(t){var l=t.children,o=t.customStylish,e=t.customToken,f=t.enableWebfonts,x=f===void 0?!0:f,N=t.enableGlobalStyle,Q=N===void 0?!0:N,Y=t.webfonts,ce=t.customTheme,ae=ce===void 0?{}:ce,ue=t.className,be=t.style,ge=(0,Z.Z)(t,Vn),te=(0,S.nc)(),re=Y||[te({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),te({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),te({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),te({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ie=(0,a.useCallback)(function(q){return(0,r.Z)((0,r.Z)({},$(q)),o==null?void 0:o(q))},[o]),Le=(0,a.useCallback)(function(q){return(0,r.Z)((0,r.Z)({},_n(q)),e==null?void 0:e(q))},[e]),en=(0,a.useCallback)(function(q){return Wn({appearance:q,neutralColor:ae.neutralColor,primaryColor:ae.primaryColor})},[ae.primaryColor,ae.neutralColor]);return(0,de.jsxs)(de.Fragment,{children:[x&&(re==null?void 0:re.length)>0&&re.map(function(q){return(0,de.jsx)(g,{url:q},q)}),(0,de.jsx)(d.V9,{speedy:!0,children:(0,de.jsxs)(d.f6,(0,r.Z)((0,r.Z)({customStylish:ie,customToken:Le},ge),{},{theme:en,children:[Q&&(0,de.jsx)(Kn,{}),(0,de.jsx)(b,{className:ue,style:(0,r.Z)({minHeight:"inherit",width:"inherit"},be),children:l})]}))})]})});fn.displayName="LobeThemeProvider";var Yn=fn},2059:function(T,m,n){var r=n(92573),Z=n(67294),a=n(85893),I=(0,Z.memo)(function(){return(0,a.jsxs)(r.ql,{children:[(0,a.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,a.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,a.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,a.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,a.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,a.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,a.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,a.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,a.jsx)("meta",{content:"#000000",name:"theme-color"})]})});m.Z=I},29950:function(T,m,n){n.d(m,{f:function(){return a}});var r=n(64529),Z=n(782),a=(0,r.Ue)()((0,Z.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},64063:function(T){T.exports=function m(n,r){if(n===r)return!0;if(n&&r&&typeof n=="object"&&typeof r=="object"){if(n.constructor!==r.constructor)return!1;var Z,a,I;if(Array.isArray(n)){if(Z=n.length,Z!=r.length)return!1;for(a=Z;a--!==0;)if(!m(n[a],r[a]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if(I=Object.keys(n),Z=I.length,Z!==Object.keys(r).length)return!1;for(a=Z;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,I[a]))return!1;for(a=Z;a--!==0;){var j=I[a];if(!m(n[j],r[j]))return!1}return!0}return n!==n&&r!==r}},26849:function(T,m,n){var r=n(67294);function Z(w,p){return w===p&&(w!==0||1/w===1/p)||w!==w&&p!==p}var a=typeof Object.is=="function"?Object.is:Z,I=r.useState,j=r.useEffect,W=r.useLayoutEffect,G=r.useDebugValue;function U(w,p){var s=p(),k=I({inst:{value:s,getSnapshot:p}}),c=k[0].inst,b=k[1];return W(function(){c.value=s,c.getSnapshot=p,J(c)&&b({inst:c})},[w,s,p]),j(function(){return J(c)&&b({inst:c}),w(function(){J(c)&&b({inst:c})})},[w]),G(s),s}function J(w){var p=w.getSnapshot;w=w.value;try{var s=p();return!a(w,s)}catch(k){return!0}}function D(w,p){return p()}var z=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?D:U;m.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:z},49743:function(T,m,n){var r=n(67294),Z=n(54652);function a(D,z){return D===z&&(D!==0||1/D===1/z)||D!==D&&z!==z}var I=typeof Object.is=="function"?Object.is:a,j=Z.useSyncExternalStore,W=r.useRef,G=r.useEffect,U=r.useMemo,J=r.useDebugValue;m.useSyncExternalStoreWithSelector=function(D,z,w,p,s){var k=W(null);if(k.current===null){var c={hasValue:!1,value:null};k.current=c}else c=k.current;k=U(function(){function d(i){if(!S){if(S=!0,v=i,i=p(i),s!==void 0&&c.hasValue){var E=c.value;if(s(E,i))return h=E}return h=i}if(E=h,I(v,i))return E;var C=p(i);return s!==void 0&&s(E,C)?E:(v=i,h=C)}var S=!1,v,h,g=w===void 0?null:w;return[function(){return d(z())},g===null?void 0:function(){return d(g())}]},[z,w,p,s]);var b=j(D,k[0],k[1]);return G(function(){c.hasValue=!0,c.value=b},[b]),J(b),b}},54652:function(T,m,n){T.exports=n(26849)},28258:function(T,m,n){T.exports=n(49743)},35493:function(T,m,n){n.d(m,{Z:function(){return Z}});var r=n(84319);function Z(a,I){var j=typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(!j){if(Array.isArray(a)||(j=(0,r.Z)(a))||I&&a&&typeof a.length=="number"){j&&(a=j);var W=0,G=function(){};return{s:G,n:function(){return W>=a.length?{done:!0}:{done:!1,value:a[W++]}},e:function(w){throw w},f:G}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U=!0,J=!1,D;return{s:function(){j=j.call(a)},n:function(){var w=j.next();return U=w.done,w},e:function(w){J=!0,D=w},f:function(){try{!U&&j.return!=null&&j.return()}finally{if(J)throw D}}}}},17685:function(T,m,n){var r=n(66092),Z=r.Z.Symbol;m.Z=Z},74073:function(T,m){function n(r,Z){for(var a=-1,I=r==null?0:r.length,j=Array(I);++a<I;)j[a]=Z(r[a],a,r);return j}m.Z=n},93589:function(T,m,n){n.d(m,{Z:function(){return c}});var r=n(17685),Z=Object.prototype,a=Z.hasOwnProperty,I=Z.toString,j=r.Z?r.Z.toStringTag:void 0;function W(b){var d=a.call(b,j),S=b[j];try{b[j]=void 0;var v=!0}catch(g){}var h=I.call(b);return v&&(d?b[j]=S:delete b[j]),h}var G=W,U=Object.prototype,J=U.toString;function D(b){return J.call(b)}var z=D,w="[object Null]",p="[object Undefined]",s=r.Z?r.Z.toStringTag:void 0;function k(b){return b==null?b===void 0?p:w:s&&s in Object(b)?G(b):z(b)}var c=k},53683:function(T,m,n){n.d(m,{Z:function(){return Qe}});function r(L,ee,le,qe){var fe=-1,Pe=L==null?0:L.length;for(qe&&Pe&&(le=L[++fe]);++fe<Pe;)le=ee(le,L[fe],fe,L);return le}var Z=r;function a(L){return function(ee){return L==null?void 0:L[ee]}}var I=a,j={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},W=I(j),G=W,U=n(75306),J=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,D="\\u0300-\\u036f",z="\\ufe20-\\ufe2f",w="\\u20d0-\\u20ff",p=D+z+w,s="["+p+"]",k=RegExp(s,"g");function c(L){return L=(0,U.Z)(L),L&&L.replace(J,G).replace(k,"")}var b=c,d=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function S(L){return L.match(d)||[]}var v=S,h=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function g(L){return h.test(L)}var i=g,E="\\ud800-\\udfff",C="\\u0300-\\u036f",P="\\ufe20-\\ufe2f",M="\\u20d0-\\u20ff",A=C+P+M,B="\\u2700-\\u27bf",H="a-z\\xdf-\\xf6\\xf8-\\xff",F="\\xac\\xb1\\xd7\\xf7",$="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",R="\\u2000-\\u206f",O=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="A-Z\\xc0-\\xd6\\xd8-\\xde",y="\\ufe0e\\ufe0f",_=F+$+R+O,V="['\u2019]",se="["+_+"]",Ue="["+A+"]",he="\\d+",Ne="["+B+"]",ye="["+H+"]",xe="[^"+E+_+he+B+H+u+"]",Be="\\ud83c[\\udffb-\\udfff]",He="(?:"+Ue+"|"+Be+")",We="[^"+E+"]",Se="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="["+u+"]",Je="\\u200d",Ce="(?:"+ye+"|"+xe+")",Te="(?:"+oe+"|"+xe+")",we="(?:"+V+"(?:d|ll|m|re|s|t|ve))?",_e="(?:"+V+"(?:D|LL|M|RE|S|T|VE))?",Oe=He+"?",Ze="["+y+"]?",Ge="(?:"+Je+"(?:"+[We,Se,ke].join("|")+")"+Ze+Oe+")*",$e="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",me=Ze+Oe+Ge,Ke="(?:"+[Ne,Se,ke].join("|")+")"+me,Ee=RegExp([oe+"?"+ye+"+"+we+"(?="+[se,oe,"$"].join("|")+")",Te+"+"+_e+"(?="+[se,oe+Ce,"$"].join("|")+")",oe+"?"+Ce+"+"+we,oe+"+"+_e,pe,$e,he,Ke].join("|"),"g");function Ae(L){return L.match(Ee)||[]}var je=Ae;function Ve(L,ee,le){return L=(0,U.Z)(L),ee=le?void 0:ee,ee===void 0?i(L)?je(L):v(L):L.match(ee)||[]}var Re=Ve,Ie="['\u2019]",Ye=RegExp(Ie,"g");function Xe(L){return function(ee){return Z(Re(b(ee).replace(Ye,"")),L,"")}}var Qe=Xe},13413:function(T,m){var n=typeof global=="object"&&global&&global.Object===Object&&global;m.Z=n},66092:function(T,m,n){var r=n(13413),Z=typeof self=="object"&&self&&self.Object===Object&&self,a=r.Z||Z||Function("return this")();m.Z=a},27771:function(T,m){var n=Array.isArray;m.Z=n},18533:function(T,m){function n(r){return r!=null&&typeof r=="object"}m.Z=n},75306:function(T,m,n){n.d(m,{Z:function(){return k}});var r=n(17685),Z=n(74073),a=n(27771),I=n(93589),j=n(18533),W="[object Symbol]";function G(c){return typeof c=="symbol"||(0,j.Z)(c)&&(0,I.Z)(c)==W}var U=G,J=1/0,D=r.Z?r.Z.prototype:void 0,z=D?D.toString:void 0;function w(c){if(typeof c=="string")return c;if((0,a.Z)(c))return(0,Z.Z)(c,w)+"";if(U(c))return z?z.call(c):"";var b=c+"";return b=="0"&&1/c==-J?"-0":b}var p=w;function s(c){return c==null?"":p(c)}var k=s},64529:function(T,m,n){n.d(m,{Ue:function(){return w}});const r=s=>{let k;const c=new Set,b=(E,C)=>{const P=typeof E=="function"?E(k):E;if(!Object.is(P,k)){const M=k;k=(C!=null?C:typeof P!="object"||P===null)?P:Object.assign({},k,P),c.forEach(A=>A(k,M))}},d=()=>k,g={setState:b,getState:d,getInitialState:()=>i,subscribe:E=>(c.add(E),()=>c.delete(E)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),c.clear()}},i=k=s(b,d,g);return g},Z=s=>s?r(s):r;var a=s=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),Z(s)),I=n(67294),j=n(28258);const{useDebugValue:W}=I,{useSyncExternalStoreWithSelector:G}=j;let U=!1;const J=s=>s;function D(s,k=J,c){c&&!U&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),U=!0);const b=G(s.subscribe,s.getState,s.getServerState||s.getInitialState,k,c);return W(b),b}const z=s=>{typeof s!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const k=typeof s=="function"?Z(s):s,c=(b,d)=>D(k,b,d);return Object.assign(c,k),c},w=s=>s?z(s):z;var p=s=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),w(s))},782:function(T,m,n){n.d(m,{mW:function(){return G},tJ:function(){return b}});const r=(d,S)=>(v,h,g)=>(g.dispatch=i=>(v(E=>d(E,i),!1,i),i),g.dispatchFromDevtools=!0,K({dispatch:(...i)=>g.dispatch(...i)},S)),Z=null,a=new Map,I=d=>{const S=a.get(d);return S?Object.fromEntries(Object.entries(S.stores).map(([v,h])=>[v,h.getState()])):{}},j=(d,S,v)=>{if(d===void 0)return{type:"untracked",connection:S.connect(v)};const h=a.get(v.name);if(h)return K({type:"tracked",store:d},h);const g={connection:S.connect(v),stores:{}};return a.set(v.name,g),K({type:"tracked",store:d},g)},G=(d,S={})=>(v,h,g)=>{const R=S,{enabled:i,anonymousActionType:E,store:C}=R,P=rn(R,["enabled","anonymousActionType","store"]);let M;try{M=(i!=null?i:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(u){}if(!M)return i&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),d(v,h,g);const O=j(C,M,P),{connection:A}=O,B=rn(O,["connection"]);let H=!0;g.setState=(u,y,_)=>{const V=v(u,y);if(!H)return V;const se=_===void 0?{type:E||"anonymous"}:typeof _=="string"?{type:_}:_;return C===void 0?(A==null||A.send(se,h()),V):(A==null||A.send(nn(K({},se),{type:`${C}/${se.type}`}),nn(K({},I(P.name)),{[C]:g.getState()})),V)};const F=(...u)=>{const y=H;H=!1,v(...u),H=y},$=d(g.setState,h,g);if(B.type==="untracked"?A==null||A.init($):(B.stores[B.store]=g,A==null||A.init(Object.fromEntries(Object.entries(B.stores).map(([u,y])=>[u,u===B.store?$:y.getState()])))),g.dispatchFromDevtools&&typeof g.dispatch=="function"){let u=!1;const y=g.dispatch;g.dispatch=(..._)=>{_[0].type==="__setState"&&!u&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),u=!0),y(..._)}}return A.subscribe(u=>{var y;switch(u.type){case"ACTION":if(typeof u.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return U(u.payload,_=>{if(_.type==="__setState"){if(C===void 0){F(_.state);return}Object.keys(_.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const V=_.state[C];if(V==null)return;JSON.stringify(g.getState())!==JSON.stringify(V)&&F(V);return}g.dispatchFromDevtools&&typeof g.dispatch=="function"&&g.dispatch(_)});case"DISPATCH":switch(u.payload.type){case"RESET":return F($),C===void 0?A==null?void 0:A.init(g.getState()):A==null?void 0:A.init(I(P.name));case"COMMIT":if(C===void 0){A==null||A.init(g.getState());return}return A==null?void 0:A.init(I(P.name));case"ROLLBACK":return U(u.state,_=>{if(C===void 0){F(_),A==null||A.init(g.getState());return}F(_[C]),A==null||A.init(I(P.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return U(u.state,_=>{if(C===void 0){F(_);return}JSON.stringify(g.getState())!==JSON.stringify(_[C])&&F(_[C])});case"IMPORT_STATE":{const{nextLiftedState:_}=u.payload,V=(y=_.computedStates.slice(-1)[0])==null?void 0:y.state;if(!V)return;F(C===void 0?V:V[C]),A==null||A.send(null,_);return}case"PAUSE_RECORDING":return H=!H}return}}),$},U=(d,S)=>{let v;try{v=JSON.parse(d)}catch(h){console.error("[zustand devtools middleware] Could not parse the received json",h)}v!==void 0&&S(v)},J=d=>(S,v,h)=>{const g=h.subscribe;return h.subscribe=(E,C,P)=>{let M=E;if(C){const A=(P==null?void 0:P.equalityFn)||Object.is;let B=E(h.getState());M=H=>{const F=E(H);if(!A(B,F)){const $=B;C(B=F,$)}},P!=null&&P.fireImmediately&&C(B,B)}return g(M)},d(S,v,h)},D=null,z=(d,S)=>(...v)=>Object.assign({},d,S(...v));function w(d,S){let v;try{v=d()}catch(g){return}return{getItem:g=>{var i;const E=P=>P===null?null:JSON.parse(P,S==null?void 0:S.reviver),C=(i=v.getItem(g))!=null?i:null;return C instanceof Promise?C.then(E):E(C)},setItem:(g,i)=>v.setItem(g,JSON.stringify(i,S==null?void 0:S.replacer)),removeItem:g=>v.removeItem(g)}}const p=d=>S=>{try{const v=d(S);return v instanceof Promise?v:{then(h){return p(h)(v)},catch(h){return this}}}catch(v){return{then(h){return this},catch(h){return p(h)(v)}}}},s=(d,S)=>(v,h,g)=>{let i=K({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:O=>O,version:0,merge:(O,u)=>K(K({},u),O)},S),E=!1;const C=new Set,P=new Set;let M;try{M=i.getStorage()}catch(O){}if(!M)return d((...O)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),v(...O)},h,g);const A=p(i.serialize),B=()=>{const O=i.partialize(K({},h()));let u;const y=A({state:O,version:i.version}).then(_=>M.setItem(i.name,_)).catch(_=>{u=_});if(u)throw u;return y},H=g.setState;g.setState=(O,u)=>{H(O,u),B()};const F=d((...O)=>{v(...O),B()},h,g);let $;const R=()=>{var O;if(!M)return;E=!1,C.forEach(y=>y(h()));const u=((O=i.onRehydrateStorage)==null?void 0:O.call(i,h()))||void 0;return p(M.getItem.bind(M))(i.name).then(y=>{if(y)return i.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var _;return $=i.merge(y,(_=h())!=null?_:F),v($,!0),B()}).then(()=>{u==null||u($,void 0),E=!0,P.forEach(y=>y($))}).catch(y=>{u==null||u(void 0,y)})};return g.persist={setOptions:O=>{i=K(K({},i),O),O.getStorage&&(M=O.getStorage())},clearStorage:()=>{M==null||M.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>R(),hasHydrated:()=>E,onHydrate:O=>(C.add(O),()=>{C.delete(O)}),onFinishHydration:O=>(P.add(O),()=>{P.delete(O)})},R(),$||F},k=(d,S)=>(v,h,g)=>{let i=K({storage:w(()=>localStorage),partialize:R=>R,version:0,merge:(R,O)=>K(K({},O),R)},S),E=!1;const C=new Set,P=new Set;let M=i.storage;if(!M)return d((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),v(...R)},h,g);const A=()=>{const R=i.partialize(K({},h()));return M.setItem(i.name,{state:R,version:i.version})},B=g.setState;g.setState=(R,O)=>{B(R,O),A()};const H=d((...R)=>{v(...R),A()},h,g);g.getInitialState=()=>H;let F;const $=()=>{var R,O;if(!M)return;E=!1,C.forEach(y=>{var _;return y((_=h())!=null?_:H)});const u=((O=i.onRehydrateStorage)==null?void 0:O.call(i,(R=h())!=null?R:H))||void 0;return p(M.getItem.bind(M))(i.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var _;return F=i.merge(y,(_=h())!=null?_:H),v(F,!0),A()}).then(()=>{u==null||u(F,void 0),F=h(),E=!0,P.forEach(y=>y(F))}).catch(y=>{u==null||u(void 0,y)})};return g.persist={setOptions:R=>{i=K(K({},i),R),R.storage&&(M=R.storage)},clearStorage:()=>{M==null||M.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>$(),hasHydrated:()=>E,onHydrate:R=>(C.add(R),()=>{C.delete(R)}),onFinishHydration:R=>(P.add(R),()=>{P.delete(R)})},i.skipHydration||$(),F||H},b=(d,S)=>"getStorage"in S||"serialize"in S||"deserialize"in S?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),s(d,S)):k(d,S)}}]);
}());