.PHONY: build run stop

NAMESPACE	?= magnobiet
REPOSITORY	?= marvel-app
LABEL		?= $(shell sed -n 's/.*"version": "\(.*\)",/\1/p' package.json)
BASENAME	?= ${REPOSITORY}:${LABEL}
build:
	docker build -t ${BASENAME} .

run:
	docker run -it -p 8080:8080 --rm --name ${REPOSITORY} ${BASENAME}

stop:
	docker stop ${REPOSITORY};

