import{c as v,r,d as i,h as _,x as X,q as W,i as s,P as it,Z as Ie,_ as rt,v as ut,B as ct,k as dt,o as ft,n as m,e as c,F as Z,g as G,y as V,f as y,D as vt,z as ze,E as yt,u as fa,j as va,a as ya,w as Ke,b as ma,J as Ve,A as Ce,M as H,N as q,a1 as Ne,O as Se,l as ga,s as pa,G as ha,X as ka,p as ba,m as Da}from"./index-c88bb001.js";import{u as mt}from"./input-ddde269d.js";import{u as Fa}from"./errors-ebd9927f.js";import{D as gt}from"./DataForm-3b98cf70.js";const ot={__name:"FormDialog",props:{modelValue:{type:Boolean,default:!1},fieldsLayout:{type:Array,default(){return[]}},dataFields:{type:Array,default(){return[]}},data:{type:Object,default(){return{}}},schemas:{type:Object,default(){return{}}},dialogTitle:{type:String,default:""},fullscreen:{type:Boolean,default:!1},errorMessages:{type:Object,default(){return{}}}},emits:["update:modelValue","submit"],setup(l,{emit:o}){const k=l,C=v({get:()=>k.modelValue,set:R=>{o("update:modelValue",R)}}),P=r(k.data);function L(R){o("submit",R)}function Y(){C.value=!1}return(R,S)=>(i(),_(s(Ie),{modelValue:s(C),"onUpdate:modelValue":S[1]||(S[1]=b=>it(C)?C.value=b:null),title:l.dialogTitle,fullscreen:l.fullscreen,class:"form-dialog"},{body:X(()=>[W(gt,{modelValue:P.value,"onUpdate:modelValue":S[0]||(S[0]=b=>P.value=b),"fields-layout":l.fieldsLayout,"data-fields":l.dataFields,schemas:l.schemas,"error-messages":l.errorMessages,onSubmit:L,onCancel:Y},null,8,["modelValue","fields-layout","data-fields","schemas","error-messages"])]),_:1},8,["modelValue","title","fullscreen"]))}};const wa={class:"data-row"},Va={class:"data-label"},Ca={key:0,class:"data-value"},Sa={key:0},Oa={key:1,class:"no-value"},Aa={key:1,class:"data-value tags"},$a={key:0,class:"no-value"},Ea={__name:"ViewDialog",props:{modelValue:{type:Boolean,default:!1},keys:{type:Array,default(){return[]}},record:{type:Object,default(){return{}}},dataFields:{type:Array,default(){return[]}},title:{type:String,default:"View"},inputLabel:{type:Function,default(l){return l}},inputValue:{type:Function,default(l,o){return o[l]}},includeKeys:{type:Array,default(){return[]}}},emits:["update:modelValue"],setup(l,{emit:o}){const k=l,{tagsKeys:C,tagsField:P}=mt(k.dataFields),{formatTag:L,tagStyle:Y}=yt(),S=ut().getSystemConfigs(),{isEmpty:b,notEmpty:Oe}=ct(),ee=dt(),T=v({get:()=>k.modelValue,set:D=>{o("update:modelValue",D)}});function Ae(){T.value=!1}const O=r();async function fe(D,g,f){const ve=g.map(A=>new Promise((x,B)=>{L(D,A,f,S.tagFormat).then(ae=>{x(ae)}).catch(ae=>{B(ae)})}));return new Promise((A,x)=>{Promise.all(ve).then(B=>{A({key:f,formattedValue:B})}).catch(B=>{x(B)})})}function te(D,g,f){return O.value[g]?O.value[g][f]:D[g][f]}return ft(async()=>{const D=C.value.map(g=>{const f=k.record[g];return fe(k.record,f,g)});Promise.all(D).then(g=>{O.value=Object.assign({},k.record),g.forEach(f=>{O.value[f.key]=f.formattedValue})}).catch(g=>{ee.error("Error initializing page",g)})}),(D,g)=>O.value?(i(),_(s(Ie),{key:0,modelValue:s(T),"onUpdate:modelValue":g[1]||(g[1]=f=>it(T)?T.value=f:null),title:l.title},{body:X(()=>[m("div",wa,[(i(!0),c(Z,null,G(l.keys,(f,ve)=>(i(),c("div",{key:ve,class:"data-col"},[m("div",Va,V(l.inputLabel(f)),1),s(P)(f)?y("",!0):(i(),c("div",Ca,[s(Oe)(l.record[f])?(i(),c("div",Sa,V(l.inputValue(f,l.record,l.includeKeys,l.dataFields,s(S))),1)):y("",!0),s(b)(l.record[f])?(i(),c("div",Oa," --- no value --- ")):y("",!0)])),s(P)(f)?(i(),c("div",Aa,[(i(!0),c(Z,null,G(l.record[f],(A,x)=>(i(),c("div",{key:x,class:"tag",style:vt(s(Y)(l.record,A,f))},V(te(l.record,f,x)),5))),128)),l.record[f].length===0?(i(),c("div",$a," --- no value --- ")):y("",!0)])):y("",!0)]))),128))])]),actions:X(()=>[W(s(ze),{"button-type":"text",value:"Close",icon:"fa-solid fa-xmark",onClick:g[0]||(g[0]=f=>Ae())})]),_:1},8,["modelValue","title"])):y("",!0)}},Ta=rt(Ea,[["__scopeId","data-v-2661d27a"]]);const p=l=>(ba("data-v-54c9093a"),l=l(),Da(),l),xa={key:0,class:"heading"},ja={class:"filters-form"},Ua=p(()=>m("h3",{class:"heading"}," Filters ",-1)),_a=p(()=>m("i",{class:"fa-sharp fa-solid fa-xmark"},null,-1)),Pa=p(()=>m("span",{class:"tooltip align-right"},"Close",-1)),La=[_a,Pa],Ra={class:"sort-form"},Ba=p(()=>m("h3",{class:"heading"}," Sort ",-1)),Ka={class:"sort-fields"},Na=["onClick"],za=p(()=>m("i",{class:"fa-solid fa-sort"},null,-1)),Ia=p(()=>m("i",{class:"fa-solid fa-sort-up"},null,-1)),Ma=p(()=>m("i",{class:"fa-solid fa-sort-down"},null,-1)),Ja=p(()=>m("i",{class:"fa-sharp fa-solid fa-xmark"},null,-1)),Ha=p(()=>m("span",{class:"tooltip align-right"},"Close",-1)),qa=[Ja,Ha],Za={key:0},Ga=p(()=>m("th",null,null,-1)),Xa=[Ga],Qa=["onClick"],Wa=p(()=>m("i",{class:"fa-solid fa-sort"},null,-1)),Ya=p(()=>m("i",{class:"fa-solid fa-sort-up"},null,-1)),el=p(()=>m("i",{class:"fa-solid fa-sort-down"},null,-1)),tl={key:0,class:"col"},al=["onClick"],ll={class:"content-row"},sl={class:"highlight"},nl=["onClick"],ol={key:0},il={key:0},rl={key:1,class:"no-value"},ul={key:1},cl={key:0,class:"no-value"},dl=["download","href"],fl={__name:"DataPage",props:{showHeading:{type:Boolean,default:!1},dataType:{type:String,default:""},modelClass:{type:String,default:null},filters:{type:Object,default(){return{}}},dataFields:{type:Array,default(){return[]}},fieldsLayout:{type:Array,default(){return[]}},validations:{type:Object,default(){return{}}},fullscreen:{type:Boolean,default:!1},createDialogTitle:{type:Function,default:function(l){return`Create ${l}`}},viewDialogTitle:{type:Function,default:function(l,o){return`View ${l} ${o.id}`}},updateDialogTitle:{type:Function,default:function(l,o){return o?`Update ${l} ${o.id}`:""}},deleteDialogTitle:{type:Function,default:function(l,o){return o?`Delete ${l} ${o.id}`:""}},deleteDialogPrimaryText:{type:Function,default:function(l,o){return o?`Are you sure you want to delete ${l} ${o.id}?`:""}},deleteDialogSecondaryText:{type:Function,default:function(l,o){return o?JSON.stringify(o,!1,2):""}},actions:{type:Object,default(){return{}}},tableStyle:{type:Object,default(){return{}}}},setup(l){const o=l,{multipartData:k,listableFields:C,viewableKeys:P,creatableKeys:L,updatableKeys:Y,sortableFields:R,sortableKeys:S,includeKeys:b,inputLabel:Oe,inputValue:ee,tagsField:T,formatDataFields:Ae,formatDataForShow:O,formatDataForSave:fe,formatErrorsForDisplay:te,formatFiltersForShow:D,formatFiltersForLoad:g,validateParams:f}=mt(o.dataFields),A=ut().getSystemConfigs(),{formatTag:x,tagStyle:B}=yt(),ae=Fa(),K=fa(),{isEmpty:pt,notEmpty:ht}=ct(),{flashMessage:$}=va(),Me=ya(),$e=dt(),N=r(Array.from(o.dataFields)),Je=r(!1),Ee=r(!1);function z(e,t){return ee(e,t,b.value,N.value,A)}const kt=r(o.filters.layout),le=r(!1),I=r({}),He=r(Array.from(o.dataFields)),bt=v(()=>o.filters.disable||[]),Dt=v(()=>Te.value.filter(e=>!bt.value.includes(e))),Ft=r({}),wt=v(()=>({type:"text",icon:"fa-solid fa-check",value:"Update Filters"})),Vt=v(()=>({type:"text",icon:"fa-solid fa-filter-circle-xmark",value:"Reset Filters"})),Ct=v(()=>o.dataFields.filter(e=>e.filterable).reduce((e,t)=>(e[t.key]=t,e),{})),Te=v(()=>Object.keys(Ct.value)),qe=v(()=>kt.value&&Je.value&&Ee.value),St=v(()=>o.filters.layout),Ot=v(()=>le.value?"filters expanded":"filters collapsed");async function At(e){xe(),Q.value=0,await oe()}async function se(){Ee.value=!1,I.value=D(Object.assign({},o.filters.initData));const e=Te.value.map(t=>O(t,I.value));Promise.all(e).then(t=>{Te.value.forEach((a,n)=>{I.value[a]=t[n]}),Ee.value=!0,Ze(),Q.value=0,oe()})}function Ze(){le.value=!1}function xe(){le.value=!le.value}function $t(){He.value=Array.from(N.value).map(e=>{const t=Object.assign({},e);return t.filterable&&(t.type==="date"?t.type="daterange":t.type==="datetime"?t.type="datetimerange":t.type==="number"&&(t.type="numberrange")),t}).filter(e=>e.filterable)}const ye=r(!1),me=r("id"),ne=r(!0),Et=v(()=>({field:me.value,order:ne.value?"asc":"desc"}));function je(){ye.value=!ye.value}function Ue(e){return S.value.includes(e)}const Tt=v(()=>ye.value?"sort-container expanded":"sort-container collapsed"),Ge=v(()=>o.dataFields.reduce((e,t)=>{const a=t.key;return Ue(a)&&a===me.value?ne.value?e[a]="header-field sort active down":e[a]="header-field sort active up":Ue(a)?e[a]="header-field sort reset":e[a]="header-field nosort",e},{}));async function Xe(e){Ue(e)&&(e===me.value?ne.value=!ne.value:(me.value=e,ne.value=!0),Q.value=0,await oe())}const xt={oneline:!1,showHeader:!0,highlightField:"id"},F=v(()=>Object.assign({},xt,o.tableStyle)),_e=v(()=>Ut.value.click),jt=v(()=>{const e={name:"Create",icon:"fa-solid fa-circle-plus fa-xl",click:async function(Be){await qt()}},t=o.actions.create||{},a=Object.assign({},e,t),n={name:"Export",icon:"fa-solid fa-file-export",click:async function(Be){await ia()}},d=o.actions.export||{},u=Object.assign({},n,d),h={name:"Filter",icon:"fa-solid fa-filter",click:async function(){xe()}},w=o.actions.filter||{},U=Object.assign({},h,w),ua={name:"Sort",icon:"fa-solid fa-arrow-down-wide-short",click:async function(){je()}},ca=o.actions.sort||{},da=Object.assign({},ua,ca),we=[a,u];return qe.value&&we.unshift(U),F.value.oneline&&we.unshift(da),Object.entries(o.actions.table||{}).forEach(Be=>{we.push(Be)}),we}),Ut=v(()=>{const e={name:"View",icon:"fa-solid fa-magnifying-glass",click:async function(a,n){await Jt(a.id)}},t=o.actions.view||{};return Object.assign({},e,t)}),_t=v(()=>{const e={name:"Update",icon:"fa-solid fa-pen-to-square",click:async function(a,n){await Yt(a.id)}},t=o.actions.update||{};return Object.assign({},e,t)}),Pt=v(()=>{const e={name:"Delete",icon:"fa-solid fa-trash-can",click:async function(a,n){await na(a.id)}},t=o.actions.remove||{};return Object.assign({},e,t)}),Pe=v(()=>{const e=[_t.value,Pt.value];return Object.values(o.actions.row||{}).forEach(t=>{e.push(t)}),e}),Qe=r([]),We=r(0),Q=r(0),Ye=r(5),ge=r(!1),pe=r([]);async function Lt(e){Q.value=e,await oe()}async function Rt(e,t,a,n){const d=t.map(u=>new Promise((h,w)=>{x(e,u,a,A.tagFormat).then(U=>{h(U)}).catch(U=>{w(U)})}));return new Promise((u,h)=>{Promise.all(d).then(w=>{u({i:n,key:a,formattedValue:w})}).catch(w=>{h(w)})})}function Bt(e,t,a){const n=`${t}Formatted`;return e[n]?e[n][a]:e[t]}async function Kt(){const e=[];pe.value=[],Qe.value.forEach((t,a)=>{pe.value.push(Object.assign({},t)),C.value.forEach(n=>{const d=n.key,u=t[d];T(d)&&e.push(Rt(t,u,d,a))})}),Promise.all(e).then(t=>{t.forEach(a=>{const n=`${a.key}Formatted`;pe.value[a.i][n]=a.formattedValue})}).catch(t=>{$e.error("Error fetching formatted data",t)})}Me.registerListener("loadData",{id:`DataPage-${o.dataType}`,invoke:e=>{e.dataType===o.dataType&&(e.filters&&(I.value=Object.assign({},e.filters)),oe())}});function Nt(){Me.unregisterListener("loadData",{id:`DataPage-${o.dataType}`})}function zt(e){e.preventDefault(),le.value?Ze():ye.value&&je()}async function It(){await K.schemas(o.modelClass).then(e=>{const t=e.fields;N.value=Ae(t),$t(),Je.value=!0}).catch(e=>{$e.error("Error loading schemas",e),$("Error loading schemas!")})}async function oe(){const e={include:b.value,offset:Q.value,limit:Ye.value,filters:g(I.value),sort:Et.value};ge.value=!0,await K.list(o.modelClass,e).then(t=>{Qe.value=t.data,Kt(),We.value=t.total,ge.value=!1}).catch(t=>{ge.value=!1,$e.error("Error loading data",t),$("Error loading data!")})}async function Le(e,t,a){const n={include:b.value};await K.view(o.modelClass,e,n).then(d=>{t(d)}).catch(d=>{a(d)})}const M=r(!1),E=r(""),Mt=v(()=>E.value&&E.value.length>0?(E.value.match(/.{1,100}/g)??[]).join(`
`):""),et=v(()=>({width:800,height:400})),Re=r(!1),ie=r();async function Jt(e){Le(e,t=>{ie.value=t,Re.value=!0},t=>{ie.value=null,M.value=!0,E.value=JSON.stringify(t,!1,4)})}const re=r(!1),ue=r(),he=r({}),Ht=v(()=>o.validations.create||[]);Ke(re,(e,t)=>{e||(he.value={})});async function qt(e){ue.value={};const t=L.value.map(a=>O(a,{}));Promise.all(t).then(a=>{L.value.forEach((n,d)=>{ue.value[n]=a[d],re.value=!0})})}async function Zt(e){const t=Gt(e);if(Object.keys(t).length>0){he.value=t,$("Error creating data!");return}const a=fe(e);await K.create(o.modelClass,a,k.value).then(n=>{$("Data created successfully!"),se(),Xt()}).catch(n=>{he.value=te(n),$("Error creating data!")})}function Gt(e){return f(Ht.value,e)}function Xt(){re.value=!1,Qt()}function Qt(){ue.value=null}const ce=r(!1),j=r(),ke=r({}),Wt=v(()=>o.validations.update||[]);Ke(ce,(e,t)=>{e||(ke.value={})});async function Yt(e){Le(e,t=>{la(t),ce.value=!0},t=>{tt(),M.value=!0,E.value=JSON.stringify(t,!1,4)})}async function ea(e){const t=ta(e);if(Object.keys(t).length>0){ke.value=t,$("Error updating data!");return}const a=e.id,n=fe(e);await K.update(o.modelClass,a,n,{},k.value).then(d=>{$("Data updated successfully!"),se(),aa()}).catch(d=>{ke.value=te(d),$("Error updating data!")})}function ta(e){return f(Wt.value,e)}function aa(){ce.value=!1,tt()}async function la(e){j.value={};const t=o.dataFields.map(a=>{const n=a.key;return O(n,e)});Promise.all(t).then(a=>{o.dataFields.forEach((n,d)=>{const u=n.key;j.value[u]=a[d]})})}function tt(){j.value=null}const de=r(!1),J=r(),sa=r({});Ke(de,(e,t)=>{e||(sa.value={})});async function na(e){Le(e,t=>{J.value=t,de.value=!0},t=>{lt(),M.value=!0,E.value=JSON.stringify(t,!1,4)})}async function oa(){const t=J.value.id;await K.remove(o.modelClass,t).then(a=>{$("Data deleted successfully!"),se()}).catch(a=>{const n=te(a);E.value=Object.entries(n).map(([d,u])=>u.map(h=>ae[h.name](h.params)).join(`
`)).join(`
`),M.value=!0}).finally(()=>{at()})}function at(){de.value=!1,lt()}function lt(){J.value=null}const be=r(!1),De=r(),Fe=r(),st=r("downloadAnchor");async function ia(){await K.download(o.modelClass).then(e=>{const t=window.URL.createObjectURL(new Blob([e.data]));De.value=t,Fe.value=e.filename,be.value=!0}).catch(e=>{M.value=!0,E.value=JSON.stringify(e,!1,4)})}function ra(){st.value.click(),nt()}function nt(){be.value=!1,De.value=null,Fe.value=null}return ft(async()=>{await It(),await se()}),ma(()=>{Nt()}),(e,t)=>(i(),c("div",{class:"page-container",onKeydown:t[9]||(t[9]=ka(a=>zt(a),["esc"]))},[l.showHeading?(i(),c("h2",xa,V(l.dataType),1)):y("",!0),s(qe)?(i(),c("div",{key:1,class:Ve(s(Ot))},[m("div",ja,[Ua,W(gt,{modelValue:I.value,"onUpdate:modelValue":t[0]||(t[0]=a=>I.value=a),"fields-layout":s(St),"data-fields":s(Dt),schemas:He.value,"error-messages":Ft.value,"confirm-button":s(wt),"cancel-button":s(Vt),onSubmit:At,onCancel:se},null,8,["modelValue","fields-layout","data-fields","schemas","error-messages","confirm-button","cancel-button"])]),m("div",{class:"toggle tooltipable",onClick:xe},La)],2)):y("",!0),s(F).oneline?(i(),c("div",{key:2,class:Ve(s(Tt))},[m("div",Ra,[Ba,m("div",Ka,[(i(!0),c(Z,null,G(s(R),(a,n)=>(i(),c("div",{key:n,class:Ve(s(Ge)[a.key]),onClick:d=>Xe(a.key)},[Ce(V(a.label)+" ",1),za,Ia,Ma],10,Na))),128))])]),m("div",{class:"toggle tooltipable",onClick:je},qa)],2)):y("",!0),W(s(ga),{name:"",class:"data-table",headers:s(C),data:pe.value,"table-actions":s(jt),actions:s(Pe),"row-action":s(_e),loading:ge.value,pagination:{offset:Q.value,limit:Ye.value,client:!1},"total-data":We.value,onOffsetChange:Lt},{"header-row":X(({headers:a})=>[s(F).oneline?(i(),c("div",Za,Xa)):y("",!0),s(F).oneline?y("",!0):H(e.$slots,"header-row",q(Ne({key:1},{headers:a,actions:s(Pe)})),()=>[(i(!0),c(Z,null,G(a,(n,d)=>(i(),c("th",{key:d,class:"col",onClick:u=>Xe(n.key)},[m("div",{class:Ve(s(Ge)[n.key])},[Ce(V(n.label)+" ",1),Wa,Ya,el],2)],8,Qa))),128)),s(Pe).length>0&&!s(F).oneline?(i(),c("th",tl)):y("",!0)],!0)]),"data-content":X(({headers:a,row:n,i:d})=>[s(F).oneline?H(e.$slots,"data-content",q(Ne({key:0},{headers:a,row:n,i:d,inputValue:z})),()=>[m("td",{class:"col oneline",onClick:u=>s(_e)(n,d)},[m("div",ll,[m("div",sl,[H(e.$slots,`highlight.${s(F).highlightField}`,q(Se({row:n,formattedValue:z(s(F).highlightField,n),inputValue:z})),()=>[Ce(V(z(s(F).highlightField,n)),1)],!0)]),(i(!0),c(Z,null,G(a,(u,h)=>(i(),c("div",{key:h,class:"small"},[H(e.$slots,`data-col.${u.key}`,q(Se({header:u,row:n,i:d,key:u.key,rawValue:n[u.key],formattedValue:z(u.key,n),inputValue:z})),void 0,!0)]))),128))])],8,al)],!0):y("",!0),s(F).oneline?y("",!0):H(e.$slots,"data-content",q(Ne({key:1},{headers:a,row:n,i:d,inputValue:z})),()=>[(i(!0),c(Z,null,G(a,(u,h)=>(i(),c("td",{key:h,class:"col",onClick:w=>s(_e)(n,d)},[H(e.$slots,`data-col.${u.key}`,q(Se({header:u,row:n,i:d})),()=>[s(T)(u.key)?y("",!0):(i(),c("div",ol,[s(ht)(n[u.key])?(i(),c("div",il,V(s(ee)(u.key,n,s(b),N.value,s(A))),1)):y("",!0),s(pt)(n[u.key])?(i(),c("div",rl," --- no value --- ")):y("",!0)])),s(T)(u.key)?(i(),c("div",ul,[(i(!0),c(Z,null,G(n[u.key],(w,U)=>(i(),c("div",{key:U,class:"tag",style:vt(s(B)(n,w,u.key))},V(Bt(n,u.key,U)),5))),128)),n[u.key].length===0?(i(),c("div",cl," --- no value --- ")):y("",!0)])):y("",!0)],!0)],8,nl))),128))],!0)]),_:3},8,["headers","data","table-actions","actions","row-action","loading","pagination","total-data"]),E.value.length>0?(i(),_(s(pa),{key:3,modelValue:M.value,"onUpdate:modelValue":t[1]||(t[1]=a=>M.value=a),title:"Error",class:"error-alert",content:s(Mt),width:s(et).width,height:s(et).height},null,8,["modelValue","content","width","height"])):y("",!0),ue.value?(i(),_(ot,{key:4,modelValue:re.value,"onUpdate:modelValue":t[2]||(t[2]=a=>re.value=a),schemas:N.value,"fields-layout":l.fieldsLayout,"data-fields":s(L),data:ue.value,"dialog-title":l.createDialogTitle(l.dataType),fullscreen:l.fullscreen,"error-messages":he.value,onSubmit:Zt},null,8,["modelValue","schemas","fields-layout","data-fields","data","dialog-title","fullscreen","error-messages"])):y("",!0),H(e.$slots,"updateDialog",q(Se({row:j.value})),()=>[j.value&&Object.keys(j.value).length>0?(i(),_(ot,{key:0,modelValue:ce.value,"onUpdate:modelValue":t[3]||(t[3]=a=>ce.value=a),schemas:N.value,"fields-layout":l.fieldsLayout,"data-fields":s(Y),data:j.value,"dialog-title":l.updateDialogTitle(l.dataType,j.value),fullscreen:l.fullscreen,"error-messages":ke.value,onSubmit:ea},null,8,["modelValue","schemas","fields-layout","data-fields","data","dialog-title","fullscreen","error-messages"])):y("",!0)],!0),ie.value?(i(),_(Ta,{key:5,modelValue:Re.value,"onUpdate:modelValue":t[4]||(t[4]=a=>Re.value=a),keys:s(P),"include-keys":s(b),"data-fields":N.value,record:ie.value,title:l.viewDialogTitle(l.dataType,ie.value),"input-label":s(Oe),"input-value":s(ee),class:"view-dialog"},null,8,["modelValue","keys","include-keys","data-fields","record","title","input-label","input-value"])):y("",!0),J.value?(i(),_(s(ha),{key:6,modelValue:de.value,"onUpdate:modelValue":t[5]||(t[5]=a=>de.value=a),title:l.deleteDialogTitle(l.dataType,J.value),"primary-text":l.deleteDialogPrimaryText(l.dataType,J.value),"secondary-text":l.deleteDialogSecondaryText(l.dataType,J.value),width:500,height:350,class:"delete-dialog",onConfirm:oa,onCancel:at},null,8,["modelValue","title","primary-text","secondary-text"])):y("",!0),De.value?(i(),_(s(Ie),{key:7,modelValue:be.value,"onUpdate:modelValue":t[8]||(t[8]=a=>be.value=a),title:"Download export file",width:400,height:250},{body:X(()=>[Ce(V(Fe.value),1)]),actions:X(()=>[m("a",{ref_key:"downloadAnchor",ref:st,class:"hidden",rel:"noreferrer",download:Fe.value,href:De.value},null,8,dl),W(s(ze),{"button-type":"text",value:"Download",icon:"fa-solid fa-file-arrow-down",onClick:t[6]||(t[6]=a=>ra())}),W(s(ze),{"button-type":"text",value:"Cancel",icon:"fa-solid fa-xmark",onClick:t[7]||(t[7]=a=>nt())})]),_:1},8,["modelValue"])):y("",!0)],32))}},pl=rt(fl,[["__scopeId","data-v-54c9093a"]]);export{pl as D,ot as _};
