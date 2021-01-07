__NUXT_JSONP__("/experience/azure/iot-hub-route", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO){return {data:[{document:{title:"Azure IoT Hub 路由开发指南",menuTitle:"IoT Hub 路由",description:"",position:2302,category:"经验篇-Azure(Node.js)",toc:[{id:V,depth:ab,text:V},{id:am,depth:ab,text:an},{id:ao,depth:P,text:ap},{id:aq,depth:P,text:ar},{id:as,depth:P,text:at},{id:W,depth:ab,text:W},{id:X,depth:P,text:X},{id:Y,depth:P,text:Y}],body:{type:"root",children:[{type:b,tag:w,props:{},children:[{type:a,value:"本章主要讲解:"}]},{type:a,value:g},{type:b,tag:au,props:{},children:[{type:a,value:g},{type:b,tag:Q,props:{},children:[{type:a,value:"如何使用 eventhub 创建路由"}]},{type:a,value:g},{type:b,tag:Q,props:{},children:[{type:a,value:"如何将一条设备消息同时传入两个路由进行不同的处理"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:ac,props:{id:V},children:[{type:b,tag:z,props:{href:"#%E6%A6%82%E5%BF%B5%E8%AE%B2%E8%A7%A3",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:V}]},{type:a,value:g},{type:b,tag:au,props:{},children:[{type:a,value:g},{type:b,tag:Q,props:{},children:[{type:a,value:"事件中心(Event Hubs): 用于服务器端侦听并处理的 EventHub 终结点"}]},{type:a,value:g},{type:b,tag:Q,props:{},children:[{type:a,value:"终结点(IOT Hub): 关联到 Event Hubs 中的事件中心"}]},{type:a,value:g},{type:b,tag:Q,props:{},children:[{type:a,value:"路由(IOT Hub): 关联到 IOT Hub中的终结点, 处理路由分发的主要配置环节"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:ac,props:{id:am},children:[{type:b,tag:z,props:{href:"#%E5%9C%A8-azure-%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%B9%B6%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1%E7%9B%B8%E5%85%B3%E7%9A%84%E5%9F%BA%E7%A1%80%E6%9C%8D%E5%8A%A1",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:an}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"首先需要分别创建 IOT Hub 和 EventHubs."}]},{type:a,value:g},{type:b,tag:R,props:{id:ao},children:[{type:b,tag:z,props:{href:"#1-%E5%88%9B%E5%BB%BAeventhubs%E4%BA%8B%E4%BB%B6%E4%B8%AD%E5%BF%83",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ap}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:b,tag:Z,props:{alt:"eventhub",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F1890238\u002F29015275-06999aa8-7b13-11e7-893c-2f75ca58bb14.png"},children:[]}]},{type:a,value:g},{type:b,tag:R,props:{id:aq},children:[{type:b,tag:z,props:{href:"#2-%E5%88%9B%E5%BB%BAiot-hub%E7%BB%88%E7%BB%93%E7%82%B9",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ar}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:b,tag:Z,props:{alt:"endpoint",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F1890238\u002F29015320-334b5a00-7b13-11e7-8c12-dcc4d152e6e7.png"},children:[]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"注意这里, "},{type:b,tag:L,props:{},children:[{type:a,value:"状态"}]},{type:a,value:" 初始不显示, 首次消息通讯成功后再来这里看应该会变."}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"系统可能会存在这样的Bug, 怎么也收不到消息. 这里的状态就会一直不显示:"}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:b,tag:Z,props:{alt:M,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F1890238\u002F29015355-4a0427c2-7b13-11e7-8a9c-24e6bc87144b.png"},children:[]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"像这样的情况发生的时候, 删除路由,删除终结点,删除事件中心, 重头再来."}]},{type:a,value:g},{type:b,tag:R,props:{id:as},children:[{type:b,tag:z,props:{href:"#3-%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:at}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:b,tag:Z,props:{alt:"route",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F1890238\u002F29015397-7cb355bc-7b13-11e7-8a65-957e76defadd.png"},children:[]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"仔细看上图, 两个路由的查询条件一样, 但分别放进 "},{type:b,tag:L,props:{},children:[{type:a,value:"test"}]},{type:a,value:"\u002F"},{type:b,tag:L,props:{},children:[{type:a,value:"test2"}]},{type:a,value:" 两个不同的终结点."}]},{type:a,value:g},{type:b,tag:ac,props:{id:W},children:[{type:b,tag:z,props:{href:"#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:W}]},{type:a,value:g},{type:b,tag:R,props:{id:X},children:[{type:b,tag:z,props:{href:"#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:ad,props:{className:[ae]},children:[{type:b,tag:af,props:{className:[ag,ah]},children:[{type:b,tag:L,props:{},children:[{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:"\u002F\u002F eventhub.js"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aw}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'azure-event-hubs'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"Client"}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T,k]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"return"}]},{type:a,value:" partitionIds"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T,k]},children:[{type:a,value:"defaultErrorHandler"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:"error"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T,k]},children:[{type:a,value:"defaultMessageHandler"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:"toString"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:" createReceiver "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:" connStr "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"''"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:" defaultMessageHandler "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:" errorHandler "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:" defaultErrorHandler"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:" client "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:"fromConnectionString"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"connStr"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:"open"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n  partitionIds"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:"forEach"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'$Default'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:" partitionId"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:" startAfterTime"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"known-class-name",C]},children:[{type:a,value:"Date"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:"now"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'errorReceived'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aG}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"&&"}]},{type:a,value:" err"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"name"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"==="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'AmqpProtocolError'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,"template-string"]},children:[{type:b,tag:c,props:{className:[d,aH,s]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"Restart #"}]},{type:b,tag:c,props:{className:[d,"interpolation"]},children:[{type:b,tag:c,props:{className:[d,aJ,e]},children:[{type:a,value:"${"}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,aJ,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,aH,s]},children:[{type:a,value:aI}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:" connStr"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:" errorHandler"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"errorHandler"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'message'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:" messageHandler"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n\nmodule"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"exports"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:" createReceiver"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:ad,props:{className:[ae]},children:[{type:b,tag:af,props:{className:[ag,ah]},children:[{type:b,tag:L,props:{},children:[{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:"\u002F\u002F server.js"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:y}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'.\u002Feventhub'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'test事件中心的连接'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,T,k]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'test'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'test2事件中心的连接'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,T,k]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A,j]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'test2'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,t,C]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:R,props:{id:Y},children:[{type:b,tag:z,props:{href:"#%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A8%A1%E6%8B%9F%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:Y}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"参考官方的示例: "},{type:b,tag:z,props:{href:aN,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:aN}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"注意第44行位置, 下面添加一行, 加入路由属性"}]},{type:a,value:g},{type:b,tag:ad,props:{className:[ae]},children:[{type:b,tag:af,props:{className:[ag,ah]},children:[{type:b,tag:L,props:{},children:[{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"properties"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p,k,n]},children:[{type:a,value:"add"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'route'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'tt'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g}]}]}]}]},dir:"\u002Fzh\u002Fexperience\u002Fazure",path:"\u002Fzh\u002Fexperience\u002Fazure\u002Fiot-hub-route",extension:".md",slug:"iot-hub-route",createdAt:aO,updatedAt:aO,to:"\u002Fexperience\u002Fazure\u002Fiot-hub-route"},prev:{title:"Azure IoT Hub开发指南",slug:"iot-hub",to:"\u002Fexperience\u002Fazure\u002Fiot-hub"},next:{title:"Azure Blob文件上传",slug:"storage",to:"\u002Fexperience\u002Fazure\u002Fstorage"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation"," ","\n","(",")","operator","function",";",".","property-access","keyword","method","}","{","string","console","=","\n  ","p",",","const","a","arrow","=\u003E","class-name","true",-1,"icon","icon-link","await","parameter","log","\n      ","code","err","async","\n    ",3,"li","h3","\n\n","function-variable",":","概念讲解","示例代码","服务器端","客户端模拟消息发送","img","message","body","msg",2,"h2","div","nuxt-content-highlight","pre","language-js","line-numbers","maybe-class-name","getPartitionIds"," client","\n        ","在-azure-中创建并配置路由相关的基础服务","在 Azure 中创建并配置路由相关的基础服务","1-创建eventhubs事件中心","1. 创建EventHubs事件中心","2-创建iot-hub终结点","2. 创建IOT Hub终结点","3-配置路由","3. 配置路由","ul","comment","EventHubClient","require","client"," partitionIds "," messageHandler ","partitionId"," receiver ","createReceiver","\n    receiver","on","transport","template-punctuation","`","interpolation-punctuation","receiver","\n    connStr","messageHandler","https:\u002F\u002Fgithub.com\u002Fazure\u002Fazure-iot-sdk-node\u002Fblob\u002Fmaster\u002Fdevice\u002Fsamples\u002Fsimple_sample_device.js#L44","2021-01-07T06:34:42.995Z")));