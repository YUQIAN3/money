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

        <Tags/>
      </layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Type from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import formItem from '@/components/Money/FormItem.vue';
import {Component} from 'vue-property-decorator';
@Component({
  components:{Tags,formItem,Type,NumberPad},
})

export default class Money extends Vue{
  get recordList(){
    return this.$store.state.recordlist;
  }
  record:RecordItem={
    tags:[],notes:'',type:'-',amount:0
  }
create(){
    this.$store.commit('fetchRecord')
}
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
   this.$store.commit('createRecord',this.record)
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
