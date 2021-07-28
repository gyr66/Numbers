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
    component: ScoreList
  },
  {
    path: "/challengeView",
    component: ChallengeView
  }
];

const router = new VueRouter({
  routes
});

export default router;