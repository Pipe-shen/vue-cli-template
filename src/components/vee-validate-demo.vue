<template>
  <div class="">
    <div class="">
      vee-validate-demo
    </div>
    <div class="column is-12">
      <label class="label" >Email</label>
      <p :class="{ 'control': true }">
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"
               name="email" type="text" placeholder="Email">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label" >QQ</label>
      <p :class="{ 'control': true }">
        <input v-validate="'required|qq'"
               name="qq" type="text" placeholder="QQ">
        <span v-show="errors.has('qq')" class="help is-danger">{{ errors.first('qq') }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vee-validate-demo',
};
</script>
