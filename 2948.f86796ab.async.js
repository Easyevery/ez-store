!(function(){"use strict";var Rt=Object.defineProperty,It=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var ln=Object.prototype.hasOwnProperty,cn=Object.prototype.propertyIsEnumerable;var sn=(_,g,r)=>g in _?Rt(_,g,{enumerable:!0,configurable:!0,writable:!0,value:r}):_[g]=r,H=(_,g)=>{for(var r in g||(g={}))ln.call(g,r)&&sn(_,r,g[r]);if(ve)for(var r of ve(g))cn.call(g,r)&&sn(_,r,g[r]);return _},Se=(_,g)=>It(_,Pt(g));var ke=(_,g)=>{var r={};for(var t in _)ln.call(_,t)&&g.indexOf(t)<0&&(r[t]=_[t]);if(_!=null&&ve)for(var t of ve(_))g.indexOf(t)<0&&cn.call(_,t)&&(r[t]=_[t]);return r};(self.webpackChunkez_store=self.webpackChunkez_store||[]).push([[2948],{99882:function(_,g,r){r.d(g,{E_:function(){return U},nc:function(){return M}});var t=r(67294);function Z(b){var l=[];if(b.length===0)return"";if(typeof b[0]!="string")throw new TypeError("Url must be a string. Received "+b[0]);if(b[0].match(/^[^/:]+:\/*$/)&&b.length>1){var k=b.shift();b[0]=k+b[0]}b[0].match(/^file:\/\/\//)?b[0]=b[0].replace(/^([^/:]+):\/*/,"$1:///"):b[0]=b[0].replace(/^([^/:]+):\/*/,"$1://");for(var x=0;x<b.length;x++){var f=b[x];if(typeof f!="string")throw new TypeError("Url must be a string. Received "+f);f!==""&&(x>0&&(f=f.replace(/^[\/]+/,"")),x<b.length-1?f=f.replace(/[\/]+$/,""):f=f.replace(/[\/]+$/,"/"),l.push(f))}var p=l.join("/");p=p.replace(/\/(\?|&|#[^!])/g,"$1");var v=p.split("?");return p=v.shift()+(v.length>0?"?":"")+v.join("&"),p}function i(){var b;return typeof arguments[0]=="object"?b=arguments[0]:b=[].slice.call(arguments),Z(b)}var z="https://unpkg.com",j="https://registry.npmmirror.com",G=function(l){var k=l.pkg,x=l.version,f=x===void 0?"latest":x,p=l.path,v=l.proxy;switch(v){case"unpkg":return i(z,"".concat(k,"@").concat(f),p);default:return i(j,k,f,"files",p)}},K=r(85893),U=(0,t.createContext)(null),$=null,L=function(l){var k=l.pkg,x=l.version,f=l.path;return G({path:f,pkg:k,proxy:"aliyun",version:x})},M=function(){var l=(0,t.useContext)(U);return l?(l==null?void 0:l.proxy)!=="custom"?function(k){var x=k.pkg,f=k.version,p=k.path;return G({path:p,pkg:x,proxy:l.proxy,version:f})}:(l==null?void 0:l.customCdnFn)||L:L},E=null},21445:function(_,g,r){r.d(g,{Z:function(){return wt}});var t=r(1413),Z=r(91),i=r(67294),z=r(93967),j=r.n(z),G=r(27288),K=r(53124),U=r(16474),$=r(94423),L=r(48311),M=r(66968),E=r(91945);const b=e=>{const{componentCls:a,colorText:o,fontSize:n,lineHeight:u,fontFamily:m}=e;return{[a]:{color:o,fontSize:n,lineHeight:u,fontFamily:m}}},l=()=>({});var k=(0,E.I$)("App",b,l);const x=()=>i.useContext(M.Z),f=e=>{const{prefixCls:a,children:o,className:n,rootClassName:u,message:m,notification:F,style:X,component:J="div"}=e,{getPrefixCls:oe}=(0,i.useContext)(K.E_),re=oe("app",a),[ae,ce,se]=k(re),ne=j()(ce,re,n,u,se),ee=(0,i.useContext)(M.J),te=i.useMemo(()=>({message:Object.assign(Object.assign({},ee.message),m),notification:Object.assign(Object.assign({},ee.notification),F)}),[m,F,ee.message,ee.notification]),[me,xe]=(0,U.Z)(te.message),[Q,Ot]=(0,L.Z)(te.notification),[an,Et]=(0,$.Z)(),At=i.useMemo(()=>({message:me,notification:Q,modal:an}),[me,Q,an]);(0,G.ln)("App")(!(se&&J===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const Zt=J===!1?i.Fragment:J,jt={className:ne,style:X};return ae(i.createElement(M.Z.Provider,{value:At},i.createElement(M.J.Provider,{value:te},i.createElement(Zt,Object.assign({},J===!1?void 0:jt),Et,xe,Ot,o))))};f.useApp=x;var p=f,v=r(54956),h=r(99882),y=function(a){var o=document.createElement("link");return o.rel="stylesheet",o.href=a,o},d=(0,i.memo)(function(e){var a=e.url,o=(0,i.useRef)(!1);return(0,i.useEffect)(function(){if(!o.current){o.current=!0;var n=y(a);document.head.append(n)}},[]),null}),c=d,S=r(30168),C,I,P,A,W,N,D,B,R=function(a){var o=a.css,n=a.token,u=a.isDarkMode,m=(0,v.F4)(C||(C=(0,S.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:o(I||(I=(0,S.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:o(P||(P=(0,S.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:o(A||(A=(0,S.Z)([`
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
    `])),n.colorFill,n.motionEaseOut),gradientAnimation:o(W||(W=(0,S.Z)([`
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
    `])),n.gold,n.magenta,n.geekblue,n.cyan,m),markdown:o(N||(N=(0,S.Z)([`
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
    `])),n.colorTextSecondary,n.colorTextDescription,n.fontFamilyCode,n.colorFillSecondary,n.colorBorderSecondary,n.borderRadius,n.fontFamily,n.colorBgLayout,u?n.colorText:"#333",u?n.colorTextSecondary:"#000",u?n.colorTextSecondary:"#000",n.colorTextSecondary,n.colorBorder,n.colorBorderSecondary,n.colorFillTertiary,n.colorBorderSecondary,n.borderRadius,n.fontFamily,n.colorTextSecondary,n.colorTextSecondary,n.motionEaseOut,n.colorBorder,n.colorFillTertiary,n.borderRadius,n.colorBorderSecondary,n.colorFillQuaternary,n.colorBorderSecondary,n.fontFamilyCode),noScrollbar:o(D||(D=(0,S.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:o(B||(B=(0,S.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),n.colorTextSecondary,n.colorText)}},T=r(97685),w=r(37762),s=r(4942),O=r(17685),Y=r(74073),ue=r(27771),un=r(93589),dn=r(18533),fn="[object Symbol]";function bn(e){return typeof e=="symbol"||(0,dn.Z)(e)&&(0,un.Z)(e)==fn}var gn=bn,pn=1/0,Ce=O.Z?O.Z.prototype:void 0,_e=Ce?Ce.toString:void 0;function Te(e){if(typeof e=="string")return e;if((0,ue.Z)(e))return(0,Y.Z)(e,Te)+"";if(gn(e))return _e?_e.call(e):"";var a=e+"";return a=="0"&&1/e==-pn?"-0":a}var mn=Te;function vn(e){return e==null?"":mn(e)}var fe=vn;function hn(e,a,o){var n=-1,u=e.length;a<0&&(a=-a>u?0:u+a),o=o>u?u:o,o<0&&(o+=u),u=a>o?0:o-a>>>0,a>>>=0;for(var m=Array(u);++n<u;)m[n]=e[n+a];return m}var yn=hn;function xn(e,a,o){var n=e.length;return o=o===void 0?n:o,!a&&o>=n?e:yn(e,a,o)}var Sn=xn,kn="\\ud800-\\udfff",Cn="\\u0300-\\u036f",_n="\\ufe20-\\ufe2f",Tn="\\u20d0-\\u20ff",wn=Cn+_n+Tn,On="\\ufe0e\\ufe0f",En="\\u200d",An=RegExp("["+En+kn+wn+On+"]");function Zn(e){return An.test(e)}var we=Zn;function jn(e){return e.split("")}var Rn=jn,Oe="\\ud800-\\udfff",In="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",Mn="\\u20d0-\\u20ff",zn=In+Pn+Mn,Dn="\\ufe0e\\ufe0f",Fn="["+Oe+"]",he="["+zn+"]",ye="\\ud83c[\\udffb-\\udfff]",Ln="(?:"+he+"|"+ye+")",Ee="[^"+Oe+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="\\u200d",je=Ln+"?",Re="["+Dn+"]?",Wn="(?:"+Un+"(?:"+[Ee,Ae,Ze].join("|")+")"+Re+je+")*",Nn=Re+je+Wn,Bn="(?:"+[Ee+he+"?",he,Ae,Ze,Fn].join("|")+")",Hn=RegExp(ye+"(?="+ye+")|"+Bn+Nn,"g");function Jn(e){return e.match(Hn)||[]}var Gn=Jn;function $n(e){return we(e)?Gn(e):Rn(e)}var Kn=$n;function Vn(e){return function(a){a=fe(a);var o=we(a)?Kn(a):void 0,n=o?o[0]:a.charAt(0),u=o?Sn(o,1).join(""):a.slice(1);return n[e]()+u}}var Yn=Vn,Xn=Yn("toUpperCase"),Qn=Xn;function qn(e){return Qn(fe(e).toLowerCase())}var Ie=qn;function er(e,a,o,n){var u=-1,m=e==null?0:e.length;for(n&&m&&(o=e[++u]);++u<m;)o=a(o,e[u],u,e);return o}var nr=er;function rr(e){return function(a){return e==null?void 0:e[a]}}var tr=rr,or={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ar=tr(or),ir=ar,sr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lr="\\u0300-\\u036f",cr="\\ufe20-\\ufe2f",ur="\\u20d0-\\u20ff",dr=lr+cr+ur,fr="["+dr+"]",br=RegExp(fr,"g");function gr(e){return e=fe(e),e&&e.replace(sr,ir).replace(br,"")}var pr=gr,mr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function vr(e){return e.match(mr)||[]}var hr=vr,yr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xr(e){return yr.test(e)}var Sr=xr,Pe="\\ud800-\\udfff",kr="\\u0300-\\u036f",Cr="\\ufe20-\\ufe2f",_r="\\u20d0-\\u20ff",Tr=kr+Cr+_r,Me="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",wr="\\xac\\xb1\\xd7\\xf7",Or="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Er="\\u2000-\\u206f",Ar=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="A-Z\\xc0-\\xd6\\xd8-\\xde",Zr="\\ufe0e\\ufe0f",Fe=wr+Or+Er+Ar,Le="['\u2019]",Ue="["+Fe+"]",jr="["+Tr+"]",We="\\d+",Rr="["+Me+"]",Ne="["+ze+"]",Be="[^"+Pe+Fe+We+Me+ze+De+"]",Ir="\\ud83c[\\udffb-\\udfff]",Pr="(?:"+jr+"|"+Ir+")",Mr="[^"+Pe+"]",He="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",le="["+De+"]",zr="\\u200d",Ge="(?:"+Ne+"|"+Be+")",Dr="(?:"+le+"|"+Be+")",$e="(?:"+Le+"(?:d|ll|m|re|s|t|ve))?",Ke="(?:"+Le+"(?:D|LL|M|RE|S|T|VE))?",Ve=Pr+"?",Ye="["+Zr+"]?",Fr="(?:"+zr+"(?:"+[Mr,He,Je].join("|")+")"+Ye+Ve+")*",Lr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ur="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wr=Ye+Ve+Fr,Nr="(?:"+[Rr,He,Je].join("|")+")"+Wr,Br=RegExp([le+"?"+Ne+"+"+$e+"(?="+[Ue,le,"$"].join("|")+")",Dr+"+"+Ke+"(?="+[Ue,le+Ge,"$"].join("|")+")",le+"?"+Ge+"+"+$e,le+"+"+Ke,Ur,Lr,We,Nr].join("|"),"g");function Hr(e){return e.match(Br)||[]}var Jr=Hr;function Gr(e,a,o){return e=fe(e),a=o?void 0:a,a===void 0?Sr(e)?Jr(e):hr(e):e.match(a)||[]}var $r=Gr,Kr="['\u2019]",Vr=RegExp(Kr,"g");function Yr(e){return function(a){return nr($r(pr(a).replace(Vr,"")),e,"")}}var Xr=Yr,Qr=Xr(function(e,a,o){return a=a.toLowerCase(),e+(o?Ie(a):a)}),qr=Qr,V=r(79535),et=function(a){var o,n=a.name,u=a.scale,m=a.appearance;return o={},(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)(o,"".concat(n,"Bg"),u["".concat(m,"A")][1]),"".concat(n,"BgHover"),u["".concat(m,"A")][2]),"".concat(n,"Border"),u[m][4]),"".concat(n,"BorderSecondary"),u[m][3]),"".concat(n,"BorderHover"),u[m][5]),"".concat(n,"Hover"),u[m][10]),"".concat(n),u[m][9]),"".concat(n,"Active"),u[m][7]),"".concat(n,"TextHover"),u["".concat(m,"A")][10]),"".concat(n,"Text"),u["".concat(m,"A")][9]),(0,s.Z)(o,"".concat(n,"TextActive"),u["".concat(m,"A")][7])},nt=function(a){var o=a.name,n=a.scale,u=a.appearance,m={},F=(0,w.Z)(n[u].entries()),X;try{for(F.s();!(X=F.n()).done;){var J=(0,T.Z)(X.value,2),oe=J[0],re=J[1];oe===0||oe===12||(m["".concat(o).concat(oe)]=re)}}catch(te){F.e(te)}finally{F.f()}var ae=(0,w.Z)(n["".concat(u,"A")].entries()),ce;try{for(ae.s();!(ce=ae.n()).done;){var se=(0,T.Z)(ce.value,2),ne=se[0],ee=se[1];ne===0||ne===12||(m["".concat(o).concat(ne,"A")]=ee)}}catch(te){ae.e(te)}finally{ae.f()}return(0,t.Z)((0,t.Z)({},m),et({appearance:u,name:o,scale:n}))},rt=function(a){for(var o=a.isDarkMode,n={},u=0,m=Object.entries(V._);u<m.length;u++){var F=(0,T.Z)(m[u],2),X=F[0],J=F[1];n=(0,t.Z)((0,t.Z)({},n),nt({appearance:o?"dark":"light",name:qr(X),scale:J}))}return n},q=function(a){var o=a.type,n=a.scale,u=a.appearance,m=Ie(o),F=u==="dark";return(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},"color".concat(m,"Bg"),n[u][1]),"color".concat(m,"BgHover"),n[u][2]),"color".concat(m,"Border"),n[u][4]),"color".concat(m,"BorderHover"),n[u][F?5:3]),"color".concat(m,"Hover"),n[u][F?10:8]),"color".concat(m),n[u][9]),"color".concat(m,"Active"),n[u][F?7:10]),"color".concat(m,"TextHover"),n[u][F?10:8]),"color".concat(m,"Text"),n[u][9]),"color".concat(m,"TextActive"),n[u][F?7:10])},be=function(a){var o=a.scale,n=a.appearance;return{colorBgContainer:n==="dark"?o[n][1]:o[n][0],colorBgElevated:n==="dark"?o[n][2]:o[n][0],colorBgLayout:n==="dark"?o[n][0]:o[n][1],colorBgMask:o.lightA[8],colorBgSpotlight:o[n][5],colorBorder:o[n][4],colorBorderSecondary:o[n][3],colorFill:o["".concat(n,"A")][3],colorFillQuaternary:o["".concat(n,"A")][0],colorFillSecondary:o["".concat(n,"A")][2],colorFillTertiary:o["".concat(n,"A")][1],colorText:o[n][12],colorTextQuaternary:o[n][6],colorTextSecondary:o[n][10],colorTextTertiary:o[n][8]}},Xe={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},tt=q({appearance:"dark",scale:V._.bnw,type:"Primary"}),Qe=be({appearance:"dark",scale:V._.gray}),ot=q({appearance:"dark",scale:V._.lime,type:"Success"}),at=q({appearance:"dark",scale:V._.gold,type:"Warning"}),it=q({appearance:"dark",scale:V._.red,type:"Error"}),ge=q({appearance:"dark",scale:V._.blue,type:"Info"}),st=(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},tt),Qe),ot),at),it),ge),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:ge.colorInfoText,colorLinkActive:ge.colorInfoTextActive,colorLinkHover:ge.colorInfoTextHover,colorTextLightSolid:Qe.colorBgLayout}),lt=st,ct=function(a,o){var n=a.primaryColor,u=a.neutralColor,m={},F={},X=V._[n];X&&(m=q({appearance:"dark",scale:X,type:"Primary"}));var J=Xe[u];return J&&(F=be({appearance:"dark",scale:J})),(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},o),lt),m),F)},ut=q({appearance:"light",scale:V._.bnw,type:"Primary"}),qe=be({appearance:"light",scale:V._.gray}),dt=q({appearance:"light",scale:V._.green,type:"Success"}),ft=q({appearance:"light",scale:V._.orange,type:"Warning"}),bt=q({appearance:"light",scale:V._.volcano,type:"Error"}),pe=q({appearance:"light",scale:V._.geekblue,type:"Info"}),gt=(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},ut),qe),dt),ft),bt),pe),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:pe.colorInfoText,colorLinkActive:pe.colorInfoTextActive,colorLinkHover:pe.colorInfoTextHover,colorTextLightSolid:qe.colorBgLayout}),pt=gt,mt=function(a,o){var n=a.primaryColor,u=a.neutralColor,m={},F={},X=V._[n];X&&(m=q({appearance:"light",scale:X,type:"Primary"}));var J=Xe[u];return J&&(F=be({appearance:"light",scale:J})),(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},o),pt),m),F)},en='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',vt='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',nn='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',ht="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",yt={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[vt,nn,en].join(","),fontFamilyCode:[ht,nn,en].join(",")},xt=function(a){var o=a.neutralColor,n=a.appearance,u=a.primaryColor,m=n==="dark";return{algorithm:m?ct:mt,token:(0,t.Z)((0,t.Z)({},yt),{},{neutralColor:o,primaryColor:u})}},de=r(52062),rn,St=function(e){return(0,v.iv)(rn||(rn=(0,S.Z)([`
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
`])),e.prefixCls,(0,de.XV)(e.colorPrimary),e.prefixCls,e.prefixCls,(0,de.XV)(e.colorPrimary),(0,de.XV)(e.colorPrimary),(0,de.XV)(e.colorPrimaryActive),e.prefixCls,e.colorBgLayout,e.colorText,e.borderRadiusSM,e.prefixCls,e.colorText,e.prefixCls,e.colorBgContainer,e.prefixCls,e.prefixCls,e.prefixCls,e.stylish.blur,e.borderRadiusLG,(0,de.m4)(e.colorBgMask,.1),e.prefixCls,e.colorBorderSecondary,e.boxShadowSecondary,e.prefixCls,e.colorBorderSecondary,e.borderRadius,e.boxShadowSecondary)},tn,kt=function(e){return(0,v.iv)(tn||(tn=(0,S.Z)([`
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
`])),e.isDarkMode?"dark":"light",e.fontFamily,e.fontSize,e.colorTextBase,e.colorBgLayout,e.fontFamilyCode,e.fontFamilyCode,e.yellow9,e.colorFill)},Ct=(0,v.vJ)(function(e){var a=e.theme;return[kt(a),St(a)]}),_t=Ct,ie=r(85893),Tt=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],on=(0,i.memo)(function(e){var a=e.children,o=e.customStylish,n=e.customToken,u=e.enableWebfonts,m=u===void 0?!0:u,F=e.enableGlobalStyle,X=F===void 0?!0:F,J=e.webfonts,oe=e.customTheme,re=oe===void 0?{}:oe,ae=e.className,ce=e.style,se=(0,Z.Z)(e,Tt),ne=(0,h.nc)(),ee=J||[ne({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),ne({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),ne({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),ne({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],te=(0,i.useCallback)(function(Q){return(0,t.Z)((0,t.Z)({},R(Q)),o==null?void 0:o(Q))},[o]),me=(0,i.useCallback)(function(Q){return(0,t.Z)((0,t.Z)({},rt(Q)),n==null?void 0:n(Q))},[n]),xe=(0,i.useCallback)(function(Q){return xt({appearance:Q,neutralColor:re.neutralColor,primaryColor:re.primaryColor})},[re.primaryColor,re.neutralColor]);return(0,ie.jsxs)(ie.Fragment,{children:[m&&(ee==null?void 0:ee.length)>0&&ee.map(function(Q){return(0,ie.jsx)(c,{url:Q},Q)}),(0,ie.jsx)(v.V9,{speedy:!0,children:(0,ie.jsxs)(v.f6,(0,t.Z)((0,t.Z)({customStylish:te,customToken:me},se),{},{theme:xe,children:[X&&(0,ie.jsx)(_t,{}),(0,ie.jsx)(p,{className:ae,style:(0,t.Z)({minHeight:"inherit",width:"inherit"},ce),children:a})]}))})]})});on.displayName="LobeThemeProvider";var wt=on},2059:function(_,g,r){var t=r(7629),Z=r(67294),i=r(85893),z=(0,Z.memo)(function(){return(0,i.jsxs)(t.ql,{children:[(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,i.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,i.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,i.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,i.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,i.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,i.jsx)("meta",{content:"#000000",name:"theme-color"})]})});g.Z=z},29950:function(_,g,r){r.d(g,{f:function(){return i}});var t=r(64529),Z=r(782),i=(0,t.Ue)()((0,Z.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},64063:function(_){_.exports=function g(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var Z,i,z;if(Array.isArray(r)){if(Z=r.length,Z!=t.length)return!1;for(i=Z;i--!==0;)if(!g(r[i],t[i]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(z=Object.keys(r),Z=z.length,Z!==Object.keys(t).length)return!1;for(i=Z;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,z[i]))return!1;for(i=Z;i--!==0;){var j=z[i];if(!g(r[j],t[j]))return!1}return!0}return r!==r&&t!==t}},26849:function(_,g,r){var t=r(67294);function Z(E,b){return E===b&&(E!==0||1/E===1/b)||E!==E&&b!==b}var i=typeof Object.is=="function"?Object.is:Z,z=t.useState,j=t.useEffect,G=t.useLayoutEffect,K=t.useDebugValue;function U(E,b){var l=b(),k=z({inst:{value:l,getSnapshot:b}}),x=k[0].inst,f=k[1];return G(function(){x.value=l,x.getSnapshot=b,$(x)&&f({inst:x})},[E,l,b]),j(function(){return $(x)&&f({inst:x}),E(function(){$(x)&&f({inst:x})})},[E]),K(l),l}function $(E){var b=E.getSnapshot;E=E.value;try{var l=b();return!i(E,l)}catch(k){return!0}}function L(E,b){return b()}var M=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?L:U;g.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:M},49743:function(_,g,r){var t=r(67294),Z=r(54652);function i(L,M){return L===M&&(L!==0||1/L===1/M)||L!==L&&M!==M}var z=typeof Object.is=="function"?Object.is:i,j=Z.useSyncExternalStore,G=t.useRef,K=t.useEffect,U=t.useMemo,$=t.useDebugValue;g.useSyncExternalStoreWithSelector=function(L,M,E,b,l){var k=G(null);if(k.current===null){var x={hasValue:!1,value:null};k.current=x}else x=k.current;k=U(function(){function p(c){if(!v){if(v=!0,h=c,c=b(c),l!==void 0&&x.hasValue){var S=x.value;if(l(S,c))return y=S}return y=c}if(S=y,z(h,c))return S;var C=b(c);return l!==void 0&&l(S,C)?S:(h=c,y=C)}var v=!1,h,y,d=E===void 0?null:E;return[function(){return p(M())},d===null?void 0:function(){return p(d())}]},[M,E,b,l]);var f=j(L,k[0],k[1]);return K(function(){x.hasValue=!0,x.value=f},[f]),$(f),f}},54652:function(_,g,r){_.exports=r(26849)},28258:function(_,g,r){_.exports=r(49743)},37762:function(_,g,r){r.d(g,{Z:function(){return Z}});var t=r(40181);function Z(i,z){var j=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!j){if(Array.isArray(i)||(j=(0,t.Z)(i))||z&&i&&typeof i.length=="number"){j&&(i=j);var G=0,K=function(){};return{s:K,n:function(){return G>=i.length?{done:!0}:{done:!1,value:i[G++]}},e:function(E){throw E},f:K}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U,$=!0,L=!1;return{s:function(){j=j.call(i)},n:function(){var E=j.next();return $=E.done,E},e:function(E){L=!0,U=E},f:function(){try{$||j.return==null||j.return()}finally{if(L)throw U}}}}},17685:function(_,g,r){var t=r(66092),Z=t.Z.Symbol;g.Z=Z},74073:function(_,g){function r(t,Z){for(var i=-1,z=t==null?0:t.length,j=Array(z);++i<z;)j[i]=Z(t[i],i,t);return j}g.Z=r},93589:function(_,g,r){r.d(g,{Z:function(){return x}});var t=r(17685),Z=Object.prototype,i=Z.hasOwnProperty,z=Z.toString,j=t.Z?t.Z.toStringTag:void 0;function G(f){var p=i.call(f,j),v=f[j];try{f[j]=void 0;var h=!0}catch(d){}var y=z.call(f);return h&&(p?f[j]=v:delete f[j]),y}var K=G,U=Object.prototype,$=U.toString;function L(f){return $.call(f)}var M=L,E="[object Null]",b="[object Undefined]",l=t.Z?t.Z.toStringTag:void 0;function k(f){return f==null?f===void 0?b:E:l&&l in Object(f)?K(f):M(f)}var x=k},13413:function(_,g){var r=typeof global=="object"&&global&&global.Object===Object&&global;g.Z=r},66092:function(_,g,r){var t=r(13413),Z=typeof self=="object"&&self&&self.Object===Object&&self,i=t.Z||Z||Function("return this")();g.Z=i},27771:function(_,g){var r=Array.isArray;g.Z=r},18533:function(_,g){function r(t){return t!=null&&typeof t=="object"}g.Z=r},64529:function(_,g,r){r.d(g,{Ue:function(){return E}});const t=l=>{let k;const x=new Set,f=(S,C)=>{const I=typeof S=="function"?S(k):S;if(!Object.is(I,k)){const P=k;k=(C!=null?C:typeof I!="object"||I===null)?I:Object.assign({},k,I),x.forEach(A=>A(k,P))}},p=()=>k,d={setState:f,getState:p,getInitialState:()=>c,subscribe:S=>(x.add(S),()=>x.delete(S)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),x.clear()}},c=k=l(f,p,d);return d},Z=l=>l?t(l):t;var i=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),Z(l)),z=r(67294),j=r(28258);const{useDebugValue:G}=z,{useSyncExternalStoreWithSelector:K}=j;let U=!1;const $=l=>l;function L(l,k=$,x){x&&!U&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),U=!0);const f=K(l.subscribe,l.getState,l.getServerState||l.getInitialState,k,x);return G(f),f}const M=l=>{typeof l!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const k=typeof l=="function"?Z(l):l,x=(f,p)=>L(k,f,p);return Object.assign(x,k),x},E=l=>l?M(l):M;var b=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),E(l))},782:function(_,g,r){r.d(g,{mW:function(){return K},tJ:function(){return f}});const t=(p,v)=>(h,y,d)=>(d.dispatch=c=>(h(S=>p(S,c),!1,c),c),d.dispatchFromDevtools=!0,H({dispatch:(...c)=>d.dispatch(...c)},v)),Z=null,i=new Map,z=p=>{const v=i.get(p);return v?Object.fromEntries(Object.entries(v.stores).map(([h,y])=>[h,y.getState()])):{}},j=(p,v,h)=>{if(p===void 0)return{type:"untracked",connection:v.connect(h)};const y=i.get(h.name);if(y)return H({type:"tracked",store:p},y);const d={connection:v.connect(h),stores:{}};return i.set(h.name,d),H({type:"tracked",store:p},d)},K=(p,v={})=>(h,y,d)=>{const R=v,{enabled:c,anonymousActionType:S,store:C}=R,I=ke(R,["enabled","anonymousActionType","store"]);let P;try{P=(c!=null?c:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(w){}if(!P)return c&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),p(h,y,d);const T=j(C,P,I),{connection:A}=T,W=ke(T,["connection"]);let N=!0;d.setState=(w,s,O)=>{const Y=h(w,s);if(!N)return Y;const ue=O===void 0?{type:S||"anonymous"}:typeof O=="string"?{type:O}:O;return C===void 0?(A==null||A.send(ue,y()),Y):(A==null||A.send(Se(H({},ue),{type:`${C}/${ue.type}`}),Se(H({},z(I.name)),{[C]:d.getState()})),Y)};const D=(...w)=>{const s=N;N=!1,h(...w),N=s},B=p(d.setState,y,d);if(W.type==="untracked"?A==null||A.init(B):(W.stores[W.store]=d,A==null||A.init(Object.fromEntries(Object.entries(W.stores).map(([w,s])=>[w,w===W.store?B:s.getState()])))),d.dispatchFromDevtools&&typeof d.dispatch=="function"){let w=!1;const s=d.dispatch;d.dispatch=(...O)=>{O[0].type==="__setState"&&!w&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),w=!0),s(...O)}}return A.subscribe(w=>{var s;switch(w.type){case"ACTION":if(typeof w.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return U(w.payload,O=>{if(O.type==="__setState"){if(C===void 0){D(O.state);return}Object.keys(O.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const Y=O.state[C];if(Y==null)return;JSON.stringify(d.getState())!==JSON.stringify(Y)&&D(Y);return}d.dispatchFromDevtools&&typeof d.dispatch=="function"&&d.dispatch(O)});case"DISPATCH":switch(w.payload.type){case"RESET":return D(B),C===void 0?A==null?void 0:A.init(d.getState()):A==null?void 0:A.init(z(I.name));case"COMMIT":if(C===void 0){A==null||A.init(d.getState());return}return A==null?void 0:A.init(z(I.name));case"ROLLBACK":return U(w.state,O=>{if(C===void 0){D(O),A==null||A.init(d.getState());return}D(O[C]),A==null||A.init(z(I.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return U(w.state,O=>{if(C===void 0){D(O);return}JSON.stringify(d.getState())!==JSON.stringify(O[C])&&D(O[C])});case"IMPORT_STATE":{const{nextLiftedState:O}=w.payload,Y=(s=O.computedStates.slice(-1)[0])==null?void 0:s.state;if(!Y)return;D(C===void 0?Y:Y[C]),A==null||A.send(null,O);return}case"PAUSE_RECORDING":return N=!N}return}}),B},U=(p,v)=>{let h;try{h=JSON.parse(p)}catch(y){console.error("[zustand devtools middleware] Could not parse the received json",y)}h!==void 0&&v(h)},$=p=>(v,h,y)=>{const d=y.subscribe;return y.subscribe=(S,C,I)=>{let P=S;if(C){const A=(I==null?void 0:I.equalityFn)||Object.is;let W=S(y.getState());P=N=>{const D=S(N);if(!A(W,D)){const B=W;C(W=D,B)}},I!=null&&I.fireImmediately&&C(W,W)}return d(P)},p(v,h,y)},L=null,M=(p,v)=>(...h)=>Object.assign({},p,v(...h));function E(p,v){let h;try{h=p()}catch(d){return}return{getItem:d=>{var c;const S=I=>I===null?null:JSON.parse(I,v==null?void 0:v.reviver),C=(c=h.getItem(d))!=null?c:null;return C instanceof Promise?C.then(S):S(C)},setItem:(d,c)=>h.setItem(d,JSON.stringify(c,v==null?void 0:v.replacer)),removeItem:d=>h.removeItem(d)}}const b=p=>v=>{try{const h=p(v);return h instanceof Promise?h:{then(y){return b(y)(h)},catch(y){return this}}}catch(h){return{then(y){return this},catch(y){return b(y)(h)}}}},l=(p,v)=>(h,y,d)=>{let c=H({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:T=>T,version:0,merge:(T,w)=>H(H({},w),T)},v),S=!1;const C=new Set,I=new Set;let P;try{P=c.getStorage()}catch(T){}if(!P)return p((...T)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),h(...T)},y,d);const A=b(c.serialize),W=()=>{const T=c.partialize(H({},y()));let w;const s=A({state:T,version:c.version}).then(O=>P.setItem(c.name,O)).catch(O=>{w=O});if(w)throw w;return s},N=d.setState;d.setState=(T,w)=>{N(T,w),W()};const D=p((...T)=>{h(...T),W()},y,d);let B;const R=()=>{var T;if(!P)return;S=!1,C.forEach(s=>s(y()));const w=((T=c.onRehydrateStorage)==null?void 0:T.call(c,y()))||void 0;return b(P.getItem.bind(P))(c.name).then(s=>{if(s)return c.deserialize(s)}).then(s=>{if(s)if(typeof s.version=="number"&&s.version!==c.version){if(c.migrate)return c.migrate(s.state,s.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return s.state}).then(s=>{var O;return B=c.merge(s,(O=y())!=null?O:D),h(B,!0),W()}).then(()=>{w==null||w(B,void 0),S=!0,I.forEach(s=>s(B))}).catch(s=>{w==null||w(void 0,s)})};return d.persist={setOptions:T=>{c=H(H({},c),T),T.getStorage&&(P=T.getStorage())},clearStorage:()=>{P==null||P.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>R(),hasHydrated:()=>S,onHydrate:T=>(C.add(T),()=>{C.delete(T)}),onFinishHydration:T=>(I.add(T),()=>{I.delete(T)})},R(),B||D},k=(p,v)=>(h,y,d)=>{let c=H({storage:E(()=>localStorage),partialize:R=>R,version:0,merge:(R,T)=>H(H({},T),R)},v),S=!1;const C=new Set,I=new Set;let P=c.storage;if(!P)return p((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),h(...R)},y,d);const A=()=>{const R=c.partialize(H({},y()));return P.setItem(c.name,{state:R,version:c.version})},W=d.setState;d.setState=(R,T)=>{W(R,T),A()};const N=p((...R)=>{h(...R),A()},y,d);d.getInitialState=()=>N;let D;const B=()=>{var R,T;if(!P)return;S=!1,C.forEach(s=>{var O;return s((O=y())!=null?O:N)});const w=((T=c.onRehydrateStorage)==null?void 0:T.call(c,(R=y())!=null?R:N))||void 0;return b(P.getItem.bind(P))(c.name).then(s=>{if(s)if(typeof s.version=="number"&&s.version!==c.version){if(c.migrate)return c.migrate(s.state,s.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return s.state}).then(s=>{var O;return D=c.merge(s,(O=y())!=null?O:N),h(D,!0),A()}).then(()=>{w==null||w(D,void 0),D=y(),S=!0,I.forEach(s=>s(D))}).catch(s=>{w==null||w(void 0,s)})};return d.persist={setOptions:R=>{c=H(H({},c),R),R.storage&&(P=R.storage)},clearStorage:()=>{P==null||P.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>B(),hasHydrated:()=>S,onHydrate:R=>(C.add(R),()=>{C.delete(R)}),onFinishHydration:R=>(I.add(R),()=>{I.delete(R)})},c.skipHydration||B(),D||N},f=(p,v)=>"getStorage"in v||"serialize"in v||"deserialize"in v?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),l(p,v)):k(p,v)}}]);
}());