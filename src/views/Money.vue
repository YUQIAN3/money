<template>
      <layout class-prefix="layout">
        {{recordList}}
        <NumberPad @update:value="onUpDateAmount" @submit="saveRecord"/>
        <Type :value.sync="record.type" />
        <Notes @update:value="onUpDateTagsNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpDateTags"/>
      </layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';
const  recordList= model.fetch();

@Component({
  components:{Tags,Notes,Type,NumberPad}
})
export default class Money extends Vue{

  tags=['衣' ,'食',  '住' ,'行']
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
    const record2=model.clone(this.record)
    record2.createdAt = new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordChange(){
   model.save(this.recordList)
  }
}
</script>
<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
