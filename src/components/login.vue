<template>
  <div id="login" class="jumbotron">
      <h1>Login Page</h1>
      <br>
      <div class="text text-danger">{{feedback}}</div>
      <div class="form-group">
          <input type="text" class="form-control" placeholder="nama" v-model="login.nama">
      </div>
      <div class="form-group">
          <input type="password" class="form-control" placeholder="password" v-model="login.password">
      </div>
      <button class="btn btn-primary" v-on:click.prevent="userLogin()">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {

    data() {
        return{
            login: {
                nama: '',
                password: '' 
            },
            feedback: null
        }
    },
    created() {
        localStorage.clear();
    },
    methods: {
        userLogin(){
            let self = this;
            if(this.login.nama == "" && this.login.password == ""){
                this.feedback = "Nama dan password tidak boleh kosong";
            }else{
                axios
                 .post('http://localhost/vuesucodAPI/user/userlogin', qs.stringify(self.login))
                 .then((response) => {
                     if(response.data.length > 0 ){
                         self.feedback = "";
                         let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZFVzZXIiOiI2IiwiaWF0IjoxNTc4MjA4ODQxLCJleHAiOjE1ODA4MDA4NDF9.B9hjoPS0tiOnpBBj67KIdwNOh7rQRGtvEEfLNGYeZ9A";
                         localStorage.setItem('token', token);
                         localStorage.setItem('nama', response.data[0].nama);
                         self.$router.push("/home");
                     }else{
                         self.feedback = "Nama atau password yang anda masukan salah, silakan login kembali";
                     }
                 })
                 .error(error=>console.log(error));
            }
        }
    }
}

</script>

<style scoped>
    #login{
        margin-top: 50px;
        margin-left: 45px;
    }
</style>
