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
  info("앞에 있는 원소가 뒤의 원소보다 클 경우 교환합니다.");

  if (list.length === 0) throw new RangeError("list 배열의 크기가 0입니다.");
  if (!(list instanceof Array) || list === undefined || list === null)
    throw new TypeError("list 매개변수는 반드시 배열이어야 합니다.");

  let temp;
  // 요소 갯수만큼 순회해야한다.
  for (let i = 0; i < list.length; i++) {
    // j는 항상 1번부터 시작.
    // 스왑되었든 안되었든, 다음 j번째에서 비교
    // 이렇게 1회 순회하면 된 것임.
    for (let j = 1; j < list.length - i; j++) {
      // j-1번째보다 작으면 스왑.
      if (list[j - 1] > list[j]) {
        draw_list(list, j, j - 1);
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
      }
    }
  }

  success("거품 정렬에 성공했습니다: " + list);
}
