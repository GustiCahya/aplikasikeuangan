<template>
    <div id="setting">
          <div class="row">
            <div class="col-12">
              <h2>Edit Pengeluaran</h2><hr>
              <form>
                <div class="form-group">
                  <label for="Tanggal pengeluaran">Tanggal pengeluaran</label>
                  <input type="text" disabled class="form-control form-control-sm" placeholder="Tanggal pengeluaran" v-model="income.tgl_pengeluaran">
                </div>
                <div class="form-group">
                  <label for="jml_pengeluaran">Jumlah pengeluaran</label>
                  <input type="number" min="0" class="form-control form-control-sm" placeholder="Jumlah pengeluaran" v-model="income.jml_pengeluaran">
                </div>
                <div class="form-group">
                  <label for="ket_pengeluaran">Keterangan pengeluaran</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Keterangan pengeluaran" v-model="income.ket_pengeluaran">
                </div>
                <button class="btn btn-primary btn-sm" v-on:click.prevent="editpengeluaran">Submit</button>                
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
        idpengeluaran: this.$route.params.id,        
        tgl_pengeluaran: '',
        jml_pengeluaran: null,
        ket_pengeluaran:'',      
      }
    };
  },
  methods: {
    loadpengeluaran : function(id) {
       axios
        .get("http://localhost/vuesucodAPI/pengeluaran/getpengeluaranById/"+id)
        .then((response) => {
            this.income = response.data[0];
            })
        .catch(error => console.log(error));
    },
     editpengeluaran : function(id) {
      self = this;
      this.income.tgl_pengeluaran = new Date().toISOString().substring(0, 10);
      axios
        .post("http://localhost/vuesucodAPI/pengeluaran/editpengeluaran/"+this.$route.params.id, qs.stringify(this.income))
        .then(    
          function (response) {            
            response => this.income = response.data;
            alert("data has been updated");
            self.$router.push({name: 'pengeluaranView'});
          }    
        )
        .catch(error => console.log(error));
    }
  },
  mounted() {
    const {id} = this.$route.params;
    this.loadpengeluaran(id);
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