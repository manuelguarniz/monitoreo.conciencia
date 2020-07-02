(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+sKQ":function(e,t,r){"use strict";r.r(t),r.d(t,"AdministrationModule",(function(){return M}));var o=r("Ku21"),i=r("fXoL");let a=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[]]}),e})();var s=r("tyNb");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["nvs-administration-user"]],decls:2,vars:0,template:function(e,t){1&e&&(i.Nb(0,"h1"),i.jc(1,"Administration User"),i.Mb())},encapsulation:2}),e})();var l=r("mrSG"),b=r("XKlN");let c=(()=>{class e{constructor(e){this.userId=null==e?void 0:e.userId,this.firstName=null==e?void 0:e.firstName,this.lastName=null==e?void 0:e.lastName,this.email=null==e?void 0:e.email,this.typeIdentified=null==e?void 0:e.typeIdentified,this.identified=null==e?void 0:e.identified,this.urlPhoto=null==e?void 0:e.urlPhoto}}return Object(l.a)([Object(b.h)({message:"El nombre es obligatorio."})],e.prototype,"firstName",void 0),Object(l.a)([Object(b.h)({message:"Los apellidos son obligatorios"})],e.prototype,"lastName",void 0),Object(l.a)([Object(b.h)({message:"El email es obligatorio"}),Object(b.d)()],e.prototype,"email",void 0),Object(l.a)([Object(b.h)({message:"El DNI es obligatorio"}),Object(b.g)({acceptValue:b.a.PositiveNumber,allowDecimal:!1}),Object(b.e)({value:8,message:"El DNI contiene 8 digitos"}),Object(b.f)({value:8,message:"El DNI contiene 8 digitos"})],e.prototype,"identified",void 0),Object(l.a)([Object(b.h)({message:"El Cargo es obligatorio"})],e.prototype,"jobTitle",void 0),e})();var u=r("W+oY"),d=r("3Pt+"),m=r("ofXK");let p=(()=>{class e{constructor(){this.emitChange=new i.n}changeUploadFile(e){this.emitChange.next(e.target.files)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["nvs-upload-file"]],inputs:{text:"text",accepted:"accepted",isMultiple:"isMultiple"},outputs:{emitChange:"emitChange"},decls:4,vars:3,consts:[[1,"upload-btn-wrapper"],[1,"btn"],["type","file","name","upload-file",3,"accept","multiple","change"]],template:function(e,t){1&e&&(i.Nb(0,"div",0),i.Nb(1,"button",1),i.jc(2),i.Mb(),i.Nb(3,"input",2),i.Ub("change",(function(e){return t.changeUploadFile(e)})),i.Mb(),i.Mb()),2&e&&(i.zb(2),i.kc(t.text),i.zb(1),i.bc("accept",t.accepted),i.ac("multiple",t.isMultiple))},styles:[".upload-btn-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;display:inline-block}.btn[_ngcontent-%COMP%]{cursor:pointer;border:2px solid grey;color:grey;background-color:#fff;padding:8px 20px;border-radius:8px;font-size:20px;font-weight:700}.upload-btn-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{font-size:100px;position:absolute;left:0;top:0;opacity:0}"]}),e})();const f=["imgPreview"],g=function(e){return{"has-error":e}},v=[{path:"",redirectTo:"usuarios/registro",pathMatch:"full"},{path:"usuarios",component:n},{path:"usuarios/registro",component:(()=>{class e{constructor(e,t){this.titleNavbarService=e,this.formBuilder=t}ngOnInit(){this.titleNavbarService.setTitleNavbar("Administraci\xf3n de Usuarios"),this.settingForm()}settingForm(){this.userFormGroup=this.formBuilder.formGroup(new c)}submit(){}changeFileUpload(e){if(e&&e[0]){const t=new FileReader;t.onload=e=>{this.imgPreview.nativeElement.setAttribute("src",e.target.result.toString())},t.readAsDataURL(e[0]),this.cachedImageUpload=e[0]}}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(u.a),i.Kb(b.b))},e.\u0275cmp=i.Eb({type:e,selectors:[["nvs-administration-create-user"]],viewQuery:function(e,t){var r;1&e&&i.nc(f,!0),2&e&&i.fc(r=i.Vb())&&(t.imgPreview=r.first)},decls:75,vars:30,consts:[[1,"row"],[1,"col-md-4","col-md-offset-2"],[1,"card"],[1,"content"],["novalidate","",3,"formGroup","ngSubmit"],[1,"col-md-12"],[1,"form-group",3,"ngClass"],["type","text","formControlName","firstName",1,"form-control"],[1,"form-text","text-danger"],["type","text","formControlName","lastName",1,"form-control"],["type","text","formControlName","email",1,"form-control"],["type","text","formControlName","identified",1,"form-control"],["type","text","formControlName","jobTitle",1,"form-control"],["type","submit",1,"btn","btn-info","btn-primary","btn-fill","pull-right",3,"disabled"],[1,"clearfix"],[1,"col-md-4"],[1,"card","card-user"],[1,"image"],["src","../../assets/img/full-screen-image.jpg","alt","..."],[1,"author"],["src","../../assets/img/default-avatar.jpg","alt","...",1,"avatar","border-gray"],["imgPreview",""],[1,"title"],[3,"accepted","text","emitChange"],[1,"footer","text-center"]],template:function(e,t){1&e&&(i.Nb(0,"div",0),i.Nb(1,"div",1),i.Nb(2,"div",2),i.Nb(3,"div",3),i.Nb(4,"form",4),i.Ub("ngSubmit",(function(){return t.submit()})),i.Nb(5,"legend"),i.jc(6,"Registro de usuarios"),i.Mb(),i.Nb(7,"div",0),i.Nb(8,"div",5),i.Nb(9,"div",6),i.Nb(10,"label"),i.jc(11,"Nombres:"),i.Mb(),i.Lb(12,"input",7),i.Nb(13,"small",8),i.jc(14),i.Lb(15,"br"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(16,"div",0),i.Nb(17,"div",5),i.Nb(18,"div",6),i.Nb(19,"label"),i.jc(20,"Apellidos:"),i.Mb(),i.Lb(21,"input",9),i.Nb(22,"small",8),i.jc(23),i.Lb(24,"br"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(25,"div",0),i.Nb(26,"div",5),i.Nb(27,"div",6),i.Nb(28,"label"),i.jc(29,"Email:"),i.Mb(),i.Lb(30,"input",10),i.Nb(31,"small",8),i.jc(32),i.Lb(33,"br"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(34,"div",0),i.Nb(35,"div",5),i.Nb(36,"div",6),i.Nb(37,"label"),i.jc(38,"DNI:"),i.Mb(),i.Lb(39,"input",11),i.Nb(40,"small",8),i.jc(41),i.Lb(42,"br"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(43,"div",0),i.Nb(44,"div",5),i.Nb(45,"div",6),i.Nb(46,"label"),i.jc(47,"Cargo:"),i.Mb(),i.Lb(48,"input",12),i.Nb(49,"small",8),i.jc(50),i.Lb(51,"br"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(52,"button",13),i.jc(53," Registrar "),i.Mb(),i.Lb(54,"div",14),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(55,"div",15),i.Nb(56,"div",16),i.Nb(57,"div",17),i.Lb(58,"img",18),i.Mb(),i.Nb(59,"div",3),i.Nb(60,"div",19),i.Lb(61,"img",20,21),i.Nb(63,"h4",22),i.jc(64),i.Xb(65,"uppercase"),i.Lb(66,"br"),i.Nb(67,"small"),i.jc(68),i.Xb(69,"uppercase"),i.Mb(),i.Mb(),i.Nb(70,"nvs-upload-file",23),i.Ub("emitChange",(function(e){return t.changeFileUpload(e)})),i.Mb(),i.Mb(),i.Mb(),i.Lb(71,"hr"),i.Nb(72,"div",24),i.Nb(73,"h4"),i.jc(74,"Pre visualizar datos y adjuntar foto"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&e&&(i.zb(4),i.ac("formGroup",t.userFormGroup),i.zb(5),i.ac("ngClass",i.dc(20,g,!t.userFormGroup.controls.firstName.valid)),i.zb(5),i.lc(" ",t.userFormGroup.controls.firstName.errorMessage," "),i.zb(4),i.ac("ngClass",i.dc(22,g,!t.userFormGroup.controls.lastName.valid)),i.zb(5),i.lc(" ",t.userFormGroup.controls.lastName.errorMessage," "),i.zb(4),i.ac("ngClass",i.dc(24,g,!t.userFormGroup.controls.email.valid)),i.zb(5),i.lc(" ",t.userFormGroup.controls.email.errorMessage," "),i.zb(4),i.ac("ngClass",i.dc(26,g,!t.userFormGroup.controls.identified.valid)),i.zb(5),i.lc(" ",t.userFormGroup.controls.identified.errorMessage," "),i.zb(4),i.ac("ngClass",i.dc(28,g,!t.userFormGroup.controls.jobTitle.valid)),i.zb(5),i.lc(" ",t.userFormGroup.controls.jobTitle.errorMessage," "),i.zb(2),i.ac("disabled",t.userFormGroup.invalid),i.zb(12),i.lc(" ",i.Yb(65,16,t.userFormGroup.controls.lastName.value),""),i.zb(4),i.kc(i.Yb(69,18,t.userFormGroup.controls.firstName.value)),i.zb(2),i.ac("accepted","image/x-png,image/gif,image/jpeg")("text","Subir foto"))},directives:[d.p,d.n,d.h,b.i,m.k,d.b,d.m,d.f,b.k,b.j,p],pipes:[m.q],encapsulation:2}),e})()}];let N=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(v)],s.f]}),e})(),M=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[m.c,o.a,a,N,d.i,d.o,b.c],o.a]}),e})()}}]);