# PlanningTool

## PlanningToolBackend mit Docker

Dieses Projekt enthält ein Dockerfile für das Backend.

### Docker Image bauen

Um das Docker-Image für das Backend zu erstellen, führe den folgenden Befehl im Projekt-Stammverzeichnis aus:

```bash
docker build -t planning-tool-backend ./PlanningToolBackend
```

### Container starten

Nachdem das Image gebaut wurde, kannst du den Container mit dem folgenden Befehl starten:

```bash
docker run -p 8080:8080 planning-tool-backend
```

Das Backend ist dann unter `http://localhost:8080` erreichbar.

## PlanningToolFrontend mit Docker

Dieses Projekt enthält ein Dockerfile für das Frontend.

### Docker Image bauen

Um das Docker-Image für das Frontend zu erstellen, führe den folgenden Befehl im Projekt-Stammverzeichnis aus:

```bash
docker build -t planning-tool-frontend ./PlanningToolFrontend
```

### Container starten

Nachdem das Image gebaut wurde, kannst du den Container mit dem folgenden Befehl starten:

```bash
docker run -p 4200:80 planning-tool-frontend
```

Das Frontend ist dann unter `http://localhost:4200` erreichbar.

## Gemeinsames Starten mit Docker Compose

Am einfachsten lassen sich beide Komponenten gemeinsam mit Docker Compose starten.

### Voraussetzungen

- Docker und Docker Compose müssen installiert sein.

### Starten der Anwendung

Führe den folgenden Befehl im Projekt-Stammverzeichnis aus:

```bash
docker-compose up --build
```

Dieser Befehl baut beide Images (Frontend und Backend) und startet die Container.

- Das **Frontend** ist unter [http://localhost:4200](http://localhost:4200) erreichbar.
- Das **Backend** ist unter [http://localhost:8080](http://localhost:8080) erreichbar.

### Stoppen der Anwendung

Um die Container zu stoppen, verwende:

```bash
docker-compose down
```
