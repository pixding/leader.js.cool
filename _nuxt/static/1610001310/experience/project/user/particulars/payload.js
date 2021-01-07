__NUXT_JSONP__("/experience/project/user/particulars", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS){return {data:[{document:{title:"代码细节处理",description:"",position:2115,category:"经验篇-项目",toc:[{id:N,depth:K,text:N},{id:ai,depth:aj,text:ak},{id:al,depth:aj,text:am},{id:O,depth:K,text:O},{id:an,depth:K,text:ao},{id:ap,depth:K,text:aq},{id:P,depth:K,text:P}],body:{type:"root",children:[{type:b,tag:L,props:{id:N},children:[{type:b,tag:z,props:{href:"#%E8%AF%B7%E6%B1%82%E8%B6%85%E6%97%B6%E6%97%A0%E8%BF%94%E5%9B%9E",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:N}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"原因："}]},{type:a,value:f},{type:b,tag:ar,props:{id:ai},children:[{type:b,tag:z,props:{href:"#1%E5%A6%82%E6%9E%9Ccpu%E6%B2%A1%E6%9C%89%E9%A3%99%E5%8D%87%EF%BC%8C%E5%8F%AF%E8%83%BD%E6%9C%89%E5%BC%82%E5%B8%B8%E6%9C%AA%E6%8D%95%E8%8E%B7",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:ak}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"可能情况1，如： sql "},{type:b,tag:n,props:{},children:[{type:a,value:"SELECT xxxx LIMIT 1"}]},{type:a,value:" 的查询，直接用了 result[0]。 但也可能并没查到结果。"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"可能情况2，如： JSON.parse(xxxData)，或者在用第三方库的时候注意一下，如果方法不是返回"},{type:b,tag:n,props:{},children:[{type:a,value:"Promise"}]},{type:a,value:"对象，很可能异常的时候是"},{type:b,tag:n,props:{},children:[{type:a,value:"Throw"}]},{type:a,value:"出一个错误，需要做"},{type:b,tag:n,props:{},children:[{type:a,value:"try\u002Fcatch"}]},{type:a,value:"捕获。"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"可能情况3，如： Callback方法，如 "},{type:b,tag:n,props:{},children:[{type:a,value:"client.query((result, err)=\u003E { })"}]},{type:a,value:"，中，需要加 "},{type:b,tag:n,props:{},children:[{type:a,value:"if(err)"}]},{type:a,value:" 的判断。"}]},{type:a,value:f},{type:b,tag:ar,props:{id:al},children:[{type:b,tag:z,props:{href:"#2cpu%E9%A3%99%E5%8D%87%EF%BC%9A%E5%A4%A7%E5%A4%9A%E6%95%B0%E6%83%85%E5%86%B5%E6%98%AF%E6%AD%BB%E5%BE%AA%E7%8E%AF",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:am}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"如："}]},{type:a,value:f},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:a,value:" xxx1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" i"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:a,value:" xxx2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F xxx"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"第二个循环条件中 "},{type:b,tag:n,props:{},children:[{type:a,value:"j"}]},{type:a,value:" 用成了 "},{type:b,tag:n,props:{},children:[{type:a,value:"i"}]},{type:a,value:" 导致死循环产生。"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"死循环大多发生于对数据遍历的处理。产生死循环最大的可能原因是"},{type:b,tag:"strong",props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"循环的条件"}]}]},{type:a,value:"。"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"如果在循环体内用到以下一些方法，也需要特别注意："}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:ax,props:{},children:[{type:a,value:"对数据数组的改动，如：pop\u002Fshift\u002Fslice"}]},{type:a,value:f},{type:b,tag:ax,props:{},children:[{type:a,value:"循环体的退出，如：break\u002Fcontinue"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"可以配合"},{type:b,tag:n,props:{},children:[{type:a,value:"PM2"}]},{type:a,value:"和定时任务脚本对进程CPU占用进行监控，自动重启服务。"}]},{type:a,value:f},{type:b,tag:L,props:{id:O},children:[{type:b,tag:z,props:{href:"#%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:O}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"基本情况排查参考： "},{type:b,tag:z,props:{href:ay,rel:[az,aA,aB],target:aC},children:[{type:a,value:ay}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"比较常见的："}]},{type:a,value:f},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"exports"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,"method-variable","function-variable",w,m,v]},children:[{type:b,tag:c,props:{className:[d,"maybe-class-name"]},children:[{type:a,value:"Func"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ad,k]},children:[{type:a,value:ae}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 避免方法内require"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'@dwing\u002Fredis'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 没必要放在方法里，可以放到外边，多个方法共用"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:af}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F xxxx"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:L,props:{id:an},children:[{type:b,tag:z,props:{href:"#mysql-%E7%BC%96%E7%A0%81%E7%BB%86%E8%8A%82",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'@dwing\u002Fmysql'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'@dwing\u002Fcommon'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ad,k]},children:[{type:a,value:ae}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aI}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:" client "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F mysql有await，redis没有"}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:af}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'SELECT 1'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"&&"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"!"}]},{type:b,tag:c,props:{className:[d,W,X]},children:[{type:a,value:"Array"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:"isArray"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 查询出错，不能用 result[]"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 查询结果为空，不能用 result[]"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aL}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"除了"},{type:b,tag:n,props:{},children:[{type:a,value:"SELECT"}]},{type:a,value:"的结果是数组，其他的都是对象，并且包含"},{type:b,tag:n,props:{},children:[{type:a,value:"result.affectedRows"}]}]},{type:a,value:f},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'UPDATE xxx SET xxx WHERE xxx'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 查询出错， 不能用 result.affectedRows"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aL}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"affectedRows"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:L,props:{id:ap},children:[{type:b,tag:z,props:{href:"#redis-%E7%BC%96%E7%A0%81%E7%BB%86%E8%8A%82",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:aq}]},{type:a,value:f},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'wulian-redis'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ad,k]},children:[{type:a,value:ae}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aI}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"result "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"==="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,aO,"nil"]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F xxxKey不存在，返回值为 null"}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"如果要存取"},{type:b,tag:n,props:{},children:[{type:a,value:_}]},{type:a,value:"格式数据："}]},{type:a,value:f},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:"set"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W,X]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"try"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u002F\u002F 读取要异常捕获，不然篡改值可能导致程序崩"}]},{type:a,value:"\n  result "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W,X]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:"parse"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"catch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"e"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"如果要设置超时："}]},{type:a,value:f},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:"setex"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"3600"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W,X]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,w,m,v]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:L,props:{id:P},children:[{type:b,tag:z,props:{href:"#%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:P}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"性能调优与故障排查： "},{type:b,tag:z,props:{href:aR,rel:[az,aA,aB],target:aC},children:[{type:a,value:aR}]}]}]},dir:"\u002Fzh\u002Fexperience\u002Fproject\u002Fuser",path:"\u002Fzh\u002Fexperience\u002Fproject\u002Fuser\u002Fparticulars",extension:".md",slug:"particulars",createdAt:aS,updatedAt:aS,to:"\u002Fexperience\u002Fproject\u002Fuser\u002Fparticulars"},prev:{title:"行为驱动开发实践",slug:"bdd",to:"\u002Fexperience\u002Fproject\u002Fuser\u002Fbdd"},next:{title:"服务器配置",slug:"server",to:"\u002Fexperience\u002Foperation\u002Fserver"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ","keyword","(",")","operator",";","function","code","\n  ","{","}","p","=","comment",".","property-access","method","const","string","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-js","line-numbers","await",2,"h2","\n    ","请求超时无返回","内存泄露","其他资料","number","require","isEmpty"," result ","if","result","known-class-name","class-name"," redis","'xxxKey'","JSON","let"," i ","0","async","arrow","=\u003E","\u002F\u002F config","\n\n",",","1如果cpu没有飙升，可能有异常未捕获",3,"1.如果CPU没有飙升，可能有异常未捕获","2cpu飙升：大多数情况是死循环","2.CPU飙升：大多数情况是死循环","mysql-编码细节","MySQL 编码细节","redis-编码细节","Redis 编码细节","h3","for","\u003C","length","++"," j","li","https:\u002F\u002Fcnodejs.org\u002Ftopic\u002F4fa94df3b92b05485007fd87","nofollow","noopener","noreferrer","_blank"," redisClient ","\n\n  "," redis ","redisClient","pool","\u002F\u002F 包裹在async中"," client","query","return"," result","get","null","stringify","xxxJSONVal","https:\u002F\u002Fgithub.com\u002FJacksonTian\u002Fjsconfcn2016","2021-01-07T06:34:42.999Z")));