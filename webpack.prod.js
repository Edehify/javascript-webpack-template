import common from "./webpack.common.js";
import { merge } from "webpack-merge";

const prod = {
    mode: "production"
}

export default merge(common, prod);