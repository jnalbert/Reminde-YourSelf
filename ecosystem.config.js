module.exports = {
    apps : [{
      name: 'client',
      cwd: './client',
      script: 'npm',
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    },{
      name: 'server',
      cwd: './server',
      script: 'npm',
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }]
  };