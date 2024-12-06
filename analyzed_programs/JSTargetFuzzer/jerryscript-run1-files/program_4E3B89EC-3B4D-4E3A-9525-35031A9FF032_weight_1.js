function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 65535n;
}
const v8 = new F4(1953n, 1953n);
new F4(1953n, 4294967296n);
const v10 = new F4(1953n, 1953n);
function f15(a16, a17) {
    const o30 = {
        p(a19, a20, a21) {
            v10.h = a20;
            v10.valueOf = a16;
            return delete v10[4294967296n];
        },
        ...v8,
        "g": -1024,
        set h(a24) {
            function* f25(a26, a27) {
                a16.length = 1;
                yield* 6;
                return this;
            }
            f25(a16, this);
        },
        "b": a16,
        [1953n]: 1953n,
    };
    return o30;
}
f15(f15(v8, -1024), -1024);
f15(f15, -1024);
const v36 = new Uint32Array(181);
let v38 = BigUint64Array;
let v39 = new v38(1);
let v40 = 253;
[v40,,v38,v39] = v36;
try { v38["abs"](181, v40, v38, F4); } catch (e) {}
new Uint16Array(v40);
for (let i53 = 0; i53 < 2; i53++) {
    const v59 = new Function("x");
    v59.name;
}
Function();
