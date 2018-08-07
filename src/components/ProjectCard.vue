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
</style>
