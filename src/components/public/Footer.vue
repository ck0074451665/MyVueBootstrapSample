<template>
    <div id="footer">
        <ul> 
            <li><img src="" /> 首页</li>
            <li><img src="" />第二页</li>
            <li><img src="" />哇咔咔</li>
            <li><img src="" />哇咔咔</li>
            <li><img src="" />哇咔咔</li>
            <li><img src="" />哇咔咔</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>

div#footer ul
{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    padding: 0px;
}

div#footer li
{
    display: block; 
    width: 100px;
    height: 50px;
    flex: 1;
}

div#footer li:nth-child(even)
{
    display: block;  
    width: 100px;
    height: 50px;
    flex: 1;
}
</style>
