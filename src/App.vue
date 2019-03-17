<template>
  <div id="app">
    <app-menu></app-menu>
    <div id="main-page">
        <app-head></app-head>
        <router-view/>
        <app-foot></app-foot>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/public/Footer'
import Header from '@/components/public/Header'
import AsideMenu from '@/components/public/AsideMenu'
export default {
  name: 'App',
  components: {
    'app-foot': Footer,
    'app-head': Header,
    'app-menu': AsideMenu
  }
}
</script>
<style lang='scss' >
//自定义style
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
// Fix Icon Font Path
$icon-font-path: '~@neos21/bootstrap3-glyphicons/assets/fonts/';
// Import This
@import '~@neos21/bootstrap3-glyphicons';
@import url("./assets/base.scss");
#app {
  //  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2c3e50;
}
div#main-page{
  z-index: 2;
  position: relative;
  transition: all 0.5s;
}
 div.move-main-page-right
  {
        transform:translateX(120px);
        -webkit-transform:translateX(120px);  /*??-webkit-?????*/
        -moz-transform:translateX(120px);     /*??-moz-?????*/
  }
</style>
