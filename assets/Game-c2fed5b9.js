import{d as W,s as z,u as A,k as f,x as D,r as G,a as m,b as t,t as K,F as R,y as N,n as v,z as i,o as x}from"./index-d288b770.js";const U=["onKeyup","onKeydown"],V=t("p",null,"你来到了网站的尽头，这里只有一个小游戏",-1),j=t("p",null,"按空格开始游戏，按ESC暂停",-1),q=t("p",null,"按下左右方向键移动挡板",-1),J={class:"box"},O={class:"str"},P={class:"brickBox"},Y=W({__name:"Game",setup(Q){z(()=>{_()}),A(()=>{clearInterval(a)});const p=f(),_=()=>{p.value.focus()},d=f("");D(()=>d.value,()=>d.value="");const e=G({x:238,y:270,mx:200,my:294,arr:Array.from({length:50},(s,n)=>({index:n,active:!1})),str:"",score:404});let a,r=3,o={x:10,y:10},h,l=0;const g=s=>{h=setInterval(()=>{l===s.length&&(clearInterval(h),window.location.reload()),e.str+=s.substring(l,l+1),l++},500)},I=f(),b=f([]),L=s=>{b.value.push(s)},M=()=>{const{offsetTop:s,offsetHeight:n,offsetLeft:c,offsetWidth:u}=I.value;e.x<=0?o.x=r:e.x>500-24&&(o.x=-r),e.y<=0&&(o.y=r),e.y+19>=s-n&&e.y<=s+n&&e.x+24>=c&&e.x<c+u&&(o.y=-r),e.y>300&&(clearInterval(a),g("游戏结束")),Array.from(e.arr).forEach((k,y)=>{const{offsetLeft:w,offsetTop:B,offsetWidth:H,offsetHeight:S}=b.value[y];e.x+24>w&&e.x<w+H&&e.y+24>B&&e.y<B+S&&(e.arr[y].active||(e.score+=1),e.arr[y].active=!0)}),Array.from(e.arr).every(k=>k.active)&&(clearInterval(a),g("挑战成功")),e.x=e.x+=o.x,e.y=e.y+=o.y},T=()=>{e.mx-=100,e.mx=e.mx<0?0:e.mx},C=()=>{e.mx+=100,e.mx=e.mx>400?400:e.mx},E=()=>{clearInterval(a)},F=()=>{a=setInterval(M,20)};return(s,n)=>(x(),m("div",{class:"panel",onClick:_,onKeyup:[i(F,["space"]),i(E,["esc"])],onKeydown:[i(T,["left"]),i(C,["right"])]},[t("input",{ref_key:"myInput",ref:p,class:"myInput"},null,512),t("h1",null,K(e.score),1),V,j,q,t("div",J,[t("div",O,K(e.str),1),t("div",P,[(x(!0),m(R,null,N(e.arr,(c,u)=>(x(),m("div",{key:u,ref_for:!0,ref:L,style:v({opacity:c.active?"0":"1"}),class:"brick"},null,4))),128))]),t("div",{style:v({left:e.x+"px",top:e.y+"px"}),class:"ball"},null,4),t("div",{ref_key:"bottomMove",ref:I,style:v({left:e.mx+"px",top:e.my+"px"}),class:"bottomMove"},null,4)])],40,U))}});export{Y as default};