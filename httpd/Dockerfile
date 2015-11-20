# By Ludo

FROM centos:centos6
MAINTAINER The CentOS Project <cloud-ops@centos.org>

RUN yum -y update; yum clean all
RUN yum -y install httpd; yum clean all
RUN echo "Apache HTTPD" >> /var/www/html/index.html
RUN sed -i 's/Listen 80/listen 8090/g' /etc/httpd/conf/httpd.conf

EXPOSE 8090

# Simple startup script to avoid some issues observed with container restart
ADD run-httpd.sh /run-httpd.sh
RUN chmod -v +x /run-httpd.sh

CMD ["/run-httpd.sh"]