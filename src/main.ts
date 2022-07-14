import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagModel from '@/models/tagModel';
import tagListModel from '@/models/tagModel';

Vue.config.productionTip = false;
Vue.component('Icon', Icon);
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
window.tagList=tagModel.fetch();
window.findTag=(id:string)=>{
    return  window.tagList.filter(t=>t.id===id)[0];
}
window.createTag=(name:string)=>{
    const message=tagModel.create(name)
    if (message === 'duplicated') {
        window.alert('标签名重复')
    }else if(message==='success'){
        window.alert('添加成功')
    }
}
window.removeTag=(id:string)=>{
    return tagModel.remove(id);
}
window.updateTag=(id:string,name:string)=>{
    return tagModel.update(id,name)
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
