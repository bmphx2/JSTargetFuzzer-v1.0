function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1073741824;
    this.f = 1073741824;
    this.e = 1073741824;
}
new F0();
const v4 = new F0();
const v5 = new F0();
if (F0 === v4) {
} else {
    new F0();
}
const v15 = new Int8Array();
v15.fill("RMF", 257, -1180432857);
const v19 = new Int16Array(284);
const v22 = new BigUint64Array(4);
new Uint8ClampedArray(2824);
const v27 = new Uint8Array(Uint8Array, Uint8Array);
const v29 = new Int8Array();
const v32 = new Float64Array();
try { v5.o(v19); } catch (e) {}
[] = v22;
new Array(127);
function f37() {
    return v32;
}
function f38(a39, a40, a41) {
    const o49 = {
        get e() {
            function F43(a45, a46, a47) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return F43(64, this, v27);
        },
        [f37]: v29,
    };
    return o49;
}
const v50 = f38(64, v29, v27);
const v51 = f38();
f38(v51, v29, v51);
v51[Symbol.isConcatSpreadable];
for (let v56 = 0; v56 < 5; v56++) {
    ("p")[Symbol.iterator];
    const o61 = {
    };
    new Proxy(v32, o61);
    v50["p" + v56] = v56;
}
