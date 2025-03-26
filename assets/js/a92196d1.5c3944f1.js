"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7442],{28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>c});var i=n(96540);const r={},t=i.createContext(r);function l(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:o},e.children)}},51240:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=n(74848),r=n(28453);n(28774);const t={},l="ProviderCollection",c={id:"api/build/ProviderCollection",title:"ProviderCollection",description:"Holds a collection of UserProviders. These can be accessed in Starlark by indexing on a ProviderCallable object.",source:"@site/../docs/api/build/ProviderCollection.md",sourceDirName:"api/build",slug:"/api/build/ProviderCollection",permalink:"/docs/api/build/ProviderCollection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Promise",permalink:"/docs/api/build/Promise"},next:{title:"ProvidersLabel",permalink:"/docs/api/build/ProvidersLabel"}},s={},d=[{value:"ProviderCollection.get",id:"providercollectionget",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"providercollection",children:"ProviderCollection"})}),"\n",(0,i.jsxs)(o.p,{children:["Holds a collection of ",(0,i.jsx)(o.code,{children:"UserProvider"}),"s. These can be accessed in Starlark by indexing on a ",(0,i.jsx)(o.code,{children:"ProviderCallable"})," object."]}),"\n",(0,i.jsx)(o.p,{children:"e.g."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ignore",children:'FooInfo = provider(fields=["bar"])\n....\ncollection.get(FooInfo) # None if absent, a FooInfo instance if present\n'})}),"\n",(0,i.jsx)(o.p,{children:"This is the result of all UDR implementation functions"}),"\n",(0,i.jsx)(o.h2,{id:"providercollectionget",children:"ProviderCollection.get"}),"\n",(0,i.jsx)("pre",{class:"language-python",children:(0,i.jsx)("code",{children:"def ProviderCollection.get(index) -> None | provider"})})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);