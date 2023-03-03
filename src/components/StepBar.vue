<script setup>
</script>

<template>
  <div class="stepper">
    <div class="stepper__wrapper">
      <div class="stepper__item">
        <div class="stepper__item-number">
          1
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
        <div class="stepper__item-number">
          2
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
  display:flex;
  justify-content: center;
}

.stepper {
  margin: 4rem auto;
  width: 100%;
  @include flex-justify-center();

  .stepper__wrapper {
    display: flex;

    .stepper__item {
      display: flex;
      flex-direction: column;
      align-items: center;
       .stepper__item-number {
        height: 3rem;
        width: 3rem;
        border: 1px solid var(--secondary);
        border-radius: 50%;
        @include flex-justify-center();
        align-items:center;
        background-color: var(--primary);
        color:white;
        font-size:1.5rem;
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
