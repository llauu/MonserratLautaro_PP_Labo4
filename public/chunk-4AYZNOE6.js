import{a as C}from"./chunk-BV6S3RUB.js";import{$a as n,Aa as o,Ba as c,La as u,Pa as f,Qa as r,Ra as e,Sa as v,Va as h,Wa as x,bb as d,ca as m,gb as g,xa as p}from"./chunk-BHUJHJEN.js";function I(i,t){if(i&1&&(r(0,"div"),v(1,"img",0),r(2,"p")(3,"strong"),n(4,"Nombre:"),e(),n(5),e(),r(6,"p")(7,"strong"),n(8,"Usuario:"),e(),n(9),e()()),i&2){let l=h();o(),x("src",l.data.avatar_url,p),o(4),d(" ",l.data.name,""),o(4),d(" ",l.data.login,"")}}var y=(()=>{let t=class t{constructor(a){this.http=a,this.api="https://api.github.com/users/llauu"}ngOnInit(){this.http.get(this.api).subscribe(a=>{this.data=a})}};t.\u0275fac=function(s){return new(s||t)(c(C))},t.\u0275cmp=m({type:t,selectors:[["app-home"]],standalone:!0,features:[g],decls:4,vars:1,consts:[["alt","Mi foto",3,"src"]],template:function(s,E){s&1&&(r(0,"div")(1,"h1"),n(2," Bienvenida "),e(),u(3,I,10,3,"div"),e()),s&2&&(o(3),f(3,E.data?3:-1))}});let i=t;return i})();export{y as HomeComponent};
