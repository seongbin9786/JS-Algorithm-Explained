import { info, success, fail } from '../0_common_util/logger.js';

const quick_sort = (arr, left, right) => {
  if (left >= right)
    return;

  let i = left;
  let j = right;
  let pivot = arr[left];
  let temp;

  // 아래 행위를 반복해서 실행합니다.
  while (i < j) {
    // 신기한 점은 left를 pivot으로 잡고, i부터 시작하는 경우에는 구현이 안 됨.
    while (arr[j] > pivot) j--; // 2. [우측 영역] 끝나는 시점에서 arr[j]는 pivot보다 작습니다.
    while (i < j && arr[i] <= pivot) i++; // 1. [좌측 영역] 끝나는 시점에서 arr[i]는 pivot보다 큽니다.

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // 3. 각 영역에 있으면 안 되는 값들을 서로 교환합니다.
  }
  arr[left] = arr[i];
  arr[i] = pivot;
  // 4. i번째 값과 pivot 값을 교환합니다.

  let str = "";
  for (let i = left; i <= right; i++)
    str += arr[i] + " ";
  info('퀵 정렬이 적용된 배열: ' + str + ' | pivot: ' + arr[i]);

  // 각 영역의 값들에 대해 quick_sort를 호출합니다.
  quick_sort(arr, left, i - 1);
  quick_sort(arr, i + 1, right);
}

const arr = [ 4, 3, 6, 2, 5, 7, 1 ];

quick_sort(arr, 0, arr.length - 1);

success('정렬 성공: ' + arr);

// 4 3 6 2 5 7 1 | DEFAULT
// 4 3 1 2 5 7 6 | 6 <-> 1
// 4 3 1 2 5 7 6 | j가 2를 가리킴 + i가 5를 가리키러 가다가 멈추게 됨.
// 2 3 1 4 [5] 7 6 | 5 <-> 2

// 2 3 1 4 | DEFAULT
// 2 1 3 4 | 3 <-> 1
// 2 1 3 4 | j = 1, i = 1이므로 멈춤.
// 1 [2] 3 4 | 완료

// 7 6 | DEFAULT
// 7 6 | j부터 시작, i = 0, j = 1에서 0으로 전환, 멈춤.
// 6 [7] | 완료

// 6 | 완료
