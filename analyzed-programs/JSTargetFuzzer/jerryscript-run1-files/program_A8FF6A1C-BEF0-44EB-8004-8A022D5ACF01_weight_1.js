function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    const v5 = new Uint16Array(F1);
    for (const v6 of "function") {
        ("function").codePointAt(...v5);
    }
    this.e = f0;
}
const v8 = new F1();
Object.defineProperty(([]).values(), "e", { writable: true, enumerable: true, value: 119 });
function f13() {
    return 256;
}
new F1();
for (let i16 = 0; i16 < 8; i16++) {
    for (let v22 = 0; v22 < 32; v22++) {
        v8["p" + v22] = v22;
    }
}
new F1();
new Uint32Array(3211);
new Uint8Array(52565);
new BigInt64Array(44);
([4,7,4294967297,-1,1000])[-1];
function f37() {
    const o40 = {
        "b": Uint8Array,
        "e": f37,
        p() {
            for (const v39 in this) {
                break;
            }
            return Uint8Array;
        },
    };
    return o40;
}
const v43 = f37().p();
Object.defineProperty(v43, v43, { writable: true, value: 512 });
const v46 = new Date();
const o50 = {
    m(a49) {
        [] = 39946;
        return 39946;
    },
};
try { o50.m(); } catch (e) {}
Array(Array).concat();
if (0n) {
    const v56 = new Set();
    for (const v57 in v56) {
        v57.search();
    }
    v46[Symbol.search] = v46;
}
