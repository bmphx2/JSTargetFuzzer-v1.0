const v0 = [2147483647,-4294967297,-4294967297,-3699,-65536,255,-12,45641732,8];
const v1 = [-9007199254740992,536870889,-4096,-58848,-2147483648,-4294967297,257,-13,5,-9007199254740991];
const v2 = [-15,-573436510,9007199254740991,1073741824,13,1073741823,-512672077,-4096];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a9;
    this.f = a9;
}
const v10 = new F6(v0, -128);
const v11 = new F6(v0, -128);
const v12 = new F6(v1, -128);
function f13(a14, a15, a16) {
    const o25 = {
        "a": v10,
        "e": a14,
        [v0](a18, a19, a20, a21) {
            let v17 = this;
            [a19,,...v17] = v1;
            [v10,[a21,v17],F6,-536870912];
            [F6,v12,a15];
            return a20;
        },
        ...v10,
        2645: v0,
        "d": F6,
    };
    let v27 = new Uint16Array();
    const v29 = new Uint8ClampedArray(v27);
    delete v29[151];
    let v32 = ++v27;
    v32++ & 2039220424;
    return o25;
}
f13(f13(F6, f13, v12), v11, v11);
f13(v1, v2, v11);
const v40 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
const v42 = [924,"m"];
Reflect.apply(("m").padStart, v40, v42);
