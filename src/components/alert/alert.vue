<template>
<div class="alert" :class="alert.color">
  <p>{{ alert.message }}</p>
</div>
</template>

<script>
export default {
  props: ['alert'],
  data () {
    return {
      timeout: undefined
    }
  },
  created () {
    clearTimeout(this.help)
    const self = this
    this.timeout = setTimeout(function () {
      self.$emit('alert', {
        message: false,
        color: false
      })
    }, 4000)
  }
}
</script>

<style scoped lang="scss">
.alert {
  border-radius: 0.25rem;
  background-color: var(--color-surface-primary);
  box-shadow: 0 0.25rem 0.75rem rgba(black, 0.05);
  text-align: center;
  width: 100%;
  color: var(--color-text-primary);
  padding: 2rem;
  font-size: $default-font-size;

    @include respond(phone) {
      padding: 1.5rem;
    }

    &--red {
        @include alertColor($color-palette-red);
    }

    &--green {
        @include alertColor($color-palette-green);
    }

    &--blue {
        @include alertColor($color-palette-blue);
    }

    &--yellow {
        @include alertColor($color-palette-yellow);
    }

}
</style>
