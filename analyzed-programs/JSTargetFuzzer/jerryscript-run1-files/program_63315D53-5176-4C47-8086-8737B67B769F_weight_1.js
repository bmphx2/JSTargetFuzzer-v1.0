new Date();
new WeakSet();
new Uint32Array(1024);
new Float32Array(0);
function f15(a16) {
    return arguments;
}
const v18 = f15(5, Float32Array);
function f19(a20, a21) {
    const o22 = {
        ...v18,
    };
    return o22;
}
f19();
f19();
new Uint32Array(3);
new RangeError();
class C30 {
    static set h(a32) {
    }
}
const v34 = new Uint8Array(C30, Uint8Array, Uint8Array);
const v37 = new Uint16Array(7);
delete v34[v37];
