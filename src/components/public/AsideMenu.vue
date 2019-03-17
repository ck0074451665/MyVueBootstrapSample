<template>
    <div id="asideMenu">
        <div id="head">用户名:</div>
        <div id="nav">test</div>
    </div>
</template>
<script>
export default {
  name: 'AsideMenu'
}
</script>
<style scoped>
    div#asideMenu *
    {
        width: 50px;
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: white;
        z-index: -999;
    }
</style>
