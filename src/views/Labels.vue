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
        <button class="createTag" @click="createTag">新增标签</button>
      </div>
      </layout>
</template>

<script lang="ts">

import tagModel from '@/models/tagModel';
import tagListModel from '@/models/tagModel';
import Vue from 'vue';
import Component from 'vue-class-component';
tagModel.fetch();
@Component
export default class extends Vue{
  tags=tagModel.data;
  createTag() {
    const name = window.prompt('请输入标签名：')
    if (name) {
    const message=tagListModel.create(name)

        if (message === 'duplicated') {
          window.alert('标签名重复')
        }
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
      border: 1px solid red;
      margin-right: 16px;

    }
  }
}
.createTag{
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
