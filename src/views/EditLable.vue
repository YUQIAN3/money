<template>
<layout>
  <div class="navBar">
    <Icon class="leftIcon"   name="left" @click="goBack"/>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
  <div class="form-wrapper">
<formItem :value="tag.name"
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
import store from '@/store/index2';
@Component({
  components: {Button, formItem}
})
export default class EditLabel extends Vue {
    tag?:Tag=undefined
  created(){
    this.tag=store.findTag(this.$route.params.id);
  if(!this.tag){

}
  }
  update(name:string){
    if(this.tag){
      store.updateTag(this.tag.id,name)
    }
  }
  remove(){
    if(this.tag){
     if(store.removeTag(this.tag.id)){
       this.$router.back();
     }else{
       window.alert('删除失败')
     }
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
