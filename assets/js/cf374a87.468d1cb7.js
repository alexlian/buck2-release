"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2520],{28453:(t,e,r)=>{r.d(e,{R:()=>n,x:()=>l});var a=r(96540);const i={},s=a.createContext(i);function n(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:n(t.components),a.createElement(s.Provider,{value:e},t.children)}},36581:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(74848),i=r(28453);const s={id:"how_to_catch_building_artifacts_errors",title:"How to Catch Building Artifacts Errors"},n=void 0,l={id:"bxl/how_tos/how_to_catch_building_artifacts_errors",title:"How to Catch Building Artifacts Errors",description:"This guide shows you how to properly handle artifact building errors in BXL",source:"@site/../docs/bxl/how_tos/how_to_catch_building_artifacts_errors.md",sourceDirName:"bxl/how_tos",slug:"/bxl/how_tos/how_to_catch_building_artifacts_errors",permalink:"/docs/bxl/how_tos/how_to_catch_building_artifacts_errors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"how_to_catch_building_artifacts_errors",title:"How to Catch Building Artifacts Errors"},sidebar:"main",previous:{title:"How to Handle Errors",permalink:"/docs/bxl/how_tos/how_to_handle_errors"},next:{title:"How to run actions based on the content of artifact",permalink:"/docs/bxl/how_tos/how_to_run_actions_based_on_the_content_of_artifact"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Prepare the artifacts to be built",id:"1-prepare-the-artifacts-to-be-built",level:3},{value:"2. Use <code>ctx.lazy.build_artifact</code> api",id:"2-use-ctxlazybuild_artifact-api",level:3},{value:"3. Call <code>ctx.output.ensure/ensure_multiple</code> to materialize artifacts",id:"3-call-ctxoutputensureensure_multiple-to-materialize-artifacts",level:3},{value:"Important Limitations",id:"important-limitations",level:2},{value:"Examples",id:"examples",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["This guide shows you how to properly handle artifact building errors in BXL\nusing the\n",(0,a.jsx)(e.a,{href:"../../../api/bxl/LazyContext/#lazycontextbuild_artifact",children:(0,a.jsx)(e.code,{children:"ctx.lazy.build_artifact"})}),"\nAPI."]}),"\n",(0,a.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(e.p,{children:["Read ",(0,a.jsx)(e.a,{href:"../how_to_handle_errors",children:"How to Handle Errors"})," first to first to\nunderstand BXL's error handling patterns."]}),"\n",(0,a.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsx)(e.h3,{id:"1-prepare-the-artifacts-to-be-built",children:"1. Prepare the artifacts to be built"}),"\n",(0,a.jsxs)(e.h3,{id:"2-use-ctxlazybuild_artifact-api",children:["2. Use ",(0,a.jsx)(e.code,{children:"ctx.lazy.build_artifact"})," api"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"lazy_built = ctx.lazy.build_artifact(artifact)\n# catch error and resolve Lazy object\nresult = lazy_built.catch().resolve()\n"})}),"\n",(0,a.jsxs)(e.p,{children:["For how to parallel building a list of artifacts please refer\n",(0,a.jsx)(e.a,{href:"../how_to_handle_errors/#handling-multiple-operations-in-parallel",children:"here"})," for\nmore details"]}),"\n",(0,a.jsxs)(e.h3,{id:"3-call-ctxoutputensureensure_multiple-to-materialize-artifacts",children:["3. Call ",(0,a.jsx)(e.code,{children:"ctx.output.ensure/ensure_multiple"})," to materialize artifacts"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"if result.is_ok():\n    artifact = result.unwrap()\n    ctx.output.ensure(artifact)\nelse:\n    error = result.unwrap_err()\n    print(error)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"important-limitations",children:"Important Limitations"}),"\n",(0,a.jsx)(e.p,{children:"You cannot use this API for artifacts declared in BXL."}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(e.p,{children:["Examples can be found at\n",(0,a.jsx)(e.code,{children:"tests/core/bxl/test_lazy_build_artifact_data/lazy_build_artifact.bxl"})," of buck2\nrepo folder."]}),"\n",(0,a.jsxs)(e.p,{children:["Run such command at ",(0,a.jsx)(e.code,{children:"tests/core/bxl/test_lazy_build_artifact_data"})," to run the\nexample bxl script"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sh",children:"buck2 bxl lazy_build_artifact.bxl:build_artifact\nbuck2 bxl lazy_build_artifact.bxl:build_artifact_fail\n"})})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}}}]);