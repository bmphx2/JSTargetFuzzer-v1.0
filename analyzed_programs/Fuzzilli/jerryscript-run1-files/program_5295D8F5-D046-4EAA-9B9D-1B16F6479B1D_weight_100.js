function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new WeakSet();
function f9(a10, a11, a12, a13) {
    const o19 = {
        [-2]: a12,
        163: v8,
        "g": WeakSet,
        "d": a13,
        [v5]: v4,
        "h": v3,
        set a(a15) {
            a12.__proto__ = this;
        },
        "a": v8,
        "e": v3,
    };
    return o19;
}
const v20 = f9(f9, v8, v5, v8);
f9(f9, v5, v4, v3);
f9(f9, v5, v3, v4);
const v26 = [41345,1270923746,-128,9223372036854775807,-2085732039,59134,-4294967295];
const v27 = [-16,-65536,24551,9007199254740992,359111847,1073741824,2147483649,-7,308291433];
const v28 = [-4294967295,-25371,-3];
function F29(a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a33;
}
const v34 = new F29(v26, -9007199254740992, v8);
new F29(v26, -10, v20);
new F29(v28, 6, v34);
let [v37,...v38] = v27;
