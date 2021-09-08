// 配置路由信息
import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter);

const ChallengeView = () => import("@/views/challenge/ChallengeView");
const ScoreList = () => import("@/views/scorelist/ScoreListView");
const test = () => import("@/views/test")

const routes = [
  {
    path: "/",
    redirect: "/challengeView"
  },
  {
    path: "/scoreList",
    component: ScoreList,
    meta: {
      title: "历史记录"
    }
  },
  {
    path: "/challengeView",
    component: ChallengeView,
    meta: {
      title: "挑战"
    }
  },
  {
    path: "/login",
    component: test,
    meta: {
      title: "登录"
    }
  }
];

const router = new VueRouter({
  routes,
  // mode: "history"
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;
