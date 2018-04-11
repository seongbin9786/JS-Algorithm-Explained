const log = input => document.write('<div>' + input + '</div>');

/*
  O(n)인 알고리즘.
  배열을 순회하면서 각 요소를 비교한 후,
  최솟값을 찾아서 제일 앞으로 정렬합니다.
*/
const sel_sort = list => {
  let temp;

  for (let i = 0; i < list.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[minIdx] > list[j])
        minIdx = j;
    }
    // 최솟값을 i번째 요소와 위치를 바꿉니다.
    temp = list[minIdx];
    list[minIdx] = list[i];
    list[i] = temp;
  }
}

let list = [ 1, 3, 5, 9, 4, 2, 8, 6 ];
log('선택 정렬 이전: ' + list);
sel_sort(list);
log('선택 정렬 결과: ' + list);
