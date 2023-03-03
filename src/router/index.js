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
            component: () => import('../views/StepOne.vue')
          },
          {
            path: 'step-2-payment',
            name: 'StepTwo',
            component: () => import('../views/StepTwo.vue')
          },
          {
            path: 'step-3-order-confirmation',
            name: 'StepThree',
            component: () => import('../views/StepThree.vue')
          }
        ]
      }
    ]
  }
)
