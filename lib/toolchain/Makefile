PROJECT=$(readlink ../..)

.PHONY: release
release: ## Release using surge
	yarn --cwd $(PROJECT) build
	eval $(cat .secrets.deploy | xargs) && surge out --domain $(CNAME)