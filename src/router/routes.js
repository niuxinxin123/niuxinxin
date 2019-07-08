export default [
    {
        path: '/',
        redirect: '/shopcar'
    },
    {
        path: '/shopcar',
        component: () => import('@/containers/shopcar')
    }
]