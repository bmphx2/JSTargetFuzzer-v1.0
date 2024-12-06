function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
}
new F0();
new F0();
new F0();
new BigInt64Array(1);
new Uint8Array(195);
new Uint8Array(1102);
const v17 = new Uint32Array(181);
let v19 = BigUint64Array;
let v20 = new v19(1);
let v21 = 253;
[v21,,v19,v20] = v17;
try { v19["abs"](181, v21, v19); } catch (e) {}
new Uint16Array(v21);
for (let i34 = 0; i34 < 2; i34++) {
    const v40 = [-Infinity,1.0808308614091993e+308];
    function f41(a42, a43) {
        const o46 = {
            [a42]: v40,
            m(a45) {
                return this;
            },
        };
        return a42;
    }
    f41(v40);
    const v48 = new Function("x");
    v48.name;
}
Function();
