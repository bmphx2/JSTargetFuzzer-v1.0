const v0 = /[\cZ]/uygi;
const v1 = /^3(\xed\xb0\x80)\x01/vyg;
const v2 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10/gid;
class C3 {
    [v0];
    constructor(a5, a6) {
        function f7(a8, a9, a10, a11) {
            return a8;
        }
        f7(f7, a5, v2, v2);
    }
    static #o(a17) {
        try {
            a17.#o(this, a17, this, this, v1);
        } catch(e19) {
        }
        return a17;
    }
}
const v20 = new C3(v2, v1);
const v21 = new C3(v1, v1);
const v22 = new C3(v0, v0);
const v23 = [v22,v1,v20];
const v24 = [v22,C3,v23];
const v25 = [C3,v1,v22,v1,v0];
const v26 = [v25,v22,v0,v25,v22];
const v28 = [v2,[v23,v25,C3,v21,v1],v24,v20];
new Float64Array(64);
new BigUint64Array(912);
new Uint32Array(256);
for (let v38 = 0; v38 < 32; v38++) {
    v28["p" + v38] = v38;
}
function F42(a44, a45, a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v28;
}
new F42(v1, v25, v20, v1);
new F42(v1, v20, C3, v22);
new F42(v1, v23, v26, b);
