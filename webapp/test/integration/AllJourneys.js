sap.ui.define([
	"sap/ui/test/Opa5",
	"com/myorg/myUI5App1/test/integration/arrangements/Startup",
	"com/myorg/myUI5App1/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
