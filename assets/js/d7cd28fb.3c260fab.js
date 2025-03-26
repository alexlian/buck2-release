"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6343],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}},80325:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(74848),r=s(28453);const i={},a="@configuration syntax",o={id:"rfcs/drafts/configuration-at-syntax",title:"@configuration syntax",description:"What",source:"@site/../docs/rfcs/drafts/configuration-at-syntax.md",sourceDirName:"rfcs/drafts",slug:"/rfcs/drafts/configuration-at-syntax",permalink:"/docs/rfcs/drafts/configuration-at-syntax",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"What",id:"what",level:2},{value:"Why",id:"why",level:2},{value:"Possible future extensions",id:"possible-future-extensions",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configuration-syntax",children:"@configuration syntax"})}),"\n",(0,t.jsx)(n.h2,{id:"what",children:"What"}),"\n",(0,t.jsx)(n.p,{children:"Command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"buck2 build //foo:bar@config//platform:linux-x86_64\n"})}),"\n",(0,t.jsx)(n.p,{children:"should be equivalent to current syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"buck2 build //foo:bar --target-platforms=//platform:linux-x86_64\n"})}),"\n",(0,t.jsx)(n.h2,{id:"why",children:"Why"}),"\n",(0,t.jsxs)(n.p,{children:["Might be convenient if we define global (or per-target, as proposed in\n",(0,t.jsx)(n.a,{href:"https://www.internalfb.com/diff/D35135886",children:"target configuration discovery RFC"}),")\nalias. For example, if there's an alias"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"release=//config:linux-x86_64-release\n"})}),"\n",(0,t.jsx)(n.p,{children:"The command above can be expressed as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"buck2 build //foo:bar@release\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, if we have\n",(0,t.jsx)(n.a,{href:"https://www.internalfb.com/diff/D35135496",children:"configuration expression RFC"}),"\nimplemented, we can do something like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"buck2 build //foo:bar@release+gcc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"possible-future-extensions",children:"Possible future extensions"}),"\n",(0,t.jsx)(n.p,{children:"For now, at-syntax only applies to command line arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["of ",(0,t.jsx)(n.code,{children:"build"}),"/",(0,t.jsx)(n.code,{children:"targets"}),"/",(0,t.jsx)(n.code,{children:"run"}),"/",(0,t.jsx)(n.code,{children:"test"})," commands"]}),"\n",(0,t.jsxs)(n.li,{children:["probably ",(0,t.jsx)(n.code,{children:"cquery"})," query"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It would be reasonable to expect that this syntax should be allowed anywhere we\nneed a target (e.g. in ",(0,t.jsx)(n.code,{children:"deps"})," attribute), but this is out of scope of this\nproposal."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);