import { createRouter, createWebHistory } from "vue-router";

import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    menuItem: string;
    isPublic?: boolean;
    allowedRoles?: string[];
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{}],
});

export default router;
