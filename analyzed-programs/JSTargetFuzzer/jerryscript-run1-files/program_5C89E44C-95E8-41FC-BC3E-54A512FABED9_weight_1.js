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
    /*
    constructor(a18, a19, a20, a21) {
        C9.unshift(C9);
        C9[Symbol.replace] = C9;
    }
    */
    set a(a26) {
        function f27() {
            return a26;
        }
        a26.b = 65536;
    }
}
new C9(65536, v6);
const v32 = new C9(5, v6);
new C9(v32, v8);
const v35 = new WeakSet();
function f36() {
    return v7;
}
new Uint8Array(209);
new Uint8Array(255);
new Uint8ClampedArray(15);
const v47 = new Uint32Array(Uint32Array, v35);
let v48 = 1024;
const v50 = new BigInt64Array(v48);
let v51 = 1264;
let v52 = v51++;
[v52,v52,...v48] = v50;
try { v47.fill(209); } catch (e) {}
