<template>
    <div id="setting">
          <div class="row">
            <div class="col-12">
              <h2>Input Pengeluaran</h2><hr>
              <form>
                <div class="form-group">
                  <label for="Tanggal pengeluaran">Tanggal pengeluaran</label>
                  <input type="text"  disabled class="form-control form-control-sm" placeholder="Tanggal pengeluaran" v-model="income.tgl_pengeluaran">
                </div>
                <div class="form-group">
                  <label for="jmlpengeluaran">Jumlah pengeluaran</label>
                  <input type="number" min="0" class="form-control form-control-sm" placeholder="Jumlah pengeluaran" v-model="income.jml_pengeluaran">
                </div>
                <div class="form-group">
                  <label for="ketpengeluaran">Keterangan pengeluaran</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Keterangan pengeluaran" v-model="income.ket_pengeluaran">
                </div>
                <button class="btn btn-primary btn-sm" v-on:click.prevent="createpengeluaran()">Submit</button>                
              </form>

            </div>
          </div>
    </div>
</template>
 
<script>
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      income:{
        tgl_pengeluaran: new Date().toISOString().substring(0, 10),
        jml_pengeluaran: null,
        ket_pengeluaran: '',      
      }
    };
  },
  methods: {
    createpengeluaran : function() {
      let self = this;
      axios
        .post("http://localhost/vuesucodAPI/pengeluaran/createpengeluaran", qs.stringify(this.income))
        .then(    
          function (response) {            
            response => this.income = response.data;
            alert("data has been inserted");
            self.$router.push({name: 'pengeluaranView'});
          }    
        )
        .catch(error => console.log(error));
    }
  },
  created() {

  },
  computed: {
    
    }
  }

</script>
 
<style>
#setting {
  margin-top: 5px;
  margin-left: 43px;
}
</style>     