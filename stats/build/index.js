"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var outcome = Summary_1.Summary.winsAnalyzsisWithHtmlReport('Liverpool');
matchReader.load();
outcome.buildAndPrintReaport(matchReader.matches);
//const summary = new Summary(new WinsAnalyzer('Liverpool'), new HtmlReport())
