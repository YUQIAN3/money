import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex)//把store绑到 Vue.prototype.$store=store
const store= new Vuex.Store({
  state: {
    recordList:[] as RecordItem[]
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
    },saveRecord(state) {
      window.localStorage.setItem('recordList',
          JSON.stringify(state.recordList));
    },
  }


});
export default store;
