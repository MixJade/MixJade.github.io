import{_ as g}from"./doctor-ex-d067ba65.js";import{P as I}from"./PageHead-0c7e98ce.js";import{m as y,g as b}from"./TimeUtil-a74cf3ab.js";import{b as v}from"./DoctorDto-c5cc9538.js";import{e as x}from"./AppointDto-ad8f1624.js";import{M as D}from"./MyRow2-92ea2123.js";import{d as N,l as i,a as c,f as s,g as r,o as d,h as _,b as t,F as k,y as w,t as o,A as e,p as A,j as C,_ as S}from"./index-d288b770.js";const u=n=>(A("data-v-737268a9"),n=n(),C(),n),B={class:"base-page"},O=u(()=>t("img",{alt:"头像",class:"my-avatar",src:g},null,-1)),T={style:{"font-weight":"bolder"}},V={class:"hide-narrow"},F={class:"appoint"},M=u(()=>t("thead",null,[t("tr",null,[t("th",null,"挂号人"),t("th",null,"宠物"),t("th",null,"描述"),t("th",null,"时间")])],-1)),P=N({__name:"doctorOne",props:{doctorId:{}},setup(n){const p=n,l=v(parseInt(p.doctorId)),m=x(parseInt(p.doctorId));return(j,E)=>{const f=i("el-button"),h=i("router-link");return d(),c("div",B,[s(I,null,{default:r(()=>[_("医生详情")]),_:1}),s(D,null,{right:r(()=>[t("table",F,[M,t("tbody",null,[(d(!0),c(k,null,w(e(m),a=>(d(),c("tr",{key:a.appointmentId},[t("td",null,o(a.clientName),1),t("td",null,o(a.petName),1),t("td",null,o(a.appointmentInfo),1),t("td",null,o(e(y)(a.appointmentDate)),1)]))),128))])])]),default:r(()=>[O,t("ul",null,[t("li",null,[t("span",T,o(e(l).doctorName),1)]),t("li",null,"工号："+o(e(l).doctorCode),1)]),t("ul",V,[t("li",null,o(e(b)(e(l).doctorAge))+"岁   "+o(e(l).doctorGender?"男":"女"),1),t("li",null,o(e(l).doctorJob)+"   "+o(e(l).departmentName),1),t("li",null,o(e(l).doctorTel),1),t("li",null,o(e(l).doctorInfo),1),t("li",null,[s(h,{to:"/reception/chat/"+e(l).doctorId},{default:r(()=>[s(f,{type:"primary"},{default:r(()=>[_("咨询")]),_:1})]),_:1},8,["to"])])])]),_:1})])}}});const K=S(P,[["__scopeId","data-v-737268a9"]]);export{K as default};