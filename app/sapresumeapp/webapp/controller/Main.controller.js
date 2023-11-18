sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, mobileLibrary, JSONModel) {
        "use strict";
        var URLHelper = mobileLibrary.URLHelper;
        return Controller.extend("sapresumeapp.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("sapresumeapp/model/experience.json"));
                //oModel.attachRequestCompleted(convertData);

                this.getView().setModel(oModel);
            },
            onLinkedInPress: function (oEvent) {
                var link = "https://www.linkedin.com/in/gowtham-raja-m-8602596a/";
                URLHelper.redirect(link, true);
            },
            onGithubPress: function (oEvent) {
                var link = "https://github.com/ergowthamraja/SAP-Fiori-UI5-Resume.git";
                URLHelper.redirect(link, true);
            },
            
            onResumeDownload: function (oEvent) {
                //debugger;
                const oA = document.createElement("a");
                oA.href = "./resume/Resume.docx";
                oA.style.display = "none";
                document.body.appendChild(oA);
                oA.click();
                document.body.removeChild(oA);
            }
        });
    });
