(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a(8),s=a(5);const u=Object(l.c)({name:"auth",initialState:{isAuthenticated:!1},reducers:{login:e=>{e.isAuthenticated=!0},logout:e=>{e.isAuthenticated=!1}}}),{login:i,logout:o}=u.actions;var d=u.reducer,m=a(20),g=a.n(m);const E=Object(l.b)("countries/fetchCountries",async()=>{return(await g.a.get("https://restcountries.com/v2/all?fields=name,region,flag")).data});var f=Object(l.c)({name:"countries",initialState:{countries:[],status:"idle",error:null},reducers:{},extraReducers:e=>{e.addCase(E.pending,e=>{e.status="loading"}).addCase(E.fulfilled,(e,t)=>{e.status="succeeded",e.countries=t.payload}).addCase(E.rejected,(e,t)=>{e.status="failed",e.error=t.error.message})}}).reducer;var b=Object(s.b)({auth:d,countries:f});var p=Object(l.a)({reducer:b}),v=a(45),h=a(46),j=a(47),O=a(48);var w=()=>{const e=Object(c.b)(),{countries:t,status:a,error:l}=Object(c.c)(e=>e.countries);return Object(n.useEffect)(()=>{e(E())},[e]),"loading"===a?r.a.createElement("div",null,"Loading..."):"failed"===a?r.a.createElement("div",null,"Error: ",l):r.a.createElement(v.a,null,r.a.createElement("h2",null,"Countries"),r.a.createElement(h.a,{xs:1,md:2,lg:3,className:"g-4"},t.map((e,t)=>r.a.createElement(j.a,{key:t},r.a.createElement(O.a,null,r.a.createElement(O.a.Img,{variant:"top",src:e.flag}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,e.name),r.a.createElement(O.a.Text,null,"Region: ",e.region)))))))};a(42);t.default=function(){return r.a.createElement(c.a,{store:p},r.a.createElement("div",{className:"App"},r.a.createElement(w,null)))}}},[[22,1,2]]]);
//# sourceMappingURL=main.94cd8572.chunk.js.map