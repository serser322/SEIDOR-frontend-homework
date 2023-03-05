<script setup>
import StepBar from '../../components/StepBar.vue'
import BaseCard from '../../components/BaseCard.vue'
import BaseButton from '../../components/BaseButton.vue'
import { useRouter } from 'vue-router'

// Data
const cardData = {
  title: 'My Data',
  description: 'Please enter your personal data and press continue'
}

const continueBtnData = {
  text: 'Continue',
  isBack: false,
  isNext: true
}

// Router
const router = useRouter()
const toStepTwo = function () {
  router.push({ name: 'StepTwo' })
}

</script>

<template>
  <div>
    <StepBar />
    <BaseCard
      :card-data="cardData"
    >
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
          <BaseButton
            :btn-data="continueBtnData"
            @click="toStepTwo"
          />
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style lang="scss" scoped>
form {
  .form__input {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    label {
      &:after {
        content: "*";
        color: red;
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
