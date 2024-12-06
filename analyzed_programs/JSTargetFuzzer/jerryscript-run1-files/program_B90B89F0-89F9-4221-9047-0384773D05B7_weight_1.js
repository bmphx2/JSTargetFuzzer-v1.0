new Date();
new WeakSet();
new Uint32Array(1024);
new Float32Array(0);
function f15(a16) {
    return arguments;
}
const v18 = f15(5, Float32Array);
function f19(a20, a21) {
    const o27 = {
        get c() {
            a20 = arguments;
            return a20;
        },
        ...v18,
        o(a25, a26) {
            a20 = a26;
            return a20;
        },
        ...a20,
    };
    return o27;
}
f19();
f19();
new Uint32Array(3);
new RangeError();
class C35 {
    static set h(a37) {
    }
}
const v39 = new Uint8Array(C35, Uint8Array, Uint8Array);
const v42 = new Uint16Array(7);
delete v39[v42];
