<template>
  <div style="margin: 20px;">
    <ami-input v-model="input" placeholder="请输入内容"></ami-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Ami UI!'
      };
    }
  };
</script>
