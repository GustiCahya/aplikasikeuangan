<template>
  <div id="setting">

    <div class="row">
      <div class="col-md-10 text-left">
        <h1>Pengeluaran</h1>
      </div>
      <div class="col-md-2 text-right">
        <router-link :to="{name:'pengeluaranCreate'}" class="btn btn-info">Add pengeluaran</router-link>
      </div>
    </div>
    <hr>

    <v-client-table :data="incomes" :columns="columns" :options="options">
      <div slot="action" slot-scope="props">
        <span>
            <router-link class="btn btn-sm btn-warning" style="color: white" :to="{name: 'pengeluaranEdit', params:{id: props.row.id_pengeluaran} }">Edit</router-link>
        </span>
        <span>
            <button v-on:click.prevent="deletepengeluaran(props.row.id_pengeluaran);" class="btn btn-sm btn-danger">Delete</button>
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
            columns: ['id_pengeluaran', 'tgl_pengeluaran', 'jml_pengeluaran', 'ket_pengeluaran', 'action'],
            options: {
              perPage : 5,
              perPageValues: [5,10,15,20,25],
              headings: {
                'id_pengeluaran' : 'id',
                'tgl_pengeluaran' : 'Tanggal',
                'jml_pengeluaran' : 'Jumlah pengeluaran',
                'ket_pengeluaran' : 'Keterangan'
              }
            },
            sortable: ['id_pengeluaran', 'tgl_pengeluaran', 'jml_pengeluaran', 'ket_pengeluaran'],
            filterable: ['id_pengeluaran', 'jml_pengeluaran', 'ket_pengeluaran'],
        }
    },
    methods: {
        loadIncomes() {
          axios
            .get('http://localhost/vuesucodAPI/pengeluaran/getpengeluaran')
            .then(response => this.incomes = response.data)
            .catch(error => console.log(error));
        },
        deletepengeluaran(id){
          let self = this;
          axios
            .post('http://localhost/vuesucodAPI/pengeluaran/deletepengeluaran/'+id)
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
