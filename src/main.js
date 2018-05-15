import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VLoader from '@/components/VLoader.vue';
import VPage from '@/components/VPage.vue';
import VButton from '@/components/VButton.vue';
import VField from '@/components/VField.vue';
import VInput from '@/components/VInput.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VeeValidate, {
  inject: false,
});

// Global components
Vue.component('VLoader', VLoader);
Vue.component('VPage', VPage);
Vue.component('VButton', VButton);
Vue.component('VField', VField);
Vue.component('VInput', VInput);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
