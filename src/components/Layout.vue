<template>
  <div class="layout-wrapper" >
    <div class="content" :class=" classPrefix && `${classPrefix}-content` ">
     <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props:['classPrefix'],
  name: "Layout.vue"
};
</script>

<style lang="scss" scoped>
.layout-wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow: 1;
}

</style>
