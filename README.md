# Bagpipe Scores
Bagpipe-scores is a textual score editor for bagpipe with PDF and MP3 generation.
It consists of a containerized website wich uses [lilypond-api](https://github.com/GGracieux/lilypond-api) and [midi2mp3-api](https://github.com/GGracieux/midi2mp3-api).

Bagpipe-scores website is accessible at [www.partitions-cornemuse.com](http://www.partitions-cornemuse.com).

## Techn & Tools

#### Frontend
![alt text](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-front.png)

#### Backend
![alt text](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-back.png)

#### Deployment
![alt text](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-infra.png)

#### Tools
![alt text](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-tools.png)

#### Third party
![alt text](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-thirdparty.png)


## Prerequisite
- Install [nodejs](https://nodejs.org/en/) 
- Install [docker](https://www.docker.com/)

## Start

#### Installation
```bash
npm install
```

#### Build
```bash
npm run docker-build
```

#### Run 
```bash
docker-compose up
```

## Development tools
	
#### Run with nodejs
```bash
npm start
```
- Compiles, serves application at http://localhost:4200 and opens it in browser.
- Recompiles and refresh page on modification.
- External APIs are not available.

#### Compiles
```bash
npm run build
```
- Compiles into dist.

#### Compiles & Build
```bash
npm run docker-build
```
- Compiles into dist.
- Creates bagpipe-scores docker image

#### Compiles, Build & Run
```bash
npm run docker-build-up
```
- Compiles into dist.
- Creates bagpipe-scores docker image
- Launches containers from images bagpipe-scores, lilypond-api and midi2mp3-api
- App is accessible at webroot : http://[docker-machine]/
- lilypond API endpoints are exposed at : http://[docker-machine]/api/v1/lilypond/*
- midi2mp3 API endpoints are exposed at : http://[docker-machine]/api/v1/midi2mp3/*


#### Stop all running containers
```bash
npm run docker-stop
```

## Also read
- [How to contribute](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
