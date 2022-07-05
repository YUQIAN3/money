<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tags"
};
</script>

<style lang="scss" scoped>
.tags{
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  > .current {
    display: flex;
    > li{
      background: #d9d9d9;
      $h:24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px ;
      margin-right: 12px;
    }
  }
  .new{
    padding-top: 16px;
    color: red;
    button{
      background: transparent;
      //border: none;
      //color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

</style>
