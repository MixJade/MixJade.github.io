import{d as _,l as d,a as p,b as i,L as u,f as a,g as t,o as B,h as s,t as y,_ as b}from"./index-d288b770.js";const f={class:"op-col"},C={class:"op-input"},h=_({__name:"BackOpCol",props:{role:{}},emits:["query","addRole","delBatch"],setup(k,{emit:e}){const c=()=>{e("query")},n=()=>{e("addRole")},r=()=>{e("delBatch")};return(l,m)=>{const o=d("el-button");return B(),p("div",f,[i("div",C,[u(l.$slots,"default",{},void 0,!0),a(o,{plain:"",size:"large",type:"primary",onClick:c},{default:t(()=>[s("搜索")]),_:1})]),a(o,{plain:"",size:"large",type:"success",onClick:n},{default:t(()=>[s("新增"+y(l.role),1)]),_:1}),a(o,{plain:"",size:"large",type:"danger",onClick:r},{default:t(()=>[s("批量删除")]),_:1})])}}});const v=b(h,[["__scopeId","data-v-1bb2baca"]]);export{v as B};
