__NUXT_JSONP__("/experience/graphql/authorization", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{document:{title:"GraphQL 鉴权",description:"",position:2502,category:"经验篇-GraphQL",toc:[{id:u,depth:A,text:u},{id:v,depth:A,text:v},{id:w,depth:A,text:w}],body:{type:"root",children:[{type:b,tag:n,props:{},children:[{type:a,value:"GraphQL项目的架构:"}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:b,tag:"img",props:{alt:"架构",src:"https:\u002F\u002Fgraphql.js.cool\u002Fimg\u002Fdiagrams\u002Fbusiness_layer.png"},children:[]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"其中鉴权部分应当属于业务逻辑层."}]},{type:a,value:g},{type:b,tag:B,props:{id:u},children:[{type:b,tag:x,props:{href:"#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:u}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"这里是一个鉴权的例子, 作者可以管理(编辑)自己的文章, 在定义模型的时候加入了权限的判断:"}]},{type:a,value:g},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,ab,z]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai,h]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:"\u002F\u002F return the post body only if the user is the post's author"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:J}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"&&"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"id"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"==="}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"authorId"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n          "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:L}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"body"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:L}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,al,"nil"]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"但有个问题在于, 鉴权的逻辑不被保留完全同步, 用户通过其他方式调用(如通过RESTful接口)时依然需要重新鉴权."}]},{type:a,value:g},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:"\u002F\u002FAuthorization logic lives inside postRepository"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:a,value:" postRepository "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'postRepository'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,ab,z]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai,h]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:L}]},{type:a,value:" postRepository"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,"method",z,r]},children:[{type:a,value:"getBody"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"这样, 我们就可以将用户对象传递到下一层(业务逻辑层)去进行鉴权的处理."}]},{type:a,value:g},{type:b,tag:B,props:{id:v},children:[{type:b,tag:x,props:{href:"#%E9%89%B4%E6%9D%83%E4%B8%AD%E9%97%B4%E4%BB%B6",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:v}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Express中的GraphQL鉴权中间件示例: "},{type:b,tag:x,props:{href:ao,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:ao}]}]},{type:a,value:g},{type:b,tag:B,props:{id:w},children:[{type:b,tag:x,props:{href:"#%E7%A4%BA%E4%BE%8B%E9%A1%B9%E7%9B%AE",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:w}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"完整示例项目待添加."}]}]},dir:"\u002Fzh\u002Fexperience\u002Fgraphql",path:"\u002Fzh\u002Fexperience\u002Fgraphql\u002Fauthorization",extension:".md",slug:"authorization",createdAt:ap,updatedAt:ap,to:"\u002Fexperience\u002Fgraphql\u002Fauthorization"},prev:{title:"MySQL 向 GraphQL 迁移",slug:"mysql",to:"\u002Fexperience\u002Fgraphql\u002Fmysql"},next:{title:"DataLoader",slug:"dataloader",to:"\u002Fexperience\u002Fgraphql\u002Fdataloader"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation"," ","\n","operator","{",",","}","keyword",":","p","(",")",".","property-access",";","\n        ","注意事项","鉴权中间件","示例项目","a","\n      ","function",2,"h2","true",-1,"icon","icon-link","var","=","context","user"," post","return","div","nuxt-content-highlight","pre","language-js","line-numbers","code"," postType ","new","class-name","GraphQLObjectType","\n  name"," ‘Post’","\n  fields","\n    body","\n      type","maybe-class-name","GraphQLString","function-variable","resolve","parameter","post"," args"," context"," rootValue ","arrow","=\u003E","comment","null","\n    ","\n  ","https:\u002F\u002Fgraphql.js.cool\u002Fgraphql-js\u002Fauthentication-and-express-middleware\u002F","2021-01-07T06:34:42.995Z")));