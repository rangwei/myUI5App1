sap.ui.define([
	"sap/ui/test/Opa5"
], function(Opa5) {
	"use strict";

	return Opa5.extend("com.myorg.myUI5App1.test.integration.arrangements.Startup", {

		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "com.myorg.myUI5App1",
					async: true,
					manifest: true
				}
			});
		}

	});
});
