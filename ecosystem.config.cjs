module.exports = {
  apps: [
    {
      name: "Wathis",
      port: "3930",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
