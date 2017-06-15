import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/:id',
      name: 'Hello-id',
      component: Hello,
    },
  ],
});
