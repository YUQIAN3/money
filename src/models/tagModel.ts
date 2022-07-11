type TagModel= {
data:string[]
fetch:()=>string[]
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
      if(this.data.indexOf(name)>=0){
          return'duplicated';
      }
   this.data.push(name);
   this.save();
   return 'success';
    },
    save() {
        window.localStorage.setItem('tagList', JSON.stringify(this.data));
    }
};

export default tagModel;
