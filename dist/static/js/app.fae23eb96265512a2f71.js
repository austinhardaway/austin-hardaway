webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},Bvzr:function(t,e){},GfHa:function(t,e){},H26d:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("e6fC"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"nav justify-content-end"},[e("router-link",{attrs:{to:"Home"}},[e("a",{staticClass:"nav-link"},[this._v("Home")])]),this._v(" "),e("router-link",{attrs:{to:"Experience"}},[e("a",{staticClass:"nav-link"},[this._v("Experience")])]),this._v(" "),e("router-link",{attrs:{to:"Education"}},[e("a",{staticClass:"nav-link"},[this._v("Education")])]),this._v(" "),e("router-link",{attrs:{to:"Projects"}},[e("a",{staticClass:"nav-link"},[this._v("Projects")])])],1)},staticRenderFns:[]};var o=a("VU/8")({name:"Nav"},r,!1,function(t){a("Bvzr")},"data-v-04350445",null).exports,i={name:"App",components:{Nav:o}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")(i,c,!1,function(t){a("r4at")},null,null).exports,d=a("ZTUR"),u=a("OM24").default,f=["black","black","black","black","black","black","black"],p={data:function(){return{fname:d.dev.fname,lname:d.dev.lname,facebook:d.dev.facebook,linkedin:d.dev.linkedin,twitter:d.dev.twitter,github:d.dev.git,email:d.dev.email,colors:f}},methods:{getColor:function(t){f[t]=u[Math.floor(Math.random()*u.length)],this.$forceUpdate()}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home content"},[a("div",{staticClass:"content"},[a("h1",{ref:"name",staticClass:"ml-auto text-left",style:{color:t.colors[0]},on:{mouseover:function(e){t.getColor(0)}}},[t._v(t._s(t.fname)),a("br"),t._v(t._s(t.lname))]),t._v(" "),a("p",[a("em",{style:{color:t.colors[1]},on:{mouseover:function(e){t.getColor(1)}}},[t._v("I turn ideas into code")]),a("br"),t._v(" "),a("a",{style:{color:t.colors[2]},attrs:{href:t.facebook},on:{mouseover:function(e){t.getColor(2)}}},[a("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),a("a",{style:{color:t.colors[3]},attrs:{href:t.linkedin},on:{mouseover:function(e){t.getColor(3)}}},[a("i",{staticClass:"fab fa-linkedin"})]),t._v(" "),a("a",{style:{color:t.colors[4]},attrs:{href:t.twitter},on:{mouseover:function(e){t.getColor(4)}}},[a("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),a("a",{style:{color:t.colors[5]},attrs:{href:t.github},on:{mouseover:function(e){t.getColor(5)}}},[a("i",{staticClass:"fab fa-github-square"})]),t._v(" "),a("a",{style:{color:t.colors[6]},attrs:{href:t.email},on:{mouseover:function(e){t.getColor(6)}}},[a("i",{staticClass:"fas fa-envelope-square"})]),a("br"),t._v(" "),a("router-link",{staticClass:"btn-lg btn-outline-dark black-text",style:{color:t.colors[7]},attrs:{to:"Contact",tag:"button"},on:{mouseover:function(e){t.getColor(7)}}},[t._v("Hire Me")])],1)])])},staticRenderFns:[]};var v=a("VU/8")(p,m,!1,function(t){a("gRDG")},"data-v-127123a3",null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"card-img-top",attrs:{src:t.work.image}}),t._v(" "),a("h5",{staticClass:"card-title"},[t._v(t._s(t.work.company))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.work.start)+" - "+t._s(t.work.end)+" • "+t._s(t.work.title))]),t._v(" "),a("p",{staticClass:"card-text flow-text"},[t._v("\n            "+t._s(t.work.description)),a("br")]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.work.stack,function(e){return a("div",{key:e.name,staticClass:"col"},[""!=e.fa?a("i",{class:e.fa}):t._e(),t._v(" "),a("p",[t._v(t._s(e.tech))])])}))]),t._v(" "),a("p")])])},staticRenderFns:[]};var g=a("VU/8")({props:["work"]},h,!1,function(t){a("djb0")},"data-v-7798403c",null).exports,b=a("ZTUR"),_=a("OM24").default,C={components:{WorkCard:g},data:function(){return{exp:b.dev.experience.entries}},computed:{evenIndexes:function(){for(var t=[],e=0;e<this.exp.length;e+=2)t.push(e);return t},headerColor:function(){return _[Math.floor(Math.random()*_.length)]}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"experience"}},[a("h1",{staticClass:"ml-auto text-left",style:{color:t.headerColor}},[t._v("Experience")]),t._v(" "),a("div",{staticClass:"container"},t._l(t.evenIndexes,function(e){return a("div",{key:e,staticClass:"row"},[a("div",{staticClass:"col"},[a("work-card",{attrs:{work:t.exp[e]}})],1),t._v(" "),a("div",{staticClass:"col"},[e+1<t.exp.length?a("work-card",{attrs:{work:t.exp[e+1]}}):t._e()],1)])}))])},staticRenderFns:[]};var k=a("VU/8")(C,y,!1,function(t){a("ug8W")},null,null).exports,w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"card-img-top",attrs:{src:t.edu.image}}),t._v(" "),a("h5",{staticClass:"card-title"},[t._v(t._s(t.edu.name))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.edu.start)+" - "+t._s(t.edu.end)+" • "+t._s(t.edu.major))]),t._v(" "),a("p",{staticClass:"card-text"},[a("ul",{staticClass:"text-left"},t._l(t.edu.description.split(";"),function(e){return a("li",{key:e},[t._v(t._s(e))])}))])])])},staticRenderFns:[]};var j=a("VU/8")({name:"edu-card",props:["edu"]},w,!1,function(t){a("nK28")},"data-v-64c5666c",null).exports,x=a("ZTUR"),M=a("OM24").default,S={components:{EduCard:j},data:function(){return{educationList:x.dev.education.entries}},computed:{headerColor:function(){return M[Math.floor(Math.random()*M.length)]}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"education"}},[e("h1",{staticClass:"ml-auto text-left",style:{color:this.headerColor}},[this._v("Education")]),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},this._l(this.educationList,function(t){return e("edu-card",{key:t.priority,attrs:{edu:t}})}))])])},staticRenderFns:[]};var A=a("VU/8")(S,E,!1,function(t){a("H26d")},null,null).exports,U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.project.name))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.project.date)+" • "+t._s(t.project.cat))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n           "+t._s(t.project.description)+"\n           "),a("br")]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[""!=t.project.repo?a("div",{staticClass:"col"},[a("a",{attrs:{href:t.project.repo}},[a("i",{staticClass:"fab fa-github"})])]):t._e(),t._v(" "),""!=t.project.post?a("div",{staticClass:"col"},[a("a",{attrs:{href:t.project.post}},[a("img",{attrs:{calss:"devimage",src:"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"}})])]):t._e()]),t._v(" "),a("div",{staticClass:"row"},t._l(t.project.stack,function(e){return a("div",{key:e.name,staticClass:"col"},[a("i",{class:e.fa}),t._v(" "),a("p",[t._v(t._s(e.tech))])])}))]),t._v(" "),a("p")])])},staticRenderFns:[]};var I=a("VU/8")({name:"project-card",props:["project"]},U,!1,function(t){a("k6vb")},"data-v-5ebb422a",null).exports,J=a("ZTUR"),P=a("OM24").default,R={components:{ProjectCard:I},data:function(){return{projects:J.dev.projects.entries}},computed:{projectWrapper:function(){for(var t=[],e=0;e<this.projects.length;e++){for(var a=[],s=e+3;e<s&&!(e>=this.projects.length);e++)a.push(this.projects[e]);t.push(a)}return t},headerColor:function(){return P[Math.floor(Math.random()*P.length)]}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"projects"}},[a("h1",{staticClass:"ml-auto text-left",style:{color:t.headerColor}},[t._v("Projects")]),t._v(" "),a("div",{staticClass:"container"},t._l(t.projectWrapper,function(e,s){return a("div",{key:s,staticClass:"row"},t._l(e,function(t){return a("div",{key:t.name,staticClass:"col"},[a("project-card",{attrs:{project:t}})],1)}))}))])},staticRenderFns:[]};var H=a("VU/8")(R,T,!1,function(t){a("gfxa")},null,null).exports,D=a("OM24").default,L=a("mtWM"),F={name:"contact-form",data:function(){return{email:"",subject:"",body:"",success:!1,failure:!1}},computed:{headerColor:function(){return D[Math.floor(Math.random()*D.length)]}},methods:{handleSubmit:function(){var t=this;L.post("/api/send",{email:this.email,subject:this.subject,body:this.body}).then(function(e){t.success=!0}).catch(function(e){t.failure=!0,console.log(e)})}}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ContactForm"}},[a("h1",{staticClass:"ml-auto text-left",style:{color:t.headerColor}},[t._v("Contact Me")]),t._v(" "),a("div",{staticClass:"container"},[a("form",{staticClass:"form",attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",attrs:{id:"subject",name:"subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"body"}},[t._v("Email Body")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"form-control",attrs:{id:"body",cols:"40",rows:"10",name:"body"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-dark",attrs:{type:"submit"}},[t._v("Send")])]),t._v(" "),t.success?a("b-alert",{staticClass:"alert",attrs:{variant:"success",show:""}},[t._v("Send Successful!")]):t._e(),t._v(" "),t.failure?a("b-alert",{staticClass:"alert",attrs:{variant:"danger",show:""}},[t._v("Failed to send.")]):t._e()],1)])},staticRenderFns:[]};var W=a("VU/8")(F,O,!1,function(t){a("zehW")},"data-v-7ef4c7a2",null).exports,G=(a("Jmt5"),a("9M+g"),a("/ocq"));s.a.use(G.a);var N=new G.a({routes:[{path:"/",name:"Home",component:v,alias:"/Home"},{path:"/experience",name:"Experience",component:k},{path:"/education",name:"Education",component:A},{path:"/projects",name:"Projects",component:H},{path:"/contact",name:"Contact",component:W}]});s.a.config.productionTip=!1,s.a.use(n.a),new s.a({el:"#app",router:N,components:{App:l,Home:v,Experience:k,Nav:o,WorkCard:g,Education:A,EduCard:j,Projects:H,ProjectCard:I,ContactForm:W},template:"<App/>"})},OM24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=["red","blue","green","black","salmon","crimson","darkorange","gold","orchid","rebeccapurple","darkviolet","lime","springgreen","darkcyan","teal","deepskyblue","royalblue","navy"]},ZTUR:function(t,e){t.exports={dev:{fname:"Austin",lname:"Hardaway",email:"austinhardaway@gmail.com",site:"https://austinhardaway.github.io",git:"https://github.com/austinhardaway",linkedin:"https://www.linkedin.com/in/austinhardaway/",facebook:"https://www.facebook.com/austin.hardaway.1",twitter:"https://twitter.com/AustinHardaway",phone:"(903)-343-1017",summary:"Senior at UGA pursuing a double major in Computer Science and Mathematics with an area\nof emphasis in Applied Mathematics. I have a passion for creating and making through software and am interested in opportunities to help me cultivate that passion.\n",education:{priority:0,entries:[{name:"University of Georgia",major:"Computer Science and Mathematics",city:"Athens, GA",gpa:3.1,start:"August 2015",end:"May 2019",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/University_of_Georgia_logo.jpg?alt=media&token=665fbac7-dfed-4cca-becd-315ba325dd4e",description:"Dean's List Fall 2015, Spring 2018; Active UGA Mock Trial Competitor 2015-2018; TA in CS department Junior year",priority:0}]},experience:{priority:1,entries:[{company:"Macys Technology",title:"DevOps Intern",start:"May 2018",end:"August 2018",description:"I was placed on the D2C DevOps team as a summer intern. In 10 weeks I worked on a variety of infrasturcutre and automation tasks ranging from debugging Jenkins jobs to contributing to a massive migration of code to a new infrastructure. During this internship I was also given a solo project where I was able to levrage the Groovy DSL introduced in Jenkins 2.x to unify and automate the building, testing, and publishing of the projects in the namespace my team supported.",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/macys.jpg?alt=media&token=2b8540b7-4b55-45a3-9009-562575816aa8",priority:0,stack:[{tech:"Jenkins",fa:"fab fa-jenkins"},{tech:"Groovy",fa:"fab fa-java"},{tech:"Chef",fa:"fas fa-code"},{tech:"Python",fa:"fab fa-python"},{tech:"Linux",fa:"fab fa-linux"},{tech:"bash",fa:"fas fa-terminal"}]},{company:"WoodmenLife",title:"Software Engineering Intern",start:"May 2016",end:"July 2016",description:"Summer internship, I was placed on an agile based team of developers and\nhad a comparable workload as a full-time junior developer.\nThroughout the course of the program I completed tickets that ranged the entire\nJava/Spring stack. (Java/Spring/MySQL/JSP)\nAs a capstone i was responsible for designing and implementing a new messaging feature from the ground up\ndesigning the views, creating the tables, etc.\n",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/woodmen.jpg?alt=media&token=4bbfaa8e-ecdc-4883-8be6-958e22e73045",priority:1,stack:[{tech:"Java Spring",fa:"fab fa-java"},{tech:"SQL (DB2, Oracle)",fa:"fas fa-database"},{tech:"JSP",fa:"fas fa-code"},{tech:"HTML/CSS/JS",fa:"fab fa-html5"}]},{company:"UGA Office of STEM Education",title:"Peer Learning Assistant (TA)",start:"June 2012",end:"August 2014",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/frank.jpg?alt=media&token=15db4569-8dea-46bf-b7cc-94cba6c8c8c8",description:"I TA CSCI 1301, a rigorous introduction to programming. It's a large lecture format and taught in Java, I am responsible for\ngrading assignment submissions and helping students troubleshoot their lab assignments.\nDuring this past year I have helped create 2 new lab assignments, this includes having an idea which exhibits specific skills (2D arrays, string manipulation, etc) and then creating any external classes the students may need as well as creating grading and instruction documents.\\\\ \nAdditionally I have written and shared numerous grading scripts which automate the process of grading sometimes upward of 100-150 command line applications. These scripts are usually written in the bash scripting language and sometimes require Java Reflection and/or JUnit testing.\n",priority:2,stack:[{tech:"Java",fa:"fab fa-java"},{tech:"Linux",fa:"fab fa-linux"},{tech:"bash",fa:"fas fa-terminal"}]}]},projects:{priority:-1,entries:[{name:"Portfolio Mk. 1",description:"Static protfolio website hosted via github pages built to gain some understanding of modern css/html/frameworks. My goal was to create a page that I could be proud of and that would positively represent me in a professional light. Utilized the Materialize framework.",date:"August 2017",link:"https://autinhardaway.github.io",repo:"https://github.com/austinhardaway/austinhardaway.github.io",post:"",cat:"Web",stack:[{tech:"HTML 5",fa:"fab fa-html5"},{tech:"CSS",fa:"fab fa-css3"}]},{name:"Portfolio Mk. 2",description:"Upgraded redesign! This is the current page you're looking at, brought to you via a real hosting solution and a Node.js backend. I did the rewrite because I was tired of (procrastinating) editing the raw html from the last site. This site uses a JSON file to parameterize all content and genereates my resume from that file as well. A single source of professional truth!",link:"#TBD",repo:"https://github.com/austinhardaway/austin-hardaway",date:"August 2018",post:"",cat:"Web",stack:[{tech:"Node.js",fa:"fab fa-node"},{tech:"Vue.js",fa:"fab fa-vuejs"},{tech:"Bootstrap",fa:"fab fa-twitter"},{tech:"CSS",fa:"fab fa-css3"}]}]},skills:{priority:500,entries:[{cat:"Linux",val:["Red Hat family","Debian family (Ubuntu, Debian)"]},{cat:"Scripting",val:["Bash","Python","Ruby"]},{cat:"Backend",val:["Python","Java (Spring)","C/C++"]},{cat:"Frontend",val:["HTML","CSS/Less","Javascript"]},{cat:"Databases",val:["SQL (MySQL, DB2, Oracle)","firebase","H2"]},{cat:"SCM",val:["Git","Subversion"]}]}}}},djb0:function(t,e){},gRDG:function(t,e){},gfxa:function(t,e){},k6vb:function(t,e){},nK28:function(t,e){},r4at:function(t,e){},ug8W:function(t,e){},zehW:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fae23eb96265512a2f71.js.map