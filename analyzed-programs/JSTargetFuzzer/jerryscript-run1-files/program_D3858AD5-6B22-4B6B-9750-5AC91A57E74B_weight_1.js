function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 268435439;
    this.d = 268435439;
    this.h = 268435439;
    const v3 = (268435439).species;
    const o6 = {
        set g(a5) {
        },
        ...v3,
    };
}
const v7 = new F0();
const v8 = new F0();
F0 < 8;
for (let v11 = 0; v11 < 5; v11++) {
}
const v13 = new F0(6);
new ArrayBuffer(v13);
const v16 = new F0();
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = "symbol";
    this.d = a22;
}
const v24 = new F20(v7, "symbol");
new F20(v7, "getPrototypeOf");
new F20(v8, "symbol");
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a29;
    this.f = a30;
}
new F27("getPrototypeOf", v8);
new F27(v16, F0);
new Float32Array(2983);
new ArrayBuffer(10);
new F27(v24, v8);
const v41 = Promise.resolve(Promise);
function f42() {
    undefined();
    return undefined;
}
v41.finally(f42);
