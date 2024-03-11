# Hướng dẫn build và deploy

## Lệnh build

B1:

- trên terminal chạy lệnh sau

````angular2html
npm run build
````

B2:

- Sau khi build xong sẽ sinh ra một folder build trong source chứa mã nguồn.
- Thực hiện copy file SystemConfig.js vào folder build(SystemConfig.js là file chứa thông tin cấu hình gọi vào server
  API và các cấu hình khác mục đích của việc tách file như vậy là để có thể thay đổi cáu hình động mà không cần phải
  build lại)

## Triển khai trên nginx

### Yêu cầu máy chủ đã cài đặt nginx

- Kiểm tra xem server đã cài đặt nginx hay chưa

````angular2html
nginx -V
````

![alt text](https://user-images.githubusercontent.com/23284051/221494229-1c48de63-0100-471d-b71f-874cb7f2d389.png)

- Đây là thông báo nếu đã cài đặt Nginx rồi
- Nếu chưa cài đặt NGINX thì tiến hành cài đặt như sau:

````angular2html
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
````

### Cấu hình file build FE chạy trên nginx

- Tạo file cấu hình daily.com.conf

````angular2html
sudo vim /etc/nginx/sites-available/daily.com.conf
````

- Copy nội dung sau vào tệp daily.com.conf
- Chỉnh sửa lại đường dẫn ở root cho trỏ đúng tới file build đã upload lên server.
````
server {
       listen 8383;
       root /pathTo/build;
	     server_name 127.0.0.1;
	     
	     add_header X-Frame-Options DENY always;
	     add_header Content-Security-Policy "default-src 'self' https://google.com https://youtube.com https://facebook.com https://fonts.google.com https://fonts.googleapis.com https://ajax.googleapis.com https://www.google-analytics.com https://cdnjs.cloudflare.com https://code.jquery.com https://connect.facebook.net https://s.imgur.com https://imgur.com https://i.imgur.com https://500px.com https://drscdn.500px.org https://www.reddit.com https://www.flickr.com https://c1.staticflickr.com https://maxcdn.bootstrapcdn.com http://code.ionicframework.com https://cdn.fontawesome.com/; script-src 'self' 'unsafe-inline'; style-src 'self'; img-src 'self' data:; connect-src 'self'; font-src 'self'; object-src 'none'; media-src 'self'; form-action 'self'; frame-ancestors 'self';" always;
       
       location / {
          add_header X-Frame-Options DENY always;
        	add_header Content-Security-Policy "default-src 'self' https://google.com https://youtube.com https://facebook.com https://fonts.google.com https://fonts.googleapis.com https://ajax.googleapis.com https://www.google-analytics.com https://cdnjs.cloudflare.com https://code.jquery.com https://connect.facebook.net https://s.imgur.com https://imgur.com https://i.imgur.com https://500px.com https://drscdn.500px.org https://www.reddit.com https://www.flickr.com https://c1.staticflickr.com https://maxcdn.bootstrapcdn.com http://code.ionicframework.com https://cdn.fontawesome.com/; script-src 'self' 'unsafe-inline'; style-src 'self'; img-src 'self' data:; connect-src 'self'; font-src 'self'; object-src 'none'; media-src 'self'; form-action 'self'; frame-ancestors 'self';" always;
          try_files $uri /index.html;
       }
       
       location ~* \.(png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        	add_header X-Frame-Options DENY always;
	        expires 365d;
	        add_header Cache-Control "public, no-transform";
	     }

      location ~* \.(js|pdf|html|swf)$ {
          expires 100d;
          add_header X-Frame-Options DENY always;
          add_header Cache-Control "public, no-transform";
      }

}

````
- link file daily.com.conf đến etc/nginx/site-enable
````
sudo ln -s /etc/nginx/sites-available/daily.com.conf /etc/nginx/sites-enabled/daily.com.conf
````
- Khởi động lại nginx
````angular2html
sudo systemctl restart nginx.service
````
- Bây giờ có thể truy cập vào dịch vụ qua : http://127.0.0.1:8383
