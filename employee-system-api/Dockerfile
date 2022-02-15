FROM openjdk:11
RUN mkdir -p /myapp
WORKDIR /myapp/
COPY /target/employee-system-api-0.0.1-SNAPSHOT.jar employee-system.jar
ENTRYPOINT ["java", "-jar", "employee-system.jar"]