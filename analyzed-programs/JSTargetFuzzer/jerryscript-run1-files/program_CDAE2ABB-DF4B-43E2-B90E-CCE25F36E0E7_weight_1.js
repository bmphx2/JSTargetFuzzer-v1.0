function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4;
    this.a = 4;
}
let v3 = new F0();
new F0();
const v5 = new F0();
const v6 = /(a)?/yisum;
const v7 = /(?<!)/gyvm;
const v8 = /a(?!b)/gyisu;
function f9(a10, a11, a12, a13) {
    const o24 = {
        "a": a12,
        "b": v3,
        "f": v6,
        "c": v7,
        ...a12,
        get d() {
            let v16 = -5;
            Math.log1p(a12);
            Math.acos(a12);
            a12 % a12;
            Math.fround(a12);
            Math.clz32(v16);
            v16++;
            Math.cbrt(v8);
            return v3;
        },
    };
    return o24;
}
f9(v7, v8, v7, v8);
f9(v7, v6, v8, v8);
f9(v6, v7, v6, v8);
let v31 = 0;
while (v31 < 3) {
    let v34;
    try { v34 = v5.toString(); } catch (e) {}
    let v35 = -268435456n;
    let v36 = -65536n;
    let v37 = 9007199254740990n;
    [v37,v35,v3,v36] = v34;
    v31++;
}
