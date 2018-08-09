<template>
    <div id="ContactForm">
        <h1 class="ml-auto text-left" :style="{color : headerColor}">Contact Me</h1>
        <div class="container">
            <form class="form" @submit.prevent="handleSubmit" id="form">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input class="form-control" v-model="email" id="email" name="email">
                    <label for="subject">Subject</label>
                    <input class="form-control" v-model="subject" id="subject" name="subject">
                </div>
                <div class="form-group">
                    <label for="body">Email Body</label>
                    <textarea class="form-control" v-model="body" id="body" cols="40" rows="10" name="body"></textarea>
                </div>
                <button class="btn btn-dark" type="submit">Send</button>
            </form>
        </div>
    </div>
</template>
<script>
const colorGen = require("../assets/colors.js").default;
const axios = require("axios");

export default {
  name: "contact-form",

  data() {
    return {
      email: "",
      subject: "",
      body: ""
    };
  },
  computed: {
    headerColor: function() {
      return colorGen[Math.floor(Math.random() * colorGen.length)];
    }
  },
  methods: {
    handleSubmit: function() {
      axios
        .post("/api/send", {
          email: this.email,
          subject: this.subject,
          body: this.body
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
form {
  width: 50%;
  margin-top: 40px;
}
</style>

