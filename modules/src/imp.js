import PI from "./lib2";    // default export
import { EPSILON, API_URL } from "./lib2";

let radius = 10
let circumefernce = 2 * PI * radius
const equal = Math.abs(circumefernce) < EPSILON