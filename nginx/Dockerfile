# By Ludo

FROM centos:centos6
MAINTAINER The CentOS Project <cloud-ops@centos.org>

ADD nginx.repo /etc/yum.repos.d/
RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nginx; yum clean all
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
RUN echo "nginx on CentOS 6 inside Docker" > /usr/share/nginx/html/index.html

# Remove the default Nginx configuration file
RUN rm -rf /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/

RUN cat /etc/nginx/nginx.conf

EXPOSE 8080

CMD [ "/usr/sbin/nginx" ]