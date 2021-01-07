__NUXT_JSONP__("/basic/js/reduce", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{document:{title:"Reduce",description:"",position:1305,category:"知识篇-Vanilla JS",toc:[{id:G,depth:H,text:I},{id:n,depth:t,text:n},{id:o,depth:t,text:o},{id:p,depth:t,text:p},{id:q,depth:H,text:q}],body:{type:"root",children:[{type:b,tag:J,props:{id:G},children:[{type:b,tag:h,props:{href:"#reduce-%E4%BB%8B%E7%BB%8D",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:u,props:{id:n},children:[{type:b,tag:h,props:{href:"#%E8%AF%AD%E6%B3%95",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,K]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"arr"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:L}]},{type:b,tag:d,props:{className:[e,M,A,N]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:C}]},{type:a,value:D},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"["}]},{type:a,value:O},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"]"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:o},children:[{type:b,tag:h,props:{href:"#%E5%8F%82%E6%95%B0",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:Q,props:{id:D},children:[{type:b,tag:h,props:{href:"#callback",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"执行数组中每个值的函数，包含四个参数："}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"accumulator"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"上一次调用回调返回的值，或者是提供的初始值（initialValue）"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"currentValue"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"数组中正在处理的元素"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"currentIndex"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"数据中正在处理的元素索引，如果没有提供initialValues，默认从0开始"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"array"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"调用 reduce 的数组"}]},{type:a,value:c},{type:b,tag:Q,props:{id:"initialvalue"},children:[{type:b,tag:h,props:{href:"#initialvalue",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"作为第一次调用 callback 的第一个参数。"}]},{type:a,value:c},{type:b,tag:u,props:{id:p},children:[{type:b,tag:h,props:{href:"#%E8%BF%94%E5%9B%9E%E5%80%BC",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"函数累计处理的结果。"}]},{type:a,value:c},{type:b,tag:J,props:{id:q},children:[{type:b,tag:h,props:{href:"#%E4%BE%8B%E9%A2%98",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:R,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Given and array of integers (x), return the result of multiplying the values together in order. Example:"}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,"language-text"]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"[1, 2, 3] --\u003E 6\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For the beginner, try to use the reduce method - it comes in very handy quite a lot so is a good one to know."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Array will not be empty."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"答案："}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,K]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:d,props:{className:[e,"keyword"]},children:[{type:a,value:"const"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,"function-variable",A]},children:[{type:a,value:"grow"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"="}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,S]},children:[{type:a,value:"x"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,T,s]},children:[{type:a,value:U}]},{type:a,value:" x"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:L}]},{type:b,tag:d,props:{className:[e,M,A,N]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,S]},children:[{type:a,value:"r"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:V}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,T,s]},children:[{type:a,value:U}]},{type:a,value:" r "},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"*"}]},{type:a,value:V},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:E}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,"number"]},children:[{type:a,value:"1"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:c}]}]}]}]},dir:"\u002Fzh\u002Fbasic\u002Fjs",path:"\u002Fzh\u002Fbasic\u002Fjs\u002Freduce",extension:".md",slug:B,createdAt:W,updatedAt:W,to:"\u002Fbasic\u002Fjs\u002Freduce"},prev:{title:"Map",slug:"map",to:"\u002Fbasic\u002Fjs\u002Fmap"},next:{title:"正则替换",slug:"regexp",to:"\u002Fbasic\u002Fjs\u002Fregexp"}}],fetch:[],mutations:[]}}("text","element","\n","span","token","p","punctuation","a","true",-1,"icon","icon-link"," ","语法","参数","返回值","例题","blockquote","operator",3,"h3","div","nuxt-content-highlight","pre","line-numbers","code","function","reduce","(","callback",",",")","reduce-介绍",2,"Reduce 介绍","h2","language-js",".","method","property-access","initialValue",";","h4","https:\u002F\u002Fwww.codewars.com\u002Fkata\u002Fbeginner-reduce-but-grow","parameter","arrow","=\u003E"," i","2021-01-07T06:34:42.995Z")));