(function(e){function t(t){for(var o,r,n=t[0],c=t[1],l=t[2],d=0,u=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,r=1;r<a.length;r++){var n=a[r];0!==i[n]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},r={2:0},i={2:0},s=[];function n(e){return c.p+"js/"+({0:"chunk-common"}[e]||e)+"."+{0:"598e2d78",3:"2860acad",4:"48caf35e",5:"b1b215d0",6:"95fb0e8b",7:"947d1914",8:"34dc4a5e",9:"9adde7dd",10:"2d22e5c6"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={0:1,3:1,4:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var o="css/"+({0:"chunk-common"}[e]||e)+"."+{0:"7fb8e48c",3:"bed28e96",4:"cbe0b12b",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",i=c.p+o,s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var l=s[n],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===i))return t()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){l=u[n],d=l.getAttribute("data-href");if(d===o||d===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],m.parentNode.removeChild(m),a(s)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,a){o=i[e]=[t,a]}));t.push(o[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=n(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,a[1](u)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=d;s.push([0,1]),a()})({0:function(e,t,a){e.exports=a("2f39")},"0bfb":function(e,t,a){e.exports=a.p+"img/MEDRECLOGO.33c3a1c9.png"},"0c49":function(e,t,a){},"139b":function(e,t,a){"use strict";a.d(t,"f",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"g",(function(){return n})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"i",(function(){return u})),a.d(t,"h",(function(){return m}));var o=a("5184");const r=o["a"]`
  mutation SignUp($data: SignUp) {
    SignUp(data: $data) {
      user {
        name
        email
      }
      message
    }
  }
`,i=(o["a"]`
  query Auth($data: Auth) {
    Login(data: $data) {
      token {
        code
        expire
      }
      user {
        id
        profileImage
        name
        email
        role
        createdAt
      }
    }
  }
`,o["a"]`
mutation doLogin($input: LoginInput!){
  	login(input: $input){
   	 token,
    usuario {
      id_usuario,
      nombre_usuario,
      estado,
      rol,
      fk_doctor_id,
      fk_cdi_id
    }
  }
}

`),s=o["a"]`
  mutation RecoveryPasswordMutation($email: String!) {
    RecoveryPassword(email: $email) {
      status
    }
  }
`,n=o["a"]`
  mutation ResetPasswordMutation($token: String!, $password: String!) {
    ResetPassword(token: $token, password: $password) {
      status
    }
  }
`,c=o["a"]`
  mutation docrearPreguntaSeguridad($input: CrearPreguntaSeguridadInput! ) {
    crearPreguntaSeguridad(input: $input) 
  }
`,l=o["a"]`
  mutation docrearPinRecuperacion($input: CrearPinInput!) {
    crearPinRecuperacion(input: $input) 
  }
`,d=o["a"]`
  query dometodosRecuperacion($nombre_usuario: String!) {
    metodosRecuperacion(nombre_usuario: $nombre_usuario) {
      tienePin
      preguntas {
      id_pregunta
      pregunta
      }
    }
  }
`,u=o["a"]`
  mutation dorestaurarClavePorPregunta($input: ValidarPreguntaInput!) {
    restaurarClavePorPregunta(input: $input)
  }
`,m=o["a"]`
  mutation dorestaurarClavePorPin($input: ValidarPinInput!) {
    restaurarClavePorPin(input: $input)
  }
`},"1a21":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"drop display-inline align-center",style:(this.$q.dark.isActive,""),on:{dragover:function(e){e.preventDefault()},drop:e.onDrop}},[e.image?t("div",{staticClass:"q-mb-md",class:{image:!0}},[t("img",{staticClass:"preview",attrs:{src:e.image,alt:""}})]):t("label",{staticClass:"btn display-inline",class:this.$q.dark.isActive?"text-white":" text-black"},[t("div",{class:""===e.info.profileImage?"row justify-center":"row"},[t("div",{class:""===e.info.profileImage?"col-8 self-center q-mt-xl":"col-8"},[""===e.info.profileImage?t("span",{staticClass:"text-caption text-bold text-accent"},[e._v("\n            Por favor selecciona o arrastra el archivo\n          ")]):t("img",{staticClass:"preview",attrs:{src:e.config.api.url+e.info.profileImage}})])]),t("q-input",{staticClass:"kycUploadHolding",attrs:{borderless:"",name:"image",type:"file"},on:{change:e.onChange,input:t=>e.files(t)}})],1)]),e.image?t("q-btn",{staticStyle:{"margin-top":"-20px"},attrs:{size:"sm",round:"",color:"negative",icon:"delete"},on:{click:e.removeFile}}):e._e()],1)},r=[],i=a("f121"),s={name:"upload",props:["info"],data(){return{image:"",file:[],imageName:"",config:i["a"]}},methods:{open(e){this.position=e,this.dialog=!0},onDrop:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files,a=t[0].size/1024/1024;t[0].type.match("image/jpeg|image/png")?a>5?alert("El archivo excede los 5mb"):(this.createFile(t[0]),this.$emit("setImage",t)):alert("Solo se permiten imagenes con formato PNG o JPG")},files(e){var t=e[0].size/1024/1024;if(e[0].type.match("image/jpeg|image/png"))if(t>5)alert("El archivo excede los 5mb");else{this.$emit("setImage",e);let t=e[0].name;e.length>0?t.length>13?this.imageName=t.slice(0,13):this.imageName=t:this.imageName=""}else alert("Solo se permiten imagenes con formato PNG o JPG")},onChange(e){var t=e.target.files;this.createFile(t[0])},createFile(e){var t=e.size/1024/1024;if(e.type.match("image/jpeg|image/png"))if(t>5)alert("El archivo excede los 5mb");else{new Image;var a=new FileReader,o=this;a.onload=function(e){o.image=e.target.result},a.readAsDataURL(e)}else alert("Solo se permiten imagenes con formato PNG o JPG")},removeFile(){this.image="",this.file="",this.$emit("removeFile",{file:""})}}},n=s,c=(a("726c"),a("2877")),l=a("27f9"),d=a("9c40"),u=a("eebe"),m=a.n(u),p=Object(c["a"])(n,o,r,!1,null,null,null);t["default"]=p.exports;m()(p,"components",{QInput:l["a"],QBtn:d["a"]})},"2f39":function(e,t,a){"use strict";a.r(t);a("9f29"),a("7d6e"),a("e54f"),a("62f2"),a("7e6d");var o=a("2b0e"),r=a("1f91"),i=a("42d2"),s=a("b05d"),n=a("2a19");o["a"].use(s["a"],{config:{notify:{},brand:{primary:"#015958",secondary:"#eeeff3",accent:"#69696b",positive:"#0b7c25",negative:"#b20c1f",info:"#31CCEC",warning:"#F2C037"}},lang:r["a"],iconSet:i["a"],plugins:{Notify:n["a"]}});var c=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("q-layout",{staticStyle:{"min-height":"100vh"},attrs:{view:"hHh Lpr lff",container:""}},[e.$store.state.user.isAuthenticated&&"login"!==e.$route.name&&"registro"!==e.$route.name&&"recuperar"!==e.$route.name&&"pedido"!==e.$route.name?t("q-drawer",{staticClass:"sm-hide xs-hide",attrs:{"show-if-above":"",mini:!0,"content-class":"bg-primary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t("q-scroll-area",{staticClass:"fit"},[t("q-list",{attrs:{padding:""}},[t("router-link",{attrs:{to:"/home"}},[t("div",{staticClass:"col-xl-5 col-lg-4 col-md-5 col-sm-8 col-xs-11 q-mb-xl q-mt-lg self-center text-center"},[t("q-img",{staticStyle:{width:"50%"},attrs:{src:a("0bfb")}})],1)]),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mb-md q-mt-lg",attrs:{clickable:""}},[t("q-item-section",{attrs:{avatar:""}},[t("router-link",{attrs:{to:"/home"}},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-account-circle","text-color":"primary"}})],1)],1)],1),"doctor"!==this.$store.state.user.role?t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mb-xl",attrs:{clickable:""}},[t("q-item-section",{attrs:{avatar:""}},[t("router-link",{attrs:{to:"/estadisticas"}},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-google-analytics","text-color":"primary"}})],1)],1)],1):e._e(),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mb-md",attrs:{clickable:""}},[t("q-item-section",{attrs:{avatar:""}},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-cog","text-color":"primary"},on:{click:function(t){return e.myInfo()}}})],1)],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{position:"fixed",bottom:"0","margin-left":"16.5px"},attrs:{clickable:""}},[t("q-item-section",{attrs:{avatar:""}},[t("q-avatar",{staticClass:"q-mb-md",staticStyle:{cursor:"pointer"},attrs:{color:"white",size:"lg",icon:"mdi-logout","text-color":"primary"},on:{click:function(t){e.confirm=!0}}})],1)],1)],1)],1)],1):e._e(),e.$store.state.token?t("div",{staticClass:"menu-bottom md-hide lg-hide xl-hide bg-white text-primary",attrs:{elevated:""}},[t("q-separator"),t("q-tabs",[t("q-route-tab",{attrs:{to:"",exact:""}},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{size:"md",color:"primary"},on:{click:function(t){return e.myInfo()}}},[""!==this.user.profileImage?t("img",{attrs:{src:e.config.api.url+this.user.profileImage}}):e._e(),""===this.user.profileImage?t("img",{attrs:{src:a("59e2")}}):e._e()])],1),t("q-route-tab",{attrs:{icon:"mdi-badge-account",to:"/home",exact:""}}),t("q-route-tab",{attrs:{icon:"mdi-logout",to:"",exact:""},on:{click:function(t){e.confirm=!0}}})],1)],1):e._e(),t("q-page-container",{staticClass:"bg-secondary"},[t("q-page",{style:this.$q.screen.lt.sm?"margin-left: 0px; border-radius: 0px 0px 0px 0px":e.$store.state.user.isAuthenticated?"margin-left: 15px; border-radius: 30px 0px 0px 30px":""},[t("Index")],1)],1),e.$store.state.user.isAuthenticated&&"login"!==e.$route.name&&"registro"!==e.$route.name&&"recuperar"!==e.$route.name&&"pedido"!==e.$route.name?t("navbar",{staticClass:"q-pa-sm bg-primary md-hide lg-hide xl-hide full-width fixed-bottom"},[t("div",{staticClass:"row full-width justify-evenly items-center"},[t("div",{staticClass:"col-1"},[t("router-link",{attrs:{to:"/home"}},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-account-circle","text-color":"primary"}})],1)],1),"doctor"!==this.$store.state.user.role?t("div",{staticClass:"col-1"},[t("router-link",{attrs:{to:"/estadisticas"}},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-google-analytics","text-color":"primary"}})],1)],1):e._e(),t("div",{staticClass:"col-1"},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-cog","text-color":"primary"},on:{click:function(t){return e.myInfo()}}})],1),t("div",{staticClass:"col-1"},[t("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-logout","text-color":"primary"},on:{click:function(t){e.confirm=!0}}})],1)])]):e._e()],1),t("q-dialog",{model:{value:e.myInfoD,callback:function(t){e.myInfoD=t},expression:"myInfoD"}},[t("q-card",{staticStyle:{width:"500px"}},[t("q-card-section",["cdi"===this.$store.state.user.role?t("div",{staticClass:"text-h6 text-grey-8"},[e._v("Cuenta CDI")]):e._e(),"doctor"===this.$store.state.user.role?t("div",{staticClass:"text-h6 text-grey-8"},[e._v("Cuenta doctor")]):e._e(),"admin"===this.$store.state.user.role?t("div",{staticClass:"text-h6 text-grey-8"},[e._v("Cuenta Administrador")]):e._e()]),t("q-separator"),"cdi"===this.$store.state.user.role?t("q-card-section",{staticClass:"scroll text-center"},[t("p",[e._v("Información general de la cuenta")]),e.userCDIProfile?t("q-scroll-area",{staticStyle:{height:"60vh"},attrs:{"thumb-style":e.thumbStyle,"bar-style":e.barStyle}},[t("div",{staticClass:"row justify-center"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",label:"Nombre de CDI"},model:{value:e.userCDIProfile.nombre,callback:function(t){e.$set(e.userCDIProfile,"nombre",t)},expression:"userCDIProfile.nombre"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",disable:"",color:"deep-purple-6",label:"Número del CDI"},model:{value:e.userCDIProfile.numero_cdi,callback:function(t){e.$set(e.userCDIProfile,"numero_cdi",t)},expression:"userCDIProfile.numero_cdi"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",disable:"",color:"deep-purple-6",label:"Encargado"},model:{value:e.userCDIProfile.encargado,callback:function(t){e.$set(e.userCDIProfile,"encargado",t)},expression:"userCDIProfile.encargado"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",disable:"",color:"deep-purple-6",label:"Cuadrante"},model:{value:e.userCDIProfile.cuadrante,callback:function(t){e.$set(e.userCDIProfile,"cuadrante",t)},expression:"userCDIProfile.cuadrante"}})],1)])])]),t("div",{staticClass:"row q-mt-lg justify-center"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",value:this.$store.state.user.nombre_usuario,label:"Nombre de usuario",rules:[e=>e.length>=3||"El nombre de usuario debe tener al menos 3 caracteres"]},on:{blur:e.validateCDICredentialsInputs}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Contraseña",rules:[e=>e.length>=6||"La contraseña debe tener al menos 6 caracteres"]},on:{blur:e.validateCDICredentialsInputs},model:{value:e.cdi_contrasena,callback:function(t){e.cdi_contrasena=t},expression:"cdi_contrasena"}})],1)])]),"admin"!==this.user.role?t("div",{staticClass:"col-xl-8 column col-lg-8 col-md-8 col-sm-12 col-xs-12"},[t("q-btn",{staticClass:"fullwidth text-white q-mt-xs bg-primary",attrs:{unelevated:"",loading:e.loader,label:"Modificar credenciales",disable:!e.isValidCredencialesCDI},on:{click:function(t){return e.actualizarUsuario(e.userCDIProfile.usuarios)}}})],1):e._e()])]):e._e()],1):e._e(),"doctor"===this.$store.state.user.role?t("q-card-section",{staticClass:"scroll text-center"},[t("p",[e._v("Información básica de la cuenta")]),e.userDoctorProfile.persona?t("q-scroll-area",{staticStyle:{height:"60vh"},attrs:{"thumb-style":e.thumbStyle,"bar-style":e.barStyle}},[t("div",{staticClass:"row justify-center"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Nombre de doctor"},model:{value:e.userDoctorProfile.persona.nombre1,callback:function(t){e.$set(e.userDoctorProfile.persona,"nombre1",t)},expression:"userDoctorProfile.persona.nombre1"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Documento de identidad"},model:{value:e.userDoctorProfile.persona.cedula_identidad,callback:function(t){e.$set(e.userDoctorProfile.persona,"cedula_identidad",t)},expression:"userDoctorProfile.persona.cedula_identidad"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Número de carnet"},model:{value:e.userDoctorProfile.numero_carnet,callback:function(t){e.$set(e.userDoctorProfile,"numero_carnet",t)},expression:"userDoctorProfile.numero_carnet"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Especialidad"},model:{value:e.userDoctorProfile.area_de_trabajo,callback:function(t){e.$set(e.userDoctorProfile,"area_de_trabajo",t)},expression:"userDoctorProfile.area_de_trabajo"}})],1)])])]),e.userDoctorProfile.usuarios?t("div",{staticClass:"row q-mt-lg justify-center"},[t("p",[e._v("Credenciales de acceso:")]),t("div",{staticClass:"col-12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",label:"Nombre de usuario",rules:[e=>e.length>=3||"El nombre de usuario debe tener al menos 3 caracteres"]},on:{blur:e.validateDoctorCredentialsInputs},model:{value:e.userDoctorProfile.usuarios.nombre_usuario,callback:function(t){e.$set(e.userDoctorProfile.usuarios,"nombre_usuario",t)},expression:"userDoctorProfile.usuarios.nombre_usuario"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Contraseña",rules:[e=>e.length>=6||"La contraseña debe tener al menos 6 caracteres"]},on:{blur:e.validateDoctorCredentialsInputs},model:{value:e.doctor_contrasena,callback:function(t){e.doctor_contrasena=t},expression:"doctor_contrasena"}})],1)])]),"doctor"===this.$store.state.user.role?t("div",{staticClass:"col-xl-8 column col-lg-8 col-md-8 col-sm-12 col-xs-12"},[t("q-btn",{staticClass:"fullwidth text-white q-mt-xs bg-primary",attrs:{unelevated:"",loading:e.loader,label:"Modificar credenciales",disable:!e.isValidCredencialesDoctor},on:{click:function(t){return e.actualizarUsuario(e.userDoctorProfile.usuarios)}}})],1):e._e()]):e._e()]):e._e()],1):e._e(),"admin"===this.$store.state.user.role?t("q-card-section",{staticClass:"scroll text-center"},[e.userAdminProfile?t("q-scroll-area",{staticStyle:{height:"60vh"},attrs:{"thumb-style":e.thumbStyle,"bar-style":e.barStyle}},[t("div",{staticClass:"row q-mt-lg justify-center"},[t("p",[e._v("Credenciales de acceso")]),t("div",{staticClass:"col-12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",label:"Nombre de usuario",rules:[e=>e.length>=3||"El nombre de usuario debe tener al menos 3 caracteres"]},on:{blur:e.validateUserCredentialsInputs},model:{value:e.userAdminProfile.nombre_usuario,callback:function(t){e.$set(e.userAdminProfile,"nombre_usuario",t)},expression:"userAdminProfile.nombre_usuario"}})],1),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Contraseña",rules:[e=>e.length>=6||"La contraseña debe tener al menos 6 caracteres"]},on:{blur:e.validateUserCredentialsInputs},model:{value:e.admin_contrasena,callback:function(t){e.admin_contrasena=t},expression:"admin_contrasena"}})],1)])]),"admin"===this.$store.state.user.role?t("div",{staticClass:"col-xl-8 column col-lg-8 col-md-8 col-sm-12 col-xs-12"},[t("q-btn",{staticClass:"fullwidth text-white q-mt-xs bg-primary",attrs:{unelevated:"",loading:e.loader,label:"Modificar credenciales",disable:!e.isValidCredencialesAdmin},on:{click:function(t){return e.actualizarUsuario(e.userAdminProfile)}}})],1):e._e()])]):e._e()],1):e._e(),t("div",{staticClass:"row justify-center"},[t("q-btn",{staticClass:"q-mb-sm",attrs:{color:"primary",label:"Establecer preguntas de seguridad"},on:{click:function(t){e.seguridadModal=!0}}}),t("q-btn",{staticClass:"q-mb-sm",attrs:{color:"primary",label:"Establecer seguridad de PIN"},on:{click:function(t){e.pinModal=!0}}})],1),t("q-separator"),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cerrar",color:"primary"}})],1)],1)],1),t("q-dialog",{attrs:{persistent:""},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}},[t("q-card",{staticClass:"text-white bg-primary"},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Confirmar")])]),t("q-card-section",{staticClass:"row items-center text-center"},[t("span",{staticClass:"q-ml-sm text-white"},[e._v("¿Estas seguro que deseas salir?")])]),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"white"}}),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cerrar sesion",color:"white"},on:{click:function(t){return e.destroy()}}})],1)],1)],1),t("q-dialog",{attrs:{persistent:""},model:{value:e.addCorreoM,callback:function(t){e.addCorreoM=t},expression:"addCorreoM"}},[t("q-card",{staticClass:"text-accent bg-white"},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Agregar correo")])]),t("q-card-section",{staticClass:"row items-center text-center"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("q-input",{attrs:{filled:"",label:"Nombre",rules:[e=>!!e||"Este campo es obligatorio",e=>e.length>=3||"Mínimo 3 caracteres",e=>e.length<=40||"Máximo 40 caracteres",e=>/^([\sa-zA-ZñÑáéíóúÁÉÍÓÚ]{3,40})*$/.test(e)||"Solo se permiten caracteres"]},model:{value:e.nameA,callback:function(t){e.nameA=t},expression:"nameA"}})],1),t("div",{staticClass:"col-12"},[t("q-input",{attrs:{filled:"",label:"Correo",rules:[e=>!!e||"Este campo es obligatorio",e=>e.length<=40||"Máximo 40 caracteres",t=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.emailA)||"Formato de correo inválido"]},model:{value:e.emailA,callback:function(t){e.emailA=t},expression:"emailA"}})],1)])]),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"accent"}}),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Agregar",color:"primary",disable:""===e.emailA||""===e.nameA||!1===e.valid},on:{click:function(t){return e.createCorreo()}}})],1)],1)],1),t("q-dialog",{model:{value:e.seguridadModal,callback:function(t){e.seguridadModal=t},expression:"seguridadModal"}},[t("q-card",{staticClass:"q-pa-md"},[t("span",{staticClass:"text-center q-my-sm text-bold"},[e._v("Es conveniente activar las preguntas de seguridad para recuperar tu\n        contraseña en casos de olvido o extravíos.")]),t("div",{staticClass:"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs"},[t("div",{staticClass:"row q-mt-xs"},[t("div",{staticClass:"col-12 q-mb-xs"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Establece la pregunta",type:"text"},model:{value:e.pregunta1,callback:function(t){e.pregunta1=t},expression:"pregunta1"}})],1),t("div",{staticClass:"col-12 q-mb-xs"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Respuesta",type:"password"},model:{value:e.respuesta1,callback:function(t){e.respuesta1=t},expression:"respuesta1"}})],1),t("q-btn",{staticClass:"q-my-md",attrs:{disable:""===e.pregunta1||""===e.respuesta1||e.pregunta1.length<3||e.respuesta1.length<3,color:"primary",label:"Actualizar seguridad"},on:{click:function(t){return e.guardarPreguntasSeguridad()}}})],1)])])],1),t("q-dialog",{model:{value:e.pinModal,callback:function(t){e.pinModal=t},expression:"pinModal"}},[t("q-card",{staticClass:"q-pa-md"},[t("span",{staticClass:"text-center q-my-sm text-bold"},[e._v("Es conveniente activar el "),t("b",[e._v("PIN")]),e._v(" de seguridad como otra opción\n        para recuperar tu\n        contraseña en casos de olvido o extravíos.")]),t("div",{staticClass:"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs"},[t("div",{staticClass:"row q-mt-xs"},[t("div",{staticClass:"col-12 q-mb-xs"},[t("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Establece el PIN de seguridad (min 4 dígitos - max 6 dígitos)",type:"password"},model:{value:e.pin,callback:function(t){e.pin=t},expression:"pin"}})],1),t("q-btn",{staticClass:"q-my-md",attrs:{disable:""==e.pin||e.pin.length<4||e.pin.length>6,color:"primary",label:"Actualizar seguridad "},on:{click:function(t){return e.guardarPinSeguridad()}}})],1)])])],1)],1)},l=[],d=(a("14d9"),a("5f87")),u=a("81ad"),m=a("7122"),p=a("6d6b"),f=a("c6a2"),g=a("139b"),h=a("f121"),b=a("c1df"),v=a.n(b),_=a("1a21"),y={name:"App",components:{Index:u["default"],cabecera:m["default"],pie:p["default"],upload:_["default"]},data(){return{emailA:"",nameA:"",addCorreoM:!1,allcorreos:[],valid:!1,loaderCorreos:!1,config:h["a"],myInfoD:!1,loader:!1,drawer:!1,confirm:!1,profileImage:[],updateSeguridad:!1,pregunta1:"",pregunta2:"",pregunta3:"",respuesta1:"",respuesta2:"",respuesta3:"",pin:"",pinModal:!1,email:"",name:"",user:{},userCDIProfile:{},userDoctorProfile:{},userAdminProfile:{},cdi_contrasena:"",doctor_contrasena:"",admin_contrasena:"",isValidCredencialesCDI:!1,isValidCredencialesDoctor:!1,isValidCredencialesAdmin:!1,seguridadModal:!1,thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},expireDate:"",totalTime:""}},created(){this.infoUser()},watch:{myInfoD(e){e&&this.getSeguridad()},nameA(e){""===e&&e.length>=3&&e.length<=40&&/^([\sa-zA-ZñÑáéíóúÁÉÍÓÚ]{3,40})*$/.test(e)?this.valid=!0:this.valid=!1},emailA(e){e&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e)?this.valid=!0:this.valid=!1)}},computed:{createdAtUser(){return v()(this.user.createdAt).format("DD-MM-YYYY")},createdAt(){return v()(this.user.createdAt).format("DD-MM-YYYY")}},methods:{guardarPreguntasSeguridad(){this.$apollo.mutate({mutation:g["b"],variables:{input:{pregunta:this.pregunta1,respuesta:this.respuesta1,nombre_usuario:this.$store.state.user.nombre_usuario}}}).then((e=>{this.emailA="",this.nameA="",this.pregunta1="",this.respuesta1="",this.seguridadModal=!1,this.myInfoD=!1,this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Pregunta de seguridad actualizada correctamente"})})).catch((e=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",e),this.$q.notify({message:e.message.split("GraphQL error:"),color:"negative"})}))},guardarPinSeguridad(){this.$apollo.mutate({mutation:g["a"],variables:{input:{pin:this.pin,nombre_usuario:this.$store.state.user.nombre_usuario}}}).then((e=>{this.emailA="",this.nameA="",this.pregunta1="",this.respuesta1="",this.pinModal=!1,this.pin="",this.seguridadModal=!1,this.myInfoD=!1,this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Pin de seguridad actualizada correctamente"})})).catch((e=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",e),this.$q.notify({message:e.message.split("GraphQL error:"),color:"negative"})}))},editarSeguridad(){this.$apollo.mutate({mutation:f["b"],variables:{data:{pregunta1:this.pregunta1,respuesta1:this.respuesta1,pregunta2:this.pregunta2,respuesta2:this.respuesta2,pregunta3:this.pregunta3,respuesta3:this.respuesta3,UserId:this.user.id}}}).then((e=>{this.emailA="",this.nameA="",this.pregunta1="",this.respuesta1="",this.pregunta2="",this.respuesta2="",this.pregunta3="",this.respuesta3="",this.seguridadModal=!1,this.myInfoD=!1,this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Seguridad actualizada correctamente"})})).catch((e=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",e),this.$q.notify({message:e.message.split("GraphQL error:"),color:"negative"})}))},getSeguridad(){this.$apollo.query({query:g["d"],fetchPolicy:"network-only",variables:{nombre_usuario:this.$store.state.user.nombre_usuario}}).then((e=>{if(e.data){const t=e.data.metodosRecuperacion;this.pregunta1=t.preguntas[0].pregunta||""}})).catch((e=>{this.updateSeguridad=!1,this.$isDev&&console.log("hubo un error: ",e)}))},async infoUser(){"cdi"===this.$store.state.user.role?await this.obtenerInformacionCDI():"doctor"===this.$store.state.user.role?await this.obtenerInformacionDoctor():"admin"===this.$store.state.user.role&&await this.obtenerInformacionAdmin()},obtenerInformacionCDI(){this.$apollo.query({query:f["y"],fetchPolicy:"network-only",variables:{id_cdi:this.$store.state.user.cdi_id}}).then((e=>{this.response=!0,this.userCDIProfile=Object.assign({},e.data.cdi)})).catch((e=>{console.log("errpr looc",e),this.$isDev&&console.log("hubo un error: ",e)}))},obtenerInformacionDoctor(){this.$apollo.query({query:f["z"],fetchPolicy:"network-only",variables:{id_doctor:this.$store.state.user.doctor_id}}).then((e=>{this.response=!0,this.userDoctorProfile=Object.assign({},e.data.doctorPacientes)})).catch((e=>{console.log("errpr looc",e),this.$isDev&&console.log("hubo un error: ",e)}))},obtenerInformacionAdmin(){this.$apollo.query({query:f["q"],fetchPolicy:"network-only",variables:{id_usuario:this.$store.state.user.id}}).then((e=>{this.response=!0,this.userAdminProfile=Object.assign({},e.data.usuario)})).catch((e=>{console.log("errpr looc",e),this.$isDev&&console.log("hubo un error: ",e)}))},validateCDICredentialsInputs(){const e=this.cdi_contrasena.length>=6,t=this.userCDIProfile.usuarios.nombre_usuario.length>=3;this.isValidCredencialesCDI=e&&t},validateDoctorCredentialsInputs(){const e=this.doctor_contrasena.length>=6,t=this.userDoctorProfile.usuarios.nombre_usuario.length>=3;this.isValidCredencialesDoctor=e&&t},validateUserCredentialsInputs(){const e=this.admin_contrasena.length>=6,t=this.userAdminProfile.nombre_usuario.length>=3;this.isValidCredencialesAdmin=e&&t},actualizarUsuario(e){this.loader=!0,this.$apollo.mutate({mutation:f["E"],variables:{id_usuario:this.$store.state.user.user_id,input:{contrasena:"cdi"===this.$store.state.user.role?this.cdi_contrasena:this.doctor_contrasena||this.admin_contrasena,nombre_usuario:this.$store.state.user.nombre_usuario}}}).then((e=>{this.loader=!1,this.viewType="userList",this.cdi_contrasena="",this.doctor_contrasena="",this.admin_contrasena="",this.infoUser(),this.$q.notify({message:"Usuario actualizado",color:"positive"})})).catch((e=>{this.loader=!1,this.$q.notify({message:e.message.split("GraphQL error:"),color:"negative"})}))},myInfo(){this.myInfoD=!0,this.name=this.user.name,this.email=this.user.email},setImage(e){this.file=e[0],this.profileImage=e[0]},removeFile(e){this.file=e.file},modificarDatos(){this.loader=!0;const e={name:this.name,email:this.email};return this.$apollo.mutate({mutation:f["D"],variables:{id:this.$store.state.user.id,data:e}}).then((e=>{this.loader=!1,this.infoUser(),this.myInfoD=!1,this.$q.notify({message:"Datos actualizados",color:"positive"})})).catch((e=>{this.loader=!1,console.log("error: ",e)}))},myCorreos(){this.loaderCorreos=!0,this.$apollo.query({query:f["A"],fetchPolicy:"network-only"}).then((e=>{this.loaderCorreos=!1,this.allcorreos=Object.assign([],e.data.MyCorreos)})).catch((e=>{this.loaderCorreos=!1,this.$q.notify({message:e.message.split("GraphQL error:"),color:"negative"})}))},addCorreoModal(){this.addCorreoM=!0},createCorreo(){this.loader=!0;let e={email:this.emailA,name:this.nameA,userId:this.user.id};this.$apollo.mutate({mutation:f["v"],variables:{data:e}}).then((e=>{this.loader=!1,this.myCorreos(),this.emailA="",this.nameA="",this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Tu correo fue agregado"})})).catch((e=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",e),this.$q.notify({message:e.message.split("GraphQL error:"),color:"negative"})}))},deleteCorreo(e){this.$apollo.mutate({mutation:f["x"],variables:{correoID:e}}).then((e=>{this.myCorreos(),this.$q.notify({message:"Correo borrado con éxito",color:"positive"})})).catch((e=>{console.log("error delete correo: ",e),this.$q.notify({message:e.message.split("GraphQL error:"),color:"negative"})}))},destroy(){Object(d["c"])(),this.$store.commit("logout"),this.$router.push({name:"login"})}}},C=y,w=(a("384e"),a("2877")),A=a("9404"),$=a("823b"),x=a("4d5a"),I=a("4983"),D=a("1c1c"),j=a("068f"),q=a("66e5"),P=a("4074"),k=a("cb32"),S=a("eb85"),E=a("429b"),z=a("7867"),U=a("09e3"),M=a("9989"),O=a("24e8"),N=a("f09f"),L=a("a370"),T=a("27f9"),R=a("9c40"),Q=a("4b7e"),G=a("714f"),B=a("7f67"),V=a("eebe"),F=a.n(V),H=Object(w["a"])(C,c,l,!1,null,null,null),Y=H.exports;F()(H,"components",{QDrawer:A["a"],QTabPanel:$["a"],QLayout:x["a"],QScrollArea:I["a"],QList:D["a"],QImg:j["a"],QItem:q["a"],QItemSection:P["a"],QAvatar:k["a"],QSeparator:S["a"],QTabs:E["a"],QRouteTab:z["a"],QPageContainer:U["a"],QPage:M["a"],QDialog:O["a"],QCard:N["a"],QCardSection:L["a"],QInput:T["a"],QBtn:R["a"],QCardActions:Q["a"]}),F()(H,"directives",{Ripple:G["a"],ClosePopup:B["a"]});var J=a("4360"),X=a("8c4f");function Z(e){return()=>a("ef9d")(`./components${e}.vue`)}var K=a("323e"),W=a.n(K),ee=(a("a5d8"),[{path:"/home",name:"home",components:{default:Z("/modules/home/home")},meta:{requiresAuth:!0,roles:["Paciente","admin","Encargado","doctor"]},props:!0},{path:"/estadisticas",name:"estadisticas",components:{default:Z("/modules/estadisticas/estadisticas")},meta:{requiresAuth:!0,roles:["Paciente","admin","Encargado","doctor"]},props:!0}]),te=[{path:"/login",name:"login",component:Z("/modules/public/login")}];o["a"].use(X["a"]);const ae=[{path:"/404",name:"Error404",component:Z("/Error404")},{path:"/",name:"login",component:Z("/modules/public/login")}],oe=ae.concat(ee).concat(te),re=new X["a"]({scrollBehavior:()=>({y:0}),routes:oe});re.beforeEach(((e,t,a)=>{const o=Object(d["a"])();""===J["a"].state.user.role&&o&&Object(d["b"])();const r="login"===e.name||"/"===e.path||"/login"===e.path;o&&r?a({name:"home"}):o||r?a():a({name:"login"})})),re.beforeResolve(((e,t,a)=>{e.name&&W.a.start(),a()})),re.afterEach(((e,t)=>{W.a.done()}));var ie=re,se=async function(){const e="function"===typeof J["a"]?await Object(J["a"])({Vue:o["a"]}):J["a"],t="function"===typeof ie?await ie({Vue:o["a"],store:e}):ie;e.$router=t;const a={router:t,store:e,render:e=>e(Y),el:"#q-app"};return{app:a,store:e,router:t}},ne=a("a925"),ce={failed:"Action failed",success:"Action was successful"},le={"en-us":ce};o["a"].use(ne["a"]);const de=new ne["a"]({locale:"en-us",fallbackLocale:"en-us",messages:le});var ue=({app:e})=>{e.i18n=de},me=a("bc3a"),pe=a.n(me);o["a"].prototype.$axios=pe.a;var fe=a("74ca"),ge=a("d634"),he=a("2bf2"),be=a("cf67"),ve=a("e13b"),_e=a("c0cc"),ye=a("4518");const Ce=!1,we=Object(be["createUploadLink"])({uri:h["a"].graphql.url.http}),Ae=new _e["a"]({uri:h["a"].graphql.url.ws,options:{reconnect:!0}}),$e={applyMiddleware(e,t){e.variables={...e.variables,authorization:localStorage.getItem("token")},t()}};Ae.subscriptionClient.use([$e]);const xe=Object(ge["split"])((({query:e})=>{const{kind:t,operation:a}=Object(ye["l"])(e);return"OperationDefinition"===t&&"subscription"===a}),Ae,we),Ie=new ge["ApolloLink"](((e,t)=>{const a=localStorage.getItem("token");return a&&!Object(d["a"])()&&ie.push({path:"/login"}),e.setContext((e=>({...e,headers:{...e.headers,authorization:a||""}}))),t(e)})),De=Object(ve["a"])((({graphQLErrors:e,networkError:t,operation:a,forward:o})=>{e&&e.map((({message:e,locations:t,path:a})=>{Ce&&console.log(`[GraphQL error]: Message: ${e}, Location: ${t}, Path: ${a}`),"not-authorized-invalid-token"!==e&&"not-authorized-token-expired"!==e&&"not-authenticated"!==e||(Object(d["a"])(),ie.push({path:"/login"}))}))})),je=new fe["a"]({link:ge["ApolloLink"].from([Ie,De,xe]),cache:new he["a"]({addTypename:!1}),connectToDevTools:Ce});var qe=je,Pe=a("4eb5"),ke=a.n(Pe),Se=a("1321"),Ee=a.n(Se);function ze(e){return new Promise((t=>setTimeout(t,e)))}async function Ue({timeout:e=500}={}){const t=`${Date.now()}-${Math.random().toString(36).slice(2,9)}`;if("undefined"!==typeof BroadcastChannel)try{const o=new BroadcastChannel("cdi_single_tab_channel");let r=!1;o.onmessage=e=>{const a=e.data||{};"tab-check"===a.type&&a.id!==t&&o.postMessage({type:"tab-here",id:t}),"tab-here"===a.type&&a.id!==t&&(r=!0)},o.postMessage({type:"tab-check",id:t});const i=new Promise((t=>{const a=()=>t(r);setTimeout(a,e)})),s=await i;return s?(o.close(),!1):(window.addEventListener("beforeunload",(()=>{try{o.postMessage({type:"tab-closed",id:t})}catch(e){}o.close()})),!0)}catch(a){console.warn("BroadcastChannel failed, falling back to localStorage",a)}try{const n="cdi_single_tab_leader",c=Date.now(),l={id:t,ts:c};localStorage.setItem(n,JSON.stringify(l));let d=!1;function u(e){if(e.key&&e.key===n)try{const a=JSON.parse(e.newValue);a&&a.id&&a.id!==t&&(d=!0)}catch(a){}}window.addEventListener("storage",u),await ze(e);try{const p=JSON.parse(localStorage.getItem(n)||"null");p&&p.id&&p.id!==t&&(d=!0)}catch(a){}if(d)return window.removeEventListener("storage",u),!1;const m=setInterval((()=>{try{localStorage.setItem(n,JSON.stringify({id:t,ts:Date.now()}))}catch(a){}}),1e3);return window.addEventListener("beforeunload",(()=>{clearInterval(m);try{const e=JSON.parse(localStorage.getItem(n)||"null");e&&e.id===t&&localStorage.removeItem(n)}catch(a){}})),!0}catch(a){return console.warn("single-tab fallback failed, allowing tab",a),!0}}var Me=async({Vue:e})=>{const t=await Ue({timeout:400});if(!t){const e=document.createElement("div");return e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.right="0",e.style.bottom="0",e.style.zIndex="999999",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.background="white",e.style.color="#333",e.style.fontFamily="Arial, Helvetica, sans-serif",e.innerHTML='<div style="max-width:90%;text-align:center;padding:24px;"><h2>Ya tienes una instancia de la aplicación en este navegador</h2><p>Por seguridad, la aplicación no puede abrirse en más de una pestaña del mismo navegador. Cierre la otra pestaña e inténtelo de nuevo.</p></div>',void document.body.appendChild(e)}ke.a.config.autoSetContainer=!0,e.use(ke.a),e.use(Ee.a),e.component("apexchart",Ee.a),e.prototype.$apollo=qe,e.prototype.$axios=pe.a,e.prototype.$moment=v.a};const Oe="";async function Ne(){const{app:e,store:t,router:a}=await se();let r=!1;const i=e=>{r=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),n=[ue,void 0,Me];for(let l=0;!1===r&&l<n.length;l++)if("function"===typeof n[l])try{await n[l]({app:e,router:a,store:t,Vue:o["a"],ssrContext:null,redirect:i,urlPath:s,publicPath:Oe})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new o["a"](e)}Ne()},"384e":function(e,t,a){"use strict";a("0c49")},4360:function(e,t,a){"use strict";var o=a("2b0e"),r=a("2f62"),i=a("f121"),s=a("bfa9");o["a"].use(r["a"]);const n=new s["a"]({storage:window.localStorage});let c={id:"",fullName:"",profileImage:"",isAuthenticated:!1,role:"",email:"",user:"",user_id:"",cdi_id:"",doctor_id:""};t["a"]=new r["a"].Store({state:{user:{id:"",fullName:"",profileImage:"",isAuthenticated:!1,role:"",email:"",user:"",user_id:"",cdi_id:"",doctor_id:""},url_base:i["a"].api.url},mutations:{setUser(e,t){e.user=t},setFullName(e,t){e.user.fullName=t},setRole(e,t){e.user.role=t},setAuthenticated(e,t){e.user.isAuthenticated=t},setProfileImage(e,t){e.user.profileImage=t},logout(e){e.user=c}},getters:{authenticate:e=>e.user.isAuthenticated},plugins:[n.plugin]})},4678:function(e,t,a){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="4678"},"59e2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAzVJREFUaN7tmctvTVEUxr9TqsFFVA2EzgQh0iboSww0Ruae7UREDdTUI+aYVlsl/oTGSJF4ToxER0SEERpNiqSiadpK+jPYu0lz3XPO3vuc2yvcLzmDu8++3/rWfqyz9tpSFVX834jyIAGWSWqRdFDSHkk7JG2SVLBdpiR9kfRO0qik55JeRlE0X1HvgUbgOjCGPz4D14DNlRC+EbgNzAYIL8YscBPYsFTiTwLfcxBejK/A0XIKrwXulEF4MQaB5XmLXwU8WALxC7gHrMxz5H3EzwB9QCuw2j6twA37zseJ7DOB37IZA5oSuJrxi1iDWcV3eY58kwNns+dMhG1sTKj0iTZ9Htz9HrxfCQmxmDjvgxYP7jZPbr+lBGzB/yNV8OAveHLPEPPFromx0Stphfe0ucM3B6uTdM7JAUxi1h0gaqdH310B/N3AH3pLzUCLpJAEy8fprgD+Rkl7XRw4GEAuST1Ac1on26cn0EaniwN7AsnrJI0kOWHfjSh8f6VrA954RohizGLifJuNNgWg3bZlTb9fF+uNSjjwXVJ94AiVG9+iKNq4uKHUEnKO5xXAmuKGmhCWvwml0tUpZV9C8zKH+B/29zqZ0Jy1iPDTxYHxAAfmJD2S9FTSC0lvoyiaXtwBWCXzsTsg6ZB9fKPReGoP4K5HVPgI9ALeMwbUA+eBTx72hl2ILzsQ/bL9MudLwArgiuVMw0UXwrRUdw7odNDm68ghy52EfS5ENZiiUxwu5C1+ke1LKcvVLWpiKmZxKFsBCmhIsHvVhyjpQHOqjA6cjrEZe6BJIhuKIZsG2ssgvsNyl0J/CGED8C2GcBLoyFH8fstZChMEhOkF4uMJa3IGOJNReAScJbnMciTr6NwiGY+B3QG8u4EnKdwDmcRbQ7XA/RRD85jy4wlgbQLXOkx1+6H9TxKcSotOyRUmjxmWdNih+7ykD5LeS5q0beslbZO0VW4Z8IikY8X5VB4zMUT5MeAy8lkcOYYp9+WNCbJuWA8nNmAuInyKtHGYwZyXl/4YC2zGpB0+KfECPgFXyXjJl9c1a41M0alTpvSxXeYEtviadUxmY7+S9EzSaMWvWauo4h/Ab6sG50ZBkYERAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTA3VDE4OjAxOjM4KzAwOjAwosyMngAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0wN1QxODowMTozOCswMDowMNORNCIAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stSl9QcXZYOE2/oIDiAAAAAElFTkSuQmCC"},"5f87":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));var o=a("4360");a("c1df");async function r(e){window.localStorage.setItem("user",e.usuario.nombre_usuario||""),window.localStorage.setItem("status",e.usuario.status||""),window.localStorage.setItem("user_id",e.usuario.id_usuario),window.localStorage.setItem("doctor_id",e.usuario.fk_doctor_id),window.localStorage.setItem("cdi_id",e.usuario.fk_cdi_id),window.localStorage.setItem("isAuthenticated",!0),window.localStorage.setItem("role",e.usuario.rol),window.localStorage.setItem("token",e.token),window.localStorage.setItem("expire","");const t=window.localStorage.getItem("user"),a=window.localStorage.getItem("user_id"),r=window.localStorage.getItem("doctor_id"),i=window.localStorage.getItem("cdi_id"),s=window.localStorage.getItem("role"),n=window.localStorage.getItem("isAuthenticated");await o["a"].commit("setUser",{fullName:"",nombre_usuario:t,id:a,profileImage:"",isAuthenticated:n,email:"",role:s,doctor_id:r,cdi_id:i})}function i(){window.localStorage.removeItem("user"),window.localStorage.removeItem("user_id"),window.localStorage.removeItem("token"),window.localStorage.removeItem("expire"),window.localStorage.removeItem("isAuthenticated"),window.localStorage.removeItem("profileImage"),window.localStorage.removeItem("role"),window.localStorage.removeItem("status"),o["a"].commit("setUser",{fullName:"",id:"",profileImage:"",isAuthenticated:!1,email:"",role:""})}function s(){const e=window.localStorage.getItem("token");o["a"].state.user.isAuthenticated;return!!e}function n(){if(s()){const e=window.localStorage.getItem("user"),t=window.localStorage.getItem("user_id"),a=window.localStorage.getItem("role"),r=window.localStorage.getItem("isAuthenticated"),i=window.localStorage.getItem("doctor_id"),s=window.localStorage.getItem("cdi_id");o["a"].commit("setUser",{fullName:e,id:t,profileImage:data.store.profileImage,isAuthenticated:"true"===r,role:a,doctor_id:i,cdi_id:s})}}},"6d6b":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div")},r=[],i={name:"footer"},s=i,n=a("2877"),c=Object(n["a"])(s,o,r,!1,null,null,null);t["default"]=c.exports},7122:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div")},r=[],i={name:"header"},s=i,n=a("2877"),c=Object(n["a"])(s,o,r,!1,null,null,null);t["default"]=c.exports},"726c":function(e,t,a){"use strict";a("b7ca")},"7e6d":function(e,t,a){},"81ad":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("router-view",{attrs:{id:"application"}})},r=[],i={name:"index"},s=i,n=a("2877"),c=Object(n["a"])(s,o,r,!1,null,null,null);t["default"]=c.exports},b7ca:function(e,t,a){},c6a2:function(e,t,a){"use strict";a.d(t,"w",(function(){return i})),a.d(t,"s",(function(){return g})),a.d(t,"o",(function(){return h})),a.d(t,"n",(function(){return b})),a.d(t,"m",(function(){return v})),a.d(t,"q",(function(){return _})),a.d(t,"t",(function(){return y})),a.d(t,"z",(function(){return C})),a.d(t,"A",(function(){return w})),a.d(t,"v",(function(){return A})),a.d(t,"x",(function(){return $})),a.d(t,"j",(function(){return x})),a.d(t,"i",(function(){return I})),a.d(t,"p",(function(){return D})),a.d(t,"g",(function(){return j})),a.d(t,"k",(function(){return q})),a.d(t,"l",(function(){return P})),a.d(t,"c",(function(){return k})),a.d(t,"G",(function(){return S})),a.d(t,"I",(function(){return E})),a.d(t,"F",(function(){return z})),a.d(t,"H",(function(){return U})),a.d(t,"O",(function(){return M})),a.d(t,"N",(function(){return O})),a.d(t,"M",(function(){return N})),a.d(t,"J",(function(){return L})),a.d(t,"K",(function(){return T})),a.d(t,"L",(function(){return R})),a.d(t,"d",(function(){return Q})),a.d(t,"e",(function(){return G})),a.d(t,"E",(function(){return B})),a.d(t,"B",(function(){return V})),a.d(t,"y",(function(){return F})),a.d(t,"h",(function(){return H})),a.d(t,"f",(function(){return Y})),a.d(t,"P",(function(){return J})),a.d(t,"D",(function(){return X})),a.d(t,"C",(function(){return Z})),a.d(t,"r",(function(){return K})),a.d(t,"b",(function(){return W})),a.d(t,"a",(function(){return ee})),a.d(t,"u",(function(){return te}));var o=a("5184");const r="\n  oneUser {\n    id\n    profileImage\n    name\n    email\n    role\n    roleEspecialidad\n    dni\n    telefono\n    direccion {\n      numero\n      sector\n      calle\n    }\n    createdAt\n  }\n",i=o["a"]`
  query oneUser {
    ${r}
  }
`,s=(o["a"]`
  query MyWorkers {
    MyWorkers {
    id
    profileImage
    name
    email
    role
    createdAt
    }
  }
`,o["a"]`
  query allPacientes {
    allPacientes {
    id
    name
    role
    nacionalidad
    dni
    telefono
    direccion {
      numero
      sector
      calle
    }
    sexo
    edad
    diagnostico
    createdAt
    fatherID
    }
  }
`,o["a"]`
  fragment personaDetalles on Persona {
    nombre1
    edad
    estado_civil
    id_persona
    sexo
    nacionalidad
    cedula_identidad
    ocupacion
    telefono {
      codigo
      numero
      id_telefono
    }
    correo {
      id_correo
      correo
    }
    direccion {
      codigo_postal
      id_direccion
      parroquia
      numero_casa
      calle
      punto_referencia
      sector
    }
  }
`),n=o["a"]`
fragment consultasDetalles on Consulta {
  id_consulta, fecha_consulta, estado_consulta, tipo_consulta, motivo_consulta, sintomas, notas_medicas, createdAt
}
`,c=o["a"]`
fragment diagnosticoDetalles on Diagnostico {
    id_diagnostico
    fecha_diagnostico
    condicion
    descripcion
    gravedad
    createdAt
    updatedAt
}
`,l=o["a"]`
fragment examenes on ExamenesResultados {
  id_examenes
	tipo_de_examen
  descripcion
  resultados
  estado_examen
  medico_solicitante
  laboratorio_centro
  valores_referencia
  observaciones
  createdAt
}
`,d=o["a"]`
fragment tratamientos on Tratamiento {
  id_tratamiento
  tipo_de_tratamiento
  fecha_inicio
  fecha_culminacion
  estado
  detalles
  createdAt
}
`,u=o["a"]`
fragment medicamento on Medicamento {
  id_medicamento
  nombre
  dosis
  via_administracion
  frecuencia
  duracion
  observaciones
  principio_activo
  laboratorio
  fecha_inicio
  fecha_fin
  estado_tratamiento
  tipo_medicamento
  contraindicaciones
  efectos_secundarios
  createdAt
}
`,m=o["a"]`
fragment emergenciaDetalles on Emergencia {
    id_emergencia
    motivo_emergencia
    fecha_ingreso
    fecha_egreso
    diagnostico_provisional
    estado_paciente
  	estado_emergencia
    procesamiento_realizado
    tiempo_atencion
    notas_de_atencion
    destino
    createdAt
    updatedAt
}
`,p=o["a"]`
fragment hospitalizacionDetalles on Hospitalizacion {
     id_hospitalizacion
    fecha_ingreso
    fecha_egreso
    motivo_de_hospitalizacion
    unidad_hospitalaria
    estado
    notas_medicas
    createdAt
    updatedAt
}
`,f=o["a"]`
  fragment doctorDetalles on Doctor {
    id_doctor
    anos_experiencia
    numero_carnet
    area_de_trabajo
    horario
          usuarios {
        id_usuario
        nombre_usuario
        rol
        estado
      }
    persona {
      ...personaDetalles
    }
    pacientes {
      id_paciente
      vacunas
      antecedentes_familiares
      tipo_de_sangre
      alergias
      discapacidad
      documento_identidad_representante
      numero_orden_representante
      createdAt
      persona {
        ...personaDetalles
      }
       consultas {
      ...consultasDetalles
    }
          diagnosticos {
      ...diagnosticoDetalles
    }
          examenes {
      ...examenes
    }
    medicamentos {
      ...medicamento
    }
    tratamientos {
      ...tratamientos
    }
    emergencias {
      ...emergenciaDetalles
    }
    hospitalizaciones {
      ...hospitalizacionDetalles
    }

    }

  }
  ${s}
  ${n}
  ${c}
  ${l}
  ${u}
  ${d}
  ${m}
  ${p}
`,g=o["a"]`
  query doCdiDoctores($id_cdi: ID!) {
    doctoresCDI(id_cdi: $id_cdi) {
  	id_doctor
    anos_experiencia
    numero_carnet
    area_de_trabajo
    horario
        pacientes {
      id_paciente
      vacunas
      antecedentes_familiares
      tipo_de_sangre
      alergias
      discapacidad
      createdAt
      persona {
        ...personaDetalles
      }
}
        persona {
      ...personaDetalles
    }
      usuarios {
        id_usuario
        nombre_usuario
        rol
        estado
      }
    }
  }
  ${s}
`,h=o["a"]`
  query doGetDoctores{
    doctores {
  	id_doctor
    anos_experiencia
    numero_carnet
    area_de_trabajo
    horario
        persona {
      ...personaDetalles
    }
    pacientes {
      id_paciente
      vacunas
      antecedentes_familiares
      tipo_de_sangre
      alergias
      discapacidad
      createdAt
      persona {
        ...personaDetalles
      }
    }
      usuarios {
        id_usuario
        nombre_usuario
        rol
        estado
        cdi {
          id_cdi
          numero_cdi
          nombre
          encargado
          cuadrante
          estado}
      }
    }
  }
  ${s}
`,b=o["a"]`
  query doGetCDIs{
    cdis {
    id_cdi
    numero_cdi
    nombre
    encargado
    cuadrante
    estado
    usuarios {
      id_usuario
      nombre_usuario
      rol
      estado
    }
    doctores {
    id_doctor
    anos_experiencia
    numero_carnet
    area_de_trabajo
    horario
    persona {
      ...personaDetalles
    }
    }
   pacientes {
    id_paciente
    vacunas
    antecedentes_familiares
    tipo_de_sangre
    alergias
    discapacidad
    createdAt
    persona {
      ...personaDetalles
    }
   }


    }
  }
  ${s}
`,v=o["a"]`
  query doGetALLCDIs{
    todosCdis {
    id_cdi
    numero_cdi
    nombre
    encargado
    cuadrante
    }
  }
`,_=o["a"]`
  query doGetAdminProfile($id_usuario: ID!) {
    usuario(id_usuario: $id_usuario) {
      id_usuario
      nombre_usuario
      rol
      estado
    }
  }
`,y=o["a"]`
  query doCdiPacientes($id_cdi: ID!) {
    pacientesCDI(id_cdi: $id_cdi) {
  	id_paciente
    documento_identidad_representante
    numero_orden_representante
    vacunas
    antecedentes_familiares
    tipo_de_sangre
    alergias
    discapacidad
    persona {
      ...personaDetalles
    }
    consultas {
      ...consultasDetalles
    }
    diagnosticos {
      ...diagnosticoDetalles
    }
    examenes {
      ...examenes
    }
    medicamentos {
      ...medicamento
    }
    tratamientos {
      ...tratamientos
    }
    emergencias {
      ...emergenciaDetalles
    }
    hospitalizaciones {
      ...hospitalizacionDetalles
    }
    doctor {
      ...doctorDetalles
    }
    }
  }
  ${s}
  ${n}
  ${c}
  ${l}
  ${u}
  ${d}
  ${m}
  ${p}
  ${f}
`,C=o["a"]`
  query getDoctorPacientes($id_doctor: ID!) {
    doctorPacientes(id_doctor: $id_doctor) {
      ...doctorDetalles
    }
  }
  ${f}
`,w=o["a"]`
  query MyCorreos {
    MyCorreos {
      _id
      name
      email
      userId
    }
  }
`,A=o["a"]`
  mutation createCorreo($data: CorreosInput) {
    createCorreo(data: $data) {
      name
      email
      userId
    }
  }
`,$=o["a"]`
  mutation DelCorreo($correoID: ID!) {
    DelCorreo(correoID: $correoID) {
      status
    }
  }
`,x=(o["a"]`
  mutation AddUser($data: UserInput) {
    AddUser(data: $data) {
      id
      profileImage
      name
      email
      role
      roleEspecialidad
      nacionalidad
      dni
      telefono
      direccion {
      numero
      sector
      calle
    }
      createdAt
    }
  }
`,o["a"]`
mutation doCreateDoctor($input: CrearDoctorInput!){
  	crearDoctor(input: $input) {
			id_doctor,
    anos_experiencia,
    numero_carnet,
    area_de_trabajo,
    horario,
    persona  {
      nombre1
    }
  }
}

`),I=o["a"]`
mutation doCreateCDI($input: CrearCDIInput!){
  	crearCDI(input: $input) {
		id_cdi
    numero_cdi
    nombre
    encargado
    cuadrante
  }
}
`,D=o["a"]`
  query doGetPacientes{
    pacientes {
    id_paciente
    vacunas
    antecedentes_familiares
    tipo_de_sangre
    documento_identidad_representante
    numero_orden_representante
    alergias
    discapacidad
    doctor {
    id_doctor
    anos_experiencia
    numero_carnet
    area_de_trabajo
    horario
      persona {
        ...personaDetalles
      }
    }
    cdi {
      id_cdi
      numero_cdi
      nombre
      encargado
      cuadrante
    }
    persona {
      ...personaDetalles
    }
    consultas {
      ...consultasDetalles
    }
    diagnosticos {
      ...diagnosticoDetalles
    }
    examenes {
      ...examenes
    }
    medicamentos {
      ...medicamento
    }
    tratamientos {
      ...tratamientos
    }
    emergencias {
      ...emergenciaDetalles
    }
    hospitalizaciones {
      ...hospitalizacionDetalles
    }
    }
  }
  ${s}
  ${n}
  ${c}
  ${l}
  ${u}
  ${d}
  ${m}
  ${p}
`,j=o["a"]`
mutation doCreatePaciente($input: CrearPacienteInput!) {
  crearPaciente(input: $input) {
    id_paciente
    persona {
      nombre1
    }
  }
}
`,q=o["a"]`
mutation doCreateEmergencia($input: EmergenciaInput!) {
  crearEmergencia(input: $input) {
    id_emergencia
    motivo_emergencia
    fecha_ingreso
    fecha_egreso
    diagnostico_provisional
    estado_paciente
    procesamiento_realizado
    tiempo_atencion
    notas_de_atencion
    destino
    createdAt
    updatedAt
  }
}
`,P=o["a"]`
mutation doCreateHospitalizacion($input: HospitalizacionInput!) {
  crearHospitalizacion(input: $input) {
    id_hospitalizacion
    fecha_ingreso
    fecha_egreso
    motivo_de_hospitalizacion
    unidad_hospitalaria
    estado
    notas_medicas
    createdAt
    updatedAt
  }
}
`,k=o["a"]`
mutation doCreateConsulta($input: ConsultaInput!){
  	crearConsulta(input: $input) {
    id_consulta,
    tipo_consulta,motivo_consulta,sintomas,notas_medicas,createdAt,updatedAt
  }
}
`,S=o["a"]`
mutation doUpdateConsulta($id_consulta: ID! $input: ConsultaInput!){
  actualizarConsulta(id_consulta: $id_consulta, input: $input) {
    id_consulta
    updatedAt
  }
}
`,E=o["a"]`
mutation doUpdateDoctor($id_doctor: ID! $input: ActualizarDoctorInput!){
  actualizarDoctor(id_doctor: $id_doctor, input: $input) {
    id_doctor
  }
}
`,z=o["a"]`
mutation doUpdateCDI($id_cdi: ID! $input: ActualizarCDIInput!){
  actualizarCDI(id_cdi: $id_cdi, input: $input) {
    id_cdi
  }
}
`,U=o["a"]`
mutation doUpdateDiagnostico($id_diagnostico: ID! $input: DiagnosticoInput!){
  actualizarDiagnostico(id_diagnostico: $id_diagnostico, input: $input) {
    updatedAt
  }
}
`,M=o["a"]`
mutation doUpdateExamen($id_examenes: ID! $input: ExamenesResultadosInput!){
  actualizarExamenResultado(id_examenes: $id_examenes, input: $input) {
    updatedAt
  }
}
`,O=o["a"]`
mutation doUpdateEstadoTratamiento($id_tratamiento: ID! $estado: EstadoTratamiento!){
  actualizarEstadoTratamiento(id_tratamiento: $id_tratamiento, estado: $estado)
}
`,N=o["a"]`
mutation doUpdateEstadoMedicamento($id_medicamento: ID! $estado_tratamiento: EstadoTratamientoMedicamento!){
  actualizarEstadoMedicamento(id_medicamento: $id_medicamento, estado_tratamiento: $estado_tratamiento)
}
`,L=o["a"]`
mutation doUpdateEstadoConsulta($id_consulta: ID! $estado_consulta: String!){
  actualizarEstadoConsulta(id_consulta: $id_consulta, estado_consulta: $estado_consulta)
}
`,T=o["a"]`
mutation doUpdateEstadoEmergencia($id_emergencia: ID! $estado_emergencia: String!){
  actualizarEstadoEmergencia(id_emergencia: $id_emergencia, estado_emergencia: $estado_emergencia)
}
`,R=o["a"]`
mutation doUpdateEstadoHospitalizacion($id_hospitalizacion: ID! $estado: String!){
  actualizarEstadoHospitalizacion(id_hospitalizacion: $id_hospitalizacion, estado: $estado)
}
`,Q=o["a"]`
mutation doCreateDiagnostico($input: DiagnosticoInput!) {
  crearDiagnostico(input: $input) {
    id_diagnostico
    condicion
    descripcion
    gravedad
    createdAt
    updatedAt
  }
}
`,G=o["a"]`
mutation doCreateExamen($input: ExamenesResultadosInput!) {
  crearExamenResultado(input: $input) {
    id_examenes
    tipo_de_examen
    resultados
    estado_examen
    medico_solicitante
    createdAt
    updatedAt
  }
}
`,B=(o["a"]`
mutation doCreateExamen($input: ExamenesResultadosInput!) {
  crearExamenResultado(input: $input) {
    id_examenes
    tipo_de_examen
    resultados
    estado_examen
    medico_solicitante
    createdAt
    updatedAt
  }
}
`,o["a"]`
mutation doUpdateUsuario($id_usuario: ID! $input: ActualizarUsuarioInput!) {
  actualizarUsuario(id_usuario: $id_usuario, input: $input) {
    id_usuario
    nombre_usuario
    estado
    rol
  }
}
`),V=o["a"]`
mutation doUpdateCDIStatus($id_cdi: ID! $estado: String!) {
  inhabilitarCDI(id_cdi: $id_cdi, estado: $estado)
}
`,F=o["a"]`
  query doGetCDIProfile($id_cdi: ID!) {
    cdi(id_cdi: $id_cdi) {
    id_cdi
    numero_cdi
    nombre
    encargado
    cuadrante
    estado
    usuarios {
      id_usuario
      nombre_usuario
      rol
      estado
    }
    }
  }
`,H=o["a"]`
mutation doCreateTratamiento($input: TratamientoInput!) {
  crearTratamiento(input: $input) {
    id_tratamiento
    tipo_de_tratamiento
    estado
    fecha_inicio
    fecha_culminacion
    detalles
    createdAt
    updatedAt
  }
}
`,Y=o["a"]`
mutation doCreateMedicamento($input: MedicamentoInput!) {
  crearMedicamento(input: $input) {
    id_medicamento
    nombre
    dosis
    via_administracion
    frecuencia
    duracion
    observaciones
    principio_activo
    laboratorio
    fecha_inicio
    fecha_fin
    medico_prescriptor
    estado_tratamiento
    tipo_medicamento
    contraindicaciones
    efectos_secundarios
    fk_doctor_id
    fk_paciente_id
    createdAt
    updatedAt
  }
}
`,J=o["a"]`
  mutation DelUser($id: ID!) {
    DelUser(id: $id) {
      status
    }
  }
`,X=o["a"]`
  mutation UpdateUserInfo($id: ID!, $data: UserInput!) {
    UpdateUserInfo(id: $id, data: $data) {
      profileImage
      name
      email
    }
  }
`,Z=o["a"]`
  mutation UpdateConsulta($id: ID!, $data: ConsultaInput!) {
    UpdateConsulta(id: $id, data: $data) {
      id
      name
      role
      nacionalidad
      dni
      telefono
      direccion {
      numero
      sector
      calle
    }
      sexo
      edad
      diagnostico
      consultas {
        diagnostico
        salida
        ingreso
      }
      createdAt
      fatherID
    }
  }
`,K=(o["a"]`
  query BuscarUser($data: UserInput!) {
    BuscarUser(data: $data) {
      id
      profileImage
      name
      email
      role
      roleEspecialidad
      nacionalidad
      dni
      telefono
      direccion {
      numero
      sector
      calle
    }
      createdAt
    }
  }
`,o["a"]`
  query BuscarDoctor($data: UserInput!) {
    BuscarDoctor(data: $data) {
      id
      profileImage
      name
      email
      role
      roleEspecialidad
      nacionalidad
      dni
      telefono
      direccion {
      numero
      sector
      calle
    }
      createdAt
    }
  }
`),W=(o["a"]`
  query BuscarPaciente($data: PacienteInput!) {
    BuscarPaciente(data: $data) {
      id
      name
      role
      nacionalidad
      dni
      telefono
      direccion {
        sector
        calle
        numero
      }
      sexo
      edad
      diagnostico
      createdAt
      fatherID
      consultas{diagnostico salida ingreso createdAt}
    }
  }


`,o["a"]`
  mutation setPreguntas($data: seguridadInput) {
	setPreguntas(data: $data)
}
`,o["a"]`
query getSeguridad($UserId: ID) {
	getSeguridad(UserId: $UserId) {
		id
		pregunta1
		respuesta1
		pregunta2
		respuesta2
		pregunta3
    respuesta3
	}
}
`,o["a"]`
mutation updatePreguntas($data: seguridadInput) {
	updatePreguntas(data: $data)
}
`),ee=(o["a"]`
query recuperarContrasena($data: respuestasSeguridadInput) {
	recuperarContrasena(data: $data)
}
`,o["a"]`
mutation setNewPassword($UserId: ID, $password: String) {
	setNewPassword(UserId: $UserId, password: $password)
}
`),te=o["a"]`
query checkUserRecovery($email: String) {
	checkUserRecovery(email: $email) {
		id
		pregunta1
		respuesta1
		pregunta2
		respuesta2
		pregunta3
		pregunta1
		UserId
	}
}
`},ef9d:function(e,t,a){var o={"./components/Error404.vue":["56f6",5],"./components/common/PaginatedCardList.vue":["a977",1,0],"./components/components/upload.vue":["1a21"],"./components/components/uploadComprobante.vue":["e941",3],"./components/layout/Index.vue":["81ad"],"./components/layout/cabecera.vue":["7122"],"./components/layout/pie.vue":["6d6b"],"./components/modules/admin/admins.vue":["a340",1,0],"./components/modules/admin/doctores.vue":["c69d",1,0],"./components/modules/admin/historiaCDIPdf.vue":["bfee",0],"./components/modules/admin/historiaDiagPdf.vue":["347d",0],"./components/modules/admin/historiaDrPdf.vue":["77ac",0],"./components/modules/admin/historialCdisListaEstado.vue":["846f",0],"./components/modules/admin/historialDoctoresLista.vue":["90d2",0],"./components/modules/admin/historialEnc.vue":["a00f",0],"./components/modules/admin/hitoriaPdf.vue":["f39f",0],"./components/modules/admin/pdf-lista-doctores-completa.vue":["450d",0],"./components/modules/admin/reports/estadisticas/reporteConsultaMes.vue":["5901",0],"./components/modules/admin/reports/estadisticas/reporteConsultasPeriodo.vue":["c7e8",0],"./components/modules/admin/reports/estadisticas/reporteConsultasPorMedicoPeriodo.vue":["f607",0],"./components/modules/admin/reports/estadisticas/reporteDistEdad.vue":["8e4d",0],"./components/modules/admin/reports/estadisticas/reporteDistGenero.vue":["b4ab",0],"./components/modules/admin/reports/estadisticas/reportePacienteAreaDeTrabajo.vue":["93c2",0],"./components/modules/admin/reports/estadisticas/reportePacienteNuevosPeriodo.vue":["20e8",0],"./components/modules/admin/reports/estadisticas/reporteTopDiagnosticos.vue":["2f12",0],"./components/modules/admin/reports/estadisticas/reporteTotalPacientes.vue":["2c6e",0],"./components/modules/admin/reports/reporteEmergencias.vue":["bf3f",0],"./components/modules/admin/reports/reporteExamenes.vue":["c839",0],"./components/modules/admin/reports/reporteHospitalizaciones.vue":["fa10",0],"./components/modules/admin/reports/reporteMedicamentos.vue":["7172",0],"./components/modules/admin/reports/reporteTratamientos.vue":["52b0",0],"./components/modules/admin/users.vue":["e20f",1,0],"./components/modules/estadisticas/estadisticas.vue":["fbcf",1,0,4],"./components/modules/home/home.vue":["962a",1,0,6],"./components/modules/home/homeAdmin.vue":["934e",1,0],"./components/modules/home/homeDoctor.vue":["0bb2",1,0],"./components/modules/home/homeEncargado.vue":["2591",1,0],"./components/modules/public/Reestablecer.vue":["44f3",1,7],"./components/modules/public/login.vue":["8f8d",8],"./components/modules/public/recuperar.vue":["408b",9],"./components/modules/public/registro.vue":["a450",10]};function r(e){if(!a.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(o)},r.id="ef9d",e.exports=r},f121:function(e,t,a){"use strict";const o={development:"http://localhost:4000",production:""};let r="production";t["a"]={graphql:{url:{http:`${o[r]}/graphql`,ws:`${o[r].replace("https","wss").replace("http","ws")}/subscriptions`},method:"POST",headers:{json:{"Content-Type":"application/json"}}},api:{url:`${o[r]}`}}}});