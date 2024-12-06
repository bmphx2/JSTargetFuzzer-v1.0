const v0 = /7\w|\d/vym;
let v1 = /foo(?<=bar)bazL/vgsid;
const v2 = /E(2)/vmsd;
function f3(a4, a5) {
    const o12 = {
        536870888: v0,
        "g": v0,
        "e": v0,
        ...a5,
        toString(a7, a8) {
            let v9;
            try { v9 = a5(); } catch (e) {}
            let v10;
            try { v10 = a5(v9, v9, v0, v9); } catch (e) {}
            v10[-2] = v2;
            a4 * a5;
            return v1;
        },
    };
    return o12;
}
f3(v1, f3);
const v14 = f3(v0, v2);
const v15 = f3(v1, v0);
class C16 extends f3 {
    2296059204;
    static #a;
    valueOf(a18, a19, a20) {
        v1 = a20;
        return v14;
    }
    2147483649;
}
const v24 = new C16();
const v25 = new C16();
const v26 = new C16();
const v28 = [f3,v24];
const v29 = v24.toString;
Reflect.apply(v29, v15, v28);
let v31 = 0;
while (v31 < 0) {
    const v34 = v29 instanceof f3;
    function F35(a37, a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = v25;
        this.a = v34;
        this.d = v1;
    }
    new F35(v25, v25, v34);
    new F35(v15, v25, v15);
    new F35(v26, v25, F35);
    v31++;
}
