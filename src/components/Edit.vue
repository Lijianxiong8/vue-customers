<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简历</label>
          <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary ">确认</button>           
      </div>
    </form>    
  </div>  
</template>

<script>
import Alert from './Alert'
export default {
  name:"edit",
  data(){
    return {
      customer:{},
      alert:""
    }
  },
  components: {
    Alert
  },
  methods:{
    fetchCustomer(id){
      this.$http.get("http://localhost:3000/users/"+id)
        .then(res => {
          console.log(res);
          this.customer = res.body
        })
    },
    updateCustomer(e){
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "请添加对应的信息!"
      } else {
        let updateCustomer = {
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          education:this.customer.education,
          graduationschool:this.customer.graduationschool,
          profession:this.customer.profession,
          profile:this.customer.profile
        } 
        this.$http.put("http://localhost:3000/users/"+this.$route.params.id, updateCustomer)
          .then(res => {
            // console.log(res);
            this.$router.push({path:'/',query:{alert:"用户信息更新成功"}});
          })
      }
      e.preventDefault();
    }
  },
  created(){
    this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<style>

</style>