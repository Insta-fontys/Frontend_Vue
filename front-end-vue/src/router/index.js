import { createRouter, createWebHistory } from 'vue-router'
import JwtManager from '../JwtManager.js'

//import pages
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import CreatePostPage from '../pages/CreatePostPage'
import BuyTokensPage from '../pages/BuyTokensPage'
import FollowersPage from '../pages/FollowersPage'
import ProfilePage from '../pages/ProfilePage'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/createPost',
    name: 'createPost',
    component: CreatePostPage,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/buytokens',
    name: 'buytokens',
    component: BuyTokensPage,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/followers',
    name: 'followers',
    component: FollowersPage,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta:{
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Check before entering page
router.beforeEach((to, from, next) => {
  //Redirect when trying to access home page
  if(to.path === '/'){
    if (localStorage.getItem('jwt') == null) {
      next({
        name: 'login',
        params: { nextUrl: to.fullPath }
      })
    } 
    else {
      next({ name: 'home' })
    } 
  }   

  //AuthenticationState
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        name: 'login',
        params: { nextUrl: to.fullPath }
      })
    } 
    else {
      const claims = JwtManager.parseJwt(localStorage.getItem("jwt"))
      const isExpired = JwtManager.checkExpiration(claims["exp"])
      console.log(JwtManager.getRole())

      if(isExpired){
        localStorage.removeItem("jwt")

        next({
          name: 'login',
          params: { nextUrl: to.fullPath }
        })
      }
      else{
        next()
      }
    }
  } 
  else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } 
    else {
      next({ name: 'home' })
    }
  } 
  else {
    next()
  }
})

export default router
