function f0() {
    const o8 = {
        get e() {
            return -2.2250738585072014e-308;
        },
        ["0"]: "p",
        __proto__: "0",
        ["p"]: 9223372036854775807,
        ..."0",
        ..."0",
        1024: "0",
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
const o12 = {
    __proto__: v9,
    5: v9,
    "b": v11,
};
const v13 = [v10,v11,v9,v11];
const v14 = [f0,f0,v11,v11,v13,v13,v11];
[v9];
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a19;
    this.h = v14;
}
new F16(v10, v9);
const v21 = new F16(v9, f0);
new F16(v11, v21);
const v26 = [];
class C27 {
}
const v28 = new C27();
Reflect.apply(v26.includes, v28);
