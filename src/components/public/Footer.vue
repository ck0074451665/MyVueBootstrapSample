<template>
    <div id="footer">
        <ul>
            <li><router-link  to="/">
            <span class="glyphicon glyphicon-home" aria-hidden="false"></span><br/>首页
            </router-link></li>
            <li><router-link  to="/fundationcourse">
            <span class="glyphicon glyphicon-book" aria-hidden="true"></span><br/>基础课</router-link></li>
            <li><router-link  to="/learningcenter">
            <span class="glyphicon glyphicon-font" aria-hidden="true"></span><br/>学习中心</router-link></li>
            <li><router-link  to="/studyskills">
            <span class="glyphicon glyphicon-glass" aria-hidden="true"></span><br/>省心吧</router-link></li>
            <li><router-link  to="/usercenter">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span><br/>个人</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped lang='scss' type="text/css">

div#footer{
    position:fixed;
    bottom: 0%;
    left:0%;
    width: 100%;
    background-color: white;
}
div#footer ul
{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    padding: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin: 0px;
    height: 100%;
    border-top: 1px solid #DDDDDD;
    -moz-box-shadow: 0px -1px 10px #888888; /* 老的 Firefox */
    box-shadow: 0px -1px 10px #888888;
}

div#footer li
{
    height: 30px;
    display: block;
    font-size:12px;
}

div#footer li a
{
    display: inline-block;
    text-decoration:none;
    color: #888888;
}
.router-link-exact-active{
    color: #5599FF!important;
}
</style>
