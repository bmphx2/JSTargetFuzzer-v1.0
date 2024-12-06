function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.f = F3;
}
const v6 = new F3(F3);
const v7 = new F3(65536);
const v8 = new F3(41985);
class C9 {
    8 = F3;
    9 = v7;
    constructor(a11, a12) {
        super.b = this;
    }
    static o(a14, a15) {
        const v16 = super.b;
        v16.f >>= v16;
        return v16;
    }
    set a(a18) {
        function f19() {
            return a18;
        }
        a18.b = 65536;
    }
}
new C9(65536, v6);
const v24 = new C9(5, v6);
new C9(v24, v8);
const v27 = new WeakSet();
function f28() {
    return v7;
}
new Uint8Array(209);
new Uint8Array(255);
new Uint8ClampedArray(15);
const v39 = new Uint32Array(Uint32Array, v27);
let v40 = 1024;
const v42 = new BigInt64Array(v40);
let v43 = 1264;
let v44 = v43++;
[v44,v44,...v40] = v42;
try { v39.fill(209); } catch (e) {}
