<template>
      <layout class-prefix="layout">
        {{record}}
        <NumberPad @update:value="onUpDateAmount" @submit="saveRecord"/>
        <Type :value.sync="record.type" />
        <div class="notes">
          <formItem field-name="标签名"
                    placeholder="请输入标签名"
               @update:value="onUpDateTagsNotes"/>
        </div>

        <Tags :data-source.sync="tags" @update:value="onUpDateTags"/>
      </layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import formItem from '@/components/Money/FormItem.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';


@Component({
  components:{Tags,formItem,Type,NumberPad}
})
export default class Money extends Vue{

   tags=store.tagList;
  recordList=store.recordList;
  record:RecordItem={
    tags:[],notes:'',type:'-',amount:0}

  onUpDateTags(value:string[]){
   this.record.tags=value
  }
  onUpDateTagsNotes(value:string){
    this.record.notes=value
  }
  onUpDateAmount(value:string){
    this.record.amount=parseFloat(value)
  }
  saveRecord() {
    store.createRecord(this.record)
  }
}
</script>
<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
