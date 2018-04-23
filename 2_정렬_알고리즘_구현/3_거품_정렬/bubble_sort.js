import { info, success, fail } from "../0_common_util/logger.js";
import { draw_list, draw_span_with_color } from "../0_common_util/draw_list.js";

let list = [1, 3, 5, 9, 4, 2, 8, 6];
try {
  bubble_sort(list);
} catch (e) {
  fail("거품 정렬에 실패했습니다: " + e.message);
}

/*
  거품 정렬 알고리즘.
  O(n^2)의 실행 시간을 갖는다.
*/
function bubble_sort(list) {
  info("거품 정렬로 " + list + " 배열을 정렬합니다.");

  if (list.length === 0) throw new RangeError("list 배열의 크기가 0입니다.");
  if (!(list instanceof Array) || list === undefined || list === null)
    throw new TypeError("list 매개변수는 반드시 배열이어야 합니다.");

  let temp;
  let minIdx;
  for (let i = 0; i < list.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIdx]) minIdx = j;
    }
    draw_list(list, i, minIdx);
    temp = list[i];
    list[i] = list[minIdx];
    list[minIdx] = temp;
  }
  success("거품 정렬에 성공했습니다: " + list);
}
