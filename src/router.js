import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/Home.vue';
// import About from './views/About.vue';
// import Users from './views/Users.vue';
// import UserPosts from './views/UsersPosts.vue';
// import UserProfile from './views/UsersProfile.vue';
// import HeaderHome from './views/HeaderHome.vue';
// import HeaderUser from './views/HeaderUser.vue';
// import HeaderAbout from './views/HeaderAbout.vue';
//このように書くことで必要になった時だけimportする
const Home = () => import(/*webpackChunkName: "Home" */ './views/Home.vue');
const About = () => import(/*webpackChunkName: "About" */ './views/About.vue');
const Users = () => import(/*webpackChunkName: "Users" */ './views/Users.vue');
const UserPosts = () => import(/*webpackChunkName: "UserPosts" */ './views/UsersPosts.vue');
const UserProfile = () => import(/*webpackChunkName: "UserProfile" */ './views/UsersProfile.vue');
const HeaderHome = () => import(/*webpackChunkName: "HeaderHome" */ './views/HeaderHome.vue');
const HeaderUser = () => import(/*webpackChunkName: "HeaderUser" */ './views/HeaderUser.vue');
const HeaderAbout = () => import(/*webpackChunkName: "HeaderAbout" */ './views/HeaderAbout.vue');


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {path: '/',
    components: {
      default: Home,
      header: HeaderHome
    },
    beforeEnter(to, from, next) {
      next();
    }
  },

    {path: '/about',
    components: {
      default: About,
      header: HeaderAbout
    }},
    {path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUser
      },
      props: {
        default: true,
        header: false
      },
      children: [
        { path: 'posts',
        component: UserPosts },
        { path: 'profile',
        component: UserProfile,
        name: "users-id-profile" }
      ]
    },{
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      this.app.$root.$once('triggerScroll', () => {
        let position = {x:0, y:0};
        if(savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position= {
            selector: to.hash
          };
        }
        resolve(position);
      });
    });
  }
});