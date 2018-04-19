<template>
    <div id="app">
        <div class="cas">
            单点登录管理
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
    margin: 0px;
    padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.cas{
    color: white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 60px;
    background: #2c3e50;
}
</style>
