<template>
  <div id="setting">
    <h1>User</h1>

    <div class="row my-3">
        <div class="col-9">
            <button class="btn btn-sm btn-info" data-target="#addUser" data-toggle="modal">Add User</button>
        </div>
        <div class="col-3">
            <input type="text" class="form-control form-control-sm" placeholder="Search data" v-model="search">
        </div>
    </div>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Nama</th>
                <th scope="col">Previlege</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in filteredUsers" v-bind:key="user.idUser">
                <td scope="col">{{index + 1}}</td>
                <td scope="col">{{user.nama}}</td>
                <td scope="col">{{user.previlege}}</td>
                <td scope="col">
                    <span>
                        <button class="btn btn-sm btn-warning" style="color: white" data-toggle="modal" data-target="#editUser" v-on:click="getUserById(user.idUser)">Edit</button>
                    </span>
                    <span>
                        <button class="btn btn-sm btn-danger" v-on:click="deleteUser(user.idUser)">Delete</button>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- Insert User -->
    <div class="modal fade" id="addUser">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tambah User</h5>
                    <button class="close" data-dismiss="modal" style="outline:none">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label>Nama</label>
                            <input type="text" class="form-control" v-model="insert.nama">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control" v-model="insert.password">
                        </div>
                        <div class="form-group">
                            <label>Alamat</label>
                            <input type="text" class="form-control" v-model="insert.alamat">
                        </div>
                        <div class="form-group">
                            <label>Telepon</label>
                            <input type="text" class="form-control" v-model="insert.telepon">
                        </div>
                        <div class="form-group">
                            <label>Previlege</label>
                            <input type="text" class="form-control" v-model="insert.previlege">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button class="btn btn-primary" v-on:click.prevent="insertUser()">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Insert User -->


    <!-- Edit User -->
    <div class="modal fade" id="editUser">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit User</h5>
                    <button class="close" data-dismiss="modal" v-on:click="closeUserById()">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                     <form action="">
                        <div class="form-group">
                            <label>Nama</label>
                            <input type="text" class="form-control" v-model="userById.nama">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control" v-model="userById.password">
                        </div>
                        <div class="form-group">
                            <label>Alamat</label>
                            <input type="text" class="form-control" v-model="userById.alamat">
                        </div>
                        <div class="form-group">
                            <label>Telepon</label>
                            <input type="text" class="form-control" v-model="userById.telepon">
                        </div>
                        <div class="form-group">
                            <label>Previlege</label>
                            <input type="text" class="form-control" v-model="userById.previlege">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal" v-on:click="closeUserById()">close</button>
                    <button class="btn btn-primary" v-on:click.prevent="updateUser(userById.idUser)">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Edit User -->


  </div>
</template>

<script>

import axios from 'axios'
import qs from 'qs'

export default {
    data() {
        return{
            users: [],
            search: '',
            insert: [],
            userById: []
        }
    },
    created(){
        this.getUser();
    },
    computed: {
        filteredUsers() {
            return this.users.filter((user) => {
                return user.nama.match(this.search) || user.alamat.match(this.search) || user.telepon.match(this.search) || user.previlege.match(this.search);
            });
        }
    },
    methods: {
        getUser() {
            axios.get("http://localhost/vuesucodAPI/user/getUser")
            .then(response => this.users = response.data)
            .catch(error => console.log(error));
        },
        getUserById(id) {
            axios.get("http://localhost/vuesucodAPI/user/getUserById/"+id)
            .then(response => this.userById = response.data[0])
            .catch(error => console.log(error));
        },
        closeUserById(){
            this.userById = [];
        },
        insertUser() {
            let self = this;
            axios
                .post('http://localhost/vuesucodAPI/user/createUser', qs.stringify(this.insert))
                .then((response) => {
                    self.insert = [];
                    self.getUser();
                    $('#addUser').modal('hide');
                })
                .catch(error => console.log(error));
        },
        updateUser(id) {
            let self = this;
            axios
                .post('http://localhost/vuesucodAPI/user/editUser/'+id, qs.stringify(this.userById))
                .then((response) => {
                    self.userById = [];
                    self.getUser();
                    $('#editUser').modal('hide');
                })
                .catch(error => console.log(error));
        },
        deleteUser(id) {
            let self = this;
            axios
                .post('http://localhost/vuesucodAPI/user/deleteuser/'+id)
                .then((response) => {
                    self.getUser();
                })
                .catch(error => console.log(error));
        }
    }
}

</script>

<style scoped>
    #setting{
        margin-top: 10px;
        margin-left: 45px;
    }
</style>
