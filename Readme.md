# Project88

Polling System

## Postgres DB

```
docker run -p 5432:5432 --name pg-container -e POSTGRES_PASSWORD=password -d postgres:9.6.10
docker ps
docker run -it --rm --link pg-container:postgres postgres psql -h postgres -U postgres
CREATE USER test WITH PASSWORD 'test@123';
CREATE DATABASE "test-db" WITH OWNER "test" ENCODING UTF8 TEMPLATE template0;
grant all PRIVILEGES ON DATABASE "test-db" to test;
```

### Dev

To Run UI in DEV mode

```bash
cd project88/ui
yarn install
yarn build
yarn start
```

To Run backend in DEV mode

```bash
cd project88
./gradlew bootRun
```

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

```
user: admin
pwd: admin@123
```

### Prod
To run as a single jar, both UI and backend are bundled to single uber jar.

```bash
./gradlew cleanBuild
cd project88/build/libs
java -jar project88-1.0.0.jar
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

```
user: admin
pwd: admin@123
```

## Advanced Topics

@Input - Parent to child communication.

@Output - Child to parent communication. EventEmitter.

Pipes - Custom Pipe

HTTP error handling

Route parameters - ActivatedRoute.

Nested routes - children, router-outlet.

Named router outlet.
