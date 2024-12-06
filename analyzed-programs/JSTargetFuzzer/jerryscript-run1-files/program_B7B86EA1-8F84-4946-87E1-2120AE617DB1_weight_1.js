new Date();
new WeakSet();
new Uint32Array(1024);
new Float32Array(0);
function f15(a16) {
    return arguments;
}
const v18 = f15(5, Uint32Array);
function f19(a20, a21) {
    const o22 = {
        ...v18,
    };
    return o22;
}
f19();
f19();
new Uint32Array(3);
class C28 {
    static set h(a30) {
    }
}
const v32 = new Uint8Array(C28, Uint8Array, Uint8Array);
const v35 = new Uint16Array(7);
delete v32[v35];
