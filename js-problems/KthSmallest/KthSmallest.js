const run = function(testSet, debug) {
  return search(testSet.m, testSet.n, testSet.k, debug);
};

const search = function(m, n, k, debug) {
  let l = 1;
  let r = m * n;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (lex(m, n, k, mid, debug) >= k) {
      r = mid;
    } else {
      l = mid + 1;
    }

    if (debug) {
      console.log(`Status -- left: ${l}; right: ${r}\n`);
    }
  }

  return l;
};

const lex = function(m, n, k, x, debug) {
  let counts = 0;
  let len = m > x ? x : m;
  let base = Math.floor(x / i);

  for (let i = 1; i <= len; i++) {
    counts += Math.min(n, base);

    // early return, if already more than k elements, no need to continue counting
    if (counts >= k) {
      break;
    }
  }

  if (debug) {
    console.log(`Number: ${x}; Counts: ${counts}`);
  }

  return counts;
};

module.exports = {
  run
};
