# -*-nginx-*-
# This setup serves the WebVR experiments

server {
    listen 80;
    server_name webvr.cxpublic.com;

    access_log /var/log/nginx/webvr.cxpublic.com-access.log;
    error_log /var/log/nginx/webvr.cxpublic.com-error.log;

    location / {
        proxy_send_timeout 300;
        proxy_read_timeout 300;
        send_timeout 300;
        keepalive_timeout 300s;
        proxy_pass http://localhost:10511/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
