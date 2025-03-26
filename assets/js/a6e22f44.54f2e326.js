"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[847],{10113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(74848),a=t(28453),s=t(52112);const r={},o="Buck Extension Language (BXL)",l={id:"rfcs/implemented/bxl",title:"Buck Extension Language (BXL)",description:"Buck2 will allow more complex introspection and interaction with its graphs via",source:"@site/../docs/rfcs/implemented/bxl.md",sourceDirName:"rfcs/implemented",slug:"/rfcs/implemented/bxl",permalink:"/docs/rfcs/implemented/bxl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Use Cases",id:"use-cases",level:2},{value:"Cpp LSP",id:"cpp-lsp",level:3},{value:"Android LSP",id:"android-lsp",level:3},{value:"iOS Project",id:"ios-project",level:3},{value:"Rust LSP",id:"rust-lsp",level:3},{value:"Visual Studio Project (vsgo)",id:"visual-studio-project-vsgo",level:3},{value:"Goals",id:"goals",level:2},{value:"API",id:"api",level:2},{value:"Defining a bxl function",id:"defining-a-bxl-function",level:3},{value:"Accessing target nodes",id:"accessing-target-nodes",level:3},{value:"Inspect providers",id:"inspect-providers",level:3},{value:"Actions",id:"actions",level:3},{value:"What is cached?",id:"what-is-cached",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"buck-extension-language-bxl",children:"Buck Extension Language (BXL)"})}),"\n",(0,i.jsxs)(n.p,{children:["Buck2 will allow more complex introspection and interaction with its graphs via\nthe ",(0,i.jsx)(n.code,{children:"bxl"})," feature. BXL will be a starlark script that allows integrators to\ninteract with ",(0,i.jsx)(n.code,{children:"buck"})," commands like build and query within starlark, creating a\nsequence of operations that introspect, build, and extend the build graph."]}),"\n",(0,i.jsx)(s.FbInternalOnly,{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://fb.workplace.com/groups/buck2prototyping/permalink/2404233936540759/",children:"https://fb.workplace.com/groups/buck2prototyping/permalink/2404233936540759/"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:'These are essentially custom buck operations, defined in Starlark, that still\nfollow the constraints of Buck2, which will enable the same level of\nincrementality and caching as native buck2 operations. Furthermore, bxl will\nhave subscriptions enabled in the future, where based on the incrementality\ntracking, buck2 can provide "updated" bxl executions when its known that its\ndependencies change, and even when generated sources need to be regenerated.'}),"\n",(0,i.jsx)(n.p,{children:"The following proposes a basic set of bxl api and building blocks that are\ntargeted at solving key issues for IDE integration."}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(n.h3,{id:"cpp-lsp",children:"Cpp LSP"}),"\n",(0,i.jsx)(s.FbInternalOnly,{children:(0,i.jsxs)(n.p,{children:["I\u2019ve previously defined some proposed integrations\n",(0,i.jsx)(n.a,{href:"https://docs.google.com/document/d/1jyehtuQ236rtwq2yyLnLmsIgBOctuAm9eoqx95TCO4I/edit",children:"here"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Lsp prefers to have a single buck command that given a file, returns the\ncorresponding compilation database. This requires a single command, i.e a bxl,\nthat accepts a file as input, performs ",(0,i.jsx)(n.code,{children:"owners"})," queries, and uses the owning\ntarget plus the desired file to get the clang flags, and then writes it to disk\nin comp db format. It\u2019s possible to write the same features using buck calls to\ncquery, and build using subtargets to generate compilation database per file.\nHowever, this requires lsp owners to maintain code in several locations and\nlanguages, and parse and reserialize data. It also does not provide the same\nincrementality and subscription update features of the resulting comp db that\nwriting this in bxl would have. Furthermore, we may explore the idea of trimming\nthe compilation command to only dependencies required per the file requested.\nBxl actions provides a straightforward api for adding this when writing the\nactual comp db file."]}),"\n",(0,i.jsx)(n.h3,{id:"android-lsp",children:"Android LSP"}),"\n",(0,i.jsx)(n.p,{children:"Android project requires traversing the target graph to find and java libraries,\ngrouping and converting them between modules or project libraries depending on\nthe number of references, and restructuring the graph as directory based.\nAndroid LSP is able to take advantage of subscriptions in the future when\navailable, allowing developers to keep their IDE up-to-date automatically\nwithout needing to manually regenerate the project."}),"\n",(0,i.jsxs)(n.p,{children:["With bxl, the graph traversals can be written in starlark, allowing propagation\nof information down the graph, accessing targets\u2019 attributes to analyze\ndependencies, and access providers for artifacts and action information needed\nto output the project file. Project generation also performs directory listings\nthat buck2\u2019s dice already performs and caches (I think, need to confirm). Bxl\nposes the interesting possibility that we can expose a limited set of IO\noperations that are tracked by dice so bxl can access the same cached file\noperations as rest of buck2. Android project generation currently doesn\u2019t write\nproject files to buck-out, which prevents it from using buck2 actions. It will\nhave to rely on an external script to process the graph information printed by\nbuck and write the actual project files. If it moves to ",(0,i.jsx)(n.code,{children:"buck-out"})," based, then\nit can take advantage of creating actions directly using the graph information\nprocessed, and potentially take advantage of incremental actions api to avoid\nwriting the entire graph on each subsequent update."]}),"\n",(0,i.jsx)(n.h3,{id:"ios-project",children:"iOS Project"}),"\n",(0,i.jsx)(n.p,{children:"iOS is currently being implemented as a series of queries that are aggregated by\nan external python script, that then invokes builds of subtargets. The same can\nbe achieved in bxl, but with the entire sequence being cacheable and\nsubscribable so that when the graph is updated, or even when generated files\nneed updating, buck2 can automatically push the updates. However, it is\nuncertain whether xcode itself can make use of push updates."}),"\n",(0,i.jsx)(s.FbInternalOnly,{children:(0,i.jsxs)(n.p,{children:["In\n",(0,i.jsx)(n.a,{href:"https://docs.google.com/document/d/1USZ_ZYxq45DHUFF-BAYo6zS4lAHlpvNk9uM5SBL9e-w/edit?disco=AAAAQv4gLQ0",children:"https://docs.google.com/document/d/1USZ_ZYxq45DHUFF-BAYo6zS4lAHlpvNk9uM5SBL9e-w/edit?disco=AAAAQv4gLQ0"}),",\nit was also proposed that project generation may need information to flow down\nas part of the generation, which is only possible via bxl defining its own\nactions. (Although, there may have been a workaround per Chatura)."]})}),"\n",(0,i.jsx)(n.h3,{id:"rust-lsp",children:"Rust LSP"}),"\n",(0,i.jsx)(n.p,{children:"(note from dbarsky@: I\u2019m adding this at Bob\u2019s request. Can be removed as\nneeded.)"}),"\n",(0,i.jsx)(n.h3,{id:"visual-studio-project-vsgo",children:"Visual Studio Project (vsgo)"}),"\n",(0,i.jsx)(n.p,{children:"Vsgo is a pile of python that converts buck query/buck targets output via a\nvariety of heuristics into inputs to a custom fork gyp which is then invoked to\ngenerate visual studio projects for a given buck target. Having direct access to\nthe internals of buck would allow us to remove the heuristics and possibly even\nmove project generation directly into bxl."}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsx)(n.p,{children:"From the above use cases, BXL should offer a simple Starlark API that allows\neasy introspection of the buck2 graph at unconfigured, configured, providers,\nand actions stage, maintaining incremental behaviour of the BXL evaluation\nitself."}),"\n",(0,i.jsx)(n.p,{children:"Some minimal API should be offered to allow BXL to provide additional behaviour\nsuch as output artifacts, and print results."}),"\n",(0,i.jsx)(n.p,{children:"Most use cases from LSP desire to also propagate information via the command\nline for these operations, so BXL should support command line arguments as\ninputs."}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"defining-a-bxl-function",children:"Defining a bxl function"}),"\n",(0,i.jsx)(n.p,{children:"There are multiple models possible. We can have each file be its own bxl, or\nhave each file declare multiple bxl like rules."}),"\n",(0,i.jsx)(n.p,{children:'There are multiple advantages to allowing declaration of multiple bxls, such as\ngrouping similar bxls in the same file, allowing them to "invoke" each other. It\ndoesn\u2019t necessarily add much more complexity for the author, as even with one\nbxl per file, the author still has to have some declaration for the bxls\narguments.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# sample.bxl\nfunc1 = bxl_main(\n   impl = my_func1,\n   args = {\n     "arg1": arg.list(arg.str()),\n   }\n)\n\nfunc2 = bxl_main(\n   ...\n)\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"To invoke buck2 for that bxl, we can have the command line as follows."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"buck2 bxl sample.bxl::func1 -- --arg1 foo bar baz\n"})}),"\n",(0,i.jsx)(n.p,{children:"For bxl functions to read the arguments, a similar api to rule attrs is used"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"args = ctx.args.args_for_bxl\n"})}),"\n",(0,i.jsx)(n.p,{children:"Args defined like attrs when declaring the bxl function above"}),"\n",(0,i.jsx)(n.h3,{id:"accessing-target-nodes",children:"Accessing target nodes"}),"\n",(0,i.jsx)(n.p,{children:"All standard query functions will be enabled in bxl, allowing users to run query\noperations, storing them in variables and interacting with them. These allow\nintrospection of the unconfigured targets, or the configured targets based on\napi"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# some.bxl\ntargets = ctx.uquery(\u2018deps("//foo")\u2019)\ntargets = filter(targets, my_filter)\n\n# introspect a target\nfor target in targets:\n  ctx.print(target.attributes) # prints selects\n  # also inspect the target like below\n  ctx.print(target.label)\n\ntarget = ctx.cquery("//foo", "//x86").attributes # cquery has selects resolved\n'})}),"\n",(0,i.jsx)(n.h3,{id:"inspect-providers",children:"Inspect providers"}),"\n",(0,i.jsx)(n.p,{children:"When we have a configured target, bxl can request for the analysis of the rule"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"target = <some configured target>\n\nctx.analysis(target).providers # access the providers\n"})}),"\n",(0,i.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,i.jsx)(n.p,{children:"For IDEs, to generate compilation databases, or generate project files, writing\nthem in bxl will entail creating actions, and executing them. As such, bxl will\nalso be given the rules api to register actions, including dynamic outputs for\nthe rule in the current bxl invocation to build artifacts as part of a bxl\nfunction."}),"\n",(0,i.jsx)(n.p,{children:"BXL has the ability to create actions with some constraints:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Action is tied to a particular target"}),"\n",(0,i.jsx)(n.li,{children:"It\u2019s output location is determined in the same pattern as regular actions\ndefined via rules"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'targets = ctx.cquery(\u2018deps("//foo:rule")\u2019)\n\nfor t in targets:\n  action_ctx = ctx.analysis(t).actions\n  # the action context here is tied to the configured target `t`\n  # actions registered by bxl will be attached with bxl prefix key\n  action_ctx.registry.write(some_output, "foo")\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"BXL can also interact with the existing actions on an action via the action_ctx,\nsuch as iterating through it, analyzing its outputs, or requesting it to be ran."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'targets = deps("foo:rule")\n\nfor t in targets:\n  action_ctx = ctx.analysis(t).actions\n  for action in action_ctx.iter():\n    if "foo/path" in action.output:\n      ctx.build(action)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"what-is-cached",children:"What is cached?"}),"\n",(0,i.jsx)(n.p,{children:"All computations requested by a bxl function will be treated as inputs. So if a\nbxl function calls uquery, then uses the result to do a cquery, and then a\nbuild, if buck2 detects that any of the recorded calls to uquery, cquery, and\nbuild changes, the entire bxl will be reran, with no early cutoff. The\ncomputations itself will still be cached via DICE, so no major performance\nissues are expected. However, in the event that a bxl function is\ncomputationally heavy, the recommendation would be to move that to an action, or\nsplit up the bxl and use inter-bxl caching described below."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);