<template>
    <div id="setting">
          <div class="row">
            <div class="col-12">
              <h2>Edit Pemasukan</h2><hr>
              <form>
                <div class="form-group">
                  <label for="Tanggal Pemasukan">Tanggal Pemasukan</label>
                  <input type="text" disabled class="form-control form-control-sm" placeholder="Tanggal Pemasukan" v-model="income.tgl_pemasukan">
                </div>
                <div class="form-group">
                  <label for="jml_pemasukan">Jumlah Pemasukan</label>
                  <input type="number" min="0" class="form-control form-control-sm" placeholder="Jumlah Pemasukan" v-model="income.jml_pemasukan">
                </div>
                <div class="form-group">
                  <label for="ket_pemasukan">Keterangan Pemasukan</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Keterangan Pemasukan" v-model="income.ket_pemasukan">
                </div>
                <button class="btn btn-primary btn-sm" v-on:click.prevent="editPemasukan">Submit</button>                
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
        idpemasukan: this.$route.params.id,        
        tgl_pemasukan: '',
        jml_pemasukan: null,
        ket_pemasukan:'',      
      }
    };
  },
  methods: {
    loadPemasukan : function(id) {
       axios
        .get("http://localhost/vuesucodAPI/pemasukan/getPemasukanById/"+id)
        .then((response) => {
            this.income = response.data[0];
            })
        .catch(error => console.log(error));
    },
     editPemasukan : function(id) {
      self = this;
      this.income.tgl_pemasukan = new Date().toISOString().substring(0, 10);
      axios
        .post("http://localhost/vuesucodAPI/pemasukan/editPemasukan/"+this.$route.params.id, qs.stringify(this.income))
        .then(    
          function (response) {            
            response => this.income = response.data;
            alert("data has been updated");
            self.$router.push({name: 'pemasukanView'});
          }    
        )
        .catch(error => console.log(error));
    }
  },
  mounted() {
    const {id} = this.$route.params;
    this.loadPemasukan(id);
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