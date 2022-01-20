apt-get -y install certbot
apt-get -y install python3-certbot-nginx
nginx -t && nginx -s reload

nginx -g daemon off;