// 获取组件的slot列表
const getSlotListMixin = {
  data() {
    return {
      slotList: []
    }
  },
  mounted() {
    this.slotList = Object.keys(this.$slots)
  }
}

export { getSlotListMixin }
