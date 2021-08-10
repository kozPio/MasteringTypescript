
import { MatchData} from './MatchData';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { HtmlReport } from './ReportTargets/HtmlReport';

export interface Analyzer{
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  
  constructor(public analyzer: Analyzer, public target: OutputTarget){}

  static winsAnalyzsisWithHtmlReport(team: string): Summary{
    return new Summary(
       new WinsAnalyzer(team),
        new HtmlReport()
        );
  }

  buildAndPrintReaport(matches: MatchData[]): void {

    const report =this.analyzer.run(matches);
    this.target.print(report);

  }


}