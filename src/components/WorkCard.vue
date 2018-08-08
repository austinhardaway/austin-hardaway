<template>
    <div class="card">
        <div class="card-body">
            <img class="card-img-top" :src="work.image">
            <h5 class="card-title">{{work.company}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{work.start}} - {{work.end}} &bullet; {{work.title}}</h6>
            <p class="card-text flow-text">
                {{work.description}}<br/>
                <div class="container">
                   <div class="row">
                        <div class="col" v-for="tech in work.stack" :key="tech.name">
                            <i v-if="tech.fa!=''" :class="tech.fa"></i>
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
  props: ["work"]
};
</script>

<style scoped>
img {
  width: 80%;
}
</style>
