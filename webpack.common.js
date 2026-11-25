import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const common = {
    entry: "./src/index.js",
      output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
      },
    
      module : {
        
        rules : [
            {
                test : /\.css$/i, 
                use : ["style-loader", "css-loader"]  
            },
            {
                test: /\.(png|jpg|jpeg|webp)$/i,
                type: "asset/resource"
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            }
        ]  
      },
    
      plugins: [
            new HtmlWebpackPlugin({
                template: "./src/template.html"
            })
        ],
}

export default common;