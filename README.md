1. npm install pm2 -g
2. brew install ngix
3. cd /usr/local/etc/nginx
4. add server config below to nginx.conf
5. cd /var mkdir www
6. cs /var/www sudo chmod -R 777 /var/www
7. npm install in client and server
8. npm run build in client
9. pm2 start
10. brew services start nigx

Commands:

pm2 stop all - kills pm2
sudo nginx -s stop 
brew services start nigx

Nginx Conf:

server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  localhost;
    root /var/www/build;
    index index.html;   


    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {             
            try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:4000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}