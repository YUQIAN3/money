
import clone from '@/lib/clone';
// let data:RecordItem[]|undefined=undefined;
const recordStore={
    recordList:[] as RecordItem[],
  fetchRecordStores(){
      this.recordList=JSON.parse(window.localStorage.getItem('recordList') ||'[]') as RecordItem[];
      return this.recordList;
  },
 saveRecordStores(){
     window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
 },
    createRecord(record:RecordItem) {
        const record2:RecordItem=clone(record)
        record2.createdAt = new Date();
        this.recordList&&this.recordList.push(record2)
        recordStore.saveRecordStores()
    }
}
recordStore.fetchRecordStores()
export default recordStore;
