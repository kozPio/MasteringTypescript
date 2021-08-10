"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
var HtmlReport_1 = require("./ReportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, target) {
        this.analyzer = analyzer;
        this.target = target;
    }
    Summary.winsAnalyzsisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReaport = function (matches) {
        var report = this.analyzer.run(matches);
        this.target.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
