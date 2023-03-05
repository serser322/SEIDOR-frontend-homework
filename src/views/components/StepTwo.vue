<script setup>
import StepBar from '../../components/StepBar.vue'
import BaseCard from '../../components/BaseCard.vue'
import BaseButton from '../../components/BaseButton.vue'
import { useRouter } from 'vue-router'

// Data
const cardData = {
  title: 'Payment',
  description: 'After making the payment you will receive a confirmation email with details of your purchase'
}

const backBtnData = {
  text: 'Back',
  isBack: true,
  isNext: false
}

const payBtnData = {
  text: 'Pay',
  isBack: false,
  isNext: true
}

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
              src="../assets/credit card.png"
              alt=""
            >
          </div>
          <h3>
            Credit Card
          </h3>
          <div class="info-box__description">
            You will be redirected to a secure payment platform. This is a
            secure process. The validation of your payment can take up to
            24 hours.
          </div>
          <div class="info-box__images">
            <img
              src="../assets/mastercard.svg"
              alt=""
            >
            <img
              src="../assets/visa.svg"
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
  justify-content: space-between;
}

img {
  width: 50px;
  border-radius: 4px;
}
</style>
