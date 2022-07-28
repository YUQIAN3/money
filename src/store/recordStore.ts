
import clone from '@/lib/clone';
// let data:RecordItem[]|undefined=undefined;
const recordStore={
    recordList:[] as RecordItem[],
  fetchRecord(){
      console.log('1111');
      console.log(window.localStorage.getItem('recordList'));
      this.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
      return this.recordList;
  },
 saveRecord(){
     window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
 },
    createRecord(record:RecordItem) {
        const record2:RecordItem=clone(record)
        record2.createdAt = new Date().toISOString();
        this.recordList&&this.recordList.push(record2)
        recordStore.saveRecord()
    }
}
recordStore.fetchRecord()
export default recordStore;
