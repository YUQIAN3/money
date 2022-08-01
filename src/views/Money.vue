<template>
      <layout class-prefix="layout">
        {{record}}
        <NumberPad @update:value="onUpDateAmount" @submit="saveRecord"/>
<!--        <Types :value.sync="record.type"/>-->
        <Tabs :data-source=" recordTypeList"
              :value.sync=" record.type"/>
        <div class="notes">
          <formItem field-name="备注"
                    placeholder="在这里输入备注"
                    :value.sync="record.notes"
          />
        </div>
        <Tags @update:value="record.tags=$event"/>
      </layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import formItem from '@/components/Money/FormItem.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';
@Component({
  components:{ Tabs, Tags,formItem,NumberPad},
})

export default class Money extends Vue{
  get recordList(){
    return this.$store.state.recordlist;
  }
  recordTypeList=recordTypeList;
  record:RecordItem={
    tags:[],notes:'',type:'-',amount:0
  }
create(){
    this.$store.commit('fetchRecord')
}
  onUpDateTagsNotes(value:string){
    this.record.notes=value
  }
  onUpDateAmount(value:string){
    this.record.amount=parseFloat(value)
  }
  saveRecord() {
    if(!this.record.tags||this.record.tags.length===0){
     return window.alert('请至少选择一个标签')
    }
   this.$store.commit('createRecord',this.record)
    if(this.$store.state.createRecordError===null){
      window.alert('已保存')
      this.record.notes=''
    }

  }
}
</script>
<style scoped lang="scss">
::v-deep .layout-content{
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
