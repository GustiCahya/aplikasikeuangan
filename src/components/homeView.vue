<template>
  <div id="setting">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Selamat datang <span style="text-transform: capitalize">{{nama}}</span></h1>
        <p class="lead">Ini adalah aplikasi yang dibuat untuk mempermudah monitoring pemasukan dan pengeluaran keuangan</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    data(){
      return{
        nama : localStorage.getItem('nama')
      }
    }
}
</script>

<style scoped>
  #setting{
    margin-top: 50px;
    margin-left: 43px;
  }
</style>
