__NUXT_JSONP__("/basic/md/gitbook", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{document:{title:"GitBook静态文档生成",description:"",position:1504,category:"知识篇-Markdown",toc:[{id:F,depth:Q,text:F},{id:R,depth:B,text:S},{id:T,depth:B,text:U},{id:G,depth:Q,text:G},{id:V,depth:B,text:W},{id:H,depth:B,text:H},{id:I,depth:B,text:I}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"GitBook是一个基于 Node.js 的命令行工具，可使用 Github\u002FGit 和 Markdown 来制作精美的电子书"}]},{type:a,value:e},{type:b,tag:X,props:{id:F},children:[{type:b,tag:t,props:{ariaHidden:r,href:"#%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8",tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:F}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"登陆gitbook,使用github账号登陆,新建一个book,然后选择link to github.(不要选择gitbook在线编辑)"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"新建github仓库比如some_book.git"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"本地安装gitbook和gitbook-cli命令行工具:"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,D]},children:[{type:b,tag:p,props:{},children:[{type:a,value:"$ cnpm i -g gitbook-cli\n$ gitbook versions:install\n"}]}]}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"本地新建my_book"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,D]},children:[{type:b,tag:p,props:{},children:[{type:a,value:"$ gitbook init my_book #新建一本书\n$ cd my_book\n$ git init\n"}]}]}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"使用GitBook制作电子书，必备两个文件：README.md和SUMMARY.md"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{id:R},children:[{type:b,tag:t,props:{ariaHidden:r,href:"#readmemd",tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:S}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"电子书介绍说明部分"}]},{type:a,value:e},{type:b,tag:E,props:{id:T},children:[{type:b,tag:t,props:{ariaHidden:r,href:"#summarymd",tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"电子书目录部分"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"接下来只需要编写相应章节即可。在编辑完README.md和SUMMARY.md后，可以运行以下命令："}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,D]},children:[{type:b,tag:p,props:{},children:[{type:a,value:"$ git add .\n$ git commit -m '...'\n$ git remote add origin git@github.com:xxxx\u002Fsome_book.git #创建远程服务器\n$ git push -u origin master\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Gitbook首先把你的Markdown文件编译为HTML文件，并根据SUMMARY.md生成书的目录。所有生存的文件都保存在当前目录下的一个名为_book的子目录中。完成这些工作后，Gitbook会作为一个HTTP Server运行，并在4000端口监听HTTP请求。"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"然后使用markdown语法编辑文章,开启本地服务器:"}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,D]},children:[{type:b,tag:p,props:{},children:[{type:a,value:"$ gitbook serve\n"}]}]}]},{type:a,value:e},{type:b,tag:X,props:{id:G},children:[{type:b,tag:t,props:{ariaHidden:r,href:"#%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8",tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:G}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"添加插件后使用"}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,"language-bash"]},children:[{type:b,tag:p,props:{},children:[{type:a,value:"gitbook "},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"install"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"进行安装"}]},{type:a,value:e},{type:b,tag:E,props:{id:V},children:[{type:b,tag:t,props:{ariaHidden:r,href:"#toc-%E7%9B%AE%E5%BD%95%E7%94%9F%E6%88%90",tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"book.json 配置："}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,L]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"addClass\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"className\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"在需要使用目录的章节文字顶部加入"}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,"language-html"]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u003C!-- toc --\u003E"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"即可生成文档目录。"}]},{type:a,value:e},{type:b,tag:E,props:{id:H},children:[{type:b,tag:t,props:{ariaHidden:r,href:"#%E6%8D%90%E8%B5%A0%E6%8F%92%E4%BB%B6",tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:H}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,L]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"wechat\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"例：\u002Fimages\u002Fqr.png\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"alipay\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"http:\u002F\u002Fblog.willin.wang\u002Fstatic\u002Fimages\u002Fqr.png\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"title\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"默认空\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"button\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"默认值：Donate\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"alipayText\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"默认值：支付宝捐赠\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"wechatText\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"默认值：微信捐赠\""}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:E,props:{id:I},children:[{type:b,tag:t,props:{ariaHidden:r,href:"#%E6%96%87%E7%AB%A0%E5%AD%97%E6%95%B0%E7%BB%9F%E8%AE%A1",tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,L]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"wordcount\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"运行示例："}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,D]},children:[{type:b,tag:p,props:{},children:[{type:a,value:"info: found 24 pages\ninfo: found 99 asset files\nCompleted counting with 13313 words.\ninfo: \u003E\u003E generation finished with success in 5.8s !\n\nStarting server ...\nServing book on http:\u002F\u002Flocalhost:4000\n"}]}]}]}]},dir:"\u002Fzh\u002Fbasic\u002Fmd",path:"\u002Fzh\u002Fbasic\u002Fmd\u002Fgitbook",extension:".md",slug:"gitbook",createdAt:aa,updatedAt:aa,to:"\u002Fbasic\u002Fmd\u002Fgitbook"},prev:{title:"Docsify画图建模Mermaid插件支持",slug:"docsify",to:"\u002Fbasic\u002Fmd\u002Fdocsify"},next:{title:"MySQL 5",slug:"mysql",to:"\u002Fbasic\u002Fdb\u002Fmysql"}}],fetch:[],mutations:[]}}("text","element","span","token","\n","punctuation","p","property","operator",":"," ","div","nuxt-content-highlight","pre","line-numbers","code","string","true",",","a",-1,"icon","icon-link","{","\n    ","}","\n          ",3,"li","language-text","h3","安装使用","插件使用","捐赠插件","文章字数统计","\n        ","ul","language-json","\"plugins\"","[","\"atoc\"","]",2,"readmemd","README.md:","summarymd","SUMMARY.md:","toc-目录生成","TOC 目录生成","h2","\"pluginsConfig\"","\n            ","book.json配置：","\"donate\"","2021-01-07T06:34:42.995Z")));