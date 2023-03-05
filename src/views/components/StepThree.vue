<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import StepBar from '../../components/StepBar.vue'
import BaseCard from '../../components/BaseCard.vue'

const store = useStore()
const pageData = JSON.parse(JSON.stringify(store.state.pageData))

// If reload, redirect to page one
const router = useRouter()
onMounted(() => {
  if (Object.keys(pageData).length === 0) {
    router.push({ name: 'StepOne' })
  }
})

// Render response data
const i18n = useI18n()
const locale = computed(() => {
  return i18n.locale.value
})

const cardData = computed(() => {
  return {
    title: locale.value === 'en' ? pageData?.title?.en : pageData?.title?.zh_CN,
    message: locale.value === 'en' ? pageData?.message?.en : pageData?.message?.zh_CN
  }
})

</script>

<template>
  <div>
    <StepBar
      :is-step-one-finished="true"
      :is-step-two-finished="true"
    />
    <BaseCard
      :card-data="cardData"
    >
      <template #card_content>
        <div class="info">
          <div class="info__image">
            <img
              src="../../assets/certificate.png"
              alt=""
            >
          </div>
          <div class="info__text">
            <div>{{ cardData.message }}</div>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style lang="scss" scoped>

.info {
  display: flex;
  flex-direction: column;
  align-items: center;

  .info__text {
    >div {
      text-align: center;
    }
  }

  img {
  width: 50px;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
}
</style>
