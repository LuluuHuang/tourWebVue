import{u as a,e as d,c as l,a as s,b as t,f as _,t as c,d as u,o as i}from"./index-QilPDP7w.js";const h={class:"container"},g={class:"detailContent"},p={key:0,class:"row"},v={class:"col-12 text-center"},m={class:"badge bg-secondary"},P={class:"row d-flex justify-content-center g-2"},f={class:"col-lg-6 col-12"},y=["src","alt"],D={class:"col-lg-6 col-12 description"},x={key:1,class:"row"},w={class:"col-12 text-center"},C={class:"row d-flex g-2"},b={class:"col-lg-6 col-12"},k=["src","alt"],I={class:"col-lg-6 col-12 description"},A={class:"col-lg-6 col-12 otherInfo"},N=s("h4",null,"相關資訊",-1),S={key:2,class:"row"},U={class:"col-12 text-center"},V={class:"row d-flex g-2"},B={class:"col-lg-6 col-12"},O=["src","alt"],T={class:"col-lg-6 col-12 description"},j={class:"col-lg-6 col-12 otherInfo"},z=s("h4",null,"相關資訊",-1),E={key:3,class:"row"},H={class:"col-12 text-center"},L={class:"row d-flex g-2"},R={class:"col-lg-6 col-12"},$=["src","alt"],q={class:"col-lg-6 col-12 description"},F={class:"col-lg-6 col-12 otherInfo"},G=s("h4",null,"相關資訊",-1),Q={__name:"DetailView",setup(J){const o=a(),e=o.detail,n=d(()=>{const r=o.searchCategory;return console.log(r),e[`${r}Name`]});return(r,K)=>(i(),l("div",h,[s("div",g,[t(o).searchCategory=="ScenicSpot"?(i(),l("div",p,[s("div",v,[s("h1",null,[_(c(n.value),1),s("span",m,c(t(e).Level),1)])]),s("div",P,[s("div",f,[s("img",{src:t(e).Picture.PictureUrl1,alt:t(e).Picture.PictureDescription1,class:"img-fluid img-thumbnail"},null,8,y)]),s("div",D,c(t(e).DescriptionDetail),1)])])):t(o).searchCategory=="Hotel"?(i(),l("div",x,[s("div",w,[s("h1",null,c(n.value),1)]),s("div",C,[s("div",b,[s("img",{src:t(e).Picture.PictureUrl1,alt:t(e).Picture.PictureDescription1,class:"img-fluid img-thumbnail"},null,8,k)]),s("div",I,c(t(e).Description),1),s("div",A,[N,s("p",null,"地址："+c(t(e).Address),1),s("p",null,"電話："+c(t(e).Phone),1),s("p",null,"停車資訊："+c(t(e).ParkingInfo),1)])])])):t(o).searchCategory=="Activity"?(i(),l("div",S,[s("div",U,[s("h1",null,c(n.value),1)]),s("div",V,[s("div",B,[s("img",{src:t(e).Picture.PictureUrl1,alt:t(e).Picture.PictureDescription1,class:"img-fluid img-thumbnail"},null,8,O)]),s("div",T,c(t(e).Description),1),s("div",j,[z,s("p",null,"地址："+c(t(e).Address),1),s("p",null,"電話："+c(t(e).Phone),1),s("p",null,"舉辦單位："+c(t(e).Organizer),1)])])])):t(o).searchCategory=="Restaurant"?(i(),l("div",E,[s("div",H,[s("h1",null,c(n.value),1)]),s("div",L,[s("div",R,[s("img",{src:t(e).Picture.PictureUrl1,alt:t(e).Picture.PictureDescription1,class:"img-fluid img-thumbnail"},null,8,$)]),s("div",q,c(t(e).Description),1),s("div",F,[G,s("p",null,"地址："+c(t(e).Address),1),s("p",null,"電話："+c(t(e).Phone),1),s("p",null,"營業時間："+c(t(e).OpenTime),1)])])])):u("",!0)])]))}};export{Q as default};