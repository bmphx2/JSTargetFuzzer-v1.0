new Int8Array(7);
new Float32Array(463);
new Int16Array(2808);
[-228.21790154658902,-Infinity];
[51.68666858904908];
[-5.0,1000000000.0,1000000000.0,-2.0,474.5088691877852,-1000000.0];
class C12 {
}
class C13 extends C12 {
}
new C13();
function f15(a16, a17, a18, a19) {
    const o21 = {
        get c() {
            return Int8Array;
        },
    };
    return o21;
}
const v22 = f15(C12, f15, C12, C12);
Object.defineProperty(v22, "c", { configurable: true, enumerable: true, value: v22 !== f15 });
