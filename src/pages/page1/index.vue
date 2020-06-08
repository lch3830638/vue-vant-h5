<template>
  <div>
    <div>page1</div>
    <Button :url="`${$root.BASE_URL}page2.html`">
      跳转到页面2
    </Button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    Button,
  },
}
</script>
