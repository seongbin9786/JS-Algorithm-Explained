import { info, success, fail } from '../0_common_util/logger.js';

const factorial = num => {
  info('now number: ' + num);
  if (num == 1) { // 일반 단계
    return 1;
  }
  return num * factorial(num - 1); // 재귀 단계
}

let result;
result = factorial(5);
success(result);
