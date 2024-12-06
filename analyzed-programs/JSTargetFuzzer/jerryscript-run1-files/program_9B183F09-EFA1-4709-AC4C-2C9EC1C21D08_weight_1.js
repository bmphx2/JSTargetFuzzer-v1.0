function f0() {
}
new WeakSet();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
}
const v6 = new F3(WeakSet);
const v7 = new F3(f0);
let v8 = new F3(v6);
function f10() {
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = a13;
        this.e = WeakSet;
    }
    const v16 = new F11(v8, v7, v8);
    new F11(v7, v6, v7);
    const v18 = new F11(v7, v6, v6);
    const o19 = {
        __proto__: f10,
        "c": v16,
        ...v18,
        "e": v8,
        "b": v6,
        "a": WeakSet,
    };
    return o19;
}
const v20 = f10();
for (const v21 in v20) {
    v8[v21] = v21;
    v21 >= WeakSet ? v21 : WeakSet;
}
const v24 = [v20];
try { v24.toString(); } catch (e) {}
const v26 = new WeakSet();
function f27(a28, a29, a30, a31) {
    const o49 = {
        valueOf(a33, a34) {
            const v35 = `
                v7.h += v35;
                this[a33] = -536870912;
                v26 <= v35;
            `;
            eval(v35);
            for (let i43 = 0; i43 < 5; i43++) {
                a28[15] = a29;
            }
            return a33;
        },
        "h": v6,
        "f": WeakSet,
    };
    return o49;
}
try { v26.add(f0); } catch (e) {}
({"d":v8,"h":f0,} = v6);
const v54 = f27(v7, v6, v26, v6);
f27(v8, v54, v54, v54);
f27(v26, v8, v7, v7);
const v59 = new Uint8Array(1311);
v59.sort();
