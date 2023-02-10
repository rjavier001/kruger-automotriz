FROM openjdk:17-jdk-alpine as builder

WORKDIR /app/msv-products

COPY ./pom.xml /app
COPY ./msv-products/.mvn ./.mvn
COPY ./msv-products/mvnw .
COPY ./msv-products/pom.xml .

RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

COPY ./msv-products/src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY --from=builder /app/msv-products/target/msv-products-0.0.1-SNAPSHOT.jar .

EXPOSE 8002

ENTRYPOINT ["java", "-jar", "msv-products-0.0.1-SNAPSHOT.jar"]

