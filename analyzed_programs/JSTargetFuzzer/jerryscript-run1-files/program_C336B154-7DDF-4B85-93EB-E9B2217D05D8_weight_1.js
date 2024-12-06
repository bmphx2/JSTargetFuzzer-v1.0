function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -32478;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v6 = [v5,v5,v3,F0,F0];
const v7 = [v6,v5];
const v8 = [v6,v7,v3,v7,v7];
class C10 extends F0 {
    m(a12, a13, a14) {
        return 3.0;
    }
    static set f(a19) {
        c = a19;
        function f20() {
            return a19;
        }
    }
    static b;
}
new C10();
const v22 = new C10();
new C10();
const v24 = [C10,v8,v22,v3];
const v25 = [v8,v22,v7,v24];
[F0,v25,v25,v24];
const v29 = new Uint32Array(181);
let v31 = BigUint64Array;
let v32 = new v31(1);
let v33 = 253;
[v33,,v31,v32] = v29;
try { v31[v32](181, v33, v31); } catch (e) {}
new Uint16Array(v33);
for (let i46 = 0; i46 < 2; i46++) {
    const v52 = new Function("xX7QN");
    v52.name;
}
Function();
