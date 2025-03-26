"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5367],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}},49106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(74848),i=t(28453),s=t(28774);const a={},o="int",c={id:"api/starlark/int",title:"int",description:"def int(",source:"@site/../docs/api/starlark/int.md",sourceDirName:"api/starlark",slug:"/api/starlark/int",permalink:"/docs/api/starlark/int",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"float",permalink:"/docs/api/starlark/float"},next:{title:"json",permalink:"/docs/api/starlark/json"}},d={},l=[];function h(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"int",children:"int"})}),"\n",(0,r.jsx)("pre",{class:"language-python",children:(0,r.jsxs)("code",{children:["def int(\na: ",(0,r.jsx)(s.default,{to:"/docs/api/starlark/bool",children:"bool"})," | ",(0,r.jsx)(s.default,{to:"/docs/api/starlark/float",children:"float"})," | ",(0,r.jsx)(s.default,{to:"/docs/api/starlark/int",children:"int"})," | ",(0,r.jsx)(s.default,{to:"/docs/api/starlark/str",children:"str"})," = ...,\n/,\nbase: ",(0,r.jsx)(s.default,{to:"/docs/api/starlark/int",children:"int"})," = ...,\n) -> ",(0,r.jsx)(s.default,{to:"/docs/api/starlark/int",children:"int"})]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#int",children:"int"}),": convert a value to integer."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"int(x[, base])"})," interprets its argument as an integer."]}),"\n",(0,r.jsxs)(n.p,{children:["If x is an ",(0,r.jsx)(n.code,{children:"int"}),", the result is x.\nIf x is a ",(0,r.jsx)(n.code,{children:"float"}),", the result is the integer value nearest to x,\ntruncating towards zero; it is an error if x is not finite (",(0,r.jsx)(n.code,{children:"NaN"}),",\n",(0,r.jsx)(n.code,{children:"+Inf"}),", ",(0,r.jsx)(n.code,{children:"-Inf"}),").\nIf x is a ",(0,r.jsx)(n.code,{children:"bool"}),", the result is 0 for ",(0,r.jsx)(n.code,{children:"False"})," or 1 for ",(0,r.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If x is a string, it is interpreted like a string literal;\nan optional base prefix (",(0,r.jsx)(n.code,{children:"0"}),", ",(0,r.jsx)(n.code,{children:"0b"}),", ",(0,r.jsx)(n.code,{children:"0B"}),", ",(0,r.jsx)(n.code,{children:"0x"}),", ",(0,r.jsx)(n.code,{children:"0X"}),") determines which\nbase to use. The string may specify an arbitrarily large integer,\nwhereas true integer literals are restricted to 64 bits.\nIf a non-zero ",(0,r.jsx)(n.code,{children:"base"})," argument is provided, the string is interpreted\nin that base and no base prefix is permitted; the base argument may\nspecified by name."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"int()"})," with no arguments returns 0."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"int() == 0\nint(1) == 1\nint(False) == 0\nint(True) == 1\nint('1') == 1\nint('16') == 16\nint('16', 10) == 16\nint('16', 8) == 14\nint('16', 16) == 22\nint(0.0) == 0\nint(3.14) == 3\nint(-12345.6789) == -12345\nint(2e9) == 2000000000\nint(\"hello\")   # error: Cannot parse\nint(float(\"nan\"))   # error: cannot be represented as exact integer\nint(float(\"inf\"))   # error: cannot be represented as exact integer\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);