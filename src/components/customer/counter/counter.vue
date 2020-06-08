<template>
  <div class="counter">
      <div class="decrease" @click="decrease(1)">
          <i class="fas fa-minus"></i>
      </div>
      <div class="count u-noselect">
          {{ counter }}
      </div>
    <div class="increase" @click="increase(1)">
        <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increase (step) {
      this.counter += step
      this.$emit('increase', this.counter)
      this.$emit('change', this.counter)
    },
    decrease (step) {
      if (this.counter !== 0) {
        this.counter -= step
        this.$emit('decrease', this.counter)
        this.$emit('change', this.counter)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.counter {
    box-shadow: 0 1px 2px rgba(10,10,10,0.1);
    display: flex;

    // .decrease,
    // .count,
    // .increase {
    //     display: inline-block;
    // }

    .decrease,
    .increase {
        background-color: $color-primary;
        color: $color-white;
        cursor: pointer;
        padding: 0.5rem 1rem;
        width: 4rem;
        text-align: center;
    }

    .decrease {
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
    }

    .count {
        background-color: $color-white;
        color: $color-black;
        padding: 0.5rem 1.5rem;
        // border-top: 1px solid $color-primary;
        // border-bottom: 1px solid $color-primary;
    }

    .increase {
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
}

</style>
