<template>
  <t-swiper :autoplay="false" :height="180" direction="vertical" :navigation="{ type: 'fraction' }">
    <t-swiper-item class="swiper-item--demo">
      <img src="https://tdesign.gtimg.com/site/swiper/01.png" class="img" />
    </t-swiper-item>
    <t-swiper-item class="swiper-item--demo">
      <img src="https://tdesign.gtimg.com/site/swiper/02.png" class="img" />
    </t-swiper-item>
    <t-swiper-item class="swiper-item--demo">
      <img src="https://tdesign.gtimg.com/site/swiper/03.png" class="img" />
    </t-swiper-item>
  </t-swiper>
</template>
<script lang="ts" setup></script>
<style lang="less">
.swiper-item--demo {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f33;
  font-size: 20px;
  color: #fff;

  img {
    height: 100%;
  }
}
</style>
