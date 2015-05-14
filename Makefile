WEBPACK=./node_modules/.bin/webpack

# sugar

all:
	make bundle-watch &
	versal preview

# utils

dist-clean:
	rm -rf ./dist

# building

build-dev: dist-clean bundle-dev

build-prod: dist-clean bundle-prod

# bundling

bundle-dev:
	$(WEBPACK) --colors

bundle-prod:
	$(WEBPACK) --colors -p

bundle-watch:
	$(WEBPACK) --colors --watch
