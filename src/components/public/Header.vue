<template>
      <div class="top-title">
        <a href="#" v-on:click.prevent="SwitchAsideNav"><span class="glyphicon glyphicon-th-list left-icon"></span></a>
         <span class="glyphicon glyphicon-plus right-icon"></span>
      </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapMutations(['closeAsideNav', 'openAsideNav']),
    SwitchAsideNav () {
      var mainPage = document.getElementById('main-page')
      var menuSwitch = document.querySelector('.top-title a:first-child')
      console.log(mainPage)
      if (menuSwitch.getAttribute('data-isClose') === 'false') {
        menuSwitch.setAttribute('data-isClose', false)
      }
      if (menuSwitch.getAttribute('data-isClose') === 'true') {
        mainPage.className = ''
        menuSwitch.setAttribute('data-isClose', false)
      } else {
        mainPage.className = 'move-main-page-right'
        menuSwitch.setAttribute('data-isClose', true)
      }
    }
  }
}
</script>
<style scoped>
/* 标题栏 */
  .top-title{
    background: #5599FF;
    height: 45px;
  }
  .top-title{
    display: flex;
  }

  .top-title .right-icon {
    width: 20px;
    height: 20px;
    align-self:center;
    left: 100%;
    margin-left: -60px;
    color: white;
  }

   .top-title .left-icon {
    width: 20px;
    height: 20px;
    align-self:center;
    margin-left: 10px;
    color: white;
  }

  .top-title a{
    display: flex;
    height: 100%;
    align-content: center;
  }
   .top-title a:hover{
    text-decoration-style: none!important;
  }
</style>
