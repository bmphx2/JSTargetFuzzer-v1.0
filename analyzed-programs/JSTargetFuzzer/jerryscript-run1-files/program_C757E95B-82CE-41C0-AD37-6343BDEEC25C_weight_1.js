new Int16Array(Int16Array);
const v5 = new Uint16Array(1000);
new BigInt64Array(4);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
}
const v13 = new F9(4, v5);
new F9(1000, F9);
new F9(v5, BigInt64Array);
const v16 = [9007199254740992,2986,-2132228841,-2];
function f17(a18, a19, a20) {
    return arguments;
}
const v22 = f17(f17, v16, f17, f17);
let v23 = "-9223372036854775808";
let v24 = -4294967297;
let v25 = -4294967295;
[v23,,v24,v25] = v22;
async function f26(a27, a28) {
    new Proxy();
    return v13;
}
f26(v23, v22);
