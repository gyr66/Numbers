// 配置路由信息
import VueRouter from "vue-router"
import Vue from "vue"
import ScoreList from "@/components/ScoreList";
import ChallengeView from "@/components/ChallengeView";

Vue.use(VueRouter);

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