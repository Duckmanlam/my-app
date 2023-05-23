import Quiz from "../page/Quiz";
import Homepage from "../page/Homepage";
import Converted from "../page/Convert/";

const publicRoutes = [
  { path: '/', component: Homepage },
  { path: '/quiz', component: Quiz },
  { path: '/profile', Converted },
];

export { publicRoutes };