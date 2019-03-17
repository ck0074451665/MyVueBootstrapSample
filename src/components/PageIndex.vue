<template>
    <div id="index-page">
       <b-tabs content-class="mt-3">
          <b-tab title="少儿英语" active>
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"  style="height:200px; overflow: hidden;">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <img src="../assets/img/indexpage-one-swiper.jpg" alt="这是第一章">
                        <div class="carousel-caption">
                          这是第一张
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../assets/img/indexpage-two-swiper.jpg"  alt="这是第二章">
                        <div class="carousel-caption">
                          这是第二张
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../assets/img/indexpage-two-swiper.jpg"  alt="这是第二章">
                        <div class="carousel-caption">
                          这是第三张
                        </div>
                      </div>
                    </div>
                    <!-- Controls -->
                    <a class="carousel-item-left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-item-right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
              </div>
               <!-- 图片轮转结束 -->
          </b-tab>
          <b-tab title="初高中"><p>
            tset
            </p></b-tab>
             <!-- <b-tab title="disabled" disabled><p> -->
          <b-tab title="大学英语"><p>
            tset
            </p></b-tab>
       </b-tabs>
    </div>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      message: 'hello world'
    }
  },
  created () {
    var carousel = this.$JQuery('.carousel').carousel()
    console.log(carousel)
  }
}
</script>
<style scoped>
  #index-page{
    height: 100%;
    margin-bottom: 50px;
  }
  div#index-page ul{
    padding-left:0px;
  }
  #index-page ul li{
    display: block;
    height: 50px;
    margin-top: 10px;
    border-top: 1px solid #AAAAAA;
  }
</style>
