/*
 * @Author: xiaoming
 * @Date: 2018-04-19 17:44:51
 * @Last Modified by: xiaoming
 * @Last Modified time: 2018-04-19 17:46:23
 */
/*
  时间格式化组件调用示例
  import { formatDate } from 'formatDate.js';
  <!-- 过滤器 -->
  <div>{{time | formatDate}}</div>
  <!-- 输出结果 -->
  <!-- <div>2016-07-23 21:52</div> -->
	export default {
    data() {
      return {
        time:1469281964000
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm");
      }
    }
  }
*/
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
  };
  for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
