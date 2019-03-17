<template>
    <div id="fundation-course">{{message}}这是第{{this.$store.LocationVal}}页</div>
</template>
<script>
export default {
  name: 'FundationCourse',
  data () {
    return {
      message: '这是我的基础课'
    }
  },
  created () {
    this.$store.LocationVal = 2
  }
}
</script>
