import aboutus from '../components/about_us.vue'
import home from '../components/Front_end/home'
import contactus from '../components/contact_us'
import adminDashboard from '../components/Admin_side/admin_dashboard'
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
  }
]
