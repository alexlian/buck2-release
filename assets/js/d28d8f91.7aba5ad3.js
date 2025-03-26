"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5785],{28453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>r});var i=l(96540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}},83396:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=l(74848),t=l(28453);const s={id:"external_cells",title:"External Cells"},c=void 0,r={id:"users/advanced/external_cells",title:"External Cells",description:"Normally, buck2 requires source files to be checked into the repo. However, this",source:"@site/../docs/users/advanced/external_cells.md",sourceDirName:"users/advanced",slug:"/users/advanced/external_cells",permalink:"/docs/users/advanced/external_cells",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"external_cells",title:"External Cells"},sidebar:"main",previous:{title:"In Memory Cache",permalink:"/docs/users/advanced/in_memory_cache"},next:{title:"Writing Rules",permalink:"/docs/rule_authors/writing_rules"}},o={},a=[{value:"Setting up an external cell",id:"setting-up-an-external-cell",level:2},{value:"Origins",id:"origins",level:2},{value:"The <code>bundled</code> origin",id:"the-bundled-origin",level:3},{value:"The <code>git</code> origin",id:"the-git-origin",level:3},{value:"The <code>disabled</code> origin",id:"the-disabled-origin",level:3},{value:"Expanding external cells",id:"expanding-external-cells",level:2},{value:"Details &amp; Limitations",id:"details--limitations",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Normally, buck2 requires source files to be checked into the repo. However, this\nis sometimes inconvenient. It makes distribution of the prelude hard, and users\nmay want to pull in third party dependencies without vendoring them or using\nsource control tricks."}),"\n",(0,i.jsxs)(n.p,{children:['To help support these use cases, buck2 has a concept of "external cells."\nExternal cells act much like ',(0,i.jsx)(n.a,{href:"../../../concepts/buckconfig#cells",children:"normal cells"}),", except that instead of having their\nsource files checked into the repo, the source files have some alternative\norigin."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-an-external-cell",children:"Setting up an external cell"}),"\n",(0,i.jsxs)(n.p,{children:["Configuring an external cell looks much like configuring a regular cell. First,\nadd the cell to the ",(0,i.jsx)(n.code,{children:"cells"})," section of your ",(0,i.jsx)(n.code,{children:".buckconfig"})," like normal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[cells]\n  prelude = some/path\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The external cell's files won't actually be generated in the repo. However, you\nstill need to provide a path for it - this path influences the handling of tree\nfiles, since those cross cell boundaries. It's also used for\n",(0,i.jsx)(n.code,{children:"expand-external-cells"}),", more on that below."]}),"\n",(0,i.jsxs)(n.p,{children:["Next, add an entry to the ",(0,i.jsx)(n.code,{children:"external_cells"}),' buckconfig section that specifies the\n"origin" of the external cell given an alias. This tells buck2 where you want to\nget the cell from, if not files in the source repo.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[external_cells]\n  prelude = bundled\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.code,{children:"bundled"})," origin, that's it. Other origins may require additional\nconfiguration."]}),"\n",(0,i.jsx)(n.h2,{id:"origins",children:"Origins"}),"\n",(0,i.jsxs)(n.p,{children:["Buck2 currently supports three external cell origins: ",(0,i.jsx)(n.code,{children:"bundled"}),", ",(0,i.jsx)(n.code,{children:"git"}),", and\n",(0,i.jsx)(n.code,{children:"disabled"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"the-bundled-origin",children:["The ",(0,i.jsx)(n.code,{children:"bundled"})," origin"]}),"\n",(0,i.jsxs)(n.p,{children:["The bundled origin can only be used with the ",(0,i.jsx)(n.code,{children:"prelude"})," cell, and provides access\nto a copy of the prelude that is bundled as part of the buck2 binary. This is\nuseful as an easier-to-install alternative to vendoring or submoduling the\nprelude."]}),"\n",(0,i.jsxs)(n.h3,{id:"the-git-origin",children:["The ",(0,i.jsx)(n.code,{children:"git"})," origin"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"git"})," origin indicates that an external cell's content should be loaded from\nsome git repo. It accepts two additional configuration parameters, ",(0,i.jsx)(n.code,{children:"git_origin"}),"\nand ",(0,i.jsx)(n.code,{children:"commit"}),", like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[cells]\n  root = .\n  libfoo = libfoo\n\n[external_cells]\n  libfoo = git\n\n[external_cell_libfoo]\n  git_origin = https://github.com/facebook/foo\n  commit_hash = <sha1sum>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"commit_hash"})," value must be a sha1, it cannot be eg a branch name."]}),"\n",(0,i.jsxs)(n.h3,{id:"the-disabled-origin",children:["The ",(0,i.jsx)(n.code,{children:"disabled"})," origin"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"disabled"})," origin indicates that the cell is a normal cell, not an external\ncell. It is equivalent to the cell not being present in the ",(0,i.jsx)(n.code,{children:"external_cells"}),"\nbuckconfig section."]}),"\n",(0,i.jsx)(n.h2,{id:"expanding-external-cells",children:"Expanding external cells"}),"\n",(0,i.jsxs)(n.p,{children:["Because external cells only represent a different way to access source files,\nbuck2 provides an ",(0,i.jsx)(n.code,{children:"expand-external-cell"})," command. This command will make a copy\nof the external cell into the path in the repo you specified for your cell. By\ncommenting out the ",(0,i.jsx)(n.code,{children:"external_cells"})," buckconfig entry, this allows you to make\ndirect edits to the cell's files in your repo."]}),"\n",(0,i.jsx)(n.h2,{id:"details--limitations",children:"Details & Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["External cells can only be configured in the project root's ",(0,i.jsx)(n.code,{children:".buckconfig"}),'.\nThis also means that there is no support for "transitive" external cells, ie\nan external cell cannot specify additional external cells to pull in.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"External cells cannot have nested cells inside them."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cells"})," buckconfig section of external cells is ignored. This is done to\nensure that when using an external cell to access some dependency in a git\nrepo, that git repo can still be an independently building project that\nspecifies its own toolchain and prelude configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["Because of this difference between external and non-external cells, it's\npossible that running ",(0,i.jsx)(n.code,{children:"buck2 expand-external-cell"})," may not produce a working\ncell immediately, but instead require you to delete the ",(0,i.jsx)(n.code,{children:"cells"})," section first."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cell_aliases"})," still work just like with regular cells."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);