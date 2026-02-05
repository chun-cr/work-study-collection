// 创建 Buffer（动态长度）
const buf = Buffer.from('hello', 'utf8');
console.log(buf[0]); // 104（'h' 的 UTF-8 编码）
console.log(buf.toString('base64')); // aGVsbG8=（编码转换）
buf.write('world', 1); // 直接修改指定位置
console.log(buf.toString()); // hworld（修改后的内容）


//分割已有数组缓冲区
// let buffer = new ArrayBuffer(10);
// let buffer1 = buffer.slice(1, 3);
// console.log(buffer1.byteLength); // 2

// 默认 DataView 可操作数组缓冲区全部内容
let buffer = new ArrayBuffer(10);
let dataView = new DataView(buffer); 
dataView.setInt8(0,1);
console.log(dataView.getInt8(0)); // 1

let view = new Int32Array(10);
console.log(view.byteLength); // 40
console.log(view.length);
 