import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: '/checkout'
      },
      {
        path: '/checkout',
        redirect: '/checkout/step-1-my-data',
        children: [
          {
            path: 'step-1-my-data',
            name: 'StepOne',
            meta: {
              title: 'Step 1 | My Data'
            },
            component: () => import('../views/StepOne.vue')
          },
          {
            path: 'step-2-payment',
            name: 'StepTwo',
            meta: {
              title: 'Step 2 | Payment'
            },
            component: () => import('../views/StepTwo.vue')
          },
          {
            path: 'step-3-order-confirmation',
            name: 'StepThree',
            meta: {
              title: 'Step 3 | Order Created'
            },
            component: () => import('../views/StepThree.vue')
          }
        ]
      }
    ]
  }
)

router.afterEach((to, from) => {
  document.title = to.meta.title
})
