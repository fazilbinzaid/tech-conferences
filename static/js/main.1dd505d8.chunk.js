(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{268:function(e,t,n){},389:function(e,t,n){e.exports=n(754)},67:function(e){e.exports=[{name:"SciPy India",venue:"IIT Bombay",date:"21-22 Jan, 2018",description:"International conference on Python for education and scientific computing.",url:"https://scipy.in/"},{name:"IEEE Indicon",venue:"Amrita Vishwa Vidyapeetham, Coimbatore",date:"16-18 Dec, 2018",description:"The 15th IEEE India Council International Conference.",url:"http://indicon2018.in/"},{name:"FunctionalConf",date:"12-16 Dec, 2018",venue:"The LaLiT Ashok Hotel, Bengaluru",description:"Bring together the growing community of functional programmers under one roof.",url:"https://functionalconf.com/"},{name:"Devops Days India",date:"8-9 Dec, 2018",venue:"Sheraton Grand, Bengaluru",description:"Devopsdays is a worldwide series of technical conferences covering topics of software development, IT infrastructure operations, and the intersection between them.",url:"http://devopsdaysindia.org/"},{name:"ExpertTalks",date:"23-24 Nov, 2018",venue:"Hyatt Regency, Pune & SICR, Pune",description:"ExpertTalks invites practitioners from the software community to share experiences, insights and opinions on the technological innovations driving modern businesses.",url:"https://expert-talks.in/"},{name:"Data Hack Summit",date:"22-24 Nov, 2018",venue:"NIMHANS Convention Centre, Bengaluru",description:"India's most advanced conference on Aritificial Intelligence, Machine Learning, Deep Learning and IoT.",url:"https://www.analyticsvidhya.com/datahack-summit-2018/?utm_source=kdnuggets"},{name:"Grace Hopper Conference India",date:"14-16 Nov, 2018",venue:"Bangalore International Exhibition Center (BIEC)",description:"The Grace Hopper Celebration India is Asia's largest gathering of women technologists. It is produced by AnitaB.org and presented in partnership with ACM India.",url:"https://ghcindia.anitab.org/ghci-18-november-14-16-2018/"},{name:"ReactFoo",date:"1-2 Mar,2019",venue:"NIMHANS Convention Centre, Bengaluru",description:"A conference on React, alternatives to React, React Native and front-end engineering",url:"https://reactfoo.in/2019/"},{name:"SACON",date:"15-16 Feb, 2019",venue:"Bengaluru",description:"India\u2019s 1st Security Architecture Conference",url:"https://www.sacon.io/"},{name:"Processing Community Day",date:"2 Feb, 2019",venue:"Bengaluru",description:"Processing Community Day (PCD) is a day to celebrate and explore art, code, and diversity around the world, conducted by Processing community",url:"https://processingindia.org/bangalore.html"},{name:"RubyConf India",date:"20-21 Jan, 2019",venue:"Resort Rio and Club Rio Royale, Goa",description:"A global event complementing other RubyConf events across the world. This year it's a single track 2 day event, focused on the Language, Framework and Tools",url:"https://www.rubyconfindia.org/"},{name:"Pragma IIITA",date:"19 -20 Jan, 2019",venue:"Indian Insitute of Information Technology, Allahabad",description:"Pragma is premier student design and developers\u2019 conference held at IIIT-Allahabad. Attracting some of the best student developers from across India, Pragma is a 3 day extravaganza featuring a hackathon, workshops and numerous talks.",url:"http://pragmaconf.tech/"},{name:"GopherCon",date:"18-19 Jan, 2019",venue:"Resort Rio, Goa",description:"Go conference in India. Go is an open source project developed by a team at Google and many contributors for the open source community",url:"https://gopherconindia.com/"},{name:"JSFoo",date:"10 Jan, 2019",venue:"MCCIA Trade Tower, Pune",description:"The second Pune edition of India\u2019s premier JavaScript conference",url:"https://jsfoo.in/2019-pune/"}]},754:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(23),o=n(25),i=n(24),s=n(26),l=n(0),c=n.n(l),u=n(29),d=n.n(u),h=n(5),g=n(21),p=n(19),m=n(31),f=n(32),b=n(91),v=(n(268),[{id:"name",label:"Name"},{id:"date",label:"Date"},{id:"venue",label:"Venue"},{id:"description",label:"Description"}]),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).onColumnHeaderClick=function(e){return function(t){e!==n.state.sortCol?n.setState({sortCol:e}):"asc"===n.state.sortDir?n.setState({sortDir:"desc"}):n.setState({sortDir:"asc"})}},n.state={sortDir:"asc",sortCol:v&&v.length&&v[0].id},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"getDate",value:function(e){if(e.dateFrom&&e.dateTo){var t=new Date(e.dateFrom.toMillis()),n=new Date(e.dateTo.toMillis()),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];return t.getUTCDate()+" "+a[t.getUTCMonth()]+" "+t.getUTCFullYear()+" to "+n.getUTCDate()+" "+a[n.getUTCMonth()]+" "+n.getUTCFullYear()}}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.events,r=t.requesting,o=t.list,i=t.table,s=this.state,l=s.sortDir,u=s.sortCol,d=a&&Object(b.orderBy)(a.filter(function(e){return e.name.includes(i.tableFilterText)}),"date"===u?"dateFrom":u,l)||o&&Object(b.orderBy)(o,u,l);return c.a.createElement("div",null,!0===r?c.a.createElement("div",{style:{marginTop:"50px"}},c.a.createElement(h.i,{container:!0,styles:{marginTop:"20px"},justify:"center"},c.a.createElement(h.i,{item:!0},c.a.createElement(h.d,null)))):c.a.createElement(h.k,{className:n.root},c.a.createElement(h.m,{className:n.table,padding:"dense"},c.a.createElement(h.p,{className:"THeader"},c.a.createElement(h.q,null,v&&v.map(function(t){return c.a.createElement(h.o,{key:t.id,padding:"default",sortDirection:l},c.a.createElement(h.u,{title:"Sort",placement:"bottom-start",enterDelay:300},c.a.createElement(h.r,{name:t.id,active:u===t.id,direction:l,onClick:e.onColumnHeaderClick(t.id)},t.label)))}))),c.a.createElement(h.n,{className:"TableBody"},d&&d.map(function(t){return c.a.createElement(h.q,{key:t.id},c.a.createElement(h.o,{component:"th"},c.a.createElement("a",{id:t.id,href:t.url,target:"_blank",rel:"noopener noreferrer",className:"WebsiteLink"},t.name)),c.a.createElement(h.o,null,e.getDate(t)||t.date),c.a.createElement(h.o,null,t.venue),c.a.createElement(h.o,null,t.description))})))))}}]),t}(c.a.Component),y=Object(p.d)(Object(f.firestoreConnect)([{collection:"events"}]),Object(m.b)(function(e){return{events:e.firestore.ordered.events,requesting:e.firestore.status.requesting.events,table:e.table}}))(Object(g.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(E)),C=n(328),O=n.n(C),k=n(329),j=n.n(k),S=function(e){return function(t){t({type:"TOGGLE_SNACKBAR",payload:e})}},w=function(e){return function(t){t({type:"APPLY_FILTER",payload:e})}},T=n(46),I=n(332),D=n(324),L=n.n(D),N=n(325),F=n.n(N),R=n(326),x=n.n(R),A=n(327),B=n.n(A),P=n(127),M=n.n(P),_=n(45),W=n.n(_),G=n(128),H=n.n(G),q=n(67),U=q;function J(e){var t=e.classes,n=e.inputRef,a=void 0===n?function(){}:n,r=e.ref,o=Object(I.a)(e,["classes","inputRef","ref"]);return c.a.createElement(M.a,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){r(e),a(e)},classes:{input:t.input}}},o))}function K(e,t){var n=t.query,a=t.isHighlighted,r=x()(e.name,n),o=B()(e.name,r);return c.a.createElement(H.a,{selected:a,component:"div"},c.a.createElement("div",null,o.map(function(e,t){return e.highlight?c.a.createElement("span",{key:String(t),style:{fontWeight:500}},e.text):c.a.createElement("strong",{key:String(t),style:{fontWeight:300}},e.text)})))}function V(e){return e.name}var X=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={single:"",popper:"",suggestions:[]},n.handleSuggestionsFetchRequested=function(e){var t=e.value;n.setState({suggestions:function(e){var t=L()(e.trim()).toLowerCase(),n=t.length,a=0;return 0===n?[]:U.filter(function(e){var r=a<5&&e.name.slice(0,n).toLowerCase()===t;return r&&(a+=1),r})}(t)})},n.handleSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.handleChange=function(e){return function(t,a){var r=a.newValue;n.setState(Object(T.a)({},e,r)),n.props.update(r)}},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes,t={renderInputComponent:J,suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,getSuggestionValue:V,renderSuggestion:K};return c.a.createElement("div",{className:e.root},c.a.createElement(F.a,Object.assign({},t,{inputProps:{classes:e,placeholder:"Search an Event ",value:this.state.single,onChange:this.handleChange("single")},theme:{container:e.container,suggestionsContainerOpen:e.suggestionsContainerOpen,suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderSuggestionsContainer:function(e){return c.a.createElement(W.a,Object.assign({},e.containerProps,{square:!0}),e.children)}})))}}]),t}(c.a.Component),z=Object(g.withStyles)(function(e){return{root:{height:30,flexGrow:1},container:{position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing.unit,left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:2*e.spacing.unit}}})(X),Y=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).handleFilterReset=function(){n.props.applyFilter("")},n.handleSnackClose=function(){S("")},n.onLogout=function(){var e=n.props,t=e.firebase,a=e.toggleSnackbar;t.logout().then(function(){a("Logout Successful")})},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.auth,a=e.open,r=e.openLogin,o=e.update,i=e.table;return c.a.createElement("div",{className:t.root},c.a.createElement(h.a,{position:"static"},c.a.createElement(h.t,null,c.a.createElement(h.j,{className:t.menuButton,color:"inherit","aria-label":"Menu"},c.a.createElement(O.a,null)),c.a.createElement(h.v,{variant:"h6",color:"inherit",className:t.grow},"Tech Conferences"),c.a.createElement("div",{className:t.search},c.a.createElement("div",{className:t.searchIcon},c.a.createElement(j.a,null)),c.a.createElement(z,{update:o})),""!==i.tableFilterText?c.a.createElement(h.b,{variant:"text",className:"NavButton",onClick:this.handleFilterReset.bind(this)},"Reset Filters"):null,n.uid?c.a.createElement(h.b,{variant:"text",className:"NavButton",onClick:a},"Add Event"):null,n.uid?null:c.a.createElement(h.b,{variant:"text",className:"NavButton",onClick:r},"Login"),n.uid?c.a.createElement(h.b,{variant:"text",className:"NavButton",onClick:this.onLogout},"Logout"):null)))}}]),t}(c.a.Component),Q=Object(p.d)(Object(f.firebaseConnect)(),Object(m.b)(function(e){return{auth:e.firebase.auth,table:e.table}},{toggleSnackbar:S,applyFilter:w}))(Object(g.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},search:{position:"relative",borderRadius:1,background:"#fff","&:hover":{backgroundColor:"lighten(rgba(255,0,255,1),50%)"},marginRight:"auto",marginLeft:"auto",width:"20%",paddingLeft:"5px !important"},searchIcon:{width:36,height:"100%",position:"absolute",pointerEvents:"none",fontFamily:"Roboto",display:"flex",alignItems:"flex-end",justifyContent:"flex-center",marginLeft:"90%"}})(Y)),Z=n(331),$=n(90),ee={dateFrom:Date(),dateTo:Date(),name:"",url:"",venue:"",description:"",keyword:"",tags:[]},te=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).reset=function(){n.setState(ee)},n.handleChange=function(e){n.setState(Object(T.a)({},e.target.id,e.target.value))},n.handleDelete=function(e){return function(){n.setState(function(t){var n=Object(Z.a)(t.tags),a=n.indexOf(e);return n.splice(a,1),{tags:n}})}},n.handleSubmit=function(e){var t=n.state;t.dateFrom&&(t.dateFrom=new Date(t.dateFrom)),t.dateTo&&(t.dateTo=new Date(t.dateTo)),delete t.keyword;var a=n.props,r=a.firestore,o=a.toggleSnackbar;r.add({collection:"events"},t).then(function(e){o("Event Added")}).catch(function(e){return console.log(e)}),n.reset(),n.handleClose()},n.handleClose=function(){n.props.close()},n.state=ee,n.keyPress=n.keyPress.bind(Object($.a)(Object($.a)(n))),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"keyPress",value:function(e){if(13===e.keyCode){var t=e.target.value,n=this.state.tags;n.find(function(e){return e.label.toLowerCase()===t.toLowerCase()})||""===t||this.setState(function(e){var a=n,r=a.length,o=r>0?a[r-1].key:-1;return a.push({key:o+1,label:t.toUpperCase()}),{tags:a,keyword:""}})}}},{key:"render",value:function(){var e=this,t=this.props.classes;return c.a.createElement(h.e,{id:"addEventDialog",open:this.props.open,onEscapeKeyDown:this.handleClose,onBackdropClick:this.handleClose,onClose:this.handleClose,"aria-labelledby":"form-addevent-title",fullWidth:!0},c.a.createElement(h.h,{id:"form-addevent-title"},"Add Event"),c.a.createElement(h.g,null,c.a.createElement(h.s,{id:"name",label:"Event Name",type:"text",value:this.state.name,onChange:this.handleChange,fullWidth:!0}),c.a.createElement(h.s,{id:"url",label:"URL",type:"text",value:this.state.url,onChange:this.handleChange,fullWidth:!0}),c.a.createElement(h.s,{id:"venue",label:"Location",type:"text",value:this.state.venue,onChange:this.handleChange,fullWidth:!0}),c.a.createElement(h.s,{id:"dateFrom",label:"From",type:"date",value:this.state.dateFrom,onChange:this.handleChange}),c.a.createElement(h.s,{id:"dateTo",label:"To",type:"date",value:this.state.dateTo,onChange:this.handleChange}),c.a.createElement(h.s,{id:"description",label:"Description",type:"text",value:this.state.description,onChange:this.handleChange,fullWidth:!0}),this.state.tags.map(function(n){return c.a.createElement(h.c,{key:n.key,label:n.label,onDelete:e.handleDelete(n),className:t.chip})}),c.a.createElement(h.s,{id:"keyword",label:"Keywords",type:"text",value:this.state.keyword,onChange:this.handleChange,onKeyDown:this.keyPress,fullWidth:!0})),c.a.createElement(h.f,null,c.a.createElement(h.b,{onClick:this.handleClose,color:"primary"},"Cancel"),c.a.createElement(h.b,{onClick:this.handleSubmit,color:"primary"},"Add")))}}]),t}(c.a.Component),ne=Object(p.d)(Object(f.firestoreConnect)(),Object(m.b)(null,{toggleSnackbar:S}))(Object(g.withStyles)(function(e){return{chip:{margin:e.spacing.unit/2,marginTop:e.spacing.unit}}})(te)),ae=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).handleClose=function(){e.props.close()},e.onSnackClose=function(){S("")},e.handleLogin=function(t){e.setState({loading:!0});var n=e.props,a=n.firebase,r=n.toggleSnackbar,o=e.state,i=o.email,s=o.password;a.login({email:i,password:s}).then(function(){e.setState({email:"",password:""}),r("Login Successful")}).catch(function(e){return console.log(e)}).finally(function(){e.setState({loading:!1}),e.handleClose()})},e.onChange=function(t){e.setState(Object(T.a)({},t.target.id,t.target.value))},e.state={email:"",password:"",loading:!1},e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.loading;return c.a.createElement("div",null,c.a.createElement(h.e,{id:"loginDialog",open:this.props.openLogin,onEscapeKeyDown:this.handleClose,onBackdropClick:this.handleClose,onClose:this.handleClose,fullWidth:!0,"aria-labelledby":"form-login-title"},e?c.a.createElement(h.i,{container:!0,justify:"center"},c.a.createElement(h.i,{item:!0},c.a.createElement(h.g,null,c.a.createElement(h.d,null)))):c.a.createElement("div",null,c.a.createElement(h.h,{id:"form-login-title"},"Login"),c.a.createElement(h.g,null,c.a.createElement(h.s,{margin:"dense",id:"email",label:"Email Address",type:"email",value:this.state.email,onChange:this.onChange,fullWidth:!0}),c.a.createElement(h.s,{margin:"dense",id:"password",label:"Password",type:"password",value:this.state.password,onChange:this.onChange,fullWidth:!0})),c.a.createElement(h.f,null,c.a.createElement(h.b,{onClick:this.handleClose,color:"primary"},"Cancel"),c.a.createElement(h.b,{onClick:this.handleLogin,color:"primary"},"Login")))))}}]),t}(c.a.Component),re=Object(p.d)(Object(f.firebaseConnect)(),Object(m.b)(null,{toggleSnackbar:S}))(ae),oe=n(203),ie=n(330),se=n(68),le=n.n(se),ce=(n(751),{apiKey:"AIzaSyCPH6InvqBkZYOD-fHeQRbnFdzWT1NMPOQ",authDomain:"tech-conferences.firebaseapp.com",databaseURL:"https://tech-conferences.firebaseio.com",projectId:"tech-conferences",storageBucket:"tech-conferences.appspot.com",messagingSenderId:"453678731503"}),ue=n(39),de={count:0,isIncrementing:!1,isDecrementing:!1},he={tableFilterText:""},ge={isSnackbarOpen:!1,snackBarText:""};le.a.initializeApp(ce);le.a.firestore().settings({timestampsInSnapshots:!0});var pe=Object(p.d)(Object(f.reactReduxFirebase)(le.a,{userProfile:"users",useFireStoreForProfile:!0}),Object(oe.reduxFirestore)(le.a))(p.e),me=Object(p.c)({firebase:f.firebaseReducer,firestore:oe.firestoreReducer,counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de;switch((arguments.length>1?arguments[1]:void 0).type){case"counter/INCREMENT_REQUESTED":return Object(ue.a)({},e,{isIncrementing:!0});case"counter/INCREMENT":return Object(ue.a)({},e,{count:e.count+1,isIncrementing:!e.isIncrementing});case"counter/DECREMENT_REQUESTED":return Object(ue.a)({},e,{isDecrementing:!0});case"counter/DECREMENT":return Object(ue.a)({},e,{count:e.count-1,isDecrementing:!e.isDecrementing});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APPLY_FILTER":return Object(ue.a)({},e,{tableFilterText:t.payload});default:return e}},snackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SNACKBAR":return Object(ue.a)({},e,{isSnackbarOpen:!!t.payload,snackBarText:t.payload});default:return e}}}),fe=Object(p.a)(ie.a),be=pe(me,{},("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:p.d)(Object(f.reactReduxFirebase)(le.a),fe)),ve=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).handleSnackClose=function(){n.props.toggleSnackbar("")},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isSnackbarOpen,n=e.snackMessage;return c.a.createElement("div",null,c.a.createElement(h.l,{open:t,autoHideDuration:2e3,onClose:this.handleSnackClose,message:c.a.createElement("span",null,n)}))}}]),t}(l.Component),Ee=Object(m.b)(function(e){return{isSnackbarOpen:e.snackbar.isSnackbarOpen,snackMessage:e.snackbar.snackBarText}},{toggleSnackbar:S})(ve),ye=(n(752),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).onWordClick=function(e){n.props.applyFilter(e.text)},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.events,a=t.classes,r=[];if(n&&n.length>0)for(var o=function(){var e=n[i].tags&&n[i].tags.length&&n[i].tags.map(function(e){return e.label});if(e&&e.length>0)for(s=0;s<e.length;s++){if(r.filter(function(t){return t.text===e[s]}).length)for(l=0;l<r.length;l++)r[l].text===e[s]&&(r[l].count+=1);else r.push({text:e[s],count:1})}},i=0;i<n.length;i++){var s,l;o()}return r&&r.length&&(r=Object(b.orderBy)(r,"count","desc").slice(0,10)),c.a.createElement("div",null,r&&r.length?c.a.createElement(h.k,{className:a.root},c.a.createElement(h.m,{className:a.table,padding:"dense"},c.a.createElement(h.p,{className:"THeader"},c.a.createElement(h.o,{className:"Trending"},"Trending"),r.map(function(t){return c.a.createElement(h.o,null,c.a.createElement(h.b,{key:t.text,padding:"default",onClick:e.onWordClick.bind(e,t)},t.text))})))):null)}}]),t}(l.Component)),Ce=Object(p.d)(Object(f.firestoreConnect)([{collection:"events"}]),Object(m.b)(function(e){return{events:e.firestore.ordered.events}},{applyFilter:w}))(Object(g.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(ye)),Oe=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={open:!1,openLogin:!1,list:q},n.initState=function(){n.setState({list:q})},n.updateList=function(e){var t=q.filter(function(t){if(t.name===e)return!0});void 0===t||0===t.length?n.initState():n.setState({list:t})},n.openForm=function(){n.setState({open:!0})},n.openLoginForm=function(){n.setState({openLogin:!0})},n.closeForm=function(){n.setState({open:!1,openLogin:!1})},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.initState()}},{key:"render",value:function(){return c.a.createElement(m.a,{store:be},c.a.createElement("div",{className:"App"},c.a.createElement(Q,{open:this.openForm.bind(this),openLogin:this.openLoginForm.bind(this),update:this.updateList.bind(this)}),c.a.createElement(Ce,null),c.a.createElement(y,{list:this.state.list}),c.a.createElement(ne,{open:this.state.open,close:this.closeForm.bind(this)}),c.a.createElement(re,{openLogin:this.state.openLogin,close:this.closeForm.bind(this)}),c.a.createElement(Ee,null)))}}]),t}(c.a.Component),ke=document.getElementById("root");d.a.render(c.a.createElement(Oe,null),ke)}},[[389,2,1]]]);
//# sourceMappingURL=main.1dd505d8.chunk.js.map