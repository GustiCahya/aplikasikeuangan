<template>
  <div id="setting">
      <div class="row align-items-end">
          <div class="col-md-5 text-left">
              <h1 style="text-decoration: underline">Laporan Keuangan</h1>
          </div>
          <div class="col-md-7 text-md-right text-sm-left">
              <h2>Saldo : {{saldo}}</h2>
          </div>
      </div>
      <hr>
      <div class="row align-items-center mb-3">
          <div class="col-md-6 text-left">
              <h2>Total Pemasukan : {{total_pemasukan}}</h2>
          </div>
          <div class="col-md-6 text-md-right text-sm-left">
              <h2>Total Pengeluaran : {{total_pengeluaran}}</h2>
          </div>
      </div>
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>No</th>
                  <th>Bulan</th>
                  <th>Tahun</th>
                  <th>Dana Kas</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="detail, index in details">
                  <td>{{index+1}}</td>
                  <td>{{detail.bulan}}</td>
                  <td>{{detail.tahun}}</td>
                  <td>{{detail.danakas}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return{
            saldo: 0,
            total_pemasukan: 0,
            total_pengeluaran: 0,
            details: []
        }
    },
    created(){
       axios
        .get("http://localhost/vuesucodAPI/laporan/getlaporan")
        .then((response) => {
            this.saldo = response.data.saldo,
            this.total_pemasukan = response.data.total_pemasukan,
            this.total_pengeluaran = response.data.total_pengeluaran,
            this.details = response.data.detail_laporan
            console.log(this.details);
        })
        .catch(error => console.log(error)
        );
    },
    computed: {
        
    },
    methods: {

    }
}

</script>

<style scoped>
    #setting{
        margin-top: 10px;
        margin-left: 45px;
    }
</style>
