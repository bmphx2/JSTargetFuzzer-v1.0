const v3 = [-10,9];
let v4 = [v3,9,9,-1640521791];
const v5 = [v4,9,-1640521791,-10,v3,v4];
function f6(a7, a8) {
    const o17 = {
        get g() {
            const o10 = {
            };
            new Proxy(v4, o10);
            return v3;
        },
        [9](a14, a15) {
            v4 = a8;
            a8.__proto__ = a8;
            v3.toString = a15;
            return this;
        },
        ...a8,
    };
    return o17;
}
const v18 = f6(-1640521791, v3);
const v19 = f6(-1640521791, v3);
f6(-10, v3, v18, v5, v19);
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v3;
    this.e = 268435440;
}
const v29 = new F24(v5, 2, v19);
new F24(v4, v29, v19);
new F24(v5, 2, v18);
function f35(a36, a37) {
    const o44 = {
        get h() {
            this[46667] = a36;
            try { a37(a37, a37); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a41) {
            this[a41] *= 46667;
            [] = 39946;
            const v42 = super.a;
            let v43;
            try { v43 = new v42(v42, a41); } catch (e) {}
            v43[2147483648] = v43;
            return a41;
        },
    };
    return o44;
}
const v45 = f35(39946, 46667);
f35(255, 46667);
f35(255, 46667);
const v53 = new BigUint64Array(16);
const v56 = new Float32Array(3007);
const v59 = new Float32Array(3);
Object.defineProperty(v53, "byteOffset", { configurable: true, value: v59 });
v56[v59];
let v61 = v56[2936874794];
v45.g = -1024;
let v64 = --v61;
const v65 = v45 | v64;
const v66 = v45 ** v61;
!v65;
Math.clz32(v66);
--v64;
~v66;
