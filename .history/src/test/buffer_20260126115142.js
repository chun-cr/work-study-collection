// 创建 Buffer（动态长度）
const buf = Buffer.from('hello', 'utf8');
console.log(buf[0]); // 104（'h' 的 UTF-8 编码）
console.log(buf.toString('base64')); // aGVsbG8=（编码转换）
buf.write('world', 1); // 直接修改指定位置