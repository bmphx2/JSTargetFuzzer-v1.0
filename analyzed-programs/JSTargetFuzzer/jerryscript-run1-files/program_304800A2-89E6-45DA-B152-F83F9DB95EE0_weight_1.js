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
new F1();
Object.defineProperty(([]).values(), "e", { writable: true, enumerable: true, value: 119 });
function f13() {
    return 256;
}
new F1();
new F1();
new Uint32Array(3211);
new Uint8Array(52565);
new BigInt64Array(44);
([4,7,4294967297,-1,1000])[-1];
function f27() {
    const o30 = {
        "b": Uint8Array,
        "e": f27,
        p() {
            for (const v29 in this) {
                break;
            }
            return Uint8Array;
        },
    };
    return o30;
}
const v33 = f27().p();
Object.defineProperty(v33, v33, { writable: true, value: 512 });
new Date();
const o40 = {
    m(a39) {
        [] = 39946;
        return 39946;
    },
};
try { o40.m(); } catch (e) {}
Array(Array).concat();
if (0n) {
    const v46 = new Set();
    for (const v47 in v46) {
        v47.search();
    }
}
