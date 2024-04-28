!(function(){"use strict";var Ln=Object.defineProperty,Dn=Object.defineProperties;var Hn=Object.getOwnPropertyDescriptors;var Ur=Object.getOwnPropertySymbols;var wn=Object.prototype.hasOwnProperty,kn=Object.prototype.propertyIsEnumerable;var Sn=(P,p,i)=>p in P?Ln(P,p,{enumerable:!0,configurable:!0,writable:!0,value:i}):P[p]=i,se=(P,p)=>{for(var i in p||(p={}))wn.call(p,i)&&Sn(P,i,p[i]);if(Ur)for(var i of Ur(p))kn.call(p,i)&&Sn(P,i,p[i]);return P},fn=(P,p)=>Dn(P,Hn(p));var un=(P,p)=>{var i={};for(var a in P)wn.call(P,a)&&p.indexOf(a)<0&&(i[a]=P[a]);if(P!=null&&Ur)for(var a of Ur(P))p.indexOf(a)<0&&kn.call(P,a)&&(i[a]=P[a]);return i};(self.webpackChunkez_store=self.webpackChunkez_store||[]).push([[9229],{99882:function(P,p,i){i.d(p,{E_:function(){return Z},nc:function(){return Y}});var a=i(67294);function j(S){var g=[];if(S.length===0)return"";if(typeof S[0]!="string")throw new TypeError("Url must be a string. Received "+S[0]);if(S[0].match(/^[^/:]+:\/*$/)&&S.length>1){var E=S.shift();S[0]=E+S[0]}S[0].match(/^file:\/\/\//)?S[0]=S[0].replace(/^([^/:]+):\/*/,"$1:///"):S[0]=S[0].replace(/^([^/:]+):\/*/,"$1://");for(var v=0;v<S.length;v++){var T=S[v];if(typeof T!="string")throw new TypeError("Url must be a string. Received "+T);T!==""&&(v>0&&(T=T.replace(/^[\/]+/,"")),v<S.length-1?T=T.replace(/[\/]+$/,""):T=T.replace(/[\/]+$/,"/"),g.push(T))}var C=g.join("/");C=C.replace(/\/(\?|&|#[^!])/g,"$1");var M=C.split("?");return C=M.shift()+(M.length>0?"?":"")+M.join("&"),C}function u(){var S;return typeof arguments[0]=="object"?S=arguments[0]:S=[].slice.call(arguments),j(S)}var k="https://unpkg.com",b="https://registry.npmmirror.com",m=function(g){var E=g.pkg,v=g.version,T=v===void 0?"latest":v,C=g.path,M=g.proxy;switch(M){case"unpkg":return u(k,"".concat(E,"@").concat(T),C);default:return u(b,E,T,"files",C)}},I=i(85893),Z=(0,a.createContext)(null),re=null,J=function(g){var E=g.pkg,v=g.version,T=g.path;return m({path:T,pkg:E,proxy:"aliyun",version:v})},Y=function(){var g=(0,a.useContext)(Z);return g?(g==null?void 0:g.proxy)!=="custom"?function(E){var v=E.pkg,T=E.version,C=E.path;return m({path:C,pkg:v,proxy:g.proxy,version:T})}:(g==null?void 0:g.customCdnFn)||J:J},L=null},18394:function(P,p,i){i.d(p,{Z:function(){return le}});var a=i(82656),j=i(87853),u=i(67294),k=i(13144),b=i.n(k),m=i(53124),I=i(16474),Z=i(94423),re=i(48311),J=i(66968),Y=i(48132);const L=l=>{const{componentCls:h,colorText:d,fontSize:s,lineHeight:x,fontFamily:_}=l;return{[h]:{color:d,fontSize:s,lineHeight:x,fontFamily:_}}},S=()=>({});var g=(0,Y.I$)("App",L,S);const E=()=>u.useContext(J.Z),v=l=>{const{prefixCls:h,children:d,className:s,rootClassName:x,message:_,notification:ne,style:de,component:ue="div"}=l,{getPrefixCls:Pe}=(0,u.useContext)(m.E_),Re=Pe("app",h),[xe,Me,Je]=g(Re),Te=b()(Me,Re,s,x,Je),Se=(0,u.useContext)(J.J),Ae=u.useMemo(()=>({message:Object.assign(Object.assign({},Se.message),_),notification:Object.assign(Object.assign({},Se.notification),ne)}),[_,ne,Se.message,Se.notification]),[zr,Lr]=(0,I.Z)(Ae.message),[ge,an]=(0,re.Z)(Ae.notification),[Dr,Hr]=(0,Z.Z)(),on=u.useMemo(()=>({message:zr,notification:ge,modal:Dr}),[zr,ge,Dr]),pn=ue===!1?u.Fragment:ue,mn={className:Te,style:de};return xe(u.createElement(J.Z.Provider,{value:on},u.createElement(J.J.Provider,{value:Ae},u.createElement(pn,Object.assign({},ue===!1?void 0:mn),Hr,Lr,an,d))))};v.useApp=E;var T=v,C=i(52335),M=i(99882),R=function(h){var d=document.createElement("link");return d.rel="stylesheet",d.href=h,d},F=(0,u.memo)(function(l){var h=l.url,d=(0,u.useRef)(!1);return(0,u.useEffect)(function(){if(!d.current){d.current=!0;var s=R(h);document.head.append(s)}},[]),null}),O=F,f=i(14408),B,D,Q,X,U,ae,oe,ee,te=function(h){var d=h.css,s=h.token,x=h.isDarkMode,_=(0,C.F4)(B||(B=(0,f.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:d(D||(D=(0,f.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:d(Q||(Q=(0,f.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:d(X||(X=(0,f.Z)([`
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
    `])),s.colorFill,s.motionEaseOut),gradientAnimation:d(U||(U=(0,f.Z)([`
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
    `])),s.gold,s.magenta,s.geekblue,s.cyan,_),markdown:d(ae||(ae=(0,f.Z)([`
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
    `])),s.colorTextSecondary,s.colorTextDescription,s.fontFamilyCode,s.colorFillSecondary,s.colorBorderSecondary,s.borderRadius,s.fontFamily,s.colorBgLayout,x?s.colorText:"#333",x?s.colorTextSecondary:"#000",x?s.colorTextSecondary:"#000",s.colorTextSecondary,s.colorBorder,s.colorBorderSecondary,s.colorFillTertiary,s.colorBorderSecondary,s.borderRadius,s.fontFamily,s.colorTextSecondary,s.colorTextSecondary,s.motionEaseOut,s.colorBorder,s.colorFillTertiary,s.borderRadius,s.colorBorderSecondary,s.colorFillQuaternary,s.colorBorderSecondary,s.fontFamilyCode),noScrollbar:d(oe||(oe=(0,f.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:d(ee||(ee=(0,f.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),s.colorTextSecondary,s.colorText)}},N=i(86053),W=i(35493),w=i(54196),z=i(75306);function H(l,h,d){var s=-1,x=l.length;h<0&&(h=-h>x?0:x+h),d=d>x?x:d,d<0&&(d+=x),x=h>d?0:d-h>>>0,h>>>=0;for(var _=Array(x);++s<x;)_[s]=l[s+h];return _}var fe=H;function Ce(l,h,d){var s=l.length;return d=d===void 0?s:d,!h&&d>=s?l:fe(l,h,d)}var ir=Ce,Ue="\\ud800-\\udfff",jr="\\u0300-\\u036f",fr="\\ufe20-\\ufe2f",Ye="\\u20d0-\\u20ff",pe=jr+fr+Ye,ur="\\ufe0e\\ufe0f",Ke="\\u200d",Qe=RegExp("["+Ke+Ue+pe+ur+"]");function sr(l){return Qe.test(l)}var Oe=sr;function Ir(l){return l.split("")}var Le=Ir,We="\\ud800-\\udfff",Xe="\\u0300-\\u036f",cr="\\ufe20-\\ufe2f",Ve="\\u20d0-\\u20ff",lr=Xe+cr+Ve,dr="\\ufe0e\\ufe0f",Rr="["+We+"]",Be="["+lr+"]",qe="\\ud83c[\\udffb-\\udfff]",er="(?:"+Be+"|"+qe+")",br="[^"+We+"]",gr="(?:\\ud83c[\\udde6-\\uddff]){2}",pr="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="\\u200d",rr=er+"?",$e="["+dr+"]?",Zr="(?:"+mr+"(?:"+[br,gr,pr].join("|")+")"+$e+rr+")*",hr=$e+rr+Zr,vr="(?:"+[br+Be+"?",Be,gr,pr,Rr].join("|")+")",V=RegExp(qe+"(?="+qe+")|"+vr+hr,"g");function be(l){return l.match(V)||[]}var ze=be;function yr(l){return Oe(l)?ze(l):Le(l)}var De=yr;function xr(l){return function(h){h=(0,z.Z)(h);var d=Oe(h)?De(h):void 0,s=d?d[0]:h.charAt(0),x=d?ir(d,1).join(""):h.slice(1);return s[l]()+x}}var sn=xr,cn=sn("toUpperCase"),Wr=cn;function Er(l){return Wr((0,z.Z)(l).toLowerCase())}var Sr=Er,ln=i(53683),dn=(0,ln.Z)(function(l,h,d){return h=h.toLowerCase(),l+(d?Sr(h):h)}),Fr=dn,ce=i(79535),bn=function(h){var d,s=h.name,x=h.scale,_=h.appearance;return d={},(0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)(d,"".concat(s,"Bg"),x["".concat(_,"A")][1]),"".concat(s,"BgHover"),x["".concat(_,"A")][2]),"".concat(s,"Border"),x[_][4]),"".concat(s,"BorderSecondary"),x[_][3]),"".concat(s,"BorderHover"),x[_][5]),"".concat(s,"Hover"),x[_][10]),"".concat(s),x[_][9]),"".concat(s,"Active"),x[_][7]),"".concat(s,"TextHover"),x["".concat(_,"A")][10]),"".concat(s,"Text"),x["".concat(_,"A")][9]),(0,w.Z)(d,"".concat(s,"TextActive"),x["".concat(_,"A")][7])},Br=function(h){var d=h.name,s=h.scale,x=h.appearance,_={},ne=(0,W.Z)(s[x].entries()),de;try{for(ne.s();!(de=ne.n()).done;){var ue=(0,N.Z)(de.value,2),Pe=ue[0],Re=ue[1];Pe===0||Pe===12||(_["".concat(d).concat(Pe)]=Re)}}catch(Ae){ne.e(Ae)}finally{ne.f()}var xe=(0,W.Z)(s["".concat(x,"A")].entries()),Me;try{for(xe.s();!(Me=xe.n()).done;){var Je=(0,N.Z)(Me.value,2),Te=Je[0],Se=Je[1];Te===0||Te===12||(_["".concat(d).concat(Te,"A")]=Se)}}catch(Ae){xe.e(Ae)}finally{xe.f()}return(0,a.Z)((0,a.Z)({},_),bn({appearance:x,name:d,scale:s}))},$r=function(h){for(var d=h.isDarkMode,s={},x=0,_=Object.entries(ce._);x<_.length;x++){var ne=(0,N.Z)(_[x],2),de=ne[0],ue=ne[1];s=(0,a.Z)((0,a.Z)({},s),Br({appearance:d?"dark":"light",name:Fr(de),scale:ue}))}return s},me=function(h){var d=h.type,s=h.scale,x=h.appearance,_=Sr(d),ne=x==="dark";return(0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)({},"color".concat(_,"Bg"),s[x][1]),"color".concat(_,"BgHover"),s[x][2]),"color".concat(_,"Border"),s[x][4]),"color".concat(_,"BorderHover"),s[x][ne?5:3]),"color".concat(_,"Hover"),s[x][ne?10:8]),"color".concat(_),s[x][9]),"color".concat(_,"Active"),s[x][ne?7:10]),"color".concat(_,"TextHover"),s[x][ne?10:8]),"color".concat(_,"Text"),s[x][9]),"color".concat(_,"TextActive"),s[x][ne?7:10])},nr=function(h){var d=h.scale,s=h.appearance;return{colorBgContainer:s==="dark"?d[s][1]:d[s][0],colorBgElevated:s==="dark"?d[s][2]:d[s][0],colorBgLayout:s==="dark"?d[s][0]:d[s][1],colorBgMask:d.lightA[8],colorBgSpotlight:d[s][5],colorBorder:d[s][4],colorBorderSecondary:d[s][3],colorFill:d["".concat(s,"A")][3],colorFillQuaternary:d["".concat(s,"A")][0],colorFillSecondary:d["".concat(s,"A")][2],colorFillTertiary:d["".concat(s,"A")][1],colorText:d[s][12],colorTextQuaternary:d[s][6],colorTextSecondary:d[s][10],colorTextTertiary:d[s][8]}},_r={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},gn=me({appearance:"dark",scale:ce._.bnw,type:"Primary"}),Nr=nr({appearance:"dark",scale:ce._.gray}),wr=me({appearance:"dark",scale:ce._.lime,type:"Success"}),Gr=me({appearance:"dark",scale:ce._.gold,type:"Warning"}),Ne=me({appearance:"dark",scale:ce._.red,type:"Error"}),Ge=me({appearance:"dark",scale:ce._.blue,type:"Info"}),Jr=(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},gn),Nr),wr),Gr),Ne),Ge),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ge.colorInfoText,colorLinkActive:Ge.colorInfoTextActive,colorLinkHover:Ge.colorInfoTextHover,colorTextLightSolid:Nr.colorBgLayout}),Yr=Jr,Kr=function(h,d){var s=h.primaryColor,x=h.neutralColor,_={},ne={},de=ce._[s];de&&(_=me({appearance:"dark",scale:de,type:"Primary"}));var ue=_r[x];return ue&&(ne=nr({appearance:"dark",scale:ue})),(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},d),Yr),_),ne)},Qr=me({appearance:"light",scale:ce._.bnw,type:"Primary"}),Pr=nr({appearance:"light",scale:ce._.gray}),kr=me({appearance:"light",scale:ce._.green,type:"Success"}),Xr=me({appearance:"light",scale:ce._.orange,type:"Warning"}),Vr=me({appearance:"light",scale:ce._.volcano,type:"Error"}),tr=me({appearance:"light",scale:ce._.geekblue,type:"Info"}),je=(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},Qr),Pr),kr),Xr),Vr),tr),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:tr.colorInfoText,colorLinkActive:tr.colorInfoTextActive,colorLinkHover:tr.colorInfoTextHover,colorTextLightSolid:Pr.colorBgLayout}),qr=je,ye=function(h,d){var s=h.primaryColor,x=h.neutralColor,_={},ne={},de=ce._[s];de&&(_=me({appearance:"light",scale:de,type:"Primary"}));var ue=_r[x];return ue&&(ne=nr({appearance:"light",scale:ue})),(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},d),qr),_),ne)},Mr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',Cr='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',Ie='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',Tr="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",en={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[Cr,Ie,Mr].join(","),fontFamilyCode:[Tr,Ie,Mr].join(",")},ar=function(h){var d=h.neutralColor,s=h.appearance,x=h.primaryColor,_=s==="dark";return{algorithm:_?Kr:ye,token:(0,a.Z)((0,a.Z)({},en),{},{neutralColor:d,primaryColor:x})}},He=i(35360),Ar,or=function(l){return(0,C.iv)(Ar||(Ar=(0,f.Z)([`
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
`])),l.prefixCls,(0,He.XV)(l.colorPrimary),l.prefixCls,l.prefixCls,(0,He.XV)(l.colorPrimary),(0,He.XV)(l.colorPrimary),(0,He.XV)(l.colorPrimaryActive),l.prefixCls,l.colorBgLayout,l.colorText,l.borderRadiusSM,l.prefixCls,l.colorText,l.prefixCls,l.colorBgContainer,l.prefixCls,l.prefixCls,l.prefixCls,l.stylish.blur,l.borderRadiusLG,(0,He.m4)(l.colorBgMask,.1),l.prefixCls,l.colorBorderSecondary,l.boxShadowSecondary,l.prefixCls,l.colorBorderSecondary,l.borderRadius,l.boxShadowSecondary,l.prefixCls)},Fe,rn=function(l){return(0,C.iv)(Fe||(Fe=(0,f.Z)([`
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
`])),l.isDarkMode?"dark":"light",l.fontFamily,l.fontSize,l.colorTextBase,l.colorBgLayout,l.fontFamilyCode,l.fontFamilyCode,l.yellow9,l.colorFill)},nn=(0,C.vJ)(function(l){var h=l.theme;return[rn(h),or(h)]}),tn=nn,_e=i(85893),he=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],Or=(0,u.memo)(function(l){var h=l.children,d=l.customStylish,s=l.customToken,x=l.enableWebfonts,_=x===void 0?!0:x,ne=l.enableGlobalStyle,de=ne===void 0?!0:ne,ue=l.webfonts,Pe=l.customTheme,Re=Pe===void 0?{}:Pe,xe=l.className,Me=l.style,Je=(0,j.Z)(l,he),Te=(0,M.nc)(),Se=ue||[Te({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),Te({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),Te({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),Te({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],Ae=(0,u.useCallback)(function(ge){return(0,a.Z)((0,a.Z)({},te(ge)),d==null?void 0:d(ge))},[d]),zr=(0,u.useCallback)(function(ge){return(0,a.Z)((0,a.Z)({},$r(ge)),s==null?void 0:s(ge))},[s]),Lr=(0,u.useCallback)(function(ge){return ar({appearance:ge,neutralColor:Re.neutralColor,primaryColor:Re.primaryColor})},[Re.primaryColor,Re.neutralColor]);return(0,_e.jsxs)(_e.Fragment,{children:[_&&(Se==null?void 0:Se.length)>0&&Se.map(function(ge){return(0,_e.jsx)(O,{url:ge},ge)}),(0,_e.jsx)(C.V9,{speedy:!0,children:(0,_e.jsxs)(C.f6,(0,a.Z)((0,a.Z)({customStylish:Ae,customToken:zr},Je),{},{theme:Lr,children:[de&&(0,_e.jsx)(tn,{}),(0,_e.jsx)(T,{className:xe,style:(0,a.Z)({minHeight:"inherit",width:"inherit"},Me),children:h})]}))})]})});Or.displayName="LobeThemeProvider";var le=Or},79535:function(P,p,i){i.d(p,{_:function(){return a}});var a={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}}},2059:function(P,p,i){var a=i(92573),j=i(67294),u=i(85893),k=(0,j.memo)(function(){return(0,u.jsxs)(a.ql,{children:[(0,u.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,u.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,u.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,u.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,u.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,u.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,u.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,u.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,u.jsx)("meta",{content:"#000000",name:"theme-color"})]})});p.Z=k},29950:function(P,p,i){i.d(p,{f:function(){return u}});var a=i(64529),j=i(782),u=(0,a.Ue)()((0,j.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},64063:function(P){P.exports=function p(i,a){if(i===a)return!0;if(i&&a&&typeof i=="object"&&typeof a=="object"){if(i.constructor!==a.constructor)return!1;var j,u,k;if(Array.isArray(i)){if(j=i.length,j!=a.length)return!1;for(u=j;u--!==0;)if(!p(i[u],a[u]))return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString)return i.toString()===a.toString();if(k=Object.keys(i),j=k.length,j!==Object.keys(a).length)return!1;for(u=j;u--!==0;)if(!Object.prototype.hasOwnProperty.call(a,k[u]))return!1;for(u=j;u--!==0;){var b=k[u];if(!p(i[b],a[b]))return!1}return!0}return i!==i&&a!==a}},35360:function(P,p,i){i.d(p,{XV:function(){return Cn},m4:function(){return Fe}});var a=i(87462),j=i(97326),u=i(89611);function k(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,(0,u.Z)(e,r)}var b=i(61120);function m(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch(r){return typeof e=="function"}}var I=i(78814);function Z(e,r,n){return(0,I.Z)()?Z=Reflect.construct.bind():Z=function(o,c,y){var A=[null];A.push.apply(A,c);var $=Function.bind.apply(o,A),G=new $;return y&&(0,u.Z)(G,y.prototype),G},Z.apply(null,arguments)}function re(e){var r=typeof Map=="function"?new Map:void 0;return re=function(t){if(t===null||!m(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(t))return r.get(t);r.set(t,o)}function o(){return Z(t,arguments,(0,b.Z)(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),(0,u.Z)(o,t)},re(e)}function J(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function Y(e){return-e}function L(e,r){return e+r}function S(e,r){return e-r}function g(e,r){return e*r}function E(e,r){return e/r}function v(){return Math.max.apply(Math,arguments)}function T(){return Math.min.apply(Math,arguments)}function C(){return Array.of.apply(Array,arguments)}var M={symbols:{"*":{infix:{symbol:"*",f:g,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"*",regSymbol:"\\*"},"/":{infix:{symbol:"/",f:E,notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"/",regSymbol:"/"},"+":{infix:{symbol:"+",f:L,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"+",f:J,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"+",regSymbol:"\\+"},"-":{infix:{symbol:"-",f:S,notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"-",f:Y,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"-",regSymbol:"-"},",":{infix:{symbol:",",f:C,notation:"infix",precedence:1,rightToLeft:0,argCount:2},symbol:",",regSymbol:","},"(":{prefix:{symbol:"(",f:J,notation:"prefix",precedence:0,rightToLeft:0,argCount:1},symbol:"(",regSymbol:"\\("},")":{postfix:{symbol:")",f:void 0,notation:"postfix",precedence:0,rightToLeft:0,argCount:1},symbol:")",regSymbol:"\\)"},min:{func:{symbol:"min",f:T,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"min",regSymbol:"min\\b"},max:{func:{symbol:"max",f:v,notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"max",regSymbol:"max\\b"}}},R=null,F={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function O(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=r[0],o=[],c;for(c=1;c<r.length;c+=1)o.push(r[c]);return o.forEach(function(y){t=t.replace(/%[a-z]/,y)}),t}var f=function(e){k(r,e);function r(n){var t;if(!0)t=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this;else var o,c,y;return(0,j.Z)(t)}return r}(re(Error)),B=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function D(e){var r={};return r.symbols=e?_extends({},R.symbols,e.symbols):_extends({},R.symbols),r}function Q(e,r){var n,t=e.pop();return r.push(t.f.apply(t,(n=[]).concat.apply(n,r.splice(-t.argCount)))),t.precedence}function X(e,r){var n=D(r),t,o=[n.symbols["("].prefix],c=[],y=new RegExp("\\d+(?:\\.\\d+)?|"+Object.keys(n.symbols).map(function(ve){return n.symbols[ve]}).sort(function(ve,Ee){return Ee.symbol.length-ve.symbol.length}).map(function(ve){return ve.regSymbol}).join("|")+"|(\\S)","g");y.lastIndex=0;var A=!1;do{t=y.exec(e);var $=t||[")",void 0],G=$[0],ie=$[1],K=n.symbols[G],q=K&&!K.prefix&&!K.func,we=!K||!K.postfix&&!K.infix;if(ie||(A?we:q))throw new f(37,t?t.index:e.length,e);if(A){var ke=K.postfix||K.infix;do{var Ze=o[o.length-1];if((ke.precedence-Ze.precedence||Ze.rightToLeft)>0)break}while(Q(o,c));A=ke.notation==="postfix",ke.symbol!==")"&&(o.push(ke),A&&Q(o,c))}else if(K){if(o.push(K.prefix||K.func),K.func&&(t=y.exec(e),!t||t[0]!=="("))throw new f(38,t?t.index:e.length,e)}else c.push(+G),A=!0}while(t&&o.length);if(o.length)throw new f(39,t?t.index:e.length,e);if(t)throw new f(40,t?t.index:e.length,e);return c.pop()}function U(e){return e.split("").reverse().join("")}function ae(e,r){var n=U(e),t=n.match(B);if(t&&!t.every(function(c){return c===t[0]}))throw new f(41);var o=U(n.replace(B,""));return""+X(o,r)+(t?U(t[0]):"")}var oe=/--[\S]*/g;function ee(e,r){if(!e||!e.match(oe))throw new f(73);var n;if(typeof document!="undefined"&&document.documentElement!==null&&(n=getComputedStyle(document.documentElement).getPropertyValue(e)),n)return n.trim();if(r)return r;throw new f(74)}function te(e){return e.charAt(0).toUpperCase()+e.slice(1)}var N=null;function W(e,r){if(!e)return r.toLowerCase();var n=e.split("-");if(n.length>1)return n.splice(1,0,r),n.reduce(function(o,c){return""+o+te(c)});var t=e.replace(/([a-z])([A-Z])/g,"$1"+r+"$2");return e===t?""+e+r:t}function w(e,r){for(var n={},t=0;t<r.length;t+=1)(r[t]||r[t]===0)&&(n[W(e,N[t])]=r[t]);return n}function z(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var o=n[0],c=n[1],y=c===void 0?o:c,A=n[2],$=A===void 0?o:A,G=n[3],ie=G===void 0?y:G,K=[o,y,$,ie];return w(e,K)}function H(e,r){return e.substr(-r.length)===r}var fe=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Ce(e){if(typeof e!="string")return e;var r=e.match(fe);return r?parseFloat(e):e}var ir=function(r){return function(n,t){t===void 0&&(t="16px");var o=n,c=t;if(typeof n=="string"){if(!H(n,"px"))throw new f(69,r,n);o=Ce(n)}if(typeof t=="string"){if(!H(t,"px"))throw new f(70,r,t);c=Ce(t)}if(typeof o=="string")throw new f(71,n,r);if(typeof c=="string")throw new f(72,t,r);return""+o/c+r}},Ue=ir,jr=Ue("em"),fr=null,Ye=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function pe(e){if(typeof e!="string")return[e,""];var r=e.match(Ye);return r?[parseFloat(e),r[2]]:[e,void 0]}function ur(e,r){if(typeof e!="object"||e===null)throw new f(75,typeof e);var n={};return Object.keys(e).forEach(function(t){typeof e[t]=="object"&&e[t]!==null?n[t]=ur(e[t],r):!r||r&&(r===t||r.indexOf(t)>=0)?n[t]=e[t]+" !important":n[t]=e[t]}),n}var Ke={minorSecond:1.067,majorSecond:1.125,minorThird:1.2,majorThird:1.25,perfectFourth:1.333,augFourth:1.414,perfectFifth:1.5,minorSixth:1.6,goldenSection:1.618,majorSixth:1.667,minorSeventh:1.778,majorSeventh:1.875,octave:2,majorTenth:2.5,majorEleventh:2.667,majorTwelfth:3,doubleOctave:4};function Qe(e){return Ke[e]}function sr(e,r,n){if(r===void 0&&(r="1em"),n===void 0&&(n=1.333),typeof e!="number")throw new f(42);if(typeof n=="string"&&!Ke[n])throw new f(43);var t=typeof r=="string"?pe(r):[r,""],o=t[0],c=t[1],y=typeof n=="string"?Qe(n):n;if(typeof o=="string")throw new f(44,r);return""+o*Math.pow(y,e)+(c||"")}var Oe=Ue("rem"),Ir=null,Le=16;function We(e){var r=pe(e);if(r[1]==="px")return parseFloat(e);if(r[1]==="%")return parseFloat(e)/100*Le;throw new f(78,r[1])}function Xe(){if(typeof document!="undefined"&&document.documentElement!==null){var e=getComputedStyle(document.documentElement).fontSize;return e?We(e):Le}return Le}function cr(e,r){var n=pe(e);if(n[1]!=="rem"&&n[1]!=="")throw new f(77,n[1]);var t=r?We(r):Xe();return n[0]*t+"px"}var Ve={back:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",circ:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",cubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",expo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",quad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",quart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",quint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",sine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)"};function lr(e){return Ve[e.toLowerCase().trim()]}var dr={back:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",circ:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",cubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",expo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",quad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",quart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",quint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",sine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function Rr(e){return dr[e.toLowerCase().trim()]}var Be={back:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",cubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",circ:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",expo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",quad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",quart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",quint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",sine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)"};function qe(e){return Be[e.toLowerCase().trim()]}function er(e,r,n,t){n===void 0&&(n="320px"),t===void 0&&(t="1200px");var o=pe(e),c=o[0],y=o[1],A=pe(r),$=A[0],G=A[1],ie=pe(n),K=ie[0],q=ie[1],we=pe(t),ke=we[0],Ze=we[1];if(typeof K!="number"||typeof ke!="number"||!q||!Ze||q!==Ze)throw new f(47);if(typeof c!="number"||typeof $!="number"||y!==G)throw new f(48);if(y!==q||G!==Ze)throw new f(76);var ve=(c-$)/(K-ke),Ee=$-ve*ke;return"calc("+Ee.toFixed(2)+(y||"")+" + "+(100*ve).toFixed(2)+"vw)"}function br(e){var r;e===void 0&&(e="&");var n=e+"::after";return r={},r[n]={clear:"both",content:'""',display:"table"},r}function gr(e){return e===void 0&&(e=0),{position:"absolute",top:e,right:e,bottom:e,left:e}}function pr(e,r){r===void 0&&(r=1);var n={display:"inline-block",maxWidth:e||"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"};return r>1?_extends({},n,{WebkitBoxOrient:"vertical",WebkitLineClamp:r,display:"-webkit-box",whiteSpace:"normal"}):n}function mr(e,r){var n=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=rr(e))||r&&e&&typeof e.length=="number"){n&&(e=n);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(e,r){if(e){if(typeof e=="string")return $e(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $e(e,r)}}function $e(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Zr(e,r,n){if(r===void 0&&(r="320px"),n===void 0&&(n="1200px"),!Array.isArray(e)&&typeof e!="object"||e===null)throw new f(49);if(Array.isArray(e)){for(var t={},o={},c=mr(e),y;!(y=c()).done;){var A,$,G=y.value;if(!G.prop||!G.fromSize||!G.toSize)throw new f(50);o[G.prop]=G.fromSize,t["@media (min-width: "+r+")"]=_extends({},t["@media (min-width: "+r+")"],(A={},A[G.prop]=er(G.fromSize,G.toSize,r,n),A)),t["@media (min-width: "+n+")"]=_extends({},t["@media (min-width: "+n+")"],($={},$[G.prop]=G.toSize,$))}return _extends({},o,t)}else{var ie,K,q;if(!e.prop||!e.fromSize||!e.toSize)throw new f(51);return q={},q[e.prop]=e.fromSize,q["@media (min-width: "+r+")"]=(ie={},ie[e.prop]=er(e.fromSize,e.toSize,r,n),ie),q["@media (min-width: "+n+")"]=(K={},K[e.prop]=e.toSize,K),q}}var hr=/^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i,vr={woff:"woff",woff2:"woff2",ttf:"truetype",otf:"opentype",eot:"embedded-opentype",svg:"svg",svgz:"svg"};function V(e,r){return r?' format("'+vr[e]+'")':""}function be(e){return!!e.replace(/\s+/g," ").match(hr)}function ze(e,r,n){if(be(e))return'url("'+e+'")'+V(r[0],n);var t=r.map(function(o){return'url("'+e+"."+o+'")'+V(o,n)});return t.join(", ")}function yr(e){var r=e.map(function(n){return'local("'+n+'")'});return r.join(", ")}function De(e,r,n,t){var o=[];return r&&o.push(yr(r)),e&&o.push(ze(e,n,t)),o.join(", ")}function xr(e){var r=e.fontFamily,n=e.fontFilePath,t=e.fontStretch,o=e.fontStyle,c=e.fontVariant,y=e.fontWeight,A=e.fileFormats,$=A===void 0?["eot","woff2","woff","ttf","svg"]:A,G=e.formatHint,ie=G===void 0?!1:G,K=e.localFonts,q=K===void 0?[r]:K,we=e.unicodeRange,ke=e.fontDisplay,Ze=e.fontVariationSettings,ve=e.fontFeatureSettings;if(!r)throw new f(55);if(!n&&!q)throw new f(52);if(q&&!Array.isArray(q))throw new f(53);if(!Array.isArray($))throw new f(54);var Ee={"@font-face":{fontFamily:r,src:De(n,q,$,ie),unicodeRange:we,fontStretch:t,fontStyle:o,fontVariant:c,fontWeight:y,fontDisplay:ke,fontVariationSettings:Ze,fontFeatureSettings:ve}};return JSON.parse(JSON.stringify(Ee))}function sn(){return{textIndent:"101%",overflow:"hidden",whiteSpace:"nowrap"}}function cn(){return{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function Wr(e){return e===void 0&&(e=1.3),`
    @media only screen and (-webkit-min-device-pixel-ratio: `+e+`),
    only screen and (min--moz-device-pixel-ratio: `+e+`),
    only screen and (-o-min-device-pixel-ratio: `+e+`/1),
    only screen and (min-resolution: `+Math.round(e*96)+`dpi),
    only screen and (min-resolution: `+e+`dppx)
  `}function Er(e){for(var r="",n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];for(var c=0;c<e.length;c+=1)if(r+=e[c],c===t.length-1&&t[c]){var y=t.filter(function(A){return!!A});y.length>1?(r=r.slice(0,-1),r+=", "+t[c]):y.length===1&&(r+=""+t[c])}else t[c]&&(r+=t[c]+" ");return r.trim()}var Sr;function ln(e){var r=e.colorStops,n=e.fallback,t=e.toDirection,o=t===void 0?"":t;if(!r||r.length<2)throw new f(56);return{backgroundColor:n||r[0].replace(/,\s+/g,",").split(" ")[0].replace(/,(?=\S)/g,", "),backgroundImage:Er(Sr||(Sr=_taggedTemplateLiteralLoose(["linear-gradient(","",")"])),o,r.join(", ").replace(/,(?=\S)/g,", "))}}function dn(){var e;return[(e={html:{lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:"0"},main:{display:"block"},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:"0",overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{backgroundColor:"transparent"},"abbr[title]":{borderBottom:"none",textDecoration:"underline"}},e[`b,
    strong`]={fontWeight:"bolder"},e[`code,
    kbd,
    samp`]={fontFamily:"monospace, monospace",fontSize:"1em"},e.small={fontSize:"80%"},e[`sub,
    sup`]={fontSize:"75%",lineHeight:"0",position:"relative",verticalAlign:"baseline"},e.sub={bottom:"-0.25em"},e.sup={top:"-0.5em"},e.img={borderStyle:"none"},e[`button,
    input,
    optgroup,
    select,
    textarea`]={fontFamily:"inherit",fontSize:"100%",lineHeight:"1.15",margin:"0"},e[`button,
    input`]={overflow:"visible"},e[`button,
    select`]={textTransform:"none"},e[`button,
    html [type="button"],
    [type="reset"],
    [type="submit"]`]={WebkitAppearance:"button"},e[`button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner`]={borderStyle:"none",padding:"0"},e[`button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring`]={outline:"1px dotted ButtonText"},e.fieldset={padding:"0.35em 0.625em 0.75em"},e.legend={boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:"0",whiteSpace:"normal"},e.progress={verticalAlign:"baseline"},e.textarea={overflow:"auto"},e[`[type="checkbox"],
    [type="radio"]`]={boxSizing:"border-box",padding:"0"},e[`[type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button`]={height:"auto"},e['[type="search"]']={WebkitAppearance:"textfield",outlineOffset:"-2px"},e['[type="search"]::-webkit-search-decoration']={WebkitAppearance:"none"},e["::-webkit-file-upload-button"]={WebkitAppearance:"button",font:"inherit"},e.details={display:"block"},e.summary={display:"list-item"},e.template={display:"none"},e["[hidden]"]={display:"none"},e),{"abbr[title]":{textDecoration:"underline dotted"}}]}var Fr;function ce(e){var r=e.colorStops,n=e.extent,t=n===void 0?"":n,o=e.fallback,c=e.position,y=c===void 0?"":c,A=e.shape,$=A===void 0?"":A;if(!r||r.length<2)throw new f(57);return{backgroundColor:o||r[0].split(" ")[0],backgroundImage:Er(Fr||(Fr=_taggedTemplateLiteralLoose(["radial-gradient(","","","",")"])),y,$,t,r.join(", "))}}function bn(e,r,n,t,o){var c;if(n===void 0&&(n="png"),o===void 0&&(o="_2x"),!e)throw new f(58);var y=n.replace(/^\./,""),A=t?t+"."+y:""+e+o+"."+y;return c={backgroundImage:"url("+e+"."+y+")"},c[Wr()]=_extends({backgroundImage:"url("+A+")"},r?{backgroundSize:r}:{}),c}var Br={easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInCirc:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",easeInCubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",easeInExpo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",easeInQuad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)",easeOutBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",easeOutCubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",easeOutCirc:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",easeOutExpo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",easeOutQuad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOutCirc:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",easeInOutCubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",easeInOutExpo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",easeInOutQuad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"};function $r(e){return Br[e]}function me(e){return $r(e)}var nr=function(r,n,t){var o=""+t[0]+(t[1]||""),c=""+t[0]/2+(t[1]||""),y=""+n[0]+(n[1]||""),A=""+n[0]/2+(n[1]||"");switch(r){case"top":return"0 "+c+" "+y+" "+c;case"topLeft":return o+" "+y+" 0 0";case"left":return A+" "+o+" "+A+" 0";case"bottomLeft":return o+" 0 0 "+y;case"bottom":return y+" "+c+" 0 "+c;case"bottomRight":return"0 0 "+o+" "+y;case"right":return A+" 0 "+A+" "+o;case"topRight":default:return"0 "+o+" "+y+" 0"}},_r=function(r,n){switch(r){case"top":case"bottomRight":return{borderBottomColor:n};case"right":case"bottomLeft":return{borderLeftColor:n};case"bottom":case"topLeft":return{borderTopColor:n};case"left":case"topRight":return{borderRightColor:n};default:throw new f(59)}};function gn(e){var r=e.pointingDirection,n=e.height,t=e.width,o=e.foregroundColor,c=e.backgroundColor,y=c===void 0?"transparent":c,A=pe(t),$=pe(n);if(isNaN($[0])||isNaN(A[0]))throw new f(60);return _extends({width:"0",height:"0",borderColor:y},_r(r,o),{borderStyle:"solid",borderWidth:nr(r,$,A)})}function Nr(e){e===void 0&&(e="break-word");var r=e==="break-word"?"break-all":e;return{overflowWrap:e,wordWrap:e,wordBreak:r}}function wr(e){return Math.round(e*255)}function Gr(e,r,n){return wr(e)+","+wr(r)+","+wr(n)}function Ne(e,r,n,t){if(t===void 0&&(t=Gr),r===0)return t(n,n,n);var o=(e%360+360)%360/60,c=(1-Math.abs(2*n-1))*r,y=c*(1-Math.abs(o%2-1)),A=0,$=0,G=0;o>=0&&o<1?(A=c,$=y):o>=1&&o<2?(A=y,$=c):o>=2&&o<3?($=c,G=y):o>=3&&o<4?($=y,G=c):o>=4&&o<5?(A=y,G=c):o>=5&&o<6&&(A=c,G=y);var ie=n-c/2,K=A+ie,q=$+ie,we=G+ie;return t(K,q,we)}var Ge={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Jr(e){if(typeof e!="string")return e;var r=e.toLowerCase();return Ge[r]?"#"+Ge[r]:e}var Yr=/^#[a-fA-F0-9]{6}$/,Kr=/^#[a-fA-F0-9]{8}$/,Qr=/^#[a-fA-F0-9]{3}$/,Pr=/^#[a-fA-F0-9]{4}$/,kr=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Xr=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Vr=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,tr=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function je(e){if(typeof e!="string")throw new f(3);var r=Jr(e);if(r.match(Yr))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(Kr)){var n=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:n}}if(r.match(Qr))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(Pr)){var t=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:t}}var o=kr.exec(r);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var c=Xr.exec(r.substring(0,50));if(c)return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])};var y=Vr.exec(r);if(y){var A=parseInt(""+y[1],10),$=parseInt(""+y[2],10)/100,G=parseInt(""+y[3],10)/100,ie="rgb("+Ne(A,$,G)+")",K=kr.exec(ie);if(!K)throw new f(4,r,ie);return{red:parseInt(""+K[1],10),green:parseInt(""+K[2],10),blue:parseInt(""+K[3],10)}}var q=tr.exec(r.substring(0,50));if(q){var we=parseInt(""+q[1],10),ke=parseInt(""+q[2],10)/100,Ze=parseInt(""+q[3],10)/100,ve="rgb("+Ne(we,ke,Ze)+")",Ee=kr.exec(ve);if(!Ee)throw new f(4,r,ve);return{red:parseInt(""+Ee[1],10),green:parseInt(""+Ee[2],10),blue:parseInt(""+Ee[3],10),alpha:parseFloat(""+q[4])>1?parseFloat(""+q[4])/100:parseFloat(""+q[4])}}throw new f(5)}function qr(e){var r=e.red/255,n=e.green/255,t=e.blue/255,o=Math.max(r,n,t),c=Math.min(r,n,t),y=(o+c)/2;if(o===c)return e.alpha!==void 0?{hue:0,saturation:0,lightness:y,alpha:e.alpha}:{hue:0,saturation:0,lightness:y};var A,$=o-c,G=y>.5?$/(2-o-c):$/(o+c);switch(o){case r:A=(n-t)/$+(n<t?6:0);break;case n:A=(t-r)/$+2;break;default:A=(r-n)/$+4;break}return A*=60,e.alpha!==void 0?{hue:A,saturation:G,lightness:y,alpha:e.alpha}:{hue:A,saturation:G,lightness:y}}function ye(e){return qr(je(e))}var Mr=function(r){return r.length===7&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r},Cr=Mr;function Ie(e){var r=e.toString(16);return r.length===1?"0"+r:r}function Tr(e){return Ie(Math.round(e*255))}function en(e,r,n){return Cr("#"+Tr(e)+Tr(r)+Tr(n))}function ar(e,r,n){return Ne(e,r,n,en)}function He(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return ar(e,r,n);if(typeof e=="object"&&r===void 0&&n===void 0)return ar(e.hue,e.saturation,e.lightness);throw new f(1)}function Ar(e,r,n,t){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?ar(e,r,n):"rgba("+Ne(e,r,n)+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?ar(e.hue,e.saturation,e.lightness):"rgba("+Ne(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new f(2)}function or(e,r,n){if(typeof e=="number"&&typeof r=="number"&&typeof n=="number")return Cr("#"+Ie(e)+Ie(r)+Ie(n));if(typeof e=="object"&&r===void 0&&n===void 0)return Cr("#"+Ie(e.red)+Ie(e.green)+Ie(e.blue));throw new f(6)}function Fe(e,r,n,t){if(typeof e=="string"&&typeof r=="number"){var o=je(e);return"rgba("+o.red+","+o.green+","+o.blue+","+r+")"}else{if(typeof e=="number"&&typeof r=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?or(e,r,n):"rgba("+e+","+r+","+n+","+t+")";if(typeof e=="object"&&r===void 0&&n===void 0&&t===void 0)return e.alpha>=1?or(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new f(7)}var rn=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},nn=function(r){return typeof r.red=="number"&&typeof r.green=="number"&&typeof r.blue=="number"&&typeof r.alpha=="number"},tn=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&(typeof r.alpha!="number"||typeof r.alpha=="undefined")},_e=function(r){return typeof r.hue=="number"&&typeof r.saturation=="number"&&typeof r.lightness=="number"&&typeof r.alpha=="number"};function he(e){if(typeof e!="object")throw new f(8);if(nn(e))return Fe(e);if(rn(e))return or(e);if(_e(e))return Ar(e);if(tn(e))return He(e);throw new f(8)}function Or(e,r,n){return function(){var o=n.concat(Array.prototype.slice.call(arguments));return o.length>=r?e.apply(this,o):Or(e,r,o)}}function le(e){return Or(e,e.length,[])}function l(e,r){if(r==="transparent")return r;var n=ye(r);return he((0,a.Z)({},n,{hue:n.hue+parseFloat(e)}))}var h=le(l),d=null;function s(e){if(e==="transparent")return e;var r=ye(e);return he(_extends({},r,{hue:(r.hue+180)%360}))}function x(e,r,n){return Math.max(e,Math.min(r,n))}function _(e,r){if(r==="transparent")return r;var n=ye(r);return he((0,a.Z)({},n,{lightness:x(0,1,n.lightness-parseFloat(e))}))}var ne=le(_),de=null;function ue(e,r){if(r==="transparent")return r;var n=ye(r);return he((0,a.Z)({},n,{saturation:x(0,1,n.saturation-parseFloat(e))}))}var Pe=le(ue),Re=null;function xe(e){if(e==="transparent")return 0;var r=je(e),n=Object.keys(r).map(function(y){var A=r[y]/255;return A<=.03928?A/12.92:Math.pow((A+.055)/1.055,2.4)}),t=n[0],o=n[1],c=n[2];return parseFloat((.2126*t+.7152*o+.0722*c).toFixed(3))}function Me(e,r){var n=xe(e),t=xe(r);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}function Je(e){return e==="transparent"?e:he(_extends({},ye(e),{saturation:0}))}function Te(e){if(typeof e=="object"&&typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number")return e.alpha&&typeof e.alpha=="number"?Ar({hue:e.hue,saturation:e.saturation,lightness:e.lightness,alpha:e.alpha}):He({hue:e.hue,saturation:e.saturation,lightness:e.lightness});throw new f(45)}function Se(e){if(e==="transparent")return e;var r=je(e);return he(_extends({},r,{red:255-r.red,green:255-r.green,blue:255-r.blue}))}function Ae(e,r){if(r==="transparent")return r;var n=ye(r);return he((0,a.Z)({},n,{lightness:x(0,1,n.lightness+parseFloat(e))}))}var zr=le(Ae),Lr=null;function ge(e,r){var n=Me(e,r);return{AA:n>=4.5,AALarge:n>=3,AAA:n>=7,AAALarge:n>=4.5}}function an(e,r,n){if(r==="transparent")return n;if(n==="transparent")return r;if(e===0)return n;var t=je(r),o=(0,a.Z)({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),c=je(n),y=(0,a.Z)({},c,{alpha:typeof c.alpha=="number"?c.alpha:1}),A=o.alpha-y.alpha,$=parseFloat(e)*2-1,G=$*A===-1?$:$+A,ie=1+$*A,K=(G/ie+1)/2,q=1-K,we={red:Math.floor(o.red*K+y.red*q),green:Math.floor(o.green*K+y.green*q),blue:Math.floor(o.blue*K+y.blue*q),alpha:o.alpha*parseFloat(e)+y.alpha*(1-parseFloat(e))};return Fe(we)}var Dr=le(an),Hr=Dr;function on(e,r){if(r==="transparent")return r;var n=je(r),t=typeof n.alpha=="number"?n.alpha:1,o=(0,a.Z)({},n,{alpha:x(0,1,(t*100+parseFloat(e)*100)/100)});return Fe(o)}var pn=le(on),mn=null,hn="#000",vn="#fff";function Cn(e,r,n,t){r===void 0&&(r=hn),n===void 0&&(n=vn),t===void 0&&(t=!0);var o=xe(e)>.179,c=o?r:n;return!t||Me(e,c)>=4.5?c:o?hn:vn}function Un(e){if(typeof e=="object"&&typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number")return typeof e.alpha=="number"?Fe({red:e.red,green:e.green,blue:e.blue,alpha:e.alpha}):or({red:e.red,green:e.green,blue:e.blue});throw new f(46)}function Tn(e,r){if(r==="transparent")return r;var n=ye(r);return he((0,a.Z)({},n,{saturation:x(0,1,n.saturation+parseFloat(e))}))}var Wn=le(Tn),Bn=null;function An(e,r){return r==="transparent"?r:he((0,a.Z)({},ye(r),{hue:parseFloat(e)}))}var $n=le(An),Nn=null;function On(e,r){return r==="transparent"?r:he((0,a.Z)({},ye(r),{lightness:parseFloat(e)}))}var Gn=le(On),Jn=null;function zn(e,r){return r==="transparent"?r:he((0,a.Z)({},ye(r),{saturation:parseFloat(e)}))}var Yn=le(zn),Kn=null;function jn(e,r){return r==="transparent"?r:Hr(parseFloat(e),"rgb(0, 0, 0)",r)}var Qn=le(jn),Xn=null;function In(e,r){return r==="transparent"?r:Hr(parseFloat(e),"rgb(255, 255, 255)",r)}var Vn=le(In),qn=null;function Rn(e,r){if(r==="transparent")return r;var n=je(r),t=typeof n.alpha=="number"?n.alpha:1,o=(0,a.Z)({},n,{alpha:x(0,1,+(t*100-parseFloat(e)*100).toFixed(2)/100)});return Fe(o)}var et=le(Rn),rt=null;function nt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=Array.isArray(r[0]);if(!t&&r.length>8)throw new f(64);var o=r.map(function(c){if(t&&!Array.isArray(c)||!t&&Array.isArray(c))throw new f(65);if(Array.isArray(c)&&c.length>8)throw new f(66);return Array.isArray(c)?c.join(" "):c}).join(", ");return{animation:o}}function tt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{backgroundImage:r.join(", ")}}function at(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return{background:r.join(", ")}}var Zn=null;function ot(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];if(typeof e=="string"&&Zn.indexOf(e)>=0){var o;return o={},o["border"+te(e)+"Width"]=n[0],o["border"+te(e)+"Style"]=n[1],o["border"+te(e)+"Color"]=n[2],o}else return n.unshift(e),{borderWidth:n[0],borderStyle:n[1],borderColor:n[2]}}function it(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return z.apply(void 0,["borderColor"].concat(r))}function ft(e,r){var n=te(e);if(!r&&r!==0)throw new f(62);if(n==="Top"||n==="Bottom"){var t;return t={},t["border"+n+"RightRadius"]=r,t["border"+n+"LeftRadius"]=r,t}if(n==="Left"||n==="Right"){var o;return o={},o["borderTop"+n+"Radius"]=r,o["borderBottom"+n+"Radius"]=r,o}throw new f(63)}function ut(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return z.apply(void 0,["borderStyle"].concat(r))}function st(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return z.apply(void 0,["borderWidth"].concat(r))}function yn(e,r){var n=r?":"+r:"";return e(n)}function xn(e,r,n){if(!r)throw new f(67);if(e.length===0)return yn(r,null);for(var t=[],o=0;o<e.length;o+=1){if(n&&n.indexOf(e[o])<0)throw new f(68);t.push(yn(r,e[o]))}return t=t.join(","),t}var En=null;function Fn(e){return"button"+e+`,
  input[type="button"]`+e+`,
  input[type="reset"]`+e+`,
  input[type="submit"]`+e}function ct(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return xn(r,Fn,En)}function lt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return z.apply(void 0,["margin"].concat(r))}function dt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return z.apply(void 0,["padding"].concat(r))}var _n=null;function bt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];return _n.indexOf(e)>=0&&e?_extends({},z.apply(void 0,[""].concat(n)),{position:e}):z.apply(void 0,["",e].concat(n))}function gt(e,r){return r===void 0&&(r=e),{height:e,width:r}}var Pn=null;function Mn(e){return'input[type="color"]'+e+`,
    input[type="date"]`+e+`,
    input[type="datetime"]`+e+`,
    input[type="datetime-local"]`+e+`,
    input[type="email"]`+e+`,
    input[type="month"]`+e+`,
    input[type="number"]`+e+`,
    input[type="password"]`+e+`,
    input[type="search"]`+e+`,
    input[type="tel"]`+e+`,
    input[type="text"]`+e+`,
    input[type="time"]`+e+`,
    input[type="url"]`+e+`,
    input[type="week"]`+e+`,
    input:not([type])`+e+`,
    textarea`+e}function pt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return xn(r,Mn,Pn)}function mt(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];if(Array.isArray(r[0])&&r.length===2){var t=r[1];if(typeof t!="string")throw new f(61);var o=r[0].map(function(c){return c+" "+t}).join(", ");return{transition:o}}else return{transition:r.join(", ")}}},26849:function(P,p,i){var a=i(67294);function j(L,S){return L===S&&(L!==0||1/L===1/S)||L!==L&&S!==S}var u=typeof Object.is=="function"?Object.is:j,k=a.useState,b=a.useEffect,m=a.useLayoutEffect,I=a.useDebugValue;function Z(L,S){var g=S(),E=k({inst:{value:g,getSnapshot:S}}),v=E[0].inst,T=E[1];return m(function(){v.value=g,v.getSnapshot=S,re(v)&&T({inst:v})},[L,g,S]),b(function(){return re(v)&&T({inst:v}),L(function(){re(v)&&T({inst:v})})},[L]),I(g),g}function re(L){var S=L.getSnapshot;L=L.value;try{var g=S();return!u(L,g)}catch(E){return!0}}function J(L,S){return S()}var Y=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?J:Z;p.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:Y},49743:function(P,p,i){var a=i(67294),j=i(54652);function u(J,Y){return J===Y&&(J!==0||1/J===1/Y)||J!==J&&Y!==Y}var k=typeof Object.is=="function"?Object.is:u,b=j.useSyncExternalStore,m=a.useRef,I=a.useEffect,Z=a.useMemo,re=a.useDebugValue;p.useSyncExternalStoreWithSelector=function(J,Y,L,S,g){var E=m(null);if(E.current===null){var v={hasValue:!1,value:null};E.current=v}else v=E.current;E=Z(function(){function C(f){if(!M){if(M=!0,R=f,f=S(f),g!==void 0&&v.hasValue){var B=v.value;if(g(B,f))return F=B}return F=f}if(B=F,k(R,f))return B;var D=S(f);return g!==void 0&&g(B,D)?B:(R=f,F=D)}var M=!1,R,F,O=L===void 0?null:L;return[function(){return C(Y())},O===null?void 0:function(){return C(O())}]},[Y,L,S,g]);var T=b(J,E[0],E[1]);return I(function(){v.hasValue=!0,v.value=T},[T]),re(T),T}},54652:function(P,p,i){P.exports=i(26849)},28258:function(P,p,i){P.exports=i(49743)},35493:function(P,p,i){i.d(p,{Z:function(){return j}});var a=i(84319);function j(u,k){var b=typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(!b){if(Array.isArray(u)||(b=(0,a.Z)(u))||k&&u&&typeof u.length=="number"){b&&(u=b);var m=0,I=function(){};return{s:I,n:function(){return m>=u.length?{done:!0}:{done:!1,value:u[m++]}},e:function(L){throw L},f:I}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Z=!0,re=!1,J;return{s:function(){b=b.call(u)},n:function(){var L=b.next();return Z=L.done,L},e:function(L){re=!0,J=L},f:function(){try{!Z&&b.return!=null&&b.return()}finally{if(re)throw J}}}}},54196:function(P,p,i){i.d(p,{Z:function(){return k}});var a=i(84254);function j(b,m){if((0,a.Z)(b)!="object"||!b)return b;var I=b[Symbol.toPrimitive];if(I!==void 0){var Z=I.call(b,m||"default");if((0,a.Z)(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(b)}function u(b){var m=j(b,"string");return(0,a.Z)(m)=="symbol"?m:m+""}function k(b,m,I){return m=u(m),m in b?Object.defineProperty(b,m,{value:I,enumerable:!0,configurable:!0,writable:!0}):b[m]=I,b}},82656:function(P,p,i){i.d(p,{Z:function(){return u}});var a=i(54196);function j(k,b){var m=Object.keys(k);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(k);b&&(I=I.filter(function(Z){return Object.getOwnPropertyDescriptor(k,Z).enumerable})),m.push.apply(m,I)}return m}function u(k){for(var b=1;b<arguments.length;b++){var m=arguments[b]!=null?arguments[b]:{};b%2?j(Object(m),!0).forEach(function(I){(0,a.Z)(k,I,m[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(m)):j(Object(m)).forEach(function(I){Object.defineProperty(k,I,Object.getOwnPropertyDescriptor(m,I))})}return k}},87853:function(P,p,i){i.d(p,{Z:function(){return j}});function a(u,k){if(u==null)return{};var b={},m=Object.keys(u),I,Z;for(Z=0;Z<m.length;Z++)I=m[Z],!(k.indexOf(I)>=0)&&(b[I]=u[I]);return b}function j(u,k){if(u==null)return{};var b=a(u,k),m,I;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(u);for(I=0;I<Z.length;I++)m=Z[I],!(k.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(u,m)&&(b[m]=u[m])}return b}},86053:function(P,p,i){i.d(p,{Z:function(){return b}});function a(m){if(Array.isArray(m))return m}function j(m,I){var Z=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(Z!=null){var re,J,Y,L,S=[],g=!0,E=!1;try{if(Y=(Z=Z.call(m)).next,I===0){if(Object(Z)!==Z)return;g=!1}else for(;!(g=(re=Y.call(Z)).done)&&(S.push(re.value),S.length!==I);g=!0);}catch(v){E=!0,J=v}finally{try{if(!g&&Z.return!=null&&(L=Z.return(),Object(L)!==L))return}finally{if(E)throw J}}return S}}var u=i(84319);function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(m,I){return a(m)||j(m,I)||(0,u.Z)(m,I)||k()}},14408:function(P,p,i){i.d(p,{Z:function(){return a}});function a(j,u){return u||(u=j.slice(0)),Object.freeze(Object.defineProperties(j,{raw:{value:Object.freeze(u)}}))}},84254:function(P,p,i){i.d(p,{Z:function(){return a}});function a(j){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},a(j)}},84319:function(P,p,i){i.d(p,{Z:function(){return j}});function a(u,k){(k==null||k>u.length)&&(k=u.length);for(var b=0,m=new Array(k);b<k;b++)m[b]=u[b];return m}function j(u,k){if(u){if(typeof u=="string")return a(u,k);var b=Object.prototype.toString.call(u).slice(8,-1);if(b==="Object"&&u.constructor&&(b=u.constructor.name),b==="Map"||b==="Set")return Array.from(u);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return a(u,k)}}},17685:function(P,p,i){var a=i(66092),j=a.Z.Symbol;p.Z=j},74073:function(P,p){function i(a,j){for(var u=-1,k=a==null?0:a.length,b=Array(k);++u<k;)b[u]=j(a[u],u,a);return b}p.Z=i},93589:function(P,p,i){i.d(p,{Z:function(){return v}});var a=i(17685),j=Object.prototype,u=j.hasOwnProperty,k=j.toString,b=a.Z?a.Z.toStringTag:void 0;function m(T){var C=u.call(T,b),M=T[b];try{T[b]=void 0;var R=!0}catch(O){}var F=k.call(T);return R&&(C?T[b]=M:delete T[b]),F}var I=m,Z=Object.prototype,re=Z.toString;function J(T){return re.call(T)}var Y=J,L="[object Null]",S="[object Undefined]",g=a.Z?a.Z.toStringTag:void 0;function E(T){return T==null?T===void 0?S:L:g&&g in Object(T)?I(T):Y(T)}var v=E},53683:function(P,p,i){i.d(p,{Z:function(){return vr}});function a(V,be,ze,yr){var De=-1,xr=V==null?0:V.length;for(yr&&xr&&(ze=V[++De]);++De<xr;)ze=be(ze,V[De],De,V);return ze}var j=a;function u(V){return function(be){return V==null?void 0:V[be]}}var k=u,b={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},m=k(b),I=m,Z=i(75306),re=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,J="\\u0300-\\u036f",Y="\\ufe20-\\ufe2f",L="\\u20d0-\\u20ff",S=J+Y+L,g="["+S+"]",E=RegExp(g,"g");function v(V){return V=(0,Z.Z)(V),V&&V.replace(re,I).replace(E,"")}var T=v,C=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function M(V){return V.match(C)||[]}var R=M,F=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function O(V){return F.test(V)}var f=O,B="\\ud800-\\udfff",D="\\u0300-\\u036f",Q="\\ufe20-\\ufe2f",X="\\u20d0-\\u20ff",U=D+Q+X,ae="\\u2700-\\u27bf",oe="a-z\\xdf-\\xf6\\xf8-\\xff",ee="\\xac\\xb1\\xd7\\xf7",te="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",N="\\u2000-\\u206f",W=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",w="A-Z\\xc0-\\xd6\\xd8-\\xde",z="\\ufe0e\\ufe0f",H=ee+te+N+W,fe="['\u2019]",Ce="["+H+"]",ir="["+U+"]",Ue="\\d+",jr="["+ae+"]",fr="["+oe+"]",Ye="[^"+B+H+Ue+ae+oe+w+"]",pe="\\ud83c[\\udffb-\\udfff]",ur="(?:"+ir+"|"+pe+")",Ke="[^"+B+"]",Qe="(?:\\ud83c[\\udde6-\\uddff]){2}",sr="[\\ud800-\\udbff][\\udc00-\\udfff]",Oe="["+w+"]",Ir="\\u200d",Le="(?:"+fr+"|"+Ye+")",We="(?:"+Oe+"|"+Ye+")",Xe="(?:"+fe+"(?:d|ll|m|re|s|t|ve))?",cr="(?:"+fe+"(?:D|LL|M|RE|S|T|VE))?",Ve=ur+"?",lr="["+z+"]?",dr="(?:"+Ir+"(?:"+[Ke,Qe,sr].join("|")+")"+lr+Ve+")*",Rr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Be="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qe=lr+Ve+dr,er="(?:"+[jr,Qe,sr].join("|")+")"+qe,br=RegExp([Oe+"?"+fr+"+"+Xe+"(?="+[Ce,Oe,"$"].join("|")+")",We+"+"+cr+"(?="+[Ce,Oe+Le,"$"].join("|")+")",Oe+"?"+Le+"+"+Xe,Oe+"+"+cr,Be,Rr,Ue,er].join("|"),"g");function gr(V){return V.match(br)||[]}var pr=gr;function mr(V,be,ze){return V=(0,Z.Z)(V),be=ze?void 0:be,be===void 0?f(V)?pr(V):R(V):V.match(be)||[]}var rr=mr,$e="['\u2019]",Zr=RegExp($e,"g");function hr(V){return function(be){return j(rr(T(be).replace(Zr,"")),V,"")}}var vr=hr},13413:function(P,p){var i=typeof global=="object"&&global&&global.Object===Object&&global;p.Z=i},66092:function(P,p,i){var a=i(13413),j=typeof self=="object"&&self&&self.Object===Object&&self,u=a.Z||j||Function("return this")();p.Z=u},27771:function(P,p){var i=Array.isArray;p.Z=i},18533:function(P,p){function i(a){return a!=null&&typeof a=="object"}p.Z=i},75306:function(P,p,i){i.d(p,{Z:function(){return E}});var a=i(17685),j=i(74073),u=i(27771),k=i(93589),b=i(18533),m="[object Symbol]";function I(v){return typeof v=="symbol"||(0,b.Z)(v)&&(0,k.Z)(v)==m}var Z=I,re=1/0,J=a.Z?a.Z.prototype:void 0,Y=J?J.toString:void 0;function L(v){if(typeof v=="string")return v;if((0,u.Z)(v))return(0,j.Z)(v,L)+"";if(Z(v))return Y?Y.call(v):"";var T=v+"";return T=="0"&&1/v==-re?"-0":T}var S=L;function g(v){return v==null?"":S(v)}var E=g},64529:function(P,p,i){i.d(p,{Ue:function(){return L}});const a=g=>{let E;const v=new Set,T=(B,D)=>{const Q=typeof B=="function"?B(E):B;if(!Object.is(Q,E)){const X=E;E=(D!=null?D:typeof Q!="object"||Q===null)?Q:Object.assign({},E,Q),v.forEach(U=>U(E,X))}},C=()=>E,O={setState:T,getState:C,getInitialState:()=>f,subscribe:B=>(v.add(B),()=>v.delete(B)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),v.clear()}},f=E=g(T,C,O);return O},j=g=>g?a(g):a;var u=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),j(g)),k=i(67294),b=i(28258);const{useDebugValue:m}=k,{useSyncExternalStoreWithSelector:I}=b;let Z=!1;const re=g=>g;function J(g,E=re,v){v&&!Z&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Z=!0);const T=I(g.subscribe,g.getState,g.getServerState||g.getInitialState,E,v);return m(T),T}const Y=g=>{typeof g!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const E=typeof g=="function"?j(g):g,v=(T,C)=>J(E,T,C);return Object.assign(v,E),v},L=g=>g?Y(g):Y;var S=g=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),L(g))},782:function(P,p,i){i.d(p,{mW:function(){return I},tJ:function(){return T}});const a=(C,M)=>(R,F,O)=>(O.dispatch=f=>(R(B=>C(B,f),!1,f),f),O.dispatchFromDevtools=!0,se({dispatch:(...f)=>O.dispatch(...f)},M)),j=null,u=new Map,k=C=>{const M=u.get(C);return M?Object.fromEntries(Object.entries(M.stores).map(([R,F])=>[R,F.getState()])):{}},b=(C,M,R)=>{if(C===void 0)return{type:"untracked",connection:M.connect(R)};const F=u.get(R.name);if(F)return se({type:"tracked",store:C},F);const O={connection:M.connect(R),stores:{}};return u.set(R.name,O),se({type:"tracked",store:C},O)},I=(C,M={})=>(R,F,O)=>{const N=M,{enabled:f,anonymousActionType:B,store:D}=N,Q=un(N,["enabled","anonymousActionType","store"]);let X;try{X=(f!=null?f:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(w){}if(!X)return f&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),C(R,F,O);const W=b(D,X,Q),{connection:U}=W,ae=un(W,["connection"]);let oe=!0;O.setState=(w,z,H)=>{const fe=R(w,z);if(!oe)return fe;const Ce=H===void 0?{type:B||"anonymous"}:typeof H=="string"?{type:H}:H;return D===void 0?(U==null||U.send(Ce,F()),fe):(U==null||U.send(fn(se({},Ce),{type:`${D}/${Ce.type}`}),fn(se({},k(Q.name)),{[D]:O.getState()})),fe)};const ee=(...w)=>{const z=oe;oe=!1,R(...w),oe=z},te=C(O.setState,F,O);if(ae.type==="untracked"?U==null||U.init(te):(ae.stores[ae.store]=O,U==null||U.init(Object.fromEntries(Object.entries(ae.stores).map(([w,z])=>[w,w===ae.store?te:z.getState()])))),O.dispatchFromDevtools&&typeof O.dispatch=="function"){let w=!1;const z=O.dispatch;O.dispatch=(...H)=>{H[0].type==="__setState"&&!w&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),w=!0),z(...H)}}return U.subscribe(w=>{var z;switch(w.type){case"ACTION":if(typeof w.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return Z(w.payload,H=>{if(H.type==="__setState"){if(D===void 0){ee(H.state);return}Object.keys(H.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const fe=H.state[D];if(fe==null)return;JSON.stringify(O.getState())!==JSON.stringify(fe)&&ee(fe);return}O.dispatchFromDevtools&&typeof O.dispatch=="function"&&O.dispatch(H)});case"DISPATCH":switch(w.payload.type){case"RESET":return ee(te),D===void 0?U==null?void 0:U.init(O.getState()):U==null?void 0:U.init(k(Q.name));case"COMMIT":if(D===void 0){U==null||U.init(O.getState());return}return U==null?void 0:U.init(k(Q.name));case"ROLLBACK":return Z(w.state,H=>{if(D===void 0){ee(H),U==null||U.init(O.getState());return}ee(H[D]),U==null||U.init(k(Q.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return Z(w.state,H=>{if(D===void 0){ee(H);return}JSON.stringify(O.getState())!==JSON.stringify(H[D])&&ee(H[D])});case"IMPORT_STATE":{const{nextLiftedState:H}=w.payload,fe=(z=H.computedStates.slice(-1)[0])==null?void 0:z.state;if(!fe)return;ee(D===void 0?fe:fe[D]),U==null||U.send(null,H);return}case"PAUSE_RECORDING":return oe=!oe}return}}),te},Z=(C,M)=>{let R;try{R=JSON.parse(C)}catch(F){console.error("[zustand devtools middleware] Could not parse the received json",F)}R!==void 0&&M(R)},re=C=>(M,R,F)=>{const O=F.subscribe;return F.subscribe=(B,D,Q)=>{let X=B;if(D){const U=(Q==null?void 0:Q.equalityFn)||Object.is;let ae=B(F.getState());X=oe=>{const ee=B(oe);if(!U(ae,ee)){const te=ae;D(ae=ee,te)}},Q!=null&&Q.fireImmediately&&D(ae,ae)}return O(X)},C(M,R,F)},J=null,Y=(C,M)=>(...R)=>Object.assign({},C,M(...R));function L(C,M){let R;try{R=C()}catch(O){return}return{getItem:O=>{var f;const B=Q=>Q===null?null:JSON.parse(Q,M==null?void 0:M.reviver),D=(f=R.getItem(O))!=null?f:null;return D instanceof Promise?D.then(B):B(D)},setItem:(O,f)=>R.setItem(O,JSON.stringify(f,M==null?void 0:M.replacer)),removeItem:O=>R.removeItem(O)}}const S=C=>M=>{try{const R=C(M);return R instanceof Promise?R:{then(F){return S(F)(R)},catch(F){return this}}}catch(R){return{then(F){return this},catch(F){return S(F)(R)}}}},g=(C,M)=>(R,F,O)=>{let f=se({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:W=>W,version:0,merge:(W,w)=>se(se({},w),W)},M),B=!1;const D=new Set,Q=new Set;let X;try{X=f.getStorage()}catch(W){}if(!X)return C((...W)=>{console.warn(`[zustand persist middleware] Unable to update item '${f.name}', the given storage is currently unavailable.`),R(...W)},F,O);const U=S(f.serialize),ae=()=>{const W=f.partialize(se({},F()));let w;const z=U({state:W,version:f.version}).then(H=>X.setItem(f.name,H)).catch(H=>{w=H});if(w)throw w;return z},oe=O.setState;O.setState=(W,w)=>{oe(W,w),ae()};const ee=C((...W)=>{R(...W),ae()},F,O);let te;const N=()=>{var W;if(!X)return;B=!1,D.forEach(z=>z(F()));const w=((W=f.onRehydrateStorage)==null?void 0:W.call(f,F()))||void 0;return S(X.getItem.bind(X))(f.name).then(z=>{if(z)return f.deserialize(z)}).then(z=>{if(z)if(typeof z.version=="number"&&z.version!==f.version){if(f.migrate)return f.migrate(z.state,z.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return z.state}).then(z=>{var H;return te=f.merge(z,(H=F())!=null?H:ee),R(te,!0),ae()}).then(()=>{w==null||w(te,void 0),B=!0,Q.forEach(z=>z(te))}).catch(z=>{w==null||w(void 0,z)})};return O.persist={setOptions:W=>{f=se(se({},f),W),W.getStorage&&(X=W.getStorage())},clearStorage:()=>{X==null||X.removeItem(f.name)},getOptions:()=>f,rehydrate:()=>N(),hasHydrated:()=>B,onHydrate:W=>(D.add(W),()=>{D.delete(W)}),onFinishHydration:W=>(Q.add(W),()=>{Q.delete(W)})},N(),te||ee},E=(C,M)=>(R,F,O)=>{let f=se({storage:L(()=>localStorage),partialize:N=>N,version:0,merge:(N,W)=>se(se({},W),N)},M),B=!1;const D=new Set,Q=new Set;let X=f.storage;if(!X)return C((...N)=>{console.warn(`[zustand persist middleware] Unable to update item '${f.name}', the given storage is currently unavailable.`),R(...N)},F,O);const U=()=>{const N=f.partialize(se({},F()));return X.setItem(f.name,{state:N,version:f.version})},ae=O.setState;O.setState=(N,W)=>{ae(N,W),U()};const oe=C((...N)=>{R(...N),U()},F,O);O.getInitialState=()=>oe;let ee;const te=()=>{var N,W;if(!X)return;B=!1,D.forEach(z=>{var H;return z((H=F())!=null?H:oe)});const w=((W=f.onRehydrateStorage)==null?void 0:W.call(f,(N=F())!=null?N:oe))||void 0;return S(X.getItem.bind(X))(f.name).then(z=>{if(z)if(typeof z.version=="number"&&z.version!==f.version){if(f.migrate)return f.migrate(z.state,z.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return z.state}).then(z=>{var H;return ee=f.merge(z,(H=F())!=null?H:oe),R(ee,!0),U()}).then(()=>{w==null||w(ee,void 0),ee=F(),B=!0,Q.forEach(z=>z(ee))}).catch(z=>{w==null||w(void 0,z)})};return O.persist={setOptions:N=>{f=se(se({},f),N),N.storage&&(X=N.storage)},clearStorage:()=>{X==null||X.removeItem(f.name)},getOptions:()=>f,rehydrate:()=>te(),hasHydrated:()=>B,onHydrate:N=>(D.add(N),()=>{D.delete(N)}),onFinishHydration:N=>(Q.add(N),()=>{Q.delete(N)})},f.skipHydration||te(),ee||oe},T=(C,M)=>"getStorage"in M||"serialize"in M||"deserialize"in M?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),g(C,M)):E(C,M)}}]);
}());