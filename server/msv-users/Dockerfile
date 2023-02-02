FROM openjdk:17.0.2

WORKDIR /app/msv-users

COPY ./pom.xml /app
COPY ./msv-users .

RUN ./mvnw clean package -DskipTests

EXPOSE 8001

ENTRYPOINT ["java", "-jar", "./target/msv-users-0.0.1-SNAPSHOT.jar"]

