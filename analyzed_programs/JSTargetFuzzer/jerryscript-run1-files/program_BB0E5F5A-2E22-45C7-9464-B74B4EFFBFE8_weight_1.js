function f0() {
}
const v1 = [f0,f0,f0];
const v2 = [f0,v1,v1,v1];
const v3 = [v1,v2];
function f4(a5, a6) {
    const o12 = {
        __proto__: a6,
        "f": v1,
        [v1]: a5,
        toString(a8, a9, a10) {
            Object.defineProperty(a10, "g", { set: f0 });
            a10[a8];
            return v3;
        },
        1: v1,
        "g": a5,
        "d": v2,
        "c": f0,
    };
    return o12;
}
const v13 = f4(f0, v3);
const v14 = f4(v2, v3);
const v15 = f4(v3, v3);
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a20;
}
const v21 = new F16(v2, v14, v15);
const v22 = new F16(v2, v14, v13);
const v23 = new F16(v3, v14, v15);
delete v3[v14];
v23[v1] = f0;
v14["toString"](..."toString", ...v1, ...v1, ..."toString", ..."toString");
const v27 = v2.constructor;
class C28 extends v27 {
    static 5 = v22;
    e = v27;
    static [f4] = v21;
}
new C28();
