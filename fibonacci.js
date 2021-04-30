function fibo (num,memo) {
      memo = memo || {};
      if (num == 0){
          return 0
      }
      if (memo[num]) return memo[num];
      if (num <= 1) return 1;

      return memo[num] = fibo(num - 1, memo) + fibo(num - 2, memo);
}

module.exports = fibo
