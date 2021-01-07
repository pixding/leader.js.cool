__NUXT_JSONP__("/experience/operation/cloudflare-nginx", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{document:{title:"CloudFlare",description:"",position:2208,category:"经验篇-运维",toc:[{id:e,depth:q,text:e},{id:f,depth:q,text:f}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"cloudflare-nginx-获取真实ip地址"},children:[{type:b,tag:d,props:{href:"#cloudflare-nginx-%E8%8E%B7%E5%8F%96%E7%9C%9F%E5%AE%9Eip%E5%9C%B0%E5%9D%80",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"CloudFlare Nginx 获取真实ip地址"}]},{type:a,value:c},{type:b,tag:r,props:{id:e},children:[{type:b,tag:d,props:{href:"#%E9%85%8D%E7%BD%AE",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:e}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"安装 "},{type:b,tag:g,props:{},children:[{type:a,value:t}]},{type:a,value:" 模块, 在 "},{type:b,tag:g,props:{},children:[{type:a,value:"nginx.conf"}]},{type:a,value:" 中进行配置:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"set_real_ip_from 103.21.244.0\u002F22;\nset_real_ip_from 103.22.200.0\u002F22;\nset_real_ip_from 103.31.4.0\u002F22;\nset_real_ip_from 104.16.0.0\u002F12;\nset_real_ip_from 108.162.192.0\u002F18;\nset_real_ip_from 131.0.72.0\u002F22;\nset_real_ip_from 141.101.64.0\u002F18;\nset_real_ip_from 162.158.0.0\u002F15;\nset_real_ip_from 172.64.0.0\u002F13;\nset_real_ip_from 173.245.48.0\u002F20;\nset_real_ip_from 188.114.96.0\u002F20;\nset_real_ip_from 190.93.240.0\u002F20;\nset_real_ip_from 197.234.240.0\u002F22;\nset_real_ip_from 198.41.128.0\u002F17;\nset_real_ip_from 199.27.128.0\u002F21;\nset_real_ip_from 2400：cb00 :: \u002F 32;\nset_real_ip_from 2606：4700 :: \u002F 32;\nset_real_ip_from 2803：f800 :: \u002F 32;\nset_real_ip_from 2405：b500 :: \u002F 32;\nset_real_ip_from 2405：8100 :: \u002F 32;\nset_real_ip_from 2c0f：f248 :: \u002F 32;\nset_real_ip_from 2a06：98c0 :: \u002F 29;\n\n# 使用以下任意一个\n# real_ip_header CF-Connecting-IP;\n# 推荐这个\nreal_ip_header X-Forwarded-For;\n"}]}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"从这个网址获取IP列表的更新: "},{type:b,tag:d,props:{href:u,rel:[m,n,o],target:p},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:r,props:{id:f},children:[{type:b,tag:d,props:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:f}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:"Nginx模块"},{type:b,tag:g,props:{},children:[{type:a,value:t}]},{type:a,value:": "},{type:b,tag:d,props:{href:w,rel:[m,n,o],target:p},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:"CloudFlare 原始访客ip: "},{type:b,tag:d,props:{href:x,rel:[m,n,o],target:p},children:[{type:a,value:x}]}]},{type:a,value:c}]}]},dir:"\u002Fzh\u002Fexperience\u002Foperation",path:"\u002Fzh\u002Fexperience\u002Foperation\u002Fcloudflare-nginx",extension:".md",slug:"cloudflare-nginx",createdAt:y,updatedAt:y,to:"\u002Fexperience\u002Foperation\u002Fcloudflare-nginx"},prev:{title:"CertBot 证书",slug:"certbot",to:"\u002Fexperience\u002Foperation\u002Fcertbot"},next:{title:"Azure IoT Hub开发指南",slug:"iot-hub",to:"\u002Fexperience\u002Fazure\u002Fiot-hub"}}],fetch:[],mutations:[]}}("text","element","\n","a","配置","参考资料","code","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank",2,"h2","p","ngx_http_realip_module","https:\u002F\u002Fwww.cloudflare.com\u002Fips\u002F","li","http:\u002F\u002Fnginx.org\u002Fen\u002Fdocs\u002Fhttp\u002Fngx_http_realip_module.html","https:\u002F\u002Fsupport.cloudflare.com\u002Fhc\u002Fen-us\u002Farticles\u002F200170706-How-do-I-restore-original-visitor-IP-with-Nginx-","2021-01-07T06:34:42.995Z")));