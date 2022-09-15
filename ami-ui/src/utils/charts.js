/**
 * @description：echarts使用方法
 * @author：张时友
 * @date：Created in 2022/3/23 14:01
 * @modified By：
 * @version: 1.0.0
 */

/**
 * echarts x轴处理
 * @param value
 * @returns {string|*}
 */
export function showTitle(value) {
  let ret = ''; // 拼接加\n返回的类目项
  let maxLength = 3; // 每项显示文字个数
  let valLength = value.length; // X轴类目项的文字个数
  let rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
  if (rowN > 1) {
    // 如果类目项的文字大于3,
    for (let i = 0; i < rowN; i++) {
      let temp = ''; // 每次截取的字符串
      let start = i * maxLength; // 开始截取的位置
      let end = start + maxLength; // 结束截取的位置
      // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
      temp = value.substring(start, end) + '\n';
      ret += temp; // 凭借最终的字符串
    }
    return ret;
  } else {
    return value;
  }
}
