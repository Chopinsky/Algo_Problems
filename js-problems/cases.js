module.exports = {
  distinctSub: (testSet, debug) => {
    console.log("Running >> Distinct Subsequences << \n");

    const ds = require("./DistinctSub/run");
    testSet = testSet
      ? testSet
      : {
          s: "rabbbit",
          t: "rabbit"
        };

    let ans = ds.run(testSet, debug);
    console.log(ans);
  },
  freqstack: (testSet, debug) => {
    console.log("Running >> Frequent Stack << \n");

    const freqStack = require("./FreqStack/FreqStackRun");
    freqStack.run(testSet, debug);
  },
  lru: (testSet, debug) => {
    console.log("Running >> Least Recent Used << \n");

    const lru = require("./LRU/LRURun");
    lru.run(testSet, debug);
  },
  binarytreerebuild: (testSet, debug) => {
    console.log("Running >> Rebuild Binary Tree << \n");

    const bt = require("./BinaryTreeRebuild/BinaryTreeRun");
    testSet = testSet
      ? testSet
      : {
          preorder: [1, 2, 4, 5, 3, 6, 7],
          postorder: [4, 5, 2, 6, 7, 3, 1]
        };

    bt.run(testSet, debug);
  },
  alltrees: (testSet, debug) => {
    console.log("Running >> All Possible Trees << \n");

    const at = require("./AllTrees/AllTreesRun");
    testSet = testSet ? testSet : 9;

    at.run2(testSet, debug);
  },
  subgraph: (testSet, debug) => {
    console.log("Running >> Reachable Nodes in a SubGraph << \n");

    const sub = require("./SubGraph/SubGraphRun");

    const setOne = {
      edges: [[0, 1, 10], [0, 2, 1], [1, 2, 2]],
      nodes: 3,
      steps: 6
    };

    const setTwo = {
      edges: [[1, 2, 5], [0, 3, 3], [1, 3, 2], [2, 3, 4], [0, 4, 1]],
      nodes: 5,
      steps: 7
    };

    testSet = testSet ? testSet : setTwo;

    let ans = sub.run(testSet, debug);
    console.log(ans);
  },
  twoSum: (testSet, debug) => {
    console.log("Running >> 2 Sum << \n");

    const sum = require("./2Sum/2Sum");
    testSet = testSet ? testSet : [-40, 50, -20, 1000, 5, 0, -11, 40];

    let ans = sum.calc(testSet, debug);
    console.log(ans);
  },
  kthSmallest: (testCase, debug) => {
    console.log("Running >> Kth Smallest << \n");

    const kth = require("./KthSmallest/KthSmallest");
    testCase = testCase
      ? testCase
      : {
          m: 3,
          n: 3,
          k: 3
        };

    let ans = kth.run(testCase, debug);
    console.log(ans);
  },
  stockSpan: (tests, debug) => {
    console.log("Running >> Stock Span << \n");

    const stock = require("./StockSpan/StockSpan");
    tests = tests ? tests : [100, 80, 60, 70, 60, 75, 85];

    let ans = stock.run(tests, debug);
    console.log(ans);
  },
  removeBoxes: (tests, debug) => {
    console.log("Running >> Remove Boxes << \n");

    const boxes = require("./RemoveBoxes/run");
    tests = tests ? tests : [1, 3, 2, 2, 2, 3, 4, 3, 1];

    let ans = boxes.run(tests, debug);
    console.log(ans);
  },
  stoneGame: (test, debug) => {
    console.log("Running >> Stone Games << \n");

    const sg = require("./StoneGame/run");
    const testSet = require("./StoneGame/testSet");

    test = test ? test : testSet && testSet.set ? testSet.set : [5, 3, 4, 5];

    console.log(`Test set: ${test}`);

    let ans = sg.run(test, debug);
    console.log(ans);
  },
  profitableSchemes: (test, debug) => {
    console.log("Running >> Profitable Schemes << \n");

    const ps = require("./ProfitableSchemes/run");
    test = test
      ? test
      : {
          gSize: 10,
          pSize: 5,
          group: [2, 3, 5],
          profit: [6, 7, 8]
        };

    let ans = ps.run(test.pSize, test.gSize, test.profit, test.group, debug);
    console.log(ans);
  },
  givenDigitSet: (test, debug) => {
    console.log("Running >> Numbers under Limit w/ Given Digit Set << \n");

    const gs = require("./GivenDigitSet/run");
    test = test
      ? test
      : {
          digits: [1, 4, 9],
          limit: 2111111111
        };

    let ans = gs.run(test.digits, test.limit, debug);
    console.log(ans);
  },
  sortList: (test, debug) => {
    console.log("Running >> Sort List << \n");

    const sl = require("./SortList/run");
    test = test ? test : [4, 2, 1, 3];

    return sl.run(test, debug);
  },
  longestFib: (test, debug) => {
    console.log("Running >> Longest Fib Sub Sequence << \n");

    const lf = require("./longestFib/run");
    test = test ? test : [1, 3, 7, 11, 12, 14, 18]; //[1, 2, 3, 4, 5, 6, 7, 8];

    return lf.run(test, debug);
  },
  miniDelSum: (test, debug) => {
    console.log("Running >> Minimum Delete Sum for 2 Strings << \n");

    const mds = require("./MiniDelSum/run");
    test = test
      ? test
      : {
          s1: "delete",
          s2: "leet"
        };

    return mds.run(test, debug);
  }
};
