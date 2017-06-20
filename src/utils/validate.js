import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';

Validator.addLocale(zh);
Validator.extend('qq', {
  messages: {
    zh_CN: () => 'qq号码输入不正确',
  },
  validate(value) {
    return /^[1-9][0-9]{4,14}$/.test(value);
  },
});
Vue.use(VeeValidate, {
  locale: 'zh_CN',
});
