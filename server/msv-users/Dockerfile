FROM openjdk:17-jdk-alpine as builder
ARG MSV_NAME=msv-users
WORKDIR /app/$MSV_NAME

COPY ./pom.xml /app
COPY ./$MSV_NAME/.mvn ./.mvn
COPY ./$MSV_NAME/mvnw .
COPY ./$MSV_NAME/pom.xml .

RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

COPY ./$MSV_NAME/src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app
ARG MSV_NAME=msv-users
ARG TARGET_FOLDER=/app/$MSV_NAME/target
COPY --from=builder $TARGET_FOLDER/msv-users-0.0.1-SNAPSHOT.jar .
ARG PORT_APP=8001
ENV PORT $PORT_APP
EXPOSE $PORT

ENTRYPOINT ["java", "-jar", "msv-users-0.0.1-SNAPSHOT.jar"]

