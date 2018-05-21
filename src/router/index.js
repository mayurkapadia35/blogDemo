import aboutus from '../components/about_us.vue'
import home from '../components/Front_end/home'
import contactus from '../components/contact_us'
import adminDashboard from '../components/Admin_side/admin_dashboard'
import blogs from '../components/Front_end/blogs'
import AuthGuard from '../router/auth-guard'
import yourblogs from '../components/Front_end/yourblogs'

export const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
  },
  {
    path: '/about_us',
    component: aboutus,
    name: 'aboutus'
  },
  {
    path: '/contact_us',
    component: contactus,
    name: 'contactus'
  },
  {
    path: '/adminDashboard',
    component: adminDashboard,
    name: 'adminDashboard'
  },
  {
    path: '/blogs',
    component: blogs,
    name: 'blogs',
    beforeEnter: AuthGuard
  },
  {
    path: '/yourblogs',
    component: yourblogs,
    name: 'yourblogs',
    beforeEnter: AuthGuard
  }
]
