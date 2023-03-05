<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import StepBar from '../../components/StepBar.vue'
import BaseCard from '../../components/BaseCard.vue'
import BaseButton from '../../components/BaseButton.vue'

// Data
const { t } = useI18n()
const cardData = computed(() => {
  return {
    title: t('common.payment'),
    description: t('step_two.description')
  }
})

const backBtnData = computed(() => {
  return {
    text: t('btn.back'),
    isBack: true,
    isNext: false
  }
})

const payBtnData = computed(() => {
  return {
    text: t('btn.pay'),
    isBack: false,
    isNext: true
  }
})

// Router
const router = useRouter()
const toStepOne = function () {
  router.push({ name: 'StepOne' })
}
const toStepThree = function () {
  router.push({ name: 'StepThree' })
}
</script>

<template>
  <div>
    <StepBar
      :is-step-one-finished="true"
    />
    <BaseCard :card-data="cardData">
      <template #card_content>
        <div class="info-box">
          <div class="info-box__icon">
            <img
              src="../../assets/credit card.png"
              alt=""
            >
          </div>
          <h3>
            {{ $t('step_two.credit_card') }}
          </h3>
          <div class="info-box__description">
            {{ $t('step_two.info') }}
          </div>
          <div class="info-box__images">
            <img
              src="../../assets/mastercard.svg"
              alt=""
            >
            <img
              src="../../assets/visa.svg"
              alt=""
            >
          </div>
        </div>
      </template>
      <template #card_footer>
        <div class="base_card__footer">
          <BaseButton
            :btn-data="backBtnData"
            @click="toStepOne"
          />
          <BaseButton
            :btn-data="payBtnData"
            @click="toStepThree"
          />
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style lang="scss" scoped>
.info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(195, 195, 195);
  padding: 1rem 1rem 0 1rem;

  >h3{
    margin: 0.2rem 0;
  }
  >div {
    margin:0.2rem 1rem;
  }

  .info-box__description{
    text-align: center;
  }
}

.base_card__footer {
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
}
}

img {
  width: 50px;
  border-radius: 4px;
}

</style>
