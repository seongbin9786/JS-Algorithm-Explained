import { info, success, fail } from "../0_common_util/logger.js";

export function draw_list(list, i, j) {
  let resultStr = "";
  list.map((elem, index) => {
    resultStr += draw_span_with_color(
      elem,
      index === i || index === j ? "red" : "blue"
    );
  });
  info(resultStr);
}

export function draw_span_with_color(content, color) {
  return '<span style="color:' + color + ';">[' + content + "]</span>";
}
