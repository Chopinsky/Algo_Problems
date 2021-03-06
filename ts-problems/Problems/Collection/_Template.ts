import { Problem, TestCase, TestCaseFactory } from "../Executor";

export class $Template implements Problem {
  private data: any[];
  private result: any;

  genTestCase(caseNum: number): TestCase {
    let data: any[];
    let result: any;

    switch (caseNum) {
      case 1:
        data = [];
        result = "";
        break;

      default:
        data = [];
        result = "";
    }

    return TestCaseFactory(data, result);
  }

  make(caseNum: number, debug: boolean): void {
    let test = this.genTestCase(caseNum);
    this.data = test.data;
    this.result = test.target;
  }

  solve(): void {}
}
