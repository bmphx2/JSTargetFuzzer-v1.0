let v0 = [];
function f1() {
    const o14 = {
        set a(a3) {
            const v4 = this.g;
            let [v5] = v0;
            v0 = v4;
        },
        "b": v0,
        "e": v0,
        65535: v0,
        get g() {
            const v7 = super.e;
            function F8(a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a10;
                this.b = this;
            }
            new F8(v7);
            const v12 = new F8(F8);
            new F8(this);
            return v12;
        },
    };
    return o14;
}
f1();
const v16 = f1();
const v17 = f1();
const v20 = new Uint8Array(3599);
new BigInt64Array(15);
const v26 = new BigInt64Array(257);
try { v17.p(v26, BigInt64Array, v16, BigInt64Array, 257); } catch (e) {}
257 in "finally";
v20.toString = v16[0];
const v33 = `
    new Set();
    new Map();
`;
eval(v33);
