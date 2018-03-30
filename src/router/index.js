import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import product from '@/components/page/product'
import versionInfor from '@/components/page/versionInfor'
import productInfo from '@/components/page/productInfo'
import teachShare from '@/components/page/teachShare'
import teachShareMore from '@/components/page/teachShareMore'
import teachShareDetail from '@/components/page/teachShareDetail'
import showtwo from '@/components/page/showtwo'
import advice from '@/components/page/advice'
import personDetail from '@/components/page/personDetail'
import thanks from '@/components/page/thanks'
import productList from '@/components/page/productList'
import team from '@/components/page/team'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/versionInfor',
      name: 'versionInfor',
      component: versionInfor
    },
    {
      path: '/productInfo',
      name: 'productInfo',
      component: productInfo
    },
    {
      path: '/teachShare',
      name: 'teachShare',
      component: teachShare
    },
    {
      path: '/teachShareMore',
      name: 'teachShareMore',
      component: teachShareMore
    },
    {
      path: '/teachShareDetail',
      name: 'teachShareDetail',
      component: teachShareDetail
    },
    {
      path: '/showtwo',
      name: 'showtwo',
      component: showtwo
    },
    {
        path: '/advice',
        name: 'advice',
        component: advice
      },
      {
        path: '/thanks',
        name: 'thanks',
        component: thanks
      },
      {
        path: '/personDetail',
        name: 'personDetail',
        component: personDetail
      },
      {
        path: '/productList',
        name: 'productList',
        component: productList
      },
      {
        path: '/team',
        name: 'team',
        component: team
      },
  ]
})
