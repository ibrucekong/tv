/**
 * 格式化时间
 * @param fmt yyyy-MM-DD hh:mm:ss
 * @return {String} 格式化的时间字符串
 */
Date.prototype.format = function(fmt) {
  let ret;
  fmt = fmt ? fmt : "yyyy-MM-DD hh:mm:ss"; // 设置默认输出
  const opt = {
    "Y+": this.getFullYear().toString(),                          // 年
    "y+": this.getFullYear().toString(),                          // 年
    "q+": Math.floor((this.getMonth() + 3) / 3).toString(),   // 季度
    "M+": (this.getMonth() + 1).toString(),                      // 月
    "D+": this.getDate().toString(),                             // 日
    "H+": this.getHours().toString(),                            // 时
    "h+": this.getHours().toString(),                            // 时
    "m+": this.getMinutes().toString(),                          // 分
    "s+": this.getSeconds().toString(),                          // 秒
    "S+": this.getMilliseconds().toString()                      // 毫秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
  }
  return fmt;
}
