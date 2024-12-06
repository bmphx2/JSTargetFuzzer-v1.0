function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740990;
}
const v3 = new F0();
new F0();
const v5 = new F0();
let v6 = 28.095651638925574;
class C12 extends F0 {
    [3.0] = 1.0952901260605802e+308;
    constructor(a14, a15, a16) {
        super();
        v6 = a15;
        function f17(a18, a19) {
            try { a18.split(); } catch (e) {}
            const v22 = Symbol.iterator;
            const o31 = {
                [v22]() {
                    let v24 = 10;
                    const o30 = {
                        next() {
                            v24--;
                            const v28 = v24 != 0;
                            const o29 = {
                                "done": v28,
                                "value": v24,
                            };
                            return o29;
                        },
                    };
                    return o30;
                },
            };
        }
        new Promise(f17);
    }
}
const v34 = new C12(v5, 3.0, 1.0952901260605802e+308);
const v35 = new C12(v34, 1.0952901260605802e+308, 3.0);
new C12(v35, v6, v6);
function F37(a39, a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
    this.a = a41;
}
new F37(1.0952901260605802e+308, -65537, v3, 3.0);
new F37(3.0, -65537, v5, 3.0);
new F37(3.0, 5, C12, v6);
function F46() {
    if (!new.target) { throw 'must be called with new'; }
    F46.c = -4294967297;
}
const v49 = new F46();
new F46();
new F46();
function f53() {
    const v56 = new Uint32Array(858);
    return v56;
}
function f59() {
    return v49;
}
const v62 = new BigUint64Array(BigUint64Array, BigUint64Array);
v62.copyWithin();
const v66 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v72 = 1073741824n;
v72 &= v72;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C86 {
}
const v88 = new v66(1);
const v91 = new Int8Array(107);
for (let i94 = 0, i95 = 10; i94 < i95;) {
    v91[v88] = i94;
    ++i94;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v111 = new Int8Array(Int8Array, Int8Array, Int8Array);
v111.includes(v111, v111);
new Uint8ClampedArray(6);
try {
    new Set(4087n);
} catch(e118) {
} finally {
}
