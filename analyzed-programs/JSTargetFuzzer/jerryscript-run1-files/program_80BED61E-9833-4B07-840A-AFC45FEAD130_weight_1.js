const v3 = new Float64Array(Uint16Array);
const v6 = [-2,536870912,536870912];
let v7 = [536870912,v6,-2];
const v8 = [536870912,v6,v6,v7];
let v10 = -385641156;
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a14;
    this.b = a15;
    this.h = a15;
}
new F12(v10, v7);
const v17 = new F12(268435440, v10);
const v18 = new F12(45486, v17);
const v20 = Symbol.toPrimitive;
const o24 = {
    [v20]() {
        try { v7.flatMap(Symbol, this); } catch (e) {}
        v8.__proto__;
        return -2;
    },
};
function f28() {
    v18.h **= o24;
    v18[v3] = f28;
    v20.__proto__;
    v10 = -2;
    v7 -= v6;
    return f28;
}
let v31 = -2.220446049250313e-16;
class C32 extends f28 {
}
let v33 = new C32();
[v31,...v33] = "536870888";
