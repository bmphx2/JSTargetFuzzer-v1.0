const v1 = new WeakMap();
function f5(a6, a7) {
    const o14 = {
        "b": WeakMap,
        set h(a9) {
            for (const v10 of a9) {
                this == -65537n;
            }
            try { a9(v1, -7n); } catch (e) {}
        },
        405: v1,
        [a6]: WeakMap,
        65535: a6,
        ...v1,
    };
    return o14;
}
f5(-7n, 7n);
f5(7n, -7n);
f5(-7n, -7n);
new Int8Array(512);
new Float32Array(257);
new Int32Array(129);
class C29 {
}
function f30() {
    return C29;
}
const v31 = new C29();
class C32 extends f30 {
    constructor(a34, a35, a36, a37) {
        try {
            return v31;
        } catch(e38) {
        }
    }
}
new C32();
const v40 = new Array(10);
let v42 = 4096;
function f44(a45, a46, a47, a48) {
    const o61 = {
        "g": v42,
        ...a48,
        "e": a46,
        set b(a50) {
            function F51(a53, a54) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a53;
            }
            new F51(a48, 129);
            new F51(a47, a47);
            new F51(F51, 481111932);
        },
        p(a59, a60) {
            return a45;
        },
    };
    return o61;
}
let v62 = f44(v42, 481111932, 129, v40);
f44(10, 481111932, 10, f44);
f44(v62, v42, 481111932, v42);
v62.g;
try {
    const v67 = new SyntaxError(SyntaxError);
    const v70 = [4096,"string"];
    C29.apply(("string").padStart, v67, v70);
    let v73;
    try { v73 = v62.isSealed(); } catch (e) {}
    v62 = v73;
    v42 = v73;
} catch(e74) {
    e74[0] = e74;
    try { e74(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
