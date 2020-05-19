<template>
  <component
    :is="component"
    @signup="component = 'appSuccess'"
  ></component>
</template>

<script>

import Form from './form'
import Success from './success'

export default {
  data () {
    return {
      component: 'appForm'
    }
  },
  components: {
    appForm: Form,
    appSuccess: Success
  }
}
</script>

<style scoped lang="scss">
.main {
  padding: 4rem;

  @include respond(phone) {
    padding: 2rem;
  }

}
</style>
