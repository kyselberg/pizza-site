<template>
  <div>
    <h2><span>Ошибка...</span> Такой страницы не существует.</h2>
    <router-link to="/" class="button button--black">
      <span>Вернуться домой</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    span {
      color: #7b7b7b;
    }
  }

  a {
    margin-top: 100px;
  }
}
</style>
