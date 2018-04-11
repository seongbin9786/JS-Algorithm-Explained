import { info, success, fail } from '../0_common_util/logger.js';

/*
  이진 탐색 알고리즘.
  O(log n)의 실행 시간을 갖는다.

*/
const bin_search = (list, item) => {
  info('이진 탐색 트리를 이용하여, [' + list + ']에서 ' + item + '을 찾습니다..');
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      success('찾았음. list[' + mid + '] = ' + guess);
      return;
    }
    if (guess < item) low = mid + 1; // 찾는 대상이 왼쪽에 있으면, low가 mid의 우측 범위.
    if (guess > item) high = mid - 1; // 찾는 대상이 오른쪽에 있으면, high가 mid의 좌측 범위.
  }
  fail('값 ' + item + '을 리스트에서 찾지 못함.');
}

let list = [ 1, 3, 5, 9, 4, 2, 8, 6 ];
bin_search(list, 3); // success
bin_search(list, 7); // fail
