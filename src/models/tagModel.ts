type Tag={
    id:string;
    name:string;
}
type TagModel= {
data:Tag[]
fetch:()=>Tag[]
create:(name:string)=>string
save:()=>void
}
const tagModel:TagModel= {
  data:[],
    fetch() {
       this.data=JSON.parse(window.localStorage.getItem('tagList') || '[]') ;
       return this.data;
    },
   create(name:string){
      //this.data=[{id:1,name:1},{id:2,name:2}]
       const names=this.data.map(item=>item.name)
      if(names.indexOf(name)>=0){
          return'duplicated';
      }
   this.data.push({id:name,name:name});
   this.save();
   return 'success';
    },
    save() {
        window.localStorage.setItem('tagList', JSON.stringify(this.data));
    }
};

export default tagModel;
