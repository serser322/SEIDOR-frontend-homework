<script setup>

import StepBar from '../components/StepBar.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <StepBar />
  <BaseCard>
    <template #card_content>
      <form>
        <div class="form__input">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="John"
            required
          >
        </div>
        <div class="form__input">
          <label for="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            placeholder="Doe"
            requierd
          >
        </div>
      </form>
    </template>
    <template #card_footer>
      <div class="base_card__footer">
        <BaseButton />
      </div>
    </template>
  </BaseCard>
</template>

<style lang="scss" scoped>
form {
  margin: 1rem 0;

  .form__input {
    display: flex;
    flex-direction: column;
    margin: 1rem;

    label{
      &:after {
        content:'*';
        color:red;
      }
    }

    input {
      height: 30px;
      border: 2px solid dodgerblue;
      border-radius: 5px;
      margin-top: 5px;
    }
  }
}

.base_card__footer {
  display: flex;
  justify-content: end;
}
</style>
