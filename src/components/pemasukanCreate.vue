<template>
    <div id="setting">
          <div class="row">
            <div class="col-12">
              <h2>Input Pemasukan</h2><hr>

              <form>
                <div class="form-group">
                  <label for="Tanggal Pemasukan">Tanggal Pemasukan</label>
                  <input type="text"  disabled class="form-control form-control-sm" placeholder="Tanggal Pemasukan" v-model="income.tgl_pemasukan">
                  {{income.tgl_pemasukan}}
                </div>
                <div class="form-group">
                  <label for="jmlpemasukan">Jumlah Pemasukan</label>
                  <input type="number" min="0" class="form-control form-control-sm" placeholder="Jumlah Pemasukan" v-model="income.jml_pemasukan">
                  {{income.jml_pemasukan}}
                </div>
                <div class="form-group">
                  <label for="ketpemasukan">Keterangan Pemasukan</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Keterangan Pemasukan" v-model="income.ket_pemasukan">
                  {{income.ket_pemasukan}}
                </div>
                <button class="btn btn-primary btn-sm" v-on:click.prevent="createPemasukan()">Submit</button>                
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
        tgl_pemasukan: new Date().toISOString().substring(0, 10),
        jml_pemasukan: null,
        ket_pemasukan: '',      
      }
    };
  },
  methods: {
    createPemasukan : function() {
      let self = this;
      axios
        .post("http://localhost/vuesucodAPI/pemasukan/createpemasukan", qs.stringify(this.income))
        .then(    
          function (response) {            
            response => this.income = response.data;
            alert("data has been inserted");
            self.$router.push({name: 'pemasukanView'});
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