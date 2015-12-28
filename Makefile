
publish:
	npm publish

publish-sync: publish
	cnpm sync antd-init
	tnpm sync antd-init
