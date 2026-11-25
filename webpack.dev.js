import common from "./webpack.common.js";
import { merge } from "webpack-merge";

const dev = {
    mode: "development",
    devServer: {
        static: "./dist",
        port: 8080,
        open: true
    },
    devtool: "source-map",
}

export default merge(common, dev);
