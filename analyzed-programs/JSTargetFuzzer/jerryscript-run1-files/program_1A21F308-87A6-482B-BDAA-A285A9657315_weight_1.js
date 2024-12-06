function f0() {
    const o16 = {
        m(a5) {
            let v4 = this;
            [,v4,a5] = a5;
            v4["symbol"] |= 268435440;
            const o6 = {
            };
            new Proxy(a5, o6);
            const o11 = {
                "maxByteLength": 201,
            };
            const v13 = new ArrayBuffer(19, o11);
            const v15 = new Uint8Array(v13);
            return v15;
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
const v21 = new WeakSet();
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a24;
    F22.d = a24;
    this.f = v17;
}
new F22(v19, v21, v18);
const v28 = new F22(v18, f0, v18);
const v29 = new F22(v17, v28, v17);
const v30 = [WeakSet,f0,v29,v21];
[v18,v28];
[v30,v29];
const v36 = [-22965,14,-65535,4294967296,-4294967295,26499];
const v37 = [2,-65025,65537,-53821,10000,5];
const v38 = [-9223372036854775807,-1572874415,268435440,9223372036854775807,-2147169615,7026,-14,127];
class C39 {
    constructor(a41, a42) {
        a41[65537] /= a42;
        let v45 = 4294967296;
        v45--;
        const v47 = 39631 << v36;
        v45 | v38;
        -v38;
        v36 || v36;
        Math.ceil(v47);
        Math.max(v38);
    }
}
const v53 = new C39(v36, v37);
new C39(v38, v38);
new C39(v38, v53);
new Uint32Array(2800);
new Float64Array(227);
new Int32Array(1000);
new BigUint64Array(C39);
const v70 = new Int8Array(v38);
const v73 = new BigUint64Array(64);
let v78 = -505.82829815177945;
h = Float64Array;
let v85 = 434742601;
v70.length = -13;
[v85,...v78] = v73;
try {
const t0 = 2.2250738585072014e-308;
t0(v85, v78, BigUint64Array, v70);
} catch (e) {}
