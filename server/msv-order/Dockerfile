FROM openjdk:17-jdk-alpine as builder

WORKDIR /app/msv-order

COPY ./pom.xml /app
COPY ./msv-order/.mvn ./.mvn
COPY ./msv-order/mvnw .
COPY ./msv-order/pom.xml .

RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

COPY ./msv-order/src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY --from=builder /app/msv-order/target/msv-order-0.0.1-SNAPSHOT.jar .

EXPOSE 8003

ENTRYPOINT ["java", "-jar", "msv-order-0.0.1-SNAPSHOT.jar"]

