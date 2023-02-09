ARG MSV_NAME=discovery-server

FROM openjdk:17-jdk-alpine as builder

ARG MSV_NAME

WORKDIR /app/$MSV_NAME

COPY ./pom.xml /app
COPY ./$MSV_NAME/.mvn ./.mvn
COPY ./$MSV_NAME/mvnw .
COPY ./$MSV_NAME/pom.xml .

RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

COPY ./$MSV_NAME/src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-alpine

ARG MSV_NAME

WORKDIR /app

ARG TARGET_FOLDER=/app/$MSV_NAME/target
COPY --from=builder $TARGET_FOLDER/discovery-server-0.0.1-SNAPSHOT.jar .
ARG PORT_APP=8761
ENV PORT $PORT_APP
EXPOSE $PORT

ENTRYPOINT ["java", "-jar", "discovery-server-0.0.1-SNAPSHOT.jar"]

