//防抖函数
 export function debounce(func,delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer);
     timer =setTimeout(() =>{
       func.apply(this,args)
     },delay)
  } 
}

//日期格式化，重要！
export function formatDate(date, fmt) {
  //匹配年份，test是用来查询，y+是看传入的fmt里有几个y，有几个y匹配几个
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  // RegExp.$1指的就是if判断里查询返回的结果，比如“yyyy”，substr是截取
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

function padLeftZero (str) {
  //该算法是用来补0的，比如str为4，则返回04。
  return ('00' + str).substr(str.length);
};
