export default [
  {
    path: "/mapcontainer",
    name: "MapContainer",
    component: () => import("@/pages/MapContainer/MapContainer"),
  },
  {
    path: "/queryweather",
    name: "QueryWeather",
    component: () => import("@/pages/QueryWeather/QueryWeather"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/Home/Home"),
  },
  {
    path:"/news",
    name:"News",
    component:()=>import('@/pages/News/News')
  },
  {
    path:"/querycity",
    name:"QueryCity",
    component:()=>import('@/pages/QueryCity/QueryCity')
  },
  {
    path:"/video",
    name:"Video",
    component:()=>import('@/pages/Video/Video')
  },
  {
    path: "*",
    redirect: "/home",
  },
];
