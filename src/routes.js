import homeView from './components/homeView.vue';
import pemasukanView from './components/pemasukanView.vue';
import pemasukanCreate from './components/pemasukanCreate.vue';
import pemasukanEdit from './components/pemasukanEdit.vue';
import pengeluaranView from './components/pengeluaranView.vue';
import pengeluaranCreate from './components/pengeluaranCreate.vue';
import pengeluaranEdit from './components/pengeluaranEdit.vue';
import LaporanView from './components/LaporanView.vue';
import userView from './components/userView.vue';
import aboutView from './components/aboutView.vue';
import login from './components/login.vue';

export default [
    {path: '*', component: homeView},
    {path: '/home', component: homeView},
    {path: '/user/view', component: userView, name:"userView"},
    {path: '/pemasukan/view', component: pemasukanView, name:"pemasukanView"},
    {path: '/pemasukan/create', component: pemasukanCreate, name:"pemasukanCreate"},
    {path: '/pemasukan/edit/:id', component: pemasukanEdit, name:"pemasukanEdit"},
    {path: '/pengeluaran/view', component: pengeluaranView, name:"pengeluaranView"},
    {path: '/pengeluaran/create', component: pengeluaranCreate, name:"pengeluaranCreate"},
    {path: '/pengeluaran/edit/:id', component: pengeluaranEdit, name:"pengeluaranEdit"},
    {path: '/laporan/view', component: LaporanView, name:"LaporanView"},
    {path: '/about', component: aboutView, name:"aboutView"},
    {path: '/login', component: login, name:"login"}
]