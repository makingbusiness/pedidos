(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"nY/k":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class i{}var e=u("pMnS"),a=u("MKJQ"),s=u("sZkV"),r=u("s7LF"),t=u("mrSG"),b=u("on2l"),c=u("Bbpn");class d{constructor(l,n,u,o){this.router=l,this.usuarioService=n,this.variosService=u,this.alerta=o}ngOnInit(){this.usuario=this.usuarioService.usuarioActivo,this.cargarGeograficas()}cargarGeograficas(){this.variosService.getPaises().subscribe(l=>{this.variosService.listaPaises=l.paises}),this.variosService.getEstados().subscribe(l=>{this.variosService.listaEstados=l.estados}),this.variosService.getCiudades().subscribe(l=>{this.variosService.listaCiudades=l.ciudades})}enviar(){console.log("Creando cuenta"),console.log(this.usuario)}ingresar(){0!=this.usuario.CodClie.length?this.usuarioService.consulta_usuario(this.usuario.CodClie).subscribe(l=>{l.usuario?(console.log("El usuario encontrado es",l.usuario),this.usuarioService.usuarioActivo=l.usuario,console.log("Usuario consultado_ ",l.usuario),this.router.navigate(["usuario",0])):this.mostrarMensaje("No hay coincidencias para la consulta")}):this.mostrarMensaje("Ingrese el dato a consultar")}mostrarMensaje(l){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.alerta.create({header:"Error en la consulta",message:l,buttons:["OK"]})).present()}))}crearCuenta(){console.log("Creando cuenta"),this.router.navigate(["/usuario/"])}}var p=u("iInd"),g=o.ob({encapsulation:0,styles:[["ion-grid[_ngcontent-%COMP%]{height:100%;margin-top:50px}"]],data:{}});function h(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,11,"ion-header",[],null,null,null,a.S,a.m)),o.pb(1,49152,null,0,s.A,[o.h,o.k,o.x],null,null),(l()(),o.qb(2,0,null,0,4,"ion-buttons",[["defaultHref","/instancias"],["slot","start"]],null,null,null,a.J,a.d)),o.pb(3,49152,null,0,s.k,[o.h,o.k,o.x],null,null),(l()(),o.qb(4,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Cb(l,6).onClick(u)&&i),i}),a.H,a.b)),o.pb(5,49152,null,0,s.f,[o.h,o.k,o.x],null,null),o.pb(6,16384,null,0,s.g,[[2,s.eb],s.Eb,s.c],null,null),(l()(),o.qb(7,0,null,0,4,"ion-toolbar",[["class","ion-text-center"],["color","dark"]],null,null,null,a.lb,a.F)),o.pb(8,49152,null,0,s.yb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.qb(9,0,null,0,2,"ion-title",[],null,null,null,a.kb,a.E)),o.pb(10,49152,null,0,s.wb,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Acceder"])),(l()(),o.qb(12,0,null,null,68,"ion-content",[["class","ion-text-center"]],null,null,null,a.Q,a.k)),o.pb(13,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.qb(14,0,null,0,66,"ion-grid",[],null,null,null,a.R,a.l)),o.pb(15,49152,null,0,s.z,[o.h,o.k,o.x],null,null),(l()(),o.qb(16,0,null,0,6,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(17,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(18,0,null,0,4,"ion-col",[],null,null,null,a.P,a.j)),o.pb(19,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(20,0,null,0,2,"ion-label",[],null,null,null,a.Z,a.t)),o.pb(21,49152,null,0,s.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Iniciar sesi\xf3n"])),(l()(),o.qb(23,0,null,0,4,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(24,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(25,0,null,0,2,"ion-col",[],null,null,null,a.P,a.j)),o.pb(26,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,[" N\xfamero de celular/documento/Email "])),(l()(),o.qb(28,0,null,0,9,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(29,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(30,0,null,0,7,"ion-col",[],null,null,null,a.P,a.j)),o.pb(31,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(32,0,null,0,5,"input",[["name",""],["size","10"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var i=!0,e=l.component;return"input"===n&&(i=!1!==o.Cb(l,33)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==o.Cb(l,33).onTouched()&&i),"compositionstart"===n&&(i=!1!==o.Cb(l,33)._compositionStart()&&i),"compositionend"===n&&(i=!1!==o.Cb(l,33)._compositionEnd(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(e.usuario.CodClie=u)&&i),i}),null,null)),o.pb(33,16384,null,0,r.b,[o.B,o.k,[2,r.a]],null,null),o.Fb(1024,null,r.d,(function(l){return[l]}),[r.b]),o.pb(35,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,r.e,null,[r.g]),o.pb(37,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),o.qb(38,0,null,0,9,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(39,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(40,0,null,0,7,"ion-col",[],null,null,null,a.P,a.j)),o.pb(41,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(42,0,null,0,5,"input",[["name",""],["size","10"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var i=!0,e=l.component;return"input"===n&&(i=!1!==o.Cb(l,43)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==o.Cb(l,43).onTouched()&&i),"compositionstart"===n&&(i=!1!==o.Cb(l,43)._compositionStart()&&i),"compositionend"===n&&(i=!1!==o.Cb(l,43)._compositionEnd(u.target.value)&&i),"ngModelChange"===n&&(i=!1!==(e.usuario.Clave=u)&&i),i}),null,null)),o.pb(43,16384,null,0,r.b,[o.B,o.k,[2,r.a]],null,null),o.Fb(1024,null,r.d,(function(l){return[l]}),[r.b]),o.pb(45,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,r.e,null,[r.g]),o.pb(47,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),o.qb(48,0,null,0,6,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(49,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(50,0,null,0,4,"ion-col",[],null,null,null,a.P,a.j)),o.pb(51,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(52,0,null,0,2,"ion-label",[],null,null,null,a.Z,a.t)),o.pb(53,49152,null,0,s.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Enviaremos un c\xf3digo al celular registrado para comprobar que eres t\xfa"])),(l()(),o.qb(55,0,null,0,11,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(56,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(57,0,null,0,4,"ion-col",[],null,null,null,a.P,a.j)),o.pb(58,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(59,0,null,0,2,"ion-button",[["color","dark"],["fill","solid"],["shape","round"],["size","6"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.ingresar()&&o),o}),a.I,a.c)),o.pb(60,49152,null,0,s.j,[o.h,o.k,o.x],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),o.Ib(-1,0,[" Ingresar "])),(l()(),o.qb(62,0,null,0,4,"ion-col",[],null,null,null,a.P,a.j)),o.pb(63,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(64,0,null,0,2,"ion-button",[["color","dark"],["fill","solid"],["shape","round"],["size","6"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.enviar()&&o),o}),a.I,a.c)),o.pb(65,49152,null,0,s.j,[o.h,o.k,o.x],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),o.Ib(-1,0,[" Enviar c\xf3digo "])),(l()(),o.qb(67,0,null,0,6,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(68,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(69,0,null,0,4,"ion-col",[],null,null,null,a.P,a.j)),o.pb(70,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(71,0,null,0,2,"ion-label",[],null,null,null,a.Z,a.t)),o.pb(72,49152,null,0,s.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["\xbfNo est\xe1s registrado?"])),(l()(),o.qb(74,0,null,0,6,"ion-row",[],null,null,null,a.eb,a.y)),o.pb(75,49152,null,0,s.fb,[o.h,o.k,o.x],null,null),(l()(),o.qb(76,0,null,0,4,"ion-col",[],null,null,null,a.P,a.j)),o.pb(77,49152,null,0,s.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(78,0,null,0,2,"ion-label",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.crearCuenta()&&o),o}),a.Z,a.t)),o.pb(79,49152,null,0,s.M,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Crea una cuenta aqu\xed"]))],(function(l,n){var u=n.component;l(n,8,0,"dark"),l(n,35,0,"",u.usuario.CodClie),l(n,45,0,"",u.usuario.Clave),l(n,60,0,"dark","solid","round","6"),l(n,65,0,"dark","solid","round","6")}),(function(l,n){l(n,32,0,o.Cb(n,37).ngClassUntouched,o.Cb(n,37).ngClassTouched,o.Cb(n,37).ngClassPristine,o.Cb(n,37).ngClassDirty,o.Cb(n,37).ngClassValid,o.Cb(n,37).ngClassInvalid,o.Cb(n,37).ngClassPending),l(n,42,0,o.Cb(n,47).ngClassUntouched,o.Cb(n,47).ngClassTouched,o.Cb(n,47).ngClassPristine,o.Cb(n,47).ngClassDirty,o.Cb(n,47).ngClassValid,o.Cb(n,47).ngClassInvalid,o.Cb(n,47).ngClassPending)}))}function C(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"app-ingreso",[],null,null,null,h,g)),o.pb(1,114688,null,0,d,[p.m,b.a,c.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=o.mb("app-ingreso",d,C,{},{},[]),v=u("SVse");class m{}u.d(n,"IngresoPageModuleNgFactory",(function(){return f}));var f=o.nb(i,[],(function(l){return o.zb([o.Ab(512,o.j,o.Y,[[8,[e.a,k]],[3,o.j],o.v]),o.Ab(4608,v.m,v.l,[o.s,[2,v.s]]),o.Ab(4608,r.i,r.i,[]),o.Ab(4608,s.b,s.b,[o.x,o.g]),o.Ab(4608,s.Db,s.Db,[s.b,o.j,o.p]),o.Ab(4608,s.Hb,s.Hb,[s.b,o.j,o.p]),o.Ab(1073742336,v.b,v.b,[]),o.Ab(1073742336,r.h,r.h,[]),o.Ab(1073742336,r.c,r.c,[]),o.Ab(1073742336,s.Ab,s.Ab,[]),o.Ab(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),o.Ab(1073742336,m,m,[]),o.Ab(1073742336,i,i,[]),o.Ab(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);