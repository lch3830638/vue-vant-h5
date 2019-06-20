<template>
  <div>
    <div>我是页面1-1</div>
    <div>
      <span>132</span>
    </div>
    <router-link to="view2">跳转到页面1-2</router-link>
    <br>
    <Button :url="`${$root.BASE_URL}page2.html`">跳转到页面2</Button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  components: {
    Button
  },
  mounted() {
  }
}
</script>
