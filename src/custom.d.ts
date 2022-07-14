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
    tags:string[],
    notes:string,
    type:string,
    amount:number,
    createdAt?: Date  // 类 / 构造函数
}
interface Window{
tagList:Tag[];
createTag:(name:string)=>void;
findTag:(id:string)=>Tag|undefined;
removeTag:(id:string)=>boolean
updateTag:(id:string,name:string)=>'success'|'not found'|'duplicated'
}
