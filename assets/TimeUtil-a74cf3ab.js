const o=new Date().getFullYear(),g=t=>{const e=t.split("-")[0];return o-e},s=t=>{let e=t.split("T");return e[1]=e[1].split(":")[0]+":"+e[1].split(":")[1],e.join("_")};function i(t){const e=new Date(t),a=new Date;return e.getFullYear()==a.getFullYear()?e.getMonth()==a.getMonth()&&e.getDate()==a.getDate()?`${n(e.getHours())}:${n(e.getMinutes())}:${n(e.getSeconds())}`:`${n(e.getMonth()+1)}-${n(e.getDate())} ${n(e.getHours())}:${n(e.getMinutes())}`:`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`}function n(t){return t<10?"0"+t:String(t)}function l(t){let e=new Date,a=new Date(t),r=Math.abs(e.getTime()-a.getTime());return Math.ceil(r/(1e3*3600*24))+"天"}export{l as a,i as b,g,s as m};
