NPM=npm
DOCKER=docker
IMAGE_NAME=rss-collector-admin
DOCKERFILE=deploy/docker/Dockerfile

build:
	$(DOCKER) build . -f $(DOCKERFILE) -t $(IMAGE_NAME)

install:
	$(NPM) install
run:
	$(NPM) run start
