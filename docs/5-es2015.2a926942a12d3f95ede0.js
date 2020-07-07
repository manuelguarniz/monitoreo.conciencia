(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+sKQ":function(e,t,r){"use strict";r.r(t),r.d(t,"AdministrationModule",(function(){return h}));var o=r("Ku21"),i=r("fXoL");let s=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[]]}),e})();var a=r("tyNb");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nvs-administration-user"]],decls:2,vars:0,template:function(e,t){1&e&&(i.Ub(0,"h1"),i.Cc(1,"Administration User"),i.Tb())},encapsulation:2}),e})();var l=r("mrSG"),b=r("XKlN");let c=(()=>{class e{constructor(e){this.userId=null==e?void 0:e.userId,this.firstName=null==e?void 0:e.firstName,this.lastName=null==e?void 0:e.lastName,this.email=null==e?void 0:e.email,this.typeIdentified=null==e?void 0:e.typeIdentified,this.identified=null==e?void 0:e.identified,this.urlPhoto=null==e?void 0:e.urlPhoto}}return Object(l.a)([Object(b.h)({message:"El nombre es obligatorio."})],e.prototype,"firstName",void 0),Object(l.a)([Object(b.h)({message:"Los apellidos son obligatorios"})],e.prototype,"lastName",void 0),Object(l.a)([Object(b.h)({message:"El email es obligatorio"}),Object(b.d)()],e.prototype,"email",void 0),Object(l.a)([Object(b.h)({message:"El DNI es obligatorio"}),Object(b.g)({acceptValue:b.a.PositiveNumber,allowDecimal:!1}),Object(b.e)({value:8,message:"El DNI contiene 8 digitos"}),Object(b.f)({value:8,message:"El DNI contiene 8 digitos"})],e.prototype,"identified",void 0),Object(l.a)([Object(b.h)({message:"El Cargo es obligatorio"})],e.prototype,"jobTitle",void 0),e})();var u=r("W+oY"),m=r("3Pt+"),d=r("ofXK");let p=(()=>{class e{constructor(){this.emitChange=new i.o}changeUploadFile(e){this.emitChange.next(e.target.files)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nvs-upload-file"]],inputs:{text:"text",accepted:"accepted",isMultiple:"isMultiple"},outputs:{emitChange:"emitChange"},decls:4,vars:3,consts:[[1,"upload-btn-wrapper"],[1,"btn"],["type","file","name","upload-file",3,"accept","multiple","change"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.Ub(1,"button",1),i.Cc(2),i.Tb(),i.Ub(3,"input",2),i.cc("change",(function(e){return t.changeUploadFile(e)})),i.Tb(),i.Tb()),2&e&&(i.Cb(2),i.Dc(t.text),i.Cb(1),i.nc("accept",t.accepted),i.mc("multiple",t.isMultiple))},styles:[".upload-btn-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;display:inline-block}.btn[_ngcontent-%COMP%]{cursor:pointer;border:2px solid grey;color:grey;background-color:#fff;padding:8px 20px;border-radius:8px;font-size:20px;font-weight:700}.upload-btn-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{font-size:100px;position:absolute;left:0;top:0;opacity:0}"]}),e})();const f=["imgPreview"],g=function(e){return{"has-error":e}},v=[{path:"",redirectTo:"usuarios/registro",pathMatch:"full"},{path:"usuarios",component:n},{path:"usuarios/registro",component:(()=>{class e{constructor(e,t){this.titleNavbarService=e,this.formBuilder=t}ngOnInit(){this.titleNavbarService.setTitleNavbar("Administraci\xf3n de Usuarios"),this.settingForm()}settingForm(){this.userFormGroup=this.formBuilder.formGroup(new c)}submit(){}changeFileUpload(e){if(e&&e[0]){const t=new FileReader;t.onload=e=>{this.imgPreview.nativeElement.setAttribute("src",e.target.result.toString())},t.readAsDataURL(e[0]),this.cachedImageUpload=e[0]}}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(u.a),i.Ob(b.b))},e.\u0275cmp=i.Ib({type:e,selectors:[["nvs-administration-create-user"]],viewQuery:function(e,t){var r;1&e&&i.Gc(f,!0),2&e&&i.sc(r=i.dc())&&(t.imgPreview=r.first)},decls:75,vars:30,consts:[[1,"row"],[1,"col-md-4","col-md-offset-2"],[1,"card"],[1,"content"],["novalidate","",3,"formGroup","ngSubmit"],[1,"col-md-12"],[1,"form-group",3,"ngClass"],["type","text","formControlName","firstName",1,"form-control"],[1,"form-text","text-danger"],["type","text","formControlName","lastName",1,"form-control"],["type","text","formControlName","email",1,"form-control"],["type","text","formControlName","identified",1,"form-control"],["type","text","formControlName","jobTitle",1,"form-control"],["type","submit",1,"btn","btn-info","btn-primary","btn-fill","pull-right",3,"disabled"],[1,"clearfix"],[1,"col-md-4"],[1,"card","card-user"],[1,"image"],["src","./assets/img/full-screen-image.jpg","alt","..."],[1,"author"],["src","./assets/img/default-avatar.jpg","alt","...",1,"avatar","border-gray"],["imgPreview",""],[1,"title"],[3,"accepted","text","emitChange"],[1,"footer","text-center"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Ub(4,"form",4),i.cc("ngSubmit",(function(){return t.submit()})),i.Ub(5,"legend"),i.Cc(6,"Registro de usuarios"),i.Tb(),i.Ub(7,"div",0),i.Ub(8,"div",5),i.Ub(9,"div",6),i.Ub(10,"label"),i.Cc(11,"Nombres:"),i.Tb(),i.Pb(12,"input",7),i.Ub(13,"small",8),i.Cc(14),i.Pb(15,"br"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(16,"div",0),i.Ub(17,"div",5),i.Ub(18,"div",6),i.Ub(19,"label"),i.Cc(20,"Apellidos:"),i.Tb(),i.Pb(21,"input",9),i.Ub(22,"small",8),i.Cc(23),i.Pb(24,"br"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(25,"div",0),i.Ub(26,"div",5),i.Ub(27,"div",6),i.Ub(28,"label"),i.Cc(29,"Email:"),i.Tb(),i.Pb(30,"input",10),i.Ub(31,"small",8),i.Cc(32),i.Pb(33,"br"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(34,"div",0),i.Ub(35,"div",5),i.Ub(36,"div",6),i.Ub(37,"label"),i.Cc(38,"DNI:"),i.Tb(),i.Pb(39,"input",11),i.Ub(40,"small",8),i.Cc(41),i.Pb(42,"br"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(43,"div",0),i.Ub(44,"div",5),i.Ub(45,"div",6),i.Ub(46,"label"),i.Cc(47,"Cargo:"),i.Tb(),i.Pb(48,"input",12),i.Ub(49,"small",8),i.Cc(50),i.Pb(51,"br"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(52,"button",13),i.Cc(53," Registrar "),i.Tb(),i.Pb(54,"div",14),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(55,"div",15),i.Ub(56,"div",16),i.Ub(57,"div",17),i.Pb(58,"img",18),i.Tb(),i.Ub(59,"div",3),i.Ub(60,"div",19),i.Pb(61,"img",20,21),i.Ub(63,"h4",22),i.Cc(64),i.hc(65,"uppercase"),i.Pb(66,"br"),i.Ub(67,"small"),i.Cc(68),i.hc(69,"uppercase"),i.Tb(),i.Tb(),i.Ub(70,"nvs-upload-file",23),i.cc("emitChange",(function(e){return t.changeFileUpload(e)})),i.Tb(),i.Tb(),i.Tb(),i.Pb(71,"hr"),i.Ub(72,"div",24),i.Ub(73,"h4"),i.Cc(74,"Pre visualizar datos y adjuntar foto"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&e&&(i.Cb(4),i.mc("formGroup",t.userFormGroup),i.Cb(5),i.mc("ngClass",i.qc(20,g,!t.userFormGroup.controls.firstName.valid)),i.Cb(5),i.Ec(" ",t.userFormGroup.controls.firstName.errorMessage," "),i.Cb(4),i.mc("ngClass",i.qc(22,g,!t.userFormGroup.controls.lastName.valid)),i.Cb(5),i.Ec(" ",t.userFormGroup.controls.lastName.errorMessage," "),i.Cb(4),i.mc("ngClass",i.qc(24,g,!t.userFormGroup.controls.email.valid)),i.Cb(5),i.Ec(" ",t.userFormGroup.controls.email.errorMessage," "),i.Cb(4),i.mc("ngClass",i.qc(26,g,!t.userFormGroup.controls.identified.valid)),i.Cb(5),i.Ec(" ",t.userFormGroup.controls.identified.errorMessage," "),i.Cb(4),i.mc("ngClass",i.qc(28,g,!t.userFormGroup.controls.jobTitle.valid)),i.Cb(5),i.Ec(" ",t.userFormGroup.controls.jobTitle.errorMessage," "),i.Cb(2),i.mc("disabled",t.userFormGroup.invalid),i.Cb(12),i.Ec(" ",i.ic(65,16,t.userFormGroup.controls.lastName.value),""),i.Cb(4),i.Dc(i.ic(69,18,t.userFormGroup.controls.firstName.value)),i.Cb(2),i.mc("accepted","image/x-png,image/gif,image/jpeg")("text","Subir foto"))},directives:[m.s,m.o,m.h,b.i,d.k,m.b,m.n,m.f,b.k,b.j,p],pipes:[d.t],encapsulation:2}),e})()}];let C=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[a.f.forChild(v)],a.f]}),e})(),h=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[d.c,o.a,s,C,m.i,m.r,b.c],o.a]}),e})()}}]);