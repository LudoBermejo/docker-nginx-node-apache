#   By Ludo

FROM centos:centos6
MAINTAINER The CentOS Project <cloud-ops@centos.org>

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y --verbose install nodejs npm;  yum clean all

ADD . /src

RUN cd /src; npm install

EXPOSE 9000

CMD ["node", "/src/index.js"]