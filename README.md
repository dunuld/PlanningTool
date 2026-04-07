# PlanningTool

Dieses Projekt besteht aus einem Spring Boot Backend und einem Angular Frontend, die zusammen als Docker-Anwendung ausgeführt werden können.

## Projektstruktur

- `/PlanningToolBackend`: Spring Boot (Java 17) Backend mit Maven.
- `/PlanningToolFrontend`: Angular Frontend.
- `docker-compose.yml`: Konfiguration zum Starten beider Komponenten.

## Starten mit Docker Compose

Am einfachsten lässt sich die Anwendung mit Docker Compose starten.

### Voraussetzungen

- Docker und Docker Compose müssen installiert sein.

### Befehle

1. **Anwendung starten:**
   ```bash
   docker-compose up --build
   ```
   - Das **Frontend** ist unter [http://localhost:4200](http://localhost:4200) erreichbar.
   - Das **Backend** ist unter [http://localhost:8080](http://localhost:8080) erreichbar.

2. **Anwendung stoppen:**
   ```bash
   docker-compose down
   ```

## Manuelle Entwicklung

### Backend
- Navigiere zu `PlanningToolBackend`
- Ausführen mit: `./mvnw spring-boot:run`

### Frontend
- Navigiere zu `PlanningToolFrontend`
- Abhängigkeiten installieren: `npm install`
- Ausführen mit: `npm start`
