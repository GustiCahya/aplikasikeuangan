<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" width="30" class="d-inline-block align-top mr-2">
          Aplikasi Keuangan
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="ml-auto">
              <button class="btn btn-outline-danger" v-on:click.prevent="logout()">Logout</button>
          </div>
      </div>


    </nav>
  </div>
</template>

<script>
export default {
    methods:{
      logout(){
        localStorage.clear();
        this.$router.push({name: 'login'});
      }
    }
};
</script>

<style scoped>

</style>
