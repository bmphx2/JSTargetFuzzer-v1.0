const v1 = new Date();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = Date;
}
const v5 = new F2(v1);
const v6 = new F2(v5);
const v9 = new Int8Array(v6);
const o14 = {
    ...v9,
    [Int8Array](a11, a12, a13) {
    },
};
const v15 = new F2(v6);
function f16(a17, a18) {
    const o19 = {
        ...a17,
        [F2]: a18,
        "b": v1,
    };
    return o19;
}
const v20 = f16(v5, v6);
const v21 = f16(v1, v5);
f16(v5, v5);
let v24 = 60678;
let v25 = 4096;
const t27 = v25--;
t27.b = Date;
v20.h = F2;
f16(v15, v15);
v5.toString = Date;
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v6;
    this.b = a32;
    this.c = v1;
}
v24 = 14;
Object.defineProperty(v21, "b", { enumerable: true, get: Date });
const t40 = f16(v1, v5);
t40.valueOf = Date;
v20.b %= 14;
new F28(v5, 14, v5);
const v35 = new F28(v5, v24, v15);
new F28(v35, v24, v35);
const v37 = [];
function f38() {
    v37.h = f38;
    return f38;
}
const v39 = f38();
v37.push(f38(), v39);
