import{_ as u,a as f,c as m,u as w,g as c,i as x,h as y,r as D,f as o,j as d,k as r,b as t,n as I,t as p,p as C,m as O}from"./index-d1281d06.js";import{B as T,S as E}from"./BaseCard-f0fb33be.js";import{B as l}from"./BaseButton-a4be7aa2.js";const N="/SEIDOR-frontend-homework/assets/credit_card-74ab1932.png",R="/SEIDOR-frontend-homework/assets/mastercard-404755b0.svg",$="/SEIDOR-frontend-homework/assets/visa-7bbd488c.svg";const j={},L={class:"loader"};function V(e,s){return f(),m("div",L)}const z=u(j,[["render",V]]);const h=e=>(C("data-v-3871b802"),e=e(),O(),e),P={class:"info-box"},q=h(()=>t("div",{class:"info-box__icon"},[t("img",{src:N,alt:""})],-1)),A={class:"info-box__description"},F=h(()=>t("div",{class:"info-box__images"},[t("img",{src:R,alt:""}),t("img",{src:$,alt:""})],-1)),G={class:"base_card__footer"},H={__name:"StepTwo",setup(e){const{t:s}=w(),b=c(()=>({title:s("common.payment"),description:s("step_two.description")})),v=c(()=>({text:s("btn.back"),isBack:!0,isNext:!1})),S=c(()=>({text:s("btn.pay"),isBack:!1,isNext:!0})),i=x(),B=function(){i.push({name:"StepOne"})},g=y(),n=D(!1),k=async function(){try{n.value=!0;const _=await(await fetch("https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f")).json();n.value=!1,g.commit("setPageData",_),i.push({name:"StepThree"})}catch(a){console.error(a)}finally{n.value=!1}};return(a,_)=>(f(),m("div",null,[o(E,{"is-step-one-finished":!0}),o(T,{"card-data":r(b)},{card_content:d(()=>[t("div",P,[q,t("h3",null,p(a.$t("step_two.credit_card")),1),t("div",A,p(a.$t("step_two.info")),1),F])]),card_footer:d(()=>[t("div",G,[o(l,{"btn-data":r(v),onClick:B},null,8,["btn-data"]),o(l,{"btn-data":r(S),onClick:k},null,8,["btn-data"])])]),_:1},8,["card-data"]),t("div",{class:I(["loading",{hidden:!n.value}])},[o(z)],2)]))}},Q=u(H,[["__scopeId","data-v-3871b802"]]);export{Q as default};
