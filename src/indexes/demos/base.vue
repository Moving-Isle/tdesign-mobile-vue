<template>
  <div class="component-wrap">
    <t-indexes :list="list" @select="onSelect"> </t-indexes>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { Toast } from 'tdesign-mobile-vue';

const props = defineProps({
  type: {
    type: String,
    default: 'letter',
  },
});

const letter = [
  {
    title: 'A开头',
    index: 'A',
    children: [
      { title: '阿坝' },
      { title: '阿拉善' },
      { title: '阿里' },
      { title: '安康' },
      { title: '安庆' },
      { title: '鞍山' },
      { title: '安顺' },
      { title: '安阳' },
      { title: '澳门' },
    ],
  },
  {
    title: 'B开头',
    index: 'B',
    children: [
      { title: '北京' },
      { title: '白银' },
      { title: '保定' },
      { title: '宝鸡' },
      { title: '保山' },
      { title: '包头' },
      { title: '巴中' },
      { title: '北海' },
      { title: '蚌埠' },
      { title: '本溪' },
      { title: '毕节' },
      { title: '滨州' },
      { title: '百色' },
      { title: '亳州' },
    ],
  },
  {
    title: 'C开头',
    index: 'C',
    children: [
      { title: '重庆' },
      { title: '成都' },
      { title: '长沙' },
      { title: '长春' },
      { title: '沧州' },
      { title: '常德' },
      { title: '昌都' },
      { title: '长治' },
      { title: '常州' },
      { title: '巢湖' },
      { title: '潮州' },
      { title: '承德' },
      { title: '郴州' },
      { title: '赤峰' },
      { title: '池州' },
      { title: '崇左' },
      { title: '楚雄' },
      { title: '滁州' },
      { title: '朝阳' },
    ],
  },
  {
    title: 'D开头',
    index: 'D',
    children: [
      { title: '大连' },
      { title: '东莞' },
      { title: '大理' },
      { title: '丹东' },
      { title: '大庆' },
      { title: '大同' },
      { title: '大兴安岭' },
      { title: '德宏' },
      { title: '德阳' },
      { title: '德州' },
      { title: '定西' },
      { title: '迪庆' },
      { title: '东营' },
    ],
  },
  {
    title: 'E开头',
    index: 'E',
    children: [{ title: '鄂尔多斯' }, { title: '恩施' }, { title: '鄂州' }],
  },
  {
    title: 'F开头',
    index: 'F',
    children: [
      { title: '福州' },
      { title: '防城港' },
      { title: '佛山' },
      { title: '抚顺' },
      { title: '抚州' },
      { title: '阜新' },
      { title: '阜阳' },
    ],
  },
  {
    title: 'G开头',
    index: 'G',
    children: [
      { title: '广州' },
      { title: '桂林' },
      { title: '贵阳' },
      { title: '甘南' },
      { title: '赣州' },
      { title: '甘孜' },
      { title: '广安' },
      { title: '广元' },
      { title: '贵港' },
      { title: '果洛' },
    ],
  },
];

const number = [
  {
    title: '第一章',
    index: '1',
    children: [
      { title: '第一章第一节' },
      { title: '第一章第二节' },
      { title: '第一章第三节' },
      { title: '第一章第四节' },
      { title: '第一章第五节' },
    ],
  },
  {
    title: '第二章',
    index: '2',
    children: [
      { title: '第二章第一节' },
      { title: '第二章第二节' },
      { title: '第二章第三节' },
      { title: '第二章第四节' },
      { title: '第二章第五节' },
    ],
  },
  {
    title: '第三章',
    index: '3',
    children: [
      { title: '第三章第一节' },
      { title: '第三章第二节' },
      { title: '第三章第三节' },
      { title: '第三章第四节' },
      { title: '第三章第五节' },
    ],
  },
  {
    title: '第四章',
    index: '4',
    children: [
      { title: '第四章第一节' },
      { title: '第四章第二节' },
      { title: '第四章第三节' },
      { title: '第四章第四节' },
      { title: '第四章第五节' },
    ],
  },
  {
    title: '第五章',
    index: '5',
    children: [
      { title: '第五章第一节' },
      { title: '第五章第二节' },
      { title: '第五章第三节' },
      { title: '第五章第四节' },
      { title: '第五章第五节' },
    ],
  },
  {
    title: '第六章',
    index: '6',
    children: [
      { title: '第六章第一节' },
      { title: '第六章第二节' },
      { title: '第六章第三节' },
      { title: '第六章第四节' },
      { title: '第六章第五节' },
    ],
  },
];

const list = computed(() => (props.type === 'number' ? number : letter));

const onSelect = (indexes: { groupIndex: string; childrenIndex: number }) => {
  Toast(JSON.stringify(indexes));
};
</script>
<style lang="less">
.component-wrap {
  height: calc(100vh - 50px);
}
</style>
