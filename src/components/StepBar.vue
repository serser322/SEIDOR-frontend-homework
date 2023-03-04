<script setup>
const props = defineProps({
  isStepOneFinished: {
    type: Boolean,
    default: false
  },
  isStepTwoFinished: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="stepper">
    <div class="stepper__wrapper">
      <div class="stepper__item">
        <div
          v-if="!isStepOneFinished"
          class="stepper__item-number"
        >
          1
        </div>
        <div
          v-if="isStepOneFinished"
          class="stepper__item-finished"
        >
          <img
            src="../assets/check-symbol.png"
            alt=""
          >
        </div>
        <div>
          My Data
        </div>
      </div>
      <div class="stepper__item">
        <div class="stepper__item-line" />
        <div>&nbsp;</div>
      </div>
      <div class="stepper__item">
        <div
          v-if="!isStepTwoFinished"
          class="stepper__item-number"
        >
          2
        </div>
        <div
          v-if="isStepTwoFinished"
          class="stepper__item-finished"
        >
          <img
            src="../assets/check-symbol.png"
            alt=""
          >
        </div>
        <div>
          Payment
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin flex-justify-center() {
  display: flex;
  justify-content: center;
}

@mixin step-circle() {
  display: flex;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  color: white;
  align-items: center;
}

.stepper {
  display: flex;
  justify-content: center;
  margin: 4rem auto;
  width: 100%;
  .stepper__wrapper {
    display: flex;

    .stepper__item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .stepper__item-number {
        @include step-circle();
        border: 1px solid var(--secondary);
        background-color: var(--primary);
        font-size: 1.5rem;
      }

      .stepper__item-finished {
        @include step-circle();
        border: 1px solid darkgreen;
        background-color: var(--finish-color);

        img {
          width: 25px
        }
      }

      :nth-child(2) {
        margin-top: 1rem;
        font-size: 1.5rem;
      }

      .stepper__item-line {
        display: block;
        height: 1px;
        width: 10rem;
        border: 0;
        border-top: 1px dashed var(--primary);
        margin: auto 2rem;
      }
    }
  }
}
</style>
