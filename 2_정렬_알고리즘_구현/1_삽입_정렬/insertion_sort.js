import { info, success, fail } from '../0_common_util/logger.js';
import { draw_list, draw_span_with_color } from '../0_common_util/draw_list.js';

let list = [ 1, 3, 5, 9, 4, 2, 8, 6 ];
try {
  insertion_sort(list);
} catch (e) {
  fail('삽입 정렬에 실패했습니다: ' + e.message);
}

/*
  삽입 정렬 알고리즘.
  O(n^2)의 실행 시간을 갖는다.
*/
function insertion_sort(list) {
  info('삽입 정렬로 ' + list +' 배열을 정렬합니다.');
  info('앞에 있는 원소가 뒤의 원소보다 클 경우 교환합니다.');

  if (list.length === 0)
    throw new RangeError('list 배열의 크기가 0입니다.');
  if (!(list instanceof Array) || list === undefined || list === null)
    throw new TypeError('list 매개변수는 반드시 배열이어야 합니다.');

  let temp;
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      if (list[i] < list[j]) {
        draw_array(list, i, j);
        temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  success('삽입 정렬에 성공했습니다: ' + list);
}
