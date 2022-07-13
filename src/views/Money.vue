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
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagModel';

const  recordList= recordListModel.fetch();
const tagList=tagListModel.fetch();

@Component({
  components:{Tags,formItem,Type,NumberPad}
})
export default class Money extends Vue{

  tags=tagList
  recordList:RecordItem[]=recordList;
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
    const record2=recordListModel.clone(this.record)
    record2.createdAt = new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordChange(){
   recordListModel.save(this.recordList)
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
