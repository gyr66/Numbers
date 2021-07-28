// 配置路由信息
import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter);

const ChallengeView = () => import("@/components/ChallengeView");
const ScoreList = () => import("@/components/ScoreList");

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
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;