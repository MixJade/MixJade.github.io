import{e as c}from"./Client-8c7d3b85.js";import{D as l}from"./DetailTable-ef30b459.js";import{d as a,r as i,c as r,R as s,o as p}from"./index-d288b770.js";const b=a({__name:"clientOne",setup(m){const e=i(c()),t=r(()=>[{tit:"账号",con:e.clientUsername},{tit:"姓名",con:e.clientName},{tit:"性别",con:e.clientGender?"男":"女"},{tit:"联系方式",con:e.clientTel},{tit:"出生日期",con:e.clientAge},{tit:"简介",con:e.clientInfo}]),o=()=>{console.log("修改资料")},n=()=>{console.log("修改密码")};return(u,d)=>(p(),s(l,{"tab-con":t.value,"role-photo":"/picture/lei-jun.jpg",onUpPwd:n,onUpRole:o},null,8,["tab-con"]))}});export{b as default};