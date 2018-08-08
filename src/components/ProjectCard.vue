<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{project.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{project.date}} &bullet; {{project.cat}}</h6>
            <p class="card-text">
               {{project.description}}
               <br/>
               <div class="container">
                   <div class="row">
                       <div class="col" v-if="project.repo!=''">
                           <a :href="project.repo"><i class="fab fa-github"></i></a>
                       </div>
                       <div class="col" v-if="project.post!=''">
                           <a :href="project.post"><img calss="devimage" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"></a>
                       </div>
                   </div>
                   <div class="row">
                        <div class="col" v-for="tech in project.stack" :key="tech.name">
                            <i :class="tech.fa"></i>
                            <p>{{tech.tech}}</p>
                        </div>
                   </div>
               </div>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "project-card",
  props: ["project"]
};
</script>

<style scoped>
.svg-inline--fa {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 300%;
}

img {
  height: 55px;
  width: 55px;
}

a {
  margin-left: 10px;
}
</style>
