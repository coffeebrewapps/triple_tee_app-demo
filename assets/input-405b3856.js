import{u as je,B as Fe,k as De,c as m,E as de,a8 as ke}from"./index-cd88dffc.js";function Ke(D){const d=je(),{formatDate:q,formatTimestamp:G}=de(),{isEmpty:y,notEmpty:f}=Fe(),{base64ToFile:V}=ke(),k=De(),u=m(()=>D.reduce((e,t)=>(e[t.key]=t,e),{})),E=m(()=>Object.values(u.value).filter(e=>e.listable)),Q=m(()=>E.value.map(e=>e.key)),S=m(()=>Object.values(u.value).filter(e=>e.viewable)),R=m(()=>S.value.map(e=>e.key)),T=m(()=>Object.values(u.value).filter(e=>e.creatable)),W=m(()=>T.value.map(e=>e.key)),P=m(()=>Object.values(u.value).filter(e=>e.updatable)),X=m(()=>P.value.map(e=>e.key)),A=m(()=>Object.values(u.value).filter(e=>e.sortable)),Y=m(()=>A.value.map(e=>e.key)),Z=m(()=>Object.values(u.value).some(e=>e.type==="file")),I=m(()=>Object.keys(u.value).filter(e=>j(e))),w=m(()=>Object.keys(u.value).filter(e=>z(e))),_=m(()=>Object.keys(u.value).filter(e=>F(e))),x=m(()=>Object.keys(u.value).filter(e=>v(e))),C=m(()=>Object.keys(u.value).filter(e=>g(e))),$=m(()=>Object.keys(u.value).filter(e=>J(e))),ee=m(()=>Object.keys(u.value).filter(e=>N(e))),L=m(()=>Object.keys(u.value).filter(e=>K(e))),M=m(()=>Object.keys(u.value).filter(e=>B(e))),te=m(()=>Object.keys(u.value).filter(e=>O(e))),ne=m(()=>D.filter(e=>e.reference||e.file)),ae=m(()=>ne.value.map(e=>e.key));function c(e){return(u.value[e]||{}).type}function re(e){return(u.value[e]||{}).label}function se(e,t,n,a,r){const o=n.find(s=>s===e),l=t[e];if(!y(l))if(f(o)&&!O(e)){const s=t.includes||{},p=[l].flat().filter(b=>!!b).map(b=>{const h=s[e][b];return u.value[e].reference.label(h)});return v(e)?p:p[0]}else return c(e)==="enum"||c(e)==="select"?a.find(p=>p.key===e).options.find(p=>p.value===l).label:c(e)==="datetime"?G(l,r.timezone):c(e)==="date"?q(l,r.timezone):O(e)?((t.includes||{})[e][l]||{}).rawData:l}function ue(e){return c(e)==="text"||c(e)==="number"}function le(e){return c(e)==="textarea"}function v(e){return c(e)==="multiSelect"}function g(e){return c(e)==="singleSelect"}function j(e){return c(e)==="select"||c(e)==="enum"}function F(e){return c(e)==="select"||c(e)==="multiSelect"||c(e)==="singleSelect"||c(e)==="enum"}function z(e){return F(e)&&u.value[e].options&&u.value[e].options.server}function J(e){return u.value[e].nullToggleable}function N(e){return e==="tags"||Object.is(u.value[e].isTags,!0)}function K(e){return c(e)==="object"}function B(e){return c(e)==="number"}function O(e){return c(e)==="file"}function H(e,t,n,a){return Object.assign({},{loading:!1,pagination:{offset:t,limit:n,client:!1}},a)}function ce(e){return D.map(t=>{if(t.type==="enum"){const n=e[t.key].enums,a=Object.keys(n).map(o=>({value:o,label:n[o]}));return Object.assign({},t,{options:a})}else return t})}function oe(e,t){return Object.keys(e).reduce((n,a)=>{const o=e[a].map(l=>l(t)).filter(l=>!!l);return o.length>0&&(n[a]=o),n},{})}async function ie(e,t){return d.view(e,t,{})}async function me(e,t){const n=u.value[e].options,a=n.modelClass,r=t.map(o=>ie(a,o));return new Promise((o,l)=>{Promise.all(r).then(s=>{const i=s.map(p=>{const b=n.value(p),h=n.label(p);return{value:b,label:h}});o(i)}).catch(s=>{k.error("Error loading includes from server",s),l(s)})})}function pe(e,t){const n=t[e];if(f(n))return n;const a=u.value[e].defaultValue;return f(a)?a():n}async function fe(e,t){return new Promise((n,a)=>{const r=pe(e,t);if(y(r)){n(r);return}if(K(e)){f(r)?n(JSON.stringify(r,!1,4)):n(r);return}if(O(e)){const l=u.value[e].file;if(f(t.includes)&&f(t.includes[e])&&Object.keys(t.includes[e]).length>0){const s=t.includes[e][r];V(s.rawData,s.filename,s.mimeType).then(i=>{n(i)}).catch(i=>{a(i)})}else d.view(l.modelClass,r,{}).then(s=>{y(t.includes[e])&&(t.includes[e]={}),t.includes[e][r]=s,V(s.rawData,s.filename,s.mimeType).then(i=>{n(i)}).catch(i=>{a(i)})}).catch(s=>{k.error("Error formatting data for show",s),n(r)});return}if(c(e)!=="date"&&c(e)!=="datetime"&&!v(e)&&!g(e)){n(r);return}if(c(e)==="date"||c(e)==="datetime"){let l;r instanceof Date||typeof r=="string"?l=new Date(r):l=Object.entries(r).reduce((s,[i,p])=>(f(p)?s[i]=new Date(p):s[i]=p,s),{}),n(l);return}const o=[r].flat();if((g(e)||v(e))&&Array.isArray(u.value[e].options)){const l=u.value[e].options,s=o.map(i=>{const p=l.find(b=>b.value===i);return{value:p.value,label:p.label}});n(s);return}if(f(t.includes)&&f(t.includes[e])&&Object.keys(t.includes[e]).length>0){const l=t.includes[e],s=o.map(i=>{const p=l[i],b=u.value[e].options,h=b.value(p),he=b.label(p);return{value:h,label:he}});n(s)}else me(e,o).then(l=>{n(l)}).catch(l=>{k.error("Error formatting data for show",l);const s=[];o.forEach(i=>{f(i)&&s.push({value:i,label:i})}),n(s)})})}function be(e){const t=Object.assign({},e);return x.value.forEach(a=>{const r=t[a]||[];t[a]=r.map(o=>o.value)}),C.value.forEach(a=>{const r=t[a]||[];t[a]=(r[0]||{}).value}),I.value.forEach(a=>{const r=t[a];(y(r)||r.length===0)&&(t[a]=null)}),L.value.forEach(a=>{f(t[a])&&t[a].length>0&&(t[a]=JSON.parse(t[a]))}),M.value.forEach(a=>{f(t[a])&&(t[a]=parseFloat(t[a]))}),Object.entries(t).reduce((a,[r,o])=>(Object.is(o,void 0)?a[r]=null:a[r]=o,a),{})}function ye(e){return Object.entries(e).reduce((t,[n,a])=>(t[n]=a.map(r=>({name:r,params:{}})),t),{})}function ve(e={}){return Object.entries(e).reduce((t,[n,a])=>(y(a)?t[n]=a:j(n)&&a.length>0?t[n]=a[0].value:(v(n)||g(n))&&a.length>0?t[n]=a.map(r=>r.value):t[n]=a,t),{})}function ge(e={}){return Object.entries(e).reduce((t,[n,a])=>(y(a)||F(n)&&a.length===0||((j(n)||g(n))&&a.length>0?t[n]=a[0].value:v(n)&&a.length>0?t[n]=a.map(r=>r.value):c(n)==="date"?(f(a.startDate)&&(t[n]={},t[n].startDate=a.startDate),f(a.endDate)&&(y(t[n])&&(t[n]={}),t[n].endDate=a.endDate)):c(n)==="datetime"?(f(a.startTime)&&(t[n]={},t[n].startTime=a.startTime),f(a.endTime)&&(y(t[n])&&(t[n]={}),t[n].endTime=a.endTime)):t[n]=a),t),{})}async function U(e,t){const n=u.value[e].options||{};if(n.server){const a=n.limit||5;return new Promise((r,o)=>{d.list(n.modelClass,{offset:t,limit:a}).then(l=>{const s=l.data,p={total:l.total,data:s.map(b=>({value:n.value(b),label:n.label(b)}))};r(H(e,t,a,p))})})}else return new Promise((a,r)=>{a(Object.assign({},{data:n,total:n.length,loading:!1,pagination:{offset:0,limit:5,client:!0}}))})}async function Oe(){return new Promise((e,t)=>{Promise.all(w.value.map(n=>{const a=u.value[n].offset||0;return U(n,a)})).then(n=>{const a={};n.forEach((r,o)=>{const l=w.value[o];a[l]=r}),e(a)}).catch(n=>{t(n)})})}return{schemasMap:u,listableFields:E,listableKeys:Q,viewableFields:S,viewableKeys:R,creatableFields:T,creatableKeys:W,updatableFields:P,updatableKeys:X,sortableFields:A,sortableKeys:Y,multipartData:Z,clientOptionsKeys:I,clientOptionsField:j,serverOptionsKeys:w,serverOptionsField:z,selectableKeys:_,multiSelectableKeys:x,singleSelectableKeys:C,inputType:c,inputLabel:re,inputValue:se,inputableField:ue,multiInputableField:le,multiSelectableField:v,singleSelectableField:g,selectableField:F,nullToggleableField:J,nullToggleableKeys:$,tagsField:N,tagsKeys:ee,objectField:K,objectKeys:L,numberField:B,numberKeys:M,fileField:O,fileKeys:te,includeKeys:ae,formatInputOptionsData:H,formatDataFields:ce,formatDataForShow:fe,formatDataForSave:be,formatErrorsForDisplay:ye,formatFiltersForShow:ve,formatFiltersForLoad:ge,validateParams:oe,fetchOptions:U,initOptionsData:Oe}}export{Ke as u};
