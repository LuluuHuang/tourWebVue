import{u as n,f as r,c as l,a as t,t as a,b as s,o as _}from"./index-B7Wsupap.js";const d={class:"row detailContent"},u={class:"col-12 text-center"},m={class:"row d-flex justify-content-center g-2"},h={class:"col-5"},p=["src","alt"],f={class:"col-5"},x={__name:"DetailView",setup(g){const c=n(),e=c.detail,i=r(()=>{const o=c.searchCategory;return e[`${o}Name`]});return(o,v)=>(_(),l("div",d,[t("div",u,[t("h1",null,a(i.value),1)]),t("div",m,[t("div",h,[t("img",{src:s(e).Picture.PictureUrl1,alt:s(e).Picture.PictureDescription1,class:"img-fluid img-thumbnail"},null,8,p)]),t("div",f,a(s(e).DescriptionDetail),1)])]))}};export{x as default};