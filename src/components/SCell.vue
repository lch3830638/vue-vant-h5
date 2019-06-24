<template>
  <Cell
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="slotItem in slotList">
      <template :slot="slotItem">
        <slot
          v-if="slotItem!=='default'"
          :name="slotItem"
        />
        <slot v-else />
      </template>
    </template>
  </Cell>
</template>

<script>
import { Cell } from 'vant'
import { getSlotListMixin } from '@/mixins'

export default {
  components: {
    Cell
  },
  mixins: [getSlotListMixin]
}
</script>

