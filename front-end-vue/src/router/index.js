import { createRouter, createWebHistory } from 'vue-router'

//import pages
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

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
      const claims = parseJwt(localStorage.getItem("jwt"))
      const isExpired = checkExpiration(claims["exp"])

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

//Get claims from JWT
function parseJwt (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

//Check expiration date of JWT
function checkExpiration (exp) {
  const expDate = new Date(exp * 1000)
  const currentDate = new Date()

  return expDate.getTime() <= currentDate.getTime();
}


export default router
