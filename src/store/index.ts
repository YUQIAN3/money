import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex)//把store绑到 Vue.prototype.$store=store
const store= new Vuex.Store({
  state: {
    recordList:[] as RecordItem[],
    tagList:[] as Tag[]
  },
  mutations:{
    fetchRecord(state) {
      state.recordList =JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record){
      const record2:RecordItem=clone(record)
      record2.createdAt = new Date();
        state.recordList.push(record2)
      console.log(state.recordList);
      store.commit('saveRecord')
      // recordStore.saveRecord()
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
          JSON.stringify(state.recordList));
    },
    fetchTas(state){
      return state.tagList=JSON.parse(window.localStorage.getItem('tagList') || '[]') ;

    },
    createTag(state,name:string){
      const names=state.tagList.map(item=>item.name)
      if(names.indexOf(name)>=0){
        window.alert('标签名重复')
        return'duplicated';

      }
      const id = createId().toString()
      state.tagList.push({id,name:name});
      store.commit('saveTags')
      window.alert('添加成功')
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList',
          JSON.stringify(state.tagList));
    }
  }
});
export default store;
