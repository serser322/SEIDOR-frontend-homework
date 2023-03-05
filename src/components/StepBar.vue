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
          {{ $t('common.my_data') }}
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
          {{ $t('common.payment') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin step-circle() {
  display: flex;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  color: white;
  align-items: center;

  @media (min-width: 576px) {
    height: 3rem;
    width: 3rem;
  }
}

.stepper {
  display: flex;
  justify-content: center;
  margin: 4rem auto;
  width: auto;

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
        font-size: 1.2rem;

        @media (min-width: 576px) {
          font-size: 1.5rem;
        }
      }

      .stepper__item-finished {
        @include step-circle();
        border: 1px solid darkgreen;
        background-color: var(--finish-color);

        img {
          width: 18px;

          @media (min-width: 576px) {
            width: 25px;
          }
        }
      }

      :nth-child(2) {
        margin-top: 1rem;
        font-size: 1rem;

        @media (min-width: 576px) {
          font-size: 1.5rem;
        }
      }

      .stepper__item-line {
        display: block;
        height: 1px;
        width: 5rem;
        border: 0;
        border-top: 1px dashed var(--primary);
        margin: auto 1rem;

        @media (min-width: 576px) {
          width: 10rem;
          margin: auto 2rem;
        }
      }
    }
  }
}
</style>
