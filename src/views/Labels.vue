<template>
    <layout >
        <div class="tags">
        <router-link class="tag"
            v-for="tag in tags" :key="tag.id"
            :to="`/labels/edit/${tag.id}`" >
          <span>{{tag.name}}</span>
          <Icon name="right"/>
        </router-link>
        </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新增标签</Button>
      </div>
      </layout>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class extends Vue{
  get tags(){
    return this.$store.state.tagList
  }
 beforeCreate(){
   this.$store.commit('fetchTags')
 }
  createTag(){
    const name=window.prompt('请输入标签名')
    if(!name){
      return window.alert('标签不能为空')}
    this.$store.commit('createTag',name)
    if(this.$store.state.createTagError){
      window.alert(this.$store.state.createTagError.message)
    }

  }
};
</script>

<style lang="scss" scoped>
.tags{
  background: white;
  padding-left: 16px;
  > .tag{
  min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg{
      width: 16px;
      height: 16px;
      color:#666;
      margin-right: 16px;

    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper{
  text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>
