<template>
  <div id="setting">

    <div class="row">
      <div class="col-md-10 text-left">
        <h1>Pemasukan</h1>
      </div>
      <div class="col-md-2 text-right">
        <router-link :to="{name:'pemasukanCreate'}" class="btn btn-info">Add Pemasukan</router-link>
      </div>
    </div>
    <hr>

    <v-client-table :data="incomes" :columns="columns" :options="options">
      <div slot="action" slot-scope="props">
        <span>
            <router-link class="btn btn-sm btn-warning" style="color: white" :to="{name: 'pemasukanEdit', params:{id: props.row.id_pemasukan} }">Edit</router-link>
        </span>
        <span>
            <button v-on:click.prevent="deletePemasukan(props.row.id_pemasukan);" class="btn btn-sm btn-danger">Delete</button>
        </span>
      </div>
    </v-client-table>

  </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return{
            incomes: [],
            columns: ['id_pemasukan', 'tgl_pemasukan', 'jml_pemasukan', 'ket_pemasukan', 'action'],
            options: {
              perPage : 5,
              perPageValues: [5,10,15,20,25],
              headings: {
                'id_pemasukan' : 'id',
                'tgl_pemasukan' : 'Tanggal',
                'jml_pemasukan' : 'Jumlah Pemasukan',
                'ket_pemasukan' : 'Keterangan'
              }
            },
            sortable: ['id_pemasukan', 'tgl_pemasukan', 'jml_pemasukan', 'ket_pemasukan'],
            filterable: ['id_pemasukan', 'jml_pemasukan', 'ket_pemasukan'],
        }
    },
    methods: {
        loadIncomes() {
          axios
            .get('http://localhost/vuesucodAPI/pemasukan/getpemasukan')
            .then(response => this.incomes = response.data)
            .catch(error => console.log(error));
        },
        deletePemasukan(id){
          let self = this;
          axios
            .post('http://localhost/vuesucodAPI/pemasukan/deletepemasukan/'+id)
            .then((response) => {
                self.loadIncomes();
            })
            .catch(error => console.log(error));
        }
    },
    created(){
        this.loadIncomes();
    },
    computed: {
        
    }
}

</script>

<style>
    #setting{
        margin-top: 10px;
        margin-left: 45px;
    }
    .VueTables__search-field label{
      justify-content: left;
    }
    td{
      text-align: center;
    }
    th{
      text-align: center;
    }
</style>
