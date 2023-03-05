<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import StepBar from '../../components/StepBar.vue'
import BaseCard from '../../components/BaseCard.vue'
import BaseButton from '../../components/BaseButton.vue'

// Data
const { t } = useI18n()
const cardData = computed(() => {
  return {
    title: t('common.my_data'),
    description: t('step_one.description')
  }
})

const continueBtnData = computed(() => {
  return {
    text: t('btn.continue'),
    isBack: false,
    isNext: true
  }
})

// Router
const router = useRouter()
const toStepTwo = function () {
  validate() && router.push({ name: 'StepTwo' })
}

// Validate input
const name = ref('')
const lastName = ref('')

const nameValidation = ref(true)
const lastNameValidation = ref(true)

const validate = function () {
  nameValidation.value = !!name.value.trim()
  lastNameValidation.value = !!lastName.value.trim()
  return nameValidation.value && lastNameValidation.value
}
</script>

<template>
  <div>
    <StepBar />
    <BaseCard :card-data="cardData">
      <template #card_content>
        <form>
          <div
            class="form__input"
            :class="{ 'required': !nameValidation }"
          >
            <label for="name">{{ $t('step_one.name') }}</label>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="John"
              required
            >
          </div>
          <div
            class="form__input"
            :class="{ 'required': !lastNameValidation }"
          >
            <label for="last_name">{{ $t('step_one.last_name') }}</label>
            <input
              id="last_name"
              v-model="lastName"
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
  }
}

input {
  height: 30px;
  border: 2px solid dodgerblue;
  border-radius: 5px;
  margin-top: 5px;
}

.required {
  color: red;

  input {
    border: 1px solid red;
  }

  &:after {
    content: 'Required';
    font-size: 0.5rem;
    margin: 0.2rem 0 0 0.1rem;
  }
}

.base_card__footer {
  display: flex;
  justify-content: end;
}
</style>
