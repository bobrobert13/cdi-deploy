(function(t){function e(e){for(var o,r,n=e[0],c=e[1],l=e[2],d=0,u=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,r=1;r<a.length;r++){var n=a[r];0!==i[n]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var o={},r={2:0},i={2:0},s=[];function n(t){return c.p+"js/"+({0:"chunk-common"}[t]||t)+"."+{0:"541fc5b8",3:"2860acad",4:"3c304ee9",5:"165452e2",6:"7433acc7",7:"38c39e0b",8:"76ca0614",9:"4ca7c9f1",10:"dfb47cfc",11:"94e97961"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={0:1,3:1,4:1,5:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var o="css/"+({0:"chunk-common"}[t]||t)+"."+{0:"d3b925a4",3:"bed28e96",4:"b80be248",5:"9f11b837",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0"}[t]+".css",i=c.p+o,s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var l=s[n],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===i))return e()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){l=u[n],d=l.getAttribute("data-href");if(d===o||d===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[t],m.parentNode.removeChild(m),a(s)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,a){o=i[t]=[e,a]}));e.push(o[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=n(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(m);var a=i[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,a[1](u)}i[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(a,o,function(e){return t[e]}.bind(null,o));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=d;s.push([0,1]),a()})({0:function(t,e,a){t.exports=a("2f39")},"0bfb":function(t,e,a){t.exports=a.p+"img/MEDRECLOGO.33c3a1c9.png"},"139b":function(t,e,a){"use strict";a.d(e,"f",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return n})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return d})),a.d(e,"i",(function(){return u})),a.d(e,"h",(function(){return m}));var o=a("5184");const r=o["a"]`
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
`},"1a21":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"drop display-inline align-center",style:(this.$q.dark.isActive,""),on:{dragover:function(t){t.preventDefault()},drop:t.onDrop}},[t.image?e("div",{staticClass:"q-mb-md",class:{image:!0}},[e("img",{staticClass:"preview",attrs:{src:t.image,alt:""}})]):e("label",{staticClass:"btn display-inline",class:this.$q.dark.isActive?"text-white":" text-black"},[e("div",{class:""===t.info.profileImage?"row justify-center":"row"},[e("div",{class:""===t.info.profileImage?"col-8 self-center q-mt-xl":"col-8"},[""===t.info.profileImage?e("span",{staticClass:"text-caption text-bold text-accent"},[t._v("\n            Por favor selecciona o arrastra el archivo\n          ")]):e("img",{staticClass:"preview",attrs:{src:t.config.api.url+t.info.profileImage}})])]),e("q-input",{staticClass:"kycUploadHolding",attrs:{borderless:"",name:"image",type:"file"},on:{change:t.onChange,input:e=>t.files(e)}})],1)]),t.image?e("q-btn",{staticStyle:{"margin-top":"-20px"},attrs:{size:"sm",round:"",color:"negative",icon:"delete"},on:{click:t.removeFile}}):t._e()],1)},r=[],i=a("f121"),s={name:"upload",props:["info"],data(){return{image:"",file:[],imageName:"",config:i["a"]}},methods:{open(t){this.position=t,this.dialog=!0},onDrop:function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.files,a=e[0].size/1024/1024;e[0].type.match("image/jpeg|image/png")?a>5?alert("El archivo excede los 5mb"):(this.createFile(e[0]),this.$emit("setImage",e)):alert("Solo se permiten imagenes con formato PNG o JPG")},files(t){var e=t[0].size/1024/1024;if(t[0].type.match("image/jpeg|image/png"))if(e>5)alert("El archivo excede los 5mb");else{this.$emit("setImage",t);let e=t[0].name;t.length>0?e.length>13?this.imageName=e.slice(0,13):this.imageName=e:this.imageName=""}else alert("Solo se permiten imagenes con formato PNG o JPG")},onChange(t){var e=t.target.files;this.createFile(e[0])},createFile(t){var e=t.size/1024/1024;if(t.type.match("image/jpeg|image/png"))if(e>5)alert("El archivo excede los 5mb");else{new Image;var a=new FileReader,o=this;a.onload=function(t){o.image=t.target.result},a.readAsDataURL(t)}else alert("Solo se permiten imagenes con formato PNG o JPG")},removeFile(){this.image="",this.file="",this.$emit("removeFile",{file:""})}}},n=s,c=(a("726c"),a("2877")),l=a("27f9"),d=a("9c40"),u=a("eebe"),m=a.n(u),p=Object(c["a"])(n,o,r,!1,null,null,null);e["default"]=p.exports;m()(p,"components",{QInput:l["a"],QBtn:d["a"]})},"20e7":function(t,e,a){},"2f17":function(t,e,a){"use strict";a("20e7")},"2f39":function(t,e,a){"use strict";a.r(e);a("9f29"),a("7d6e"),a("e54f"),a("62f2"),a("0bae"),a("7e6d");var o=a("2b0e"),r=a("1f91"),i=a("42d2"),s=a("b05d"),n=a("2a19");o["a"].use(s["a"],{config:{notify:{},brand:{primary:"#015958",secondary:"#eeeff3",accent:"#69696b",positive:"#0b7c25",negative:"#b20c1f",info:"#31CCEC",warning:"#F2C037"}},lang:r["a"],iconSet:i["a"],plugins:{Notify:n["a"]}});var c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"q-app"}},[e("q-layout",{staticStyle:{"min-height":"100vh"},attrs:{view:"hHh Lpr lff",container:""}},[t.$store.state.user.isAuthenticated&&"login"!==t.$route.name&&"registro"!==t.$route.name&&"recuperar"!==t.$route.name&&"pedido"!==t.$route.name?e("q-drawer",{staticClass:"sm-hide xs-hide",attrs:{"show-if-above":"",mini:!0,"content-class":"bg-primary"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"\n\t\t\t\tdrawer\n\t\t\t"}},[e("q-scroll-area",{staticClass:"fit"},[e("q-list",{attrs:{padding:""}},[e("router-link",{attrs:{to:"/home"}},[e("div",{staticClass:"col-xl-5 col-lg-4 col-md-5 col-sm-8 col-xs-11 q-mb-xl q-mt-lg self-center text-center"},[e("q-img",{staticStyle:{width:"50%"},attrs:{src:a("0bfb")}})],1)]),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mb-md q-mt-lg",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("router-link",{attrs:{to:"/home"}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-account-circle","text-color":"primary"}})],1)],1)],1),"doctor"!==this.$store.state.user.role?e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mb-xl",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("router-link",{attrs:{to:"/estadisticas"}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-google-analytics","text-color":"primary"}})],1)],1)],1):t._e(),"admin"===this.$store.state.user.role?e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mb-xl",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("router-link",{attrs:{to:"/respaldos"}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-database-sync","text-color":"primary"}})],1)],1)],1):t._e(),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mb-md",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-cog","text-color":"primary"},on:{click:function(e){return t.myInfo()}}})],1)],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{position:"fixed",bottom:"0","margin-left":"16.5px"},attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{staticClass:"q-mb-md",staticStyle:{cursor:"pointer"},attrs:{color:"white",size:"lg",icon:"mdi-logout","text-color":"primary"},on:{click:function(e){t.confirm=!0}}})],1)],1)],1)],1)],1):t._e(),t.$store.state.token?e("div",{staticClass:"menu-bottom md-hide lg-hide xl-hide bg-white text-primary",attrs:{elevated:""}},[e("q-separator"),e("q-tabs",[e("q-route-tab",{attrs:{to:"",exact:""}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{size:"md",color:"primary"},on:{click:function(e){return t.myInfo()}}},[""!==this.user.profileImage?e("img",{attrs:{src:t.config.api.url+this.user.profileImage}}):t._e(),""===this.user.profileImage?e("img",{attrs:{src:a("59e2")}}):t._e()])],1),e("q-route-tab",{attrs:{icon:"mdi-badge-account",to:"/home",exact:""}}),e("q-route-tab",{attrs:{icon:"mdi-logout",to:"",exact:""},on:{click:function(e){t.confirm=!0}}})],1)],1):t._e(),e("q-page-container",{staticClass:"bg-secondary"},[e("q-page",{style:this.$q.screen.lt.sm?"margin-left: 0px; border-radius: 0px 0px 0px 0px":t.$store.state.user.isAuthenticated?"margin-left: 15px; border-radius: 30px 0px 0px 30px":""},[e("Index")],1)],1),t.$store.state.user.isAuthenticated&&"login"!==t.$route.name&&"registro"!==t.$route.name&&"recuperar"!==t.$route.name&&"pedido"!==t.$route.name?e("navbar",{staticClass:"q-pa-sm bg-primary md-hide lg-hide xl-hide full-width fixed-bottom"},[e("div",{staticClass:"row full-width justify-evenly items-center"},[e("div",{staticClass:"col-1"},[e("router-link",{attrs:{to:"/home"}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-account-circle","text-color":"primary"}})],1)],1),"doctor"!==this.$store.state.user.role?e("div",{staticClass:"col-1"},[e("router-link",{attrs:{to:"/estadisticas"}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-google-analytics","text-color":"primary"}})],1)],1):t._e(),"admin"===this.$store.state.user.role?e("div",{staticClass:"col-1"},[e("router-link",{attrs:{to:"/respaldos"}},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-database-sync","text-color":"primary"}})],1)],1):t._e(),e("div",{staticClass:"col-1"},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-cog","text-color":"primary"},on:{click:function(e){return t.myInfo()}}})],1),e("div",{staticClass:"col-1"},[e("q-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"white",icon:"mdi-logout","text-color":"primary"},on:{click:function(e){t.confirm=!0}}})],1)])]):t._e()],1),e("q-dialog",{model:{value:t.myInfoD,callback:function(e){t.myInfoD=e},expression:"\n\t\t\tmyInfoD\n\t\t"}},[e("q-card",{staticClass:"full-width"},[e("q-card-section",["cdi"===this.$store.state.user.role?e("div",{staticClass:"text-subtitle1 text-grey-8"},[t._v("\n\t\t\t\t\tCuenta\n\t\t\t\t\tCDI\n\t\t\t\t")]):t._e(),"doctor"===this.$store.state.user.role?e("div",{staticClass:"text-subtitle1 text-grey-8"},[t._v("\n\t\t\t\t\tCuenta\n\t\t\t\t\tdoctor\n\t\t\t\t")]):t._e(),"admin"===this.$store.state.user.role?e("div",{staticClass:"text-subtitle1 text-grey-8"},[t._v("\n\t\t\t\t\tCuenta\n\t\t\t\t\tAdministrador\n\t\t\t\t")]):t._e()]),e("q-separator"),"cdi"===this.$store.state.user.role?e("q-card-section",{staticClass:"scroll text-center"},[e("p",[t._v("\n\t\t\t\t\tInformación\n\t\t\t\t\tgeneral\n\t\t\t\t\tde\n\t\t\t\t\tla\n\t\t\t\t\tcuenta\n\t\t\t\t")]),t.userCDIProfile?e("q-scroll-area",{staticStyle:{height:"60vh"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",label:"Nombre de CDI"},model:{value:t.userCDIProfile.nombre,callback:function(e){t.$set(t.userCDIProfile,"nombre",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserCDIProfile.nombre\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",disable:"",color:"deep-purple-6",label:"Número del CDI"},model:{value:t.userCDIProfile.numero_cdi,callback:function(e){t.$set(t.userCDIProfile,"numero_cdi",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserCDIProfile.numero_cdi\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",disable:"",color:"deep-purple-6",label:"Encargado"},model:{value:t.userCDIProfile.encargado,callback:function(e){t.$set(t.userCDIProfile,"encargado",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserCDIProfile.encargado\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",disable:"",color:"deep-purple-6",label:"Cuadrante"},model:{value:t.userCDIProfile.cuadrante,callback:function(e){t.$set(t.userCDIProfile,"cuadrante",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserCDIProfile.cuadrante\n\t\t\t\t\t\t\t\t\t\t"}})],1)])])]),e("div",{staticClass:"row q-mt-lg justify-center"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",value:this.$store.state.user.nombre_usuario,label:"Nombre de usuario",rules:[t=>t.length>=3||"El nombre de usuario debe tener al menos 3 caracteres"]},on:{blur:t.validateCDICredentialsInputs}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Contraseña",rules:[t=>t.length>=6||"La contraseña debe tener al menos 6 caracteres"]},on:{blur:t.validateCDICredentialsInputs},model:{value:t.cdi_contrasena,callback:function(e){t.cdi_contrasena=e},expression:"\n\t\t\t\t\t\t\t\t\t\t\tcdi_contrasena\n\t\t\t\t\t\t\t\t\t\t"}})],1)])]),"admin"!==this.user.role?e("div",{staticClass:"col-xl-8 column col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e("q-btn",{staticClass:"fullwidth text-white q-mt-xs bg-primary",attrs:{unelevated:"",loading:t.loader,label:"Modificar credenciales",disable:!t.isValidCredencialesCDI},on:{click:function(e){return t.actualizarUsuario(t.userCDIProfile.usuarios)}}})],1):t._e()])]):t._e()],1):t._e(),"doctor"===this.$store.state.user.role?e("q-card-section",{staticClass:"scroll text-center"},[e("p",[t._v("\n\t\t\t\t\tInformación\n\t\t\t\t\tbásica\n\t\t\t\t\tde\n\t\t\t\t\tla\n\t\t\t\t\tcuenta\n\t\t\t\t")]),t.userDoctorProfile.persona?e("q-scroll-area",{staticStyle:{height:"60vh"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Nombre de doctor"},model:{value:t.userDoctorProfile.persona.nombre1,callback:function(e){t.$set(t.userDoctorProfile.persona,"nombre1",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserDoctorProfile\n\t\t\t\t\t\t\t\t\t\t\t\t.persona\n\t\t\t\t\t\t\t\t\t\t\t\t.nombre1\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Documento de identidad"},model:{value:t.userDoctorProfile.persona.cedula_identidad,callback:function(e){t.$set(t.userDoctorProfile.persona,"cedula_identidad",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserDoctorProfile\n\t\t\t\t\t\t\t\t\t\t\t\t.persona\n\t\t\t\t\t\t\t\t\t\t\t\t.cedula_identidad\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Número de carnet"},model:{value:t.userDoctorProfile.numero_carnet,callback:function(e){t.$set(t.userDoctorProfile,"numero_carnet",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserDoctorProfile.numero_carnet\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",disable:"",label:"Especialidad"},model:{value:t.userDoctorProfile.area_de_trabajo,callback:function(e){t.$set(t.userDoctorProfile,"area_de_trabajo",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserDoctorProfile.area_de_trabajo\n\t\t\t\t\t\t\t\t\t\t"}})],1)])])]),t.userDoctorProfile.usuarios?e("div",{staticClass:"row q-mt-lg justify-center"},[e("p",[t._v("\n\t\t\t\t\t\t\tCredenciales\n\t\t\t\t\t\t\tde\n\t\t\t\t\t\t\tacceso:\n\t\t\t\t\t\t")]),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",label:"Nombre de usuario",rules:[t=>t.length>=3||"El nombre de usuario debe tener al menos 3 caracteres"]},on:{blur:t.validateDoctorCredentialsInputs},model:{value:t.userDoctorProfile.usuarios.nombre_usuario,callback:function(e){t.$set(t.userDoctorProfile.usuarios,"nombre_usuario",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserDoctorProfile\n\t\t\t\t\t\t\t\t\t\t\t\t.usuarios\n\t\t\t\t\t\t\t\t\t\t\t\t.nombre_usuario\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Contraseña",rules:[t=>t.length>=6||"La contraseña debe tener al menos 6 caracteres"]},on:{blur:t.validateDoctorCredentialsInputs},model:{value:t.doctor_contrasena,callback:function(e){t.doctor_contrasena=e},expression:"\n\t\t\t\t\t\t\t\t\t\t\tdoctor_contrasena\n\t\t\t\t\t\t\t\t\t\t"}})],1)])]),"doctor"===this.$store.state.user.role?e("div",{staticClass:"col-xl-8 column col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e("q-btn",{staticClass:"fullwidth text-white q-mt-xs bg-primary",attrs:{unelevated:"",loading:t.loader,label:"Modificar credenciales",disable:!t.isValidCredencialesDoctor},on:{click:function(e){return t.actualizarUsuario(t.userDoctorProfile.usuarios)}}})],1):t._e()]):t._e()]):t._e()],1):t._e(),"admin"===this.$store.state.user.role?e("q-card-section",{staticClass:"text-center"},[t.userAdminProfile?e("q-scroll-area",{staticStyle:{height:"300px"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[e("div",{staticClass:"row q-mt-lg justify-center"},[e("p",[t._v("\n\t\t\t\t\t\t\tCredenciales\n\t\t\t\t\t\t\tde\n\t\t\t\t\t\t\tacceso\n\t\t\t\t\t\t")]),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{disable:"",filled:"",color:"deep-purple-6",label:"Nombre de usuario",rules:[t=>t.length>=3||"El nombre de usuario debe tener al menos 3 caracteres"]},on:{blur:t.validateUserCredentialsInputs},model:{value:t.userAdminProfile.nombre_usuario,callback:function(e){t.$set(t.userAdminProfile,"nombre_usuario",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\tuserAdminProfile.nombre_usuario\n\t\t\t\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Contraseña",rules:[t=>t.length>=6||"La contraseña debe tener al menos 6 caracteres"]},on:{blur:t.validateUserCredentialsInputs},model:{value:t.admin_contrasena,callback:function(e){t.admin_contrasena=e},expression:"\n\t\t\t\t\t\t\t\t\t\t\tadmin_contrasena\n\t\t\t\t\t\t\t\t\t\t"}})],1)])]),"admin"===this.$store.state.user.role?e("div",{staticClass:"col-xl-8 column col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e("q-btn",{staticClass:"fullwidth text-white q-mt-xs bg-primary",attrs:{unelevated:"",loading:t.loader,label:"Modificar credenciales",disable:!t.isValidCredencialesAdmin},on:{click:function(e){return t.actualizarUsuario(t.userAdminProfile)}}})],1):t._e()])]):t._e()],1):t._e(),e("div",{staticClass:"row justify-center"},[e("q-btn",{staticClass:"q-mb-sm",attrs:{color:"primary",label:"Establecer preguntas de seguridad"},on:{click:function(e){t.seguridadModal=!0}}}),e("q-btn",{staticClass:"q-mb-sm",attrs:{color:"primary",label:"Establecer seguridad de PIN"},on:{click:function(e){t.pinModal=!0}}})],1),e("q-separator"),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cerrar",color:"primary"}})],1)],1)],1),e("q-dialog",{staticClass:"full-width",attrs:{persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"\n\t\t\tconfirm\n\t\t"}},[e("q-card",{staticClass:"text-white bg-primary"},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("\n\t\t\t\t\tConfirmar\n\t\t\t\t")])]),e("q-card-section",{staticClass:"row items-center text-center"},[e("span",{staticClass:"q-ml-sm text-white"},[t._v("¿Estas\n\t\t\t\t\tseguro\n\t\t\t\t\tque\n\t\t\t\t\tdeseas\n\t\t\t\t\tsalir?")])]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"white"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cerrar sesion",color:"white"},on:{click:function(e){return t.destroy()}}})],1)],1)],1),e("q-dialog",{staticClass:"full-width",attrs:{persistent:""},model:{value:t.addCorreoM,callback:function(e){t.addCorreoM=e},expression:"\n\t\t\taddCorreoM\n\t\t"}},[e("q-card",{staticClass:"text-accent bg-white"},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("\n\t\t\t\t\tAgregar\n\t\t\t\t\tcorreo\n\t\t\t\t")])]),e("q-card-section",{staticClass:"row items-center text-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("q-input",{attrs:{filled:"",label:"Nombre",rules:[t=>!!t||"Este campo es obligatorio",t=>t.length>=3||"Mínimo 3 caracteres",t=>t.length<=40||"Máximo 40 caracteres",t=>/^([\sa-zA-ZñÑáéíóúÁÉÍÓÚ]{3,40})*$/.test(t)||"Solo se permiten caracteres"]},model:{value:t.nameA,callback:function(e){t.nameA=e},expression:"\n\t\t\t\t\t\t\t\tnameA\n\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-12"},[e("q-input",{attrs:{filled:"",label:"Correo",rules:[t=>!!t||"Este campo es obligatorio",t=>t.length<=40||"Máximo 40 caracteres",e=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(t.emailA)||"Formato de correo inválido"]},model:{value:t.emailA,callback:function(e){t.emailA=e},expression:"\n\t\t\t\t\t\t\t\temailA\n\t\t\t\t\t\t\t"}})],1)])]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"accent"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Agregar",color:"primary",disable:""===t.emailA||""===t.nameA||!1===t.valid},on:{click:function(e){return t.createCorreo()}}})],1)],1)],1),e("q-dialog",{staticClass:"full-width",model:{value:t.seguridadModal,callback:function(e){t.seguridadModal=e},expression:"\n\t\t\tseguridadModal\n\t\t"}},[e("q-card",{staticClass:"q-pa-md"},[e("span",{staticClass:"text-center q-my-sm text-bold"},[t._v("Es\n\t\t\t\tconveniente\n\t\t\t\tactivar\n\t\t\t\tlas\n\t\t\t\tpreguntas\n\t\t\t\tde\n\t\t\t\tseguridad\n\t\t\t\tpara\n\t\t\t\trecuperar\n\t\t\t\ttu\n\t\t\t\tcontraseña\n\t\t\t\ten\n\t\t\t\tcasos\n\t\t\t\tde\n\t\t\t\tolvido\n\t\t\t\to\n\t\t\t\textravíos.")]),e("div",{staticClass:"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs"},[e("div",{staticClass:"row q-mt-xs"},[e("div",{staticClass:"col-12 q-mb-xs"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Establece la pregunta",type:"text"},model:{value:t.pregunta1,callback:function(e){t.pregunta1=e},expression:"\n\t\t\t\t\t\t\t\tpregunta1\n\t\t\t\t\t\t\t"}})],1),e("div",{staticClass:"col-12 q-mb-xs"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Respuesta",type:"password"},model:{value:t.respuesta1,callback:function(e){t.respuesta1=e},expression:"\n\t\t\t\t\t\t\t\trespuesta1\n\t\t\t\t\t\t\t"}})],1),e("q-btn",{staticClass:"q-my-md",attrs:{disable:""===t.pregunta1||""===t.respuesta1||t.pregunta1.length<3||t.respuesta1.length<3,color:"primary",label:"Actualizar seguridad"},on:{click:function(e){return t.guardarPreguntasSeguridad()}}})],1)])])],1),e("q-dialog",{staticClass:"full-width",model:{value:t.pinModal,callback:function(e){t.pinModal=e},expression:"\n\t\t\tpinModal\n\t\t"}},[e("q-card",{staticClass:"q-pa-md"},[e("span",{staticClass:"text-center q-my-sm text-bold"},[t._v("Es\n\t\t\t\tconveniente\n\t\t\t\tactivar\n\t\t\t\tel\n\t\t\t\t"),e("b",[t._v("PIN")]),t._v("\n\t\t\t\tde\n\t\t\t\tseguridad\n\t\t\t\tcomo\n\t\t\t\totra\n\t\t\t\topción\n\t\t\t\tpara\n\t\t\t\trecuperar\n\t\t\t\ttu\n\t\t\t\tcontraseña\n\t\t\t\ten\n\t\t\t\tcasos\n\t\t\t\tde\n\t\t\t\tolvido\n\t\t\t\to\n\t\t\t\textravíos.")]),e("div",{staticClass:"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs"},[e("div",{staticClass:"row q-mt-xs"},[e("div",{staticClass:"col-12 q-mb-xs"},[e("q-input",{attrs:{filled:"",color:"deep-purple-6",label:"Establece el PIN de seguridad (min 4 dígitos - max 6 dígitos)",type:"password"},model:{value:t.pin,callback:function(e){t.pin=e},expression:"\n\t\t\t\t\t\t\t\tpin\n\t\t\t\t\t\t\t"}})],1),e("q-btn",{staticClass:"q-my-md",attrs:{disable:""==t.pin||t.pin.length<4||t.pin.length>6,color:"primary",label:"Actualizar seguridad "},on:{click:function(e){return t.guardarPinSeguridad()}}})],1)])])],1)],1)},l=[],d=(a("14d9"),a("5f87")),u=a("81ad"),m=a("7122"),p=a("6d6b"),f=a("c6a2"),g=a("139b"),h=a("f121"),b=a("c1df"),v=a.n(b),_=a("1a21"),y={name:"App",components:{Index:u["default"],cabecera:m["default"],pie:p["default"],upload:_["default"]},data(){return{emailA:"",nameA:"",addCorreoM:!1,allcorreos:[],valid:!1,loaderCorreos:!1,config:h["a"],myInfoD:!1,loader:!1,drawer:!1,confirm:!1,profileImage:[],updateSeguridad:!1,pregunta1:"",pregunta2:"",pregunta3:"",respuesta1:"",respuesta2:"",respuesta3:"",pin:"",pinModal:!1,email:"",name:"",user:{},userCDIProfile:{},userDoctorProfile:{},userAdminProfile:{},cdi_contrasena:"",doctor_contrasena:"",admin_contrasena:"",isValidCredencialesCDI:!1,isValidCredencialesDoctor:!1,isValidCredencialesAdmin:!1,seguridadModal:!1,thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},expireDate:"",totalTime:""}},created(){this.infoUser()},watch:{myInfoD(t){t&&this.getSeguridad()},nameA(t){""===t&&t.length>=3&&t.length<=40&&/^([\sa-zA-ZñÑáéíóúÁÉÍÓÚ]{3,40})*$/.test(t)?this.valid=!0:this.valid=!1},emailA(t){t&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(t)?this.valid=!0:this.valid=!1)}},computed:{createdAtUser(){return v()(this.user.createdAt).format("DD-MM-YYYY")},createdAt(){return v()(this.user.createdAt).format("DD-MM-YYYY")}},methods:{guardarPreguntasSeguridad(){this.$apollo.mutate({mutation:g["b"],variables:{input:{pregunta:this.pregunta1,respuesta:this.respuesta1,nombre_usuario:this.$store.state.user.nombre_usuario}}}).then((t=>{this.emailA="",this.nameA="",this.pregunta1="",this.respuesta1="",this.seguridadModal=!1,this.myInfoD=!1,this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Pregunta de seguridad actualizada correctamente"})})).catch((t=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",t),this.$q.notify({message:t.message.split("GraphQL error:"),color:"negative"})}))},guardarPinSeguridad(){this.$apollo.mutate({mutation:g["a"],variables:{input:{pin:this.pin,nombre_usuario:this.$store.state.user.nombre_usuario}}}).then((t=>{this.emailA="",this.nameA="",this.pregunta1="",this.respuesta1="",this.pinModal=!1,this.pin="",this.seguridadModal=!1,this.myInfoD=!1,this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Pin de seguridad actualizada correctamente"})})).catch((t=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",t),this.$q.notify({message:t.message.split("GraphQL error:"),color:"negative"})}))},editarSeguridad(){this.$apollo.mutate({mutation:f["b"],variables:{data:{pregunta1:this.pregunta1,respuesta1:this.respuesta1,pregunta2:this.pregunta2,respuesta2:this.respuesta2,pregunta3:this.pregunta3,respuesta3:this.respuesta3,UserId:this.user.id}}}).then((t=>{this.emailA="",this.nameA="",this.pregunta1="",this.respuesta1="",this.pregunta2="",this.respuesta2="",this.pregunta3="",this.respuesta3="",this.seguridadModal=!1,this.myInfoD=!1,this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Seguridad actualizada correctamente"})})).catch((t=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",t),this.$q.notify({message:t.message.split("GraphQL error:"),color:"negative"})}))},getSeguridad(){this.$apollo.query({query:g["d"],fetchPolicy:"network-only",variables:{nombre_usuario:this.$store.state.user.nombre_usuario}}).then((t=>{if(t.data){const e=t.data.metodosRecuperacion;this.pregunta1=e.preguntas[0].pregunta||""}})).catch((t=>{this.updateSeguridad=!1,this.$isDev&&console.log("hubo un error: ",t)}))},async infoUser(){"cdi"===this.$store.state.user.role?await this.obtenerInformacionCDI():"doctor"===this.$store.state.user.role?await this.obtenerInformacionDoctor():"admin"===this.$store.state.user.role&&await this.obtenerInformacionAdmin()},obtenerInformacionCDI(){this.$apollo.query({query:f["y"],fetchPolicy:"network-only",variables:{id_cdi:this.$store.state.user.cdi_id}}).then((t=>{this.response=!0,this.userCDIProfile=Object.assign({},t.data.cdi)})).catch((t=>{console.log("errpr looc",t),this.$isDev&&console.log("hubo un error: ",t)}))},obtenerInformacionDoctor(){this.$apollo.query({query:f["z"],fetchPolicy:"network-only",variables:{id_doctor:this.$store.state.user.doctor_id}}).then((t=>{this.response=!0,this.userDoctorProfile=Object.assign({},t.data.doctorPacientes)})).catch((t=>{console.log("errpr looc",t),this.$isDev&&console.log("hubo un error: ",t)}))},obtenerInformacionAdmin(){this.$apollo.query({query:f["q"],fetchPolicy:"network-only",variables:{id_usuario:this.$store.state.user.id}}).then((t=>{this.response=!0,this.userAdminProfile=Object.assign({},t.data.usuario)})).catch((t=>{console.log("errpr looc",t),this.$isDev&&console.log("hubo un error: ",t)}))},validateCDICredentialsInputs(){const t=this.cdi_contrasena.length>=6,e=this.userCDIProfile.usuarios.nombre_usuario.length>=3;this.isValidCredencialesCDI=t&&e},validateDoctorCredentialsInputs(){const t=this.doctor_contrasena.length>=6,e=this.userDoctorProfile.usuarios.nombre_usuario.length>=3;this.isValidCredencialesDoctor=t&&e},validateUserCredentialsInputs(){const t=this.admin_contrasena.length>=6,e=this.userAdminProfile.nombre_usuario.length>=3;this.isValidCredencialesAdmin=t&&e},actualizarUsuario(t){this.loader=!0,this.$apollo.mutate({mutation:f["E"],variables:{id_usuario:this.$store.state.user.user_id,input:{contrasena:"cdi"===this.$store.state.user.role?this.cdi_contrasena:this.doctor_contrasena||this.admin_contrasena,nombre_usuario:this.$store.state.user.nombre_usuario}}}).then((t=>{this.loader=!1,this.viewType="userList",this.cdi_contrasena="",this.doctor_contrasena="",this.admin_contrasena="",this.infoUser(),this.$q.notify({message:"Usuario actualizado",color:"positive"})})).catch((t=>{this.loader=!1,this.$q.notify({message:t.message.split("GraphQL error:"),color:"negative"})}))},myInfo(){this.myInfoD=!0,this.name=this.user.name,this.email=this.user.email},setImage(t){this.file=t[0],this.profileImage=t[0]},removeFile(t){this.file=t.file},modificarDatos(){this.loader=!0;const t={name:this.name,email:this.email};return this.$apollo.mutate({mutation:f["D"],variables:{id:this.$store.state.user.id,data:t}}).then((t=>{this.loader=!1,this.infoUser(),this.myInfoD=!1,this.$q.notify({message:"Datos actualizados",color:"positive"})})).catch((t=>{this.loader=!1,console.log("error: ",t)}))},myCorreos(){this.loaderCorreos=!0,this.$apollo.query({query:f["A"],fetchPolicy:"network-only"}).then((t=>{this.loaderCorreos=!1,this.allcorreos=Object.assign([],t.data.MyCorreos)})).catch((t=>{this.loaderCorreos=!1,this.$q.notify({message:t.message.split("GraphQL error:"),color:"negative"})}))},addCorreoModal(){this.addCorreoM=!0},createCorreo(){this.loader=!0;let t={email:this.emailA,name:this.nameA,userId:this.user.id};this.$apollo.mutate({mutation:f["v"],variables:{data:t}}).then((t=>{this.loader=!1,this.myCorreos(),this.emailA="",this.nameA="",this.$q.notify({color:"positive",textColor:"white",icon:"mdi-check",message:"Tu correo fue agregado"})})).catch((t=>{this.loader=!1,this.emailA="",this.nameA="",console.log("there was an error: ",t),this.$q.notify({message:t.message.split("GraphQL error:"),color:"negative"})}))},deleteCorreo(t){this.$apollo.mutate({mutation:f["x"],variables:{correoID:t}}).then((t=>{this.myCorreos(),this.$q.notify({message:"Correo borrado con éxito",color:"positive"})})).catch((t=>{console.log("error delete correo: ",t),this.$q.notify({message:t.message.split("GraphQL error:"),color:"negative"})}))},destroy(){Object(d["c"])(),this.$store.commit("logout"),this.$router.push({name:"login"})}}},C=y,w=(a("2f17"),a("2877")),A=a("9404"),$=a("823b"),x=a("4d5a"),I=a("4983"),D=a("1c1c"),j=a("068f"),q=a("66e5"),k=a("4074"),P=a("cb32"),S=a("eb85"),E=a("429b"),z=a("7867"),U=a("09e3"),M=a("9989"),N=a("24e8"),O=a("f09f"),L=a("a370"),T=a("27f9"),R=a("9c40"),Q=a("4b7e"),G=a("714f"),B=a("7f67"),V=a("eebe"),F=a.n(V),H=Object(w["a"])(C,c,l,!1,null,null,null),Y=H.exports;F()(H,"components",{QDrawer:A["a"],QTabPanel:$["a"],QLayout:x["a"],QScrollArea:I["a"],QList:D["a"],QImg:j["a"],QItem:q["a"],QItemSection:k["a"],QAvatar:P["a"],QSeparator:S["a"],QTabs:E["a"],QRouteTab:z["a"],QPageContainer:U["a"],QPage:M["a"],QDialog:N["a"],QCard:O["a"],QCardSection:L["a"],QInput:T["a"],QBtn:R["a"],QCardActions:Q["a"]}),F()(H,"directives",{Ripple:G["a"],ClosePopup:B["a"]});var J=a("4360"),X=a("8c4f");function Z(t){return()=>a("ef9d")(`./components${t}.vue`)}var K=a("323e"),W=a.n(K),tt=(a("a5d8"),[{path:"/home",name:"home",components:{default:Z("/modules/home/home")},meta:{requiresAuth:!0,roles:["Paciente","admin","Encargado","doctor"]},props:!0},{path:"/estadisticas",name:"estadisticas",components:{default:Z("/modules/estadisticas/estadisticas")},meta:{requiresAuth:!0,roles:["Paciente","admin","Encargado","doctor"]},props:!0},{path:"/respaldos",name:"respaldos",components:{default:Z("/modules/respaldos/respaldos")},meta:{requiresAuth:!0,roles:["admin"]},props:!0}]),et=[{path:"/login",name:"login",component:Z("/modules/public/login")}];o["a"].use(X["a"]);const at=[{path:"/404",name:"Error404",component:Z("/Error404")},{path:"/",name:"login",component:Z("/modules/public/login")}],ot=at.concat(tt).concat(et),rt=new X["a"]({scrollBehavior:()=>({y:0}),routes:ot});rt.beforeEach(((t,e,a)=>{const o=Object(d["a"])();""===J["a"].state.user.role&&o&&Object(d["b"])();const r="login"===t.name||"/"===t.path||"/login"===t.path;o&&r?a({name:"home"}):o||r?a():a({name:"login"})})),rt.beforeResolve(((t,e,a)=>{t.name&&W.a.start(),a()})),rt.afterEach(((t,e)=>{W.a.done()}));var it=rt,st=async function(){const t="function"===typeof J["a"]?await Object(J["a"])({Vue:o["a"]}):J["a"],e="function"===typeof it?await it({Vue:o["a"],store:t}):it;t.$router=e;const a={router:e,store:t,render:t=>t(Y),el:"#q-app"};return{app:a,store:t,router:e}},nt=a("a925"),ct={failed:"Action failed",success:"Action was successful"},lt={"en-us":ct};o["a"].use(nt["a"]);const dt=new nt["a"]({locale:"en-us",fallbackLocale:"en-us",messages:lt});var ut=({app:t})=>{t.i18n=dt},mt=a("bc3a"),pt=a.n(mt);o["a"].prototype.$axios=pt.a;var ft=a("74ca"),gt=a("d634"),ht=a("2bf2"),bt=a("cf67"),vt=a("e13b"),_t=a("c0cc"),yt=a("4518");const Ct=!1,wt=Object(bt["createUploadLink"])({uri:h["a"].graphql.url.http}),At=new _t["a"]({uri:h["a"].graphql.url.ws,options:{reconnect:!0}}),$t={applyMiddleware(t,e){t.variables={...t.variables,authorization:localStorage.getItem("token")},e()}};At.subscriptionClient.use([$t]);const xt=Object(gt["split"])((({query:t})=>{const{kind:e,operation:a}=Object(yt["l"])(t);return"OperationDefinition"===e&&"subscription"===a}),At,wt),It=new gt["ApolloLink"](((t,e)=>{const a=localStorage.getItem("token");return a&&!Object(d["a"])()&&it.push({path:"/login"}),t.setContext((t=>({...t,headers:{...t.headers,authorization:a||""}}))),e(t)})),Dt=Object(vt["a"])((({graphQLErrors:t,networkError:e,operation:a,forward:o})=>{t&&t.map((({message:t,locations:e,path:a})=>{Ct&&console.log(`[GraphQL error]: Message: ${t}, Location: ${e}, Path: ${a}`),"not-authorized-invalid-token"!==t&&"not-authorized-token-expired"!==t&&"not-authenticated"!==t||(Object(d["a"])(),it.push({path:"/login"}))}))})),jt=new ft["a"]({link:gt["ApolloLink"].from([It,Dt,xt]),cache:new ht["a"]({addTypename:!1}),connectToDevTools:Ct});var qt=jt,kt=a("4eb5"),Pt=a.n(kt),St=a("1321"),Et=a.n(St);function zt(t){return new Promise((e=>setTimeout(e,t)))}async function Ut({timeout:t=500}={}){const e=`${Date.now()}-${Math.random().toString(36).slice(2,9)}`;if("undefined"!==typeof BroadcastChannel)try{const o=new BroadcastChannel("cdi_single_tab_channel");let r=!1;o.onmessage=t=>{const a=t.data||{};"tab-check"===a.type&&a.id!==e&&o.postMessage({type:"tab-here",id:e}),"tab-here"===a.type&&a.id!==e&&(r=!0)},o.postMessage({type:"tab-check",id:e});const i=new Promise((e=>{const a=()=>e(r);setTimeout(a,t)})),s=await i;return s?(o.close(),!1):(window.addEventListener("beforeunload",(()=>{try{o.postMessage({type:"tab-closed",id:e})}catch(t){}o.close()})),!0)}catch(a){console.warn("BroadcastChannel failed, falling back to localStorage",a)}try{const n="cdi_single_tab_leader",c=Date.now(),l={id:e,ts:c};localStorage.setItem(n,JSON.stringify(l));let d=!1;function u(t){if(t.key&&t.key===n)try{const a=JSON.parse(t.newValue);a&&a.id&&a.id!==e&&(d=!0)}catch(a){}}window.addEventListener("storage",u),await zt(t);try{const p=JSON.parse(localStorage.getItem(n)||"null");p&&p.id&&p.id!==e&&(d=!0)}catch(a){}if(d)return window.removeEventListener("storage",u),!1;const m=setInterval((()=>{try{localStorage.setItem(n,JSON.stringify({id:e,ts:Date.now()}))}catch(a){}}),1e3);return window.addEventListener("beforeunload",(()=>{clearInterval(m);try{const t=JSON.parse(localStorage.getItem(n)||"null");t&&t.id===e&&localStorage.removeItem(n)}catch(a){}})),!0}catch(a){return console.warn("single-tab fallback failed, allowing tab",a),!0}}var Mt=async({Vue:t})=>{const e=await Ut({timeout:400});if(!e){const t=document.createElement("div");return t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0",t.style.zIndex="999999",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.background="white",t.style.color="#333",t.style.fontFamily="Arial, Helvetica, sans-serif",t.innerHTML='<div style="max-width:90%;text-align:center;padding:24px;"><h2>Ya tienes una instancia de la aplicación en este navegador</h2><p>Por seguridad, la aplicación no puede abrirse en más de una pestaña del mismo navegador. Cierre la otra pestaña e inténtelo de nuevo.</p></div>',void document.body.appendChild(t)}Pt.a.config.autoSetContainer=!0,t.use(Pt.a),t.use(Et.a),t.component("apexchart",Et.a),t.prototype.$apollo=qt,t.prototype.$axios=pt.a,t.prototype.$moment=v.a};const Nt="";async function Ot(){const{app:t,store:e,router:a}=await st();let r=!1;const i=t=>{r=!0;const e=Object(t)===t?a.resolve(t).route.fullPath:t;window.location.href=e},s=window.location.href.replace(window.location.origin,""),n=[ut,void 0,Mt];for(let l=0;!1===r&&l<n.length;l++)if("function"===typeof n[l])try{await n[l]({app:t,router:a,store:e,Vue:o["a"],ssrContext:null,redirect:i,urlPath:s,publicPath:Nt})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new o["a"](t)}Ot()},4360:function(t,e,a){"use strict";var o=a("2b0e"),r=a("2f62"),i=a("f121"),s=a("bfa9");o["a"].use(r["a"]);const n=new s["a"]({storage:window.localStorage});let c={id:"",fullName:"",profileImage:"",isAuthenticated:!1,role:"",email:"",user:"",user_id:"",cdi_id:"",doctor_id:""};e["a"]=new r["a"].Store({state:{user:{id:"",fullName:"",profileImage:"",isAuthenticated:!1,role:"",email:"",user:"",user_id:"",cdi_id:"",doctor_id:""},url_base:i["a"].api.url},mutations:{setUser(t,e){t.user=e},setFullName(t,e){t.user.fullName=e},setRole(t,e){t.user.role=e},setAuthenticated(t,e){t.user.isAuthenticated=e},setProfileImage(t,e){t.user.profileImage=e},logout(t){t.user=c}},getters:{authenticate:t=>t.user.isAuthenticated},plugins:[n.plugin]})},4678:function(t,e,a){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="4678"},"59e2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAzVJREFUaN7tmctvTVEUxr9TqsFFVA2EzgQh0iboSww0Ruae7UREDdTUI+aYVlsl/oTGSJF4ToxER0SEERpNiqSiadpK+jPYu0lz3XPO3vuc2yvcLzmDu8++3/rWfqyz9tpSFVX834jyIAGWSWqRdFDSHkk7JG2SVLBdpiR9kfRO0qik55JeRlE0X1HvgUbgOjCGPz4D14DNlRC+EbgNzAYIL8YscBPYsFTiTwLfcxBejK/A0XIKrwXulEF4MQaB5XmLXwU8WALxC7gHrMxz5H3EzwB9QCuw2j6twA37zseJ7DOB37IZA5oSuJrxi1iDWcV3eY58kwNns+dMhG1sTKj0iTZ9Htz9HrxfCQmxmDjvgxYP7jZPbr+lBGzB/yNV8OAveHLPEPPFromx0Stphfe0ucM3B6uTdM7JAUxi1h0gaqdH310B/N3AH3pLzUCLpJAEy8fprgD+Rkl7XRw4GEAuST1Ac1on26cn0EaniwN7AsnrJI0kOWHfjSh8f6VrA954RohizGLifJuNNgWg3bZlTb9fF+uNSjjwXVJ94AiVG9+iKNq4uKHUEnKO5xXAmuKGmhCWvwml0tUpZV9C8zKH+B/29zqZ0Jy1iPDTxYHxAAfmJD2S9FTSC0lvoyiaXtwBWCXzsTsg6ZB9fKPReGoP4K5HVPgI9ALeMwbUA+eBTx72hl2ILzsQ/bL9MudLwArgiuVMw0UXwrRUdw7odNDm68ghy52EfS5ENZiiUxwu5C1+ke1LKcvVLWpiKmZxKFsBCmhIsHvVhyjpQHOqjA6cjrEZe6BJIhuKIZsG2ssgvsNyl0J/CGED8C2GcBLoyFH8fstZChMEhOkF4uMJa3IGOJNReAScJbnMciTr6NwiGY+B3QG8u4EnKdwDmcRbQ7XA/RRD85jy4wlgbQLXOkx1+6H9TxKcSotOyRUmjxmWdNih+7ykD5LeS5q0beslbZO0VW4Z8IikY8X5VB4zMUT5MeAy8lkcOYYp9+WNCbJuWA8nNmAuInyKtHGYwZyXl/4YC2zGpB0+KfECPgFXyXjJl9c1a41M0alTpvSxXeYEtviadUxmY7+S9EzSaMWvWauo4h/Ab6sG50ZBkYERAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTA3VDE4OjAxOjM4KzAwOjAwosyMngAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0wN1QxODowMTozOCswMDowMNORNCIAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stSl9QcXZYOE2/oIDiAAAAAElFTkSuQmCC"},"5f87":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var o=a("4360");a("c1df");async function r(t){window.localStorage.setItem("user",t.usuario.nombre_usuario||""),window.localStorage.setItem("status",t.usuario.status||""),window.localStorage.setItem("user_id",t.usuario.id_usuario),window.localStorage.setItem("doctor_id",t.usuario.fk_doctor_id),window.localStorage.setItem("cdi_id",t.usuario.fk_cdi_id),window.localStorage.setItem("isAuthenticated",!0),window.localStorage.setItem("role",t.usuario.rol),window.localStorage.setItem("token",t.token),window.localStorage.setItem("expire","");const e=window.localStorage.getItem("user"),a=window.localStorage.getItem("user_id"),r=window.localStorage.getItem("doctor_id"),i=window.localStorage.getItem("cdi_id"),s=window.localStorage.getItem("role"),n=window.localStorage.getItem("isAuthenticated");await o["a"].commit("setUser",{fullName:"",nombre_usuario:e,id:a,profileImage:"",isAuthenticated:n,email:"",role:s,doctor_id:r,cdi_id:i})}function i(){window.localStorage.removeItem("user"),window.localStorage.removeItem("user_id"),window.localStorage.removeItem("token"),window.localStorage.removeItem("expire"),window.localStorage.removeItem("isAuthenticated"),window.localStorage.removeItem("profileImage"),window.localStorage.removeItem("role"),window.localStorage.removeItem("status"),o["a"].commit("setUser",{fullName:"",id:"",profileImage:"",isAuthenticated:!1,email:"",role:""})}function s(){const t=window.localStorage.getItem("token");o["a"].state.user.isAuthenticated;return!!t}function n(){if(s()){const t=window.localStorage.getItem("user"),e=window.localStorage.getItem("user_id"),a=window.localStorage.getItem("role"),r=window.localStorage.getItem("isAuthenticated"),i=window.localStorage.getItem("doctor_id"),s=window.localStorage.getItem("cdi_id");o["a"].commit("setUser",{fullName:t,id:e,profileImage:data.store.profileImage,isAuthenticated:"true"===r,role:a,doctor_id:i,cdi_id:s})}}},"6d6b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div")},r=[],i={name:"footer"},s=i,n=a("2877"),c=Object(n["a"])(s,o,r,!1,null,null,null);e["default"]=c.exports},7122:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div")},r=[],i={name:"header"},s=i,n=a("2877"),c=Object(n["a"])(s,o,r,!1,null,null,null);e["default"]=c.exports},"726c":function(t,e,a){"use strict";a("b7ca")},"7e6d":function(t,e,a){},"81ad":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("router-view",{attrs:{id:"application"}})},r=[],i={name:"index"},s=i,n=a("2877"),c=Object(n["a"])(s,o,r,!1,null,null,null);e["default"]=c.exports},b7ca:function(t,e,a){},c6a2:function(t,e,a){"use strict";a.d(e,"w",(function(){return i})),a.d(e,"s",(function(){return g})),a.d(e,"o",(function(){return h})),a.d(e,"n",(function(){return b})),a.d(e,"m",(function(){return v})),a.d(e,"q",(function(){return _})),a.d(e,"t",(function(){return y})),a.d(e,"z",(function(){return C})),a.d(e,"A",(function(){return w})),a.d(e,"v",(function(){return A})),a.d(e,"x",(function(){return $})),a.d(e,"j",(function(){return x})),a.d(e,"i",(function(){return I})),a.d(e,"p",(function(){return D})),a.d(e,"g",(function(){return j})),a.d(e,"k",(function(){return q})),a.d(e,"l",(function(){return k})),a.d(e,"c",(function(){return P})),a.d(e,"G",(function(){return S})),a.d(e,"I",(function(){return E})),a.d(e,"F",(function(){return z})),a.d(e,"H",(function(){return U})),a.d(e,"O",(function(){return M})),a.d(e,"N",(function(){return N})),a.d(e,"M",(function(){return O})),a.d(e,"J",(function(){return L})),a.d(e,"K",(function(){return T})),a.d(e,"L",(function(){return R})),a.d(e,"d",(function(){return Q})),a.d(e,"e",(function(){return G})),a.d(e,"E",(function(){return B})),a.d(e,"B",(function(){return V})),a.d(e,"y",(function(){return F})),a.d(e,"h",(function(){return H})),a.d(e,"f",(function(){return Y})),a.d(e,"P",(function(){return J})),a.d(e,"D",(function(){return X})),a.d(e,"C",(function(){return Z})),a.d(e,"r",(function(){return K})),a.d(e,"b",(function(){return W})),a.d(e,"a",(function(){return tt})),a.d(e,"u",(function(){return et}));var o=a("5184");const r="\n  oneUser {\n    id\n    profileImage\n    name\n    email\n    role\n    roleEspecialidad\n    dni\n    telefono\n    direccion {\n      numero\n      sector\n      calle\n    }\n    createdAt\n  }\n",i=o["a"]`
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
`,k=o["a"]`
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
`,P=o["a"]`
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
`,N=o["a"]`
mutation doUpdateEstadoTratamiento($id_tratamiento: ID! $estado: EstadoTratamiento!){
  actualizarEstadoTratamiento(id_tratamiento: $id_tratamiento, estado: $estado)
}
`,O=o["a"]`
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
`),tt=(o["a"]`
query recuperarContrasena($data: respuestasSeguridadInput) {
	recuperarContrasena(data: $data)
}
`,o["a"]`
mutation setNewPassword($UserId: ID, $password: String) {
	setNewPassword(UserId: $UserId, password: $password)
}
`),et=o["a"]`
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
`},ef9d:function(t,e,a){var o={"./components/Error404.vue":["56f6",6],"./components/common/PaginatedCardList.vue":["a977",1,0],"./components/components/upload.vue":["1a21"],"./components/components/uploadComprobante.vue":["e941",3],"./components/layout/Index.vue":["81ad"],"./components/layout/cabecera.vue":["7122"],"./components/layout/pie.vue":["6d6b"],"./components/modules/admin/admins.vue":["a340",1,0],"./components/modules/admin/doctores.vue":["c69d",1,0],"./components/modules/admin/historiaCDIPdf.vue":["bfee",0],"./components/modules/admin/historiaDiagPdf.vue":["347d",0],"./components/modules/admin/historiaDrPdf.vue":["77ac",0],"./components/modules/admin/historialCdisListaEstado.vue":["846f",0],"./components/modules/admin/historialDoctoresLista.vue":["90d2",0],"./components/modules/admin/historialEnc.vue":["a00f",0],"./components/modules/admin/hitoriaPdf.vue":["f39f",0],"./components/modules/admin/pdf-lista-doctores-completa.vue":["450d",0],"./components/modules/admin/reports/estadisticas/reporteConsultaMes.vue":["5901",0],"./components/modules/admin/reports/estadisticas/reporteConsultasPeriodo.vue":["c7e8",0],"./components/modules/admin/reports/estadisticas/reporteConsultasPorMedicoPeriodo.vue":["f607",0],"./components/modules/admin/reports/estadisticas/reporteDistEdad.vue":["8e4d",0],"./components/modules/admin/reports/estadisticas/reporteDistGenero.vue":["b4ab",0],"./components/modules/admin/reports/estadisticas/reportePacienteAreaDeTrabajo.vue":["93c2",0],"./components/modules/admin/reports/estadisticas/reportePacienteNuevosPeriodo.vue":["20e8",0],"./components/modules/admin/reports/estadisticas/reporteTopDiagnosticos.vue":["2f12",0],"./components/modules/admin/reports/estadisticas/reporteTotalPacientes.vue":["2c6e",0],"./components/modules/admin/reports/reporteEmergencias.vue":["bf3f",0],"./components/modules/admin/reports/reporteExamenes.vue":["c839",0],"./components/modules/admin/reports/reporteHospitalizaciones.vue":["fa10",0],"./components/modules/admin/reports/reporteMedicamentos.vue":["7172",0],"./components/modules/admin/reports/reporteTratamientos.vue":["52b0",0],"./components/modules/admin/users.vue":["e20f",1,0],"./components/modules/estadisticas/estadisticas.vue":["fbcf",1,0,4],"./components/modules/home/home.vue":["962a",1,0,7],"./components/modules/home/homeAdmin.vue":["934e",1,0],"./components/modules/home/homeDoctor.vue":["0bb2",1,0],"./components/modules/home/homeEncargado.vue":["2591",1,0],"./components/modules/public/Reestablecer.vue":["44f3",1,8],"./components/modules/public/login.vue":["8f8d",9],"./components/modules/public/recuperar.vue":["408b",10],"./components/modules/public/registro.vue":["a450",11],"./components/modules/respaldos/respaldos.vue":["a9f0",1,5]};function r(t){if(!a.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return Promise.all(e.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(o)},r.id="ef9d",t.exports=r},f121:function(t,e,a){"use strict";const o={development:"http://localhost:4000",production:"https://api.medrec.online"};let r="production";e["a"]={graphql:{url:{http:`${o[r]}/graphql`,ws:`${o[r].replace("https","wss").replace("http","ws")}/subscriptions`},method:"POST",headers:{json:{"Content-Type":"application/json"}}},api:{url:`${o[r]}`}}}});