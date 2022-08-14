# Project 88

SpringBoot Web, JWT, Angular, Clarity, Authentication, Authorization, Postgres, Charts

[https://gitorko.github.io/spring-boot-angular/](https://gitorko.github.io/spring-boot-angular/)

### Version

Check version

```bash
$java --version
openjdk 17.0.3 2022-04-19 LTS

node --version
v16.16.0

yarn --version
1.22.18
```

### Postgres DB

```
docker run -p 5432:5432 --name pg-container -e POSTGRES_PASSWORD=password -d postgres:9.6.10
docker ps
docker exec -it pg-container psql -U postgres -W postgres
CREATE USER test WITH PASSWORD 'test@123';
CREATE DATABASE "test-db" WITH OWNER "test" ENCODING UTF8 TEMPLATE template0;
grant all PRIVILEGES ON DATABASE "test-db" to test;

docker stop pg-container
docker start pg-container
```

### Dev

To run the backend in dev mode.

```bash
./gradlew clean build
./gradlew bootRun
```

To Run UI in dev mode

```bash
cd ui
yarn install
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000)

### Prod

To run as a single jar, both UI and backend are bundled to single uber jar.

```bash
./gradlew cleanBuild
cd build/libs
java -jar project88-1.0.0.jar
```

Open [http://localhost:8080/](http://localhost:8080/)

```
user: admin
pwd: admin@123

user: user
pwd: user@123
```

### Docker

```bash
./gradlew cleanBuild
docker build -f docker/Dockerfile --force-rm -t project88:1.0.0 .
docker images |grep project88
docker tag project88:1.0.0 gitorko/project88:1.0.0
docker push gitorko/project88:1.0.0
docker-compose -f docker/docker-compose.yml up 
```
