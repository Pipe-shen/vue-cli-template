import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Login';
import VeeValidateDemo from '@/components/vee-validate-demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login/:id',
      name: 'Hello-id',
      component: Hello,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/vee-validate-demo',
      name: 'VeeValidateDemo',
      component: VeeValidateDemo,
    },
  ],
});
