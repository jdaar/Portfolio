install:
	npm install -g yarn@latest && \
		yarn install

format:
	yarn run format

lint:
	yarn run lint

test:
	yarn run test

build:
	yarn run build

all: install format lint test
