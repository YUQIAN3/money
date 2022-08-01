type Tag={
    id:string;
    name:string;
}
type TagModel= {
    data:Tag[]
    fetch:()=>Tag[]
    create:(name:string)=>string
    update:(id:string,name:string)=>'success'|'not found'|'duplicated'
    remove:(id:string)=>boolean
    save:()=>void
}
type RecordItem ={
    tags:Tag[],
    notes:string,
    type:string,
    amount:number,
    createdAt?: string  // 类 / 构造函数
}
type RootState = {
    recordList: RecordItem[],
    createRecordError:Error|null,
    tagList: Tag[],
    currentTag?: Tag
}
interface Window{
}
