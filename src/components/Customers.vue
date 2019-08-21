<template>
  <div  class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>

    <input type="text" class="form-control" placeholder="根据名字搜索" v-model="filterInput">
    <br/>
    
    <table class="table table-striped">
      <thead>
        <tr>
          <td>姓名</td>
          <td>电话</td>
          <td>邮箱</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <!-- key值必须唯一，index唯一
        https://blog.csdn.net/web_xiaolei/article/details/80664297
         -->
        <tr v-for="customer in filterBy(customers,filterInput)" :key="customer.index">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert.vue'
export default {
  name: 'customers',
  data() {
    return {
      customers:[],
      alert:"",
      filterInput:""
    }
  },
  components:{
    Alert
  },
  methods:{
    fetchCustomers(){
      this.$http.get("http://localhost:3000/users")
        .then(res => {
          // console.log(res);
          this.customers = res.body;
        })
    },
    filterBy(customers, value) {
      return customers.filter(customer => {
        return customer.name.match(value);
      })
    }
  },
  created(){
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated(){
    this.fetchCustomers();
  }
}
</script>

<style>

</style>
