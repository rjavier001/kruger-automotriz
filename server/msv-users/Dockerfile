FROM openjdk:17-jdk-alpine as builder

WORKDIR /app/msv-users

COPY ./pom.xml /app
COPY ./msv-users/.mvn ./.mvn
COPY ./msv-users/mvnw .
COPY ./msv-users/pom.xml .

RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

COPY ./msv-users/src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY --from=builder /app/msv-users/target/msv-users-0.0.1-SNAPSHOT.jar .

EXPOSE 8001

ENTRYPOINT ["java", "-jar", "msv-users-0.0.1-SNAPSHOT.jar"]

