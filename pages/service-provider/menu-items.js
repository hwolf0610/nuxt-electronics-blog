const items = [
    {
        name: 'Dashboard',
        iconComponent: 'DashBoardIcon',
        link: '/user/dashboard'
    },
    {
        name: 'Users',
        icon: 'user',
        link: '/user/home',
        childs: [
          {
            name: 'Home',
            link: '/user/home'
          },
          {
            name: 'Contacts',
            link: '/user/contact'
          },
          {
            name: 'Marketing',
            link: '/user/marketing'
          }
        ]
    },
    {
        name: 'Service Providers',
        icon: 'users',
        link: '/serviceprovider'
    },
    {
        name: 'Investor',
        icon: 'users',
        link: '/investors'
    },
    {
        name: 'Products',
        icon: 'gift',
        link: '/products'
    },
    {
        name: 'Orders',
        icon: 'shopping-cart',
        link: '/orders'
    },
    {
        name: 'Messages',
        icon: 'envelope',
        link: 'messages'
    },
    {
      name: 'Blog',
      icon: 'blog',
      link: '/user/blog/updated'
    }
]
export default items;