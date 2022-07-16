

module.exports = {
    apps : [
        {
            name: "asmr",
            // script: "./src/index.ts",
            script: "./dist/main.js",
            instances: 0,
            // exec_mode: "fork",
            exec_mode: "cluster",
            watch:false, 
            increment_var : 'PORT',
            env: {
                "SSL":true,
                "PORT": 8080,
                "TZ": 'Asia/Seoul'
            }
        }
    ]
}