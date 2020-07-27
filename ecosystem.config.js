module.exports = {
    apps : [{
      name: 'server',
      cwd: './server',
      script: 'npm',
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    },
    {
      name: "cron",
      cwd: './server',
      script: "./cron-job.js",
      cron_restart: "* * * * *",
      watch: true,
      autorestart: false
    }
  ]
  };