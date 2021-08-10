
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';






const matchReader = MatchReader.fromCsv('football.csv');
const outcome = Summary.winsAnalyzsisWithHtmlReport('Liverpool');

matchReader.load();
outcome.buildAndPrintReaport(matchReader.matches)


//const summary = new Summary(new WinsAnalyzer('Liverpool'), new HtmlReport())





