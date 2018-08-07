<template>
    <div class="card">
        <div class="card-body">
            <img class="card-img-top" :src="edu.image">
            <h5 class="card-title">{{edu.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{edu.start}} - {{edu.end}} &bullet; {{edu.major}}</h6>
            <p class="card-text">
                <ul class="text-left">
                    <li v-for="bullet in edu.description.split(';')" :key="bullet">{{bullet}}</li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "edu-card",
  props: ["edu"]
};
</script>

<style scoped>
</style>
