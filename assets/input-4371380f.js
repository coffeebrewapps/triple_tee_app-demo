import{u as ge,B as Fe,k as de,c as m,E as je,a8 as he}from"./index-ba169bee.js";const k=ge(),{formatDate:De,formatTimestamp:ke}=je(),{isEmpty:O,notEmpty:p}=Fe(),{base64ToFile:U}=he(),w=de();function Ve(d){const u=m(()=>d.reduce((e,t)=>(e[t.key]=t,e),{})),V=m(()=>Object.values(u.value).filter(e=>e.listable)),q=m(()=>V.value.map(e=>e.key)),E=m(()=>Object.values(u.value).filter(e=>e.viewable)),G=m(()=>E.value.map(e=>e.key)),S=m(()=>Object.values(u.value).filter(e=>e.creatable)),Q=m(()=>S.value.map(e=>e.key)),T=m(()=>Object.values(u.value).filter(e=>e.updatable)),R=m(()=>T.value.map(e=>e.key)),P=m(()=>Object.values(u.value).filter(e=>e.sortable)),W=m(()=>P.value.map(e=>e.key)),X=m(()=>Object.values(u.value).some(e=>e.type==="file")),K=m(()=>Object.keys(u.value).filter(e=>L(e))),j=m(()=>Object.keys(u.value).filter(e=>M(e))),Y=m(()=>Object.keys(u.value).filter(e=>h(e))),A=m(()=>Object.keys(u.value).filter(e=>v(e))),I=m(()=>Object.keys(u.value).filter(e=>y(e))),Z=m(()=>Object.keys(u.value).filter(e=>z(e))),_=m(()=>Object.keys(u.value).filter(e=>J(e))),x=m(()=>Object.keys(u.value).filter(e=>D(e))),C=m(()=>Object.keys(u.value).filter(e=>N(e))),$=m(()=>Object.keys(u.value).filter(e=>g(e))),ee=m(()=>d.filter(e=>e.reference||e.file)),te=m(()=>ee.value.map(e=>e.key));function c(e){return(u.value[e]||{}).type}function ne(e){return(u.value[e]||{}).label}function ae(e,t,n,a,r){const i=n.find(s=>s===e),l=t[e];if(!O(l))if(p(i)&&!g(e)){const s=t.includes||{},f=[l].flat().filter(b=>!!b).map(b=>{const F=s[e][b];return u.value[e].reference.label(F)});return v(e)?f:f[0]}else return c(e)==="enum"||c(e)==="select"?a.find(f=>f.key===e).options.find(f=>f.value===l).label:c(e)==="datetime"?ke(l,r.timezone):c(e)==="date"?De(l,r.timezone):g(e)?((t.includes||{})[e][l]||{}).rawData:l}function re(e){return c(e)==="text"||c(e)==="number"}function se(e){return c(e)==="textarea"}function v(e){return c(e)==="multiSelect"}function y(e){return c(e)==="singleSelect"}function L(e){return c(e)==="select"||c(e)==="enum"}function h(e){return c(e)==="select"||c(e)==="multiSelect"||c(e)==="singleSelect"||c(e)==="enum"}function M(e){return h(e)&&u.value[e].options&&u.value[e].options.server}function z(e){return u.value[e].nullToggleable}function J(e){return e==="tags"||Object.is(u.value[e].isTags,!0)}function D(e){return c(e)==="object"}function N(e){return c(e)==="number"}function g(e){return c(e)==="file"}function B(e,t,n,a){return Object.assign({},{loading:!1,pagination:{offset:t,limit:n,client:!1}},a)}function ue(e){return d.map(t=>{if(t.type==="enum"){const n=e[t.key].enums,a=Object.keys(n).map(i=>({value:i,label:n[i]}));return Object.assign({},t,{options:a})}else return t})}function le(e,t){return Object.keys(e).reduce((n,a)=>{const i=e[a].map(l=>l(t)).filter(l=>!!l);return i.length>0&&(n[a]=i),n},{})}async function ce(e,t){return k.view(e,t,{})}async function ie(e,t){const n=u.value[e].options,a=n.modelClass,r=t.map(i=>ce(a,i));return new Promise((i,l)=>{Promise.all(r).then(s=>{const o=s.map(f=>{const b=n.value(f),F=n.label(f);return{value:b,label:F}});i(o)}).catch(s=>{w.error("Error loading includes from server",s),l(s)})})}function oe(e,t){const n=t[e];if(p(n))return n;const a=u.value[e].defaultValue;return p(a)?a():n}async function me(e,t){return new Promise((n,a)=>{const r=oe(e,t);if(O(r)){n(r);return}if(D(e)){p(r)?n(JSON.stringify(r,!1,4)):n(r);return}if(g(e)){const l=u.value[e].file;if(p(t.includes)&&p(t.includes[e])&&Object.keys(t.includes[e]).length>0){const s=t.includes[e][r];U(s.rawData,s.filename,s.mimeType).then(o=>{n(o)}).catch(o=>{a(o)})}else k.view(l.modelClass,r,{}).then(s=>{O(t.includes[e])&&(t.includes[e]={}),t.includes[e][r]=s,U(s.rawData,s.filename,s.mimeType).then(o=>{n(o)}).catch(o=>{a(o)})}).catch(s=>{w.error("Error formatting data for show",s),n(r)});return}if(c(e)!=="date"&&c(e)!=="datetime"&&!v(e)&&!y(e)){n(r);return}if(c(e)==="date"||c(e)==="datetime"){let l;r instanceof Date||typeof r=="string"?l=new Date(r):l=Object.entries(r).reduce((s,[o,f])=>(p(f)?s[o]=new Date(f):s[o]=f,s),{}),n(l);return}const i=[r].flat();if((y(e)||v(e))&&Array.isArray(u.value[e].options)){const l=u.value[e].options,s=i.map(o=>{const f=l.find(b=>b.value===o);return{value:f.value,label:f.label}});n(s);return}if(p(t.includes)&&p(t.includes[e])&&Object.keys(t.includes[e]).length>0){const l=t.includes[e],s=i.map(o=>{const f=l[o],b=u.value[e].options,F=b.value(f),Oe=b.label(f);return{value:F,label:Oe}});n(s)}else ie(e,i).then(l=>{n(l)}).catch(l=>{w.error("Error formatting data for show",l);const s=[];i.forEach(o=>{p(o)&&s.push({value:o,label:o})}),n(s)})})}function fe(e){const t=Object.assign({},e);return A.value.forEach(a=>{const r=t[a]||[];t[a]=r.map(i=>i.value)}),I.value.forEach(a=>{const r=t[a]||[];t[a]=(r[0]||{}).value}),K.value.forEach(a=>{const r=t[a];(O(r)||r.length===0)&&(t[a]=null)}),x.value.forEach(a=>{p(t[a])&&t[a].length>0&&(t[a]=JSON.parse(t[a]))}),C.value.forEach(a=>{p(t[a])&&(t[a]=parseFloat(t[a]))}),Object.entries(t).reduce((a,[r,i])=>(Object.is(i,void 0)?a[r]=null:a[r]=i,a),{})}function pe(e){return Object.entries(e).reduce((t,[n,a])=>(t[n]=a.map(r=>({name:r,params:{}})),t),{})}function be(e={}){return Object.entries(e).reduce((t,[n,a])=>(p(a)&&a.length>0&&(y(n)?t[n]=a[0].value:v(n)?t[n]=a.map(r=>r.value):t[n]=a),t),{})}function ve(e={}){return Object.entries(e).reduce((t,[n,a])=>(p(a)&&a.length>0&&(y(n)?t[n]=a[0].value:v(n)?t[n]=a.map(r=>r.value):c(n)==="date"?(p(a.startDate)&&(t[n]={},t[n].startDate=a.startDate),p(a.endDate)&&(O(t[n])&&(t[n]={}),t[n].endDate=a.endDate)):c(n)==="datetime"?(p(a.startTime)&&(t[n]={},t[n].startTime=a.startTime),p(a.endTime)&&(O(t[n])&&(t[n]={}),t[n].endTime=a.endTime)):t[n]=a),t),{})}async function H(e,t){const n=u.value[e].options||{};if(n.server){const a=n.limit||5;return new Promise((r,i)=>{k.list(n.modelClass,{offset:t,limit:a}).then(l=>{const s=l.data,f={total:l.total,data:s.map(b=>({value:n.value(b),label:n.label(b)}))};r(B(e,t,a,f))})})}else return new Promise((a,r)=>{a(Object.assign({},{data:n,total:n.length,loading:!1,pagination:{offset:0,limit:5,client:!0}}))})}async function ye(){return new Promise((e,t)=>{Promise.all(j.value.map(n=>{const a=u.value[n].offset||0;return H(n,a)})).then(n=>{const a={};n.forEach((r,i)=>{const l=j.value[i];a[l]=r}),e(a)}).catch(n=>{t(n)})})}return{schemasMap:u,listableFields:V,listableKeys:q,viewableFields:E,viewableKeys:G,creatableFields:S,creatableKeys:Q,updatableFields:T,updatableKeys:R,sortableFields:P,sortableKeys:W,multipartData:X,clientOptionsFields:K,clientOptionsField:L,serverOptionsFields:j,serverOptionsField:M,selectableKeys:Y,multiSelectableFields:A,singleSelectableFields:I,inputType:c,inputLabel:ne,inputValue:ae,inputableField:re,multiInputableField:se,multiSelectableField:v,singleSelectableField:y,selectableField:h,nullToggleableField:z,nullToggleableFields:Z,tagsField:J,tagsFields:_,objectField:D,objectFields:x,numberField:N,numberFields:C,fileField:g,fileFields:$,includeKeys:te,formatInputOptionsData:B,formatDataFields:ue,formatDataForShow:me,formatDataForSave:fe,formatErrorsForDisplay:pe,formatFiltersForShow:be,formatFiltersForLoad:ve,validateParams:le,fetchOptions:H,initOptionsData:ye}}export{Ve as u};
