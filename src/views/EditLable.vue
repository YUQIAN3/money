<template>
<layout>
  <div class="navBar">
    <Icon class="leftIcon"   name="left" @click="goBack"/>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
  <div class="form-wrapper">
<formItem :value="currentTag.name"
          @update:value="update"
          field-name="标签名"
          placeholder="请输入标签名"/>
  </div>
  <div class="button-wrapper">
  <Button @click.native="remove">删除标签</Button>
  </div>
</layout>
</template>

<script lang="ts" >
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import formItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Money/Button.vue';
@Component({
  components: {Button, formItem}
})
export default class EditLabel extends Vue {
    get currentTag(){
      return this.$store.state.currentTag;
    }
  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }
  update(name:string){
    if(this.currentTag){
      this.$store.commit('updateTag',
         {id:this.currentTag.id,name:name})
    }
  }
  remove() {
    if (this.currentTag) {
  this.$store.commit('removeTag',this.currentTag.id)
    }
  }
  goBack(){
    this.$router.back()
  }
}

</script>

<style lang="scss" scoped>
.navBar{
  background: white;
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >.title{

  }
  >.leftIcon{
   height: 24px;
    width: 24px;
  }
  >.rightIcon{
    height: 24px;
    width: 24px;
  }
}
.form-wrapper{
  background: white;
  margin-top: 8px;
}
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16 px;
}
</style>
