import{r as s,j as e}from"./index-Cd-YJ7fO.js";import{A as k}from"./AdminSidebar-DEgty0rO.js";const v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",I="1234567890",L="!@#$%^&*()_+",E=()=>{const[o,h]=s.useState(8),[u,x]=s.useState(""),[c,m]=s.useState(!1),[r,b]=s.useState(!1),[l,f]=s.useState(!1),[j,d]=s.useState(!1),[a,C]=s.useState(""),S=async t=>{await window.navigator.clipboard.writeText(t),d(!0)},g=t=>{if(t.preventDefault(),!c&&!r&&!l)return alert("Please Select One At Least");let i=u||"";const y=o-i.length;for(let p=0;p<y;p++){let n="";r&&(n+=v),c&&(n+=I),l&&(n+=L);const N=~~(Math.random()*n.length);i+=n[N],C(i)}};return s.useEffect(()=>{d(!1)},[a]),e.jsxs("div",{className:"admin-container",children:[e.jsx(k,{}),e.jsxs("main",{className:"dashboard-app-container",children:[e.jsx("h1",{children:"Coupon"}),e.jsxs("section",{children:[e.jsxs("form",{className:"coupon-form",onSubmit:g,children:[e.jsx("input",{type:"text",placeholder:"Text to include",value:u,onChange:t=>x(t.target.value),maxLength:o}),e.jsx("input",{type:"number",placeholder:"Coupon Length",value:o,onChange:t=>h(Number(t.target.value)),min:8,max:25}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Include"}),e.jsx("input",{type:"checkbox",checked:c,onChange:()=>m(t=>!t)}),e.jsx("span",{children:"Numbers"}),e.jsx("input",{type:"checkbox",checked:r,onChange:()=>b(t=>!t)}),e.jsx("span",{children:"Characters"}),e.jsx("input",{type:"checkbox",checked:l,onChange:()=>f(t=>!t)}),e.jsx("span",{children:"Symbols"})]}),e.jsx("button",{type:"submit",children:"Generate"})]}),a&&e.jsxs("code",{children:[a,e.jsx("span",{onClick:()=>S(a),children:j?"Copied":"Copy"})]})]})]})]})};export{E as default};
