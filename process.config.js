module.exports = {
  apps: [
    {
      name: "ELITE",
      cwd: "./",
      script: "./dist/server.js",
      watch: false,
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },

      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
