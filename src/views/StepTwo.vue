<script setup>
import StepBar from '../components/StepBar.vue'
import BaseCard from '../components/BaseCard.vue'
// import BaseButton from '../components/BaseButton.vue'
// import { useRouter } from 'vue-router'

const cardData = {
  title: 'Payment',
  description: 'After making the payment you will receive a confirmation email with details of your purchase'
}
</script>

<template>
  <StepBar />
  <BaseCard
    :card-data="cardData"
  >
    <template #card_content>
      <div class="info-box">
        <div class="info-box__icon">
          icon
        </div>
        <div class="info-box__title">
          Credit Card
        </div>
        <div class="info-box__description">
          You will be redirected to a secure payment platform. This is a
          secure process. The validation of your payment can take up to
          24 hours.
        </div>
        <info-box__images>
          <img
            src="../assets/mastercard.svg"
            alt=""
          >
          <img
            src="../assets/credit card.png"
            alt=""
          >
        </info-box__images>
      </div>
    </template>
    <template #card_footer>
      1111
    </template>
  </BaseCard>
</template>

<style lang="scss" scoped>

img {
      width:100px;
      border-radius: 4px;
    }

</style>
