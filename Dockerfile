FROM tomcat:8.5
MAINTAINER devops satish.akkapu@eaiesb.com

RUN rm -rf /usr/local/tomcat/webapps/ROOT
RUN cp -r /ROOT /usr/local/tomcat/webapps/ROOT
