<template>
  <div id="headers">
    <nav class="navbar navbar-default  navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">   
            <span class="navbar-brand" href="#"><span class="
glyphicon glyphicon-th-large"></span>用户管理系统</span>
            <span class="navbar-brand left">
              <router-link to='/'>主页</router-link>
            </span>
            <span class="navbar-brand">
              <router-link to='/about'>关于我们</router-link>
            </span>
            <span id="add" class="navbar-brand">
              <router-link to='/add'>添加用户</router-link>
            </span> 
        </div>
      </div>
    </nav>  
          <!--   
          <a href="#">用户管理系统</a>
          <ul>
            <li><router-link to='/'>主页</router-link></li>
            <li><router-link to='/about'>关于我们</router-link></li>
          </ul> -->

  </div>
</template>

<script>

export default {
    name: 'headers',


/*
    beforeMount () {
        this.loadScript('https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js', () => {
        this.loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js') // 先加载jq后加载bootstrap
        })
    // this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.4/holder.min.js')
    }
    <style src="../assets/css/bootstrap.min.css" scoped></style> 
*/
}

</script>
<style>
#headers {
  margin:0 auto;
  text-align: left;
}

#add {
  position: absolute;
  right: 5%;
}
</style>
