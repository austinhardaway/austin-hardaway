webpackJsonp([0],{Bvzr:function(t,e){},H26d:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"nav justify-content-end"},[e("router-link",{attrs:{to:"Home"}},[e("a",{staticClass:"nav-link"},[this._v("Home")])]),this._v(" "),e("router-link",{attrs:{to:"Experience"}},[e("a",{staticClass:"nav-link"},[this._v("Experience")])]),this._v(" "),e("router-link",{attrs:{to:"Education"}},[e("a",{staticClass:"nav-link"},[this._v("Education")])]),this._v(" "),e("router-link",{attrs:{to:"Projects"}},[e("a",{staticClass:"nav-link"},[this._v("Projects")])])],1)},staticRenderFns:[]};var r=a("VU/8")({name:"Nav"},n,!1,function(t){a("Bvzr")},"data-v-04350445",null).exports,i={name:"App",components:{Nav:r}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(i,o,!1,function(t){a("r4at")},null,null).exports,l=a("ZTUR"),d=a("OM24").default,u=["black","black","black","black","black","black","black"],p={data:function(){return{fname:l.dev.fname,lname:l.dev.lname,facebook:l.dev.facebook,linkedin:l.dev.linkedin,twitter:l.dev.twitter,github:l.dev.git,email:l.dev.email,colors:u}},methods:{getColor:function(t){u[t]=d[Math.floor(Math.random()*d.length)],this.$forceUpdate()}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home content"},[a("h1",{ref:"name",staticClass:"ml-auto text-left",style:{color:t.colors[0]},on:{mouseover:function(e){t.getColor(0)}}},[t._v(t._s(t.fname)),a("br"),t._v(t._s(t.lname))]),t._v(" "),a("p",[a("em",{style:{color:t.colors[1]},on:{mouseover:function(e){t.getColor(1)}}},[t._v("I turn ideas into code")]),a("br"),t._v(" "),a("a",{style:{color:t.colors[2]},attrs:{href:t.facebook},on:{mouseover:function(e){t.getColor(2)}}},[a("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),a("a",{style:{color:t.colors[3]},attrs:{href:t.linkedin},on:{mouseover:function(e){t.getColor(3)}}},[a("i",{staticClass:"fab fa-linkedin"})]),t._v(" "),a("a",{style:{color:t.colors[4]},attrs:{href:t.twitter},on:{mouseover:function(e){t.getColor(4)}}},[a("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),a("a",{style:{color:t.colors[5]},attrs:{href:t.github},on:{mouseover:function(e){t.getColor(5)}}},[a("i",{staticClass:"fab fa-github-square"})]),t._v(" "),a("a",{style:{color:t.colors[6]},attrs:{href:t.email},on:{mouseover:function(e){t.getColor(6)}}},[a("i",{staticClass:"fas fa-envelope-square"})]),a("br"),t._v(" "),a("button",{staticClass:"btn-lg btn-outline-dark black-text",style:{color:t.colors[7]},on:{mouseover:function(e){t.getColor(7)}}},[t._v("Hire Me")])])])},staticRenderFns:[]};var h=a("VU/8")(p,f,!1,function(t){a("fLzp")},"data-v-44809ed6",null).exports,m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"card-img-top",attrs:{src:t.work.image}}),t._v(" "),a("h5",{staticClass:"card-title"},[t._v(t._s(t.work.company))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.work.start)+" - "+t._s(t.work.end)+" • "+t._s(t.work.title))]),t._v(" "),a("p",{staticClass:"card-text flow-text"},[t._v("\n            "+t._s(t.work.description)),a("br")]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.work.stack,function(e){return a("div",{key:e.name,staticClass:"col"},[""!=e.fa?a("i",{class:e.fa}):t._e(),t._v(" "),a("p",[t._v(t._s(e.tech))])])}))]),t._v(" "),a("p")])])},staticRenderFns:[]};var v=a("VU/8")({props:["work"]},m,!1,function(t){a("djb0")},"data-v-7798403c",null).exports,g=a("ZTUR"),b=a("OM24").default,_={components:{WorkCard:v},data:function(){return{exp:g.dev.experience.entries}},computed:{evenIndexes:function(){for(var t=[],e=0;e<this.exp.length;e+=2)t.push(e);return t},headerColor:function(){return b[Math.floor(Math.random()*b.length)]}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"experience"}},[a("h1",{staticClass:"ml-auto text-left",style:{color:t.headerColor}},[t._v("Experience")]),t._v(" "),a("div",{staticClass:"container"},t._l(t.evenIndexes,function(e){return a("div",{key:e,staticClass:"row"},[a("div",{staticClass:"col"},[a("work-card",{attrs:{work:t.exp[e]}})],1),t._v(" "),a("div",{staticClass:"col"},[e+1<t.exp.length?a("work-card",{attrs:{work:t.exp[e+1]}}):t._e()],1)])}))])},staticRenderFns:[]};var y=a("VU/8")(_,k,!1,function(t){a("ug8W")},null,null).exports,C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"card-img-top",attrs:{src:t.edu.image}}),t._v(" "),a("h5",{staticClass:"card-title"},[t._v(t._s(t.edu.name))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.edu.start)+" - "+t._s(t.edu.end)+" • "+t._s(t.edu.major))]),t._v(" "),a("p",{staticClass:"card-text"},[a("ul",{staticClass:"text-left"},t._l(t.edu.description.split(";"),function(e){return a("li",{key:e},[t._v(t._s(e))])}))])])])},staticRenderFns:[]};var w=a("VU/8")({name:"edu-card",props:["edu"]},C,!1,function(t){a("nK28")},"data-v-64c5666c",null).exports,j=a("ZTUR"),x=a("OM24").default,M={components:{EduCard:w},data:function(){return{educationList:j.dev.education.entries}},computed:{headerColor:function(){return x[Math.floor(Math.random()*x.length)]}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"education"}},[e("h1",{staticClass:"ml-auto text-left",style:{color:this.headerColor}},[this._v("Education")]),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},this._l(this.educationList,function(t){return e("edu-card",{key:t.priority,attrs:{edu:t}})}))])])},staticRenderFns:[]};var A=a("VU/8")(M,S,!1,function(t){a("H26d")},null,null).exports,E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.project.name))]),t._v(" "),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.project.date)+" • "+t._s(t.project.cat))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n           "+t._s(t.project.description)+"\n           "),a("br")]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[""!=t.project.repo?a("div",{staticClass:"col"},[a("a",{attrs:{href:t.project.repo}},[a("i",{staticClass:"fab fa-github"})])]):t._e(),t._v(" "),""!=t.project.post?a("div",{staticClass:"col"},[a("a",{attrs:{href:t.project.post}},[a("img",{attrs:{calss:"devimage",src:"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"}})])]):t._e()]),t._v(" "),a("div",{staticClass:"row"},t._l(t.project.stack,function(e){return a("div",{key:e.name,staticClass:"col"},[a("i",{class:e.fa}),t._v(" "),a("p",[t._v(t._s(e.tech))])])}))]),t._v(" "),a("p")])])},staticRenderFns:[]};var U=a("VU/8")({name:"project-card",props:["project"]},E,!1,function(t){a("k6vb")},"data-v-5ebb422a",null).exports,I=a("ZTUR"),J=a("OM24").default,T={components:{ProjectCard:U},data:function(){return{projects:I.dev.projects.entries}},computed:{projectWrapper:function(){for(var t=[],e=0;e<this.projects.length;e++){for(var a=[],s=e+3;e<s&&!(e>=this.projects.length);e++)a.push(this.projects[e]);t.push(a)}return t},headerColor:function(){return J[Math.floor(Math.random()*J.length)]}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"projects"}},[a("h1",{staticClass:"ml-auto text-left",style:{color:t.headerColor}},[t._v("Projects")]),t._v(" "),a("div",{staticClass:"container"},t._l(t.projectWrapper,function(e,s){return a("div",{key:s,staticClass:"row"},t._l(e,function(t){return a("div",{key:t.name,staticClass:"col"},[a("project-card",{attrs:{project:t}})],1)}))}))])},staticRenderFns:[]};var H=a("VU/8")(T,L,!1,function(t){a("gfxa")},null,null).exports,P=a("/ocq");s.a.use(P.a);var R=new P.a({routes:[{path:"/",name:"Home",component:h,alias:"/Home"},{path:"/experience",name:"Experience",component:y},{path:"/education",name:"Education",component:A},{path:"/projects",name:"Projects",component:H}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:R,components:{App:c,Home:h,Experience:y,Nav:r,WorkCard:v,Education:A,EduCard:w,Projects:H,ProjectCard:U},template:"<App/>"})},OM24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=["red","blue","green","black","salmon","crimson","darkorange","gold","orchid","rebeccapurple","darkviolet","lime","springgreen","darkcyan","teal","deepskyblue","royalblue","navy"]},ZTUR:function(t,e){t.exports={dev:{fname:"Austin",lname:"Hardaway",email:"austinhardaway@gmail.com",site:"https://austinhardaway.github.io",git:"https://github.com/austinhardaway",linkedin:"https://www.linkedin.com/in/austinhardaway/",facebook:"https://www.facebook.com/austin.hardaway.1",twitter:"https://twitter.com/AustinHardaway",phone:"(903)-343-1017",summary:"Senior at UGA pursuing a double major in Computer Science and Mathematics with an area\nof emphasis in Applied Mathematics. I have a passion for creating and making through software and am interested in opportunities to help me cultivate that passion.\n",education:{priority:0,entries:[{name:"University of Georgia",major:"Computer Science and Mathematics",city:"Athens, GA",gpa:3.1,start:"August 2015",end:"May 2019",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/University_of_Georgia_logo.jpg?alt=media&token=665fbac7-dfed-4cca-becd-315ba325dd4e",description:"Dean's List Fall 2015, Spring 2018; Active UGA Mock Trial Competitor 2015-2018; TA in CS department Junior year",priority:0}]},experience:{priority:1,entries:[{company:"Macys Technology",title:"DevOps Intern",start:"May 2018",end:"August 2018",description:"I was placed on the D2C DevOps team as a summer intern. In 10 weeks I worked on a variety of infrasturcutre and automation tasks ranging from debugging Jenkins jobs to contributing to a massive migration of code to a new infrastructure. During this internship I was also given a solo project where I was able to levrage the Groovy DSL introduced in Jenkins 2.x to unify and automate the building, testing, and publishing of the projects in the namespace my team supported.",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/macys.jpg?alt=media&token=2b8540b7-4b55-45a3-9009-562575816aa8",priority:0,stack:[{tech:"Jenkins",fa:"fab fa-jenkins"},{tech:"Groovy",fa:"fab fa-java"},{tech:"Chef",fa:"fas fa-code"},{tech:"Python",fa:"fab fa-python"},{tech:"Linux",fa:"fab fa-linux"},{tech:"bash",fa:"fas fa-terminal"}]},{company:"WoodmenLife",title:"Software Engineering Intern",start:"May 2016",end:"July 2016",description:"Summer internship, I was placed on an agile based team of developers and\nhad a comparable workload as a full-time junior developer.\nThroughout the course of the program I completed tickets that ranged the entire\nJava/Spring stack. (Java/Spring/MySQL/JSP)\nAs a capstone i was responsible for designing and implementing a new messaging feature from the ground up\ndesigning the views, creating the tables, etc.\n",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/woodmen.jpg?alt=media&token=4bbfaa8e-ecdc-4883-8be6-958e22e73045",priority:1,stack:[{tech:"Java Spring",fa:"fab fa-java"},{tech:"SQL (DB2, Oracle)",fa:"fas fa-database"},{tech:"JSP",fa:"fas fa-code"},{tech:"HTML/CSS/JS",fa:"fab fa-html5"}]},{company:"UGA Office of STEM Education",title:"Peer Learning Assistant (TA)",start:"June 2012",end:"August 2014",image:"https://firebasestorage.googleapis.com/v0/b/resume-data-45ed1.appspot.com/o/frank.jpg?alt=media&token=15db4569-8dea-46bf-b7cc-94cba6c8c8c8",description:"I TA CSCI 1301, a rigorous introduction to programming. It's a large lecture format and taught in Java, I am responsible for\ngrading assignment submissions and helping students troubleshoot their lab assignments.\nDuring this past year I have helped create 2 new lab assignments, this includes having an idea which exhibits specific skills (2D arrays, string manipulation, etc) and then creating any external classes the students may need as well as creating grading and instruction documents.\\\\ \nAdditionally I have written and shared numerous grading scripts which automate the process of grading sometimes upward of 100-150 command line applications. These scripts are usually written in the bash scripting language and sometimes require Java Reflection and/or JUnit testing.\n",priority:2,stack:[{tech:"Java",fa:"fab fa-java"},{tech:"Linux",fa:"fab fa-linux"},{tech:"bash",fa:"fas fa-terminal"}]}]},projects:{priority:-1,entries:[{name:"Portfolio Mk. 1",description:"Static protfolio website hosted via github pages built to gain some understanding of modern css/html/frameworks. My goal was to create a page that I could be proud of and that would positively represent me in a professional light. Utilized the Materialize framework.",date:"August 2017",link:"https://autinhardaway.github.io",repo:"https://github.com/austinhardaway/austinhardaway.github.io",post:"",cat:"Web",stack:[{tech:"HTML 5",fa:"fab fa-html5"},{tech:"CSS",fa:"fab fa-css3"}]},{name:"Portfolio Mk. 2",description:"Upgraded redesign! This is the current page you're looking at, brought to you via a real hosting solution and a Node.js backend. I did the rewrite because I was tired of (procrastinating) editing the raw html from the last site. This site uses a JSON file to parameterize all content and genereates my resume from that file as well. A single source of professional truth!",link:"#TBD",repo:"https://github.com/austinhardaway/austin-hardaway",date:"August 2018",post:"",cat:"Web",stack:[{tech:"Node.js",fa:"fab fa-node"},{tech:"Vue.js",fa:"fab fa-vuejs"},{tech:"Bootstrap",fa:"fab fa-twitter"},{tech:"CSS",fa:"fab fa-css3"}]}]},skills:{priority:500,entries:[{cat:"Linux",val:["Red Hat family","Debian family (Ubuntu, Debian)"]},{cat:"Scripting",val:["Bash","Python","Ruby"]},{cat:"Backend",val:["Python","Java (Spring)","C/C++"]},{cat:"Frontend",val:["HTML","CSS/Less","Javascript"]},{cat:"Databases",val:["SQL (MySQL, DB2, Oracle)","firebase","H2"]},{cat:"SCM",val:["Git","Subversion"]}]}}}},djb0:function(t,e){},fLzp:function(t,e){},gfxa:function(t,e){},k6vb:function(t,e){},nK28:function(t,e){},r4at:function(t,e){},ug8W:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7ffeca662e7eb4e05ed2.js.map