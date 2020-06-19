<template>
  <div>
    <form action="" class="login">
      <label for="user" name="user">name:</label>
      <input id="user" type="text" />
      <label for="password">password:</label>
      <input id="password" type="password" />
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
  .login {
    display: flex;

  }
</style>