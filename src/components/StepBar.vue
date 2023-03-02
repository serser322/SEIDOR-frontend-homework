<script setup>
</script>

<template>
  <div class="stepper">
    <div class="stepper__wrapper">
      <div class="stepper__item">
        <div class="stepper__item-number">
          1
        </div>
        My Data
      </div>
      <div class="stepper__item">
        <div class="stepper__item-line" />
      </div>
      <div class="stepper__item">
        <div class="stepper__item-number">
          2
        </div>
        Payment
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.stepper {
  margin: 5rem auto;
  width: 100%;
  display:flex;
  justify-content: center;

  .stepper__wrapper {
    display: flex;

    .stepper__item {
       .stepper__item-number {
        height: 2rem;
        width: 2rem;
        border: 1px solid blue;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items:center
      }

      .stepper__item-line {
        display: block;
        height: 1px;
        width: 10rem;
        border: 0;
        border-top: 1px dashed dodgerblue;
        margin: 0 2rem;
      }
    }
  }
}
</style>
