import{_ as h}from"./pet-ex-bb99a1ad.js";import{c as b}from"./Pet-2804d9f2.js";import{g as v}from"./TimeUtil-a74cf3ab.js";import{_ as x}from"./TagSex.vue_vue_type_script_setup_true_lang-5e69bfce.js";import{d as y,l as n,a as r,y as C,A as p,F as I,o as d,b as c,f as e,g as t,h as o,t as i,p as S,j as k,_ as N}from"./index-d288b770.js";const P=s=>(S("data-v-89c2e175"),s=s(),k(),s),V={class:"my-row-2"},w=P(()=>c("div",{class:"left"},[c("img",{alt:"宠物",src:h})],-1)),A={class:"right"},B=y({__name:"clientPet",setup(s){const u=b();return(m,$)=>{const _=n("el-tag"),l=n("el-descriptions-item"),g=n("el-button"),f=n("el-descriptions");return d(!0),r(I,null,C(p(u),a=>(d(),r("div",{class:"pa-card",key:a.petId},[c("div",V,[w,c("div",A,[e(f,{column:3,title:a.petName,border:""},{default:t(()=>[e(l,{align:"center",label:"品种","label-align":"right"},{default:t(()=>[e(_,null,{default:t(()=>[o(i(a.petVariety),1)]),_:2},1024)]),_:2},1024),e(l,{align:"center",label:"健康状况","label-align":"right"},{default:t(()=>[e(_,null,{default:t(()=>[o(i(a.petStatus),1)]),_:2},1024)]),_:2},1024),e(l,{align:"center",label:"年龄","label-align":"right"},{default:t(()=>[o(i(p(v)(a.petAge))+"岁 ",1)]),_:2},1024),e(l,{align:"center",label:"性别","label-align":"right"},{default:t(()=>[e(x,{sex:a.petSex},null,8,["sex"])]),_:2},1024),e(l,{align:"center",label:"操作","label-align":"right"},{default:t(()=>[e(g,{type:"success",onClick:F=>m.$router.push("/reception/petOne/"+a.petId)},{default:t(()=>[o("详情 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"])])])]))),128)}}});const T=N(B,[["__scopeId","data-v-89c2e175"]]);export{T as default};
