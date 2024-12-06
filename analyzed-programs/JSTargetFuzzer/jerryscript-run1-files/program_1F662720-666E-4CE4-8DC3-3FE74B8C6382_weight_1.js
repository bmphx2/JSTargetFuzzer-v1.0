function f0() {
}
new WeakSet();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
}
const v6 = new F3(WeakSet);
const v7 = new F3(f0);
const v8 = new F3(v6);
function f10() {
    const o11 = {
        __proto__: f10,
    };
    return o11;
}
const v13 = [f10()];
try { v13.toString(); } catch (e) {}
const v15 = new WeakSet();
function f16(a17, a18, a19, a20) {
    const o27 = {
        valueOf(a22, a23) {
            const v24 = `
                v7.h += v24;
            `;
            eval(v24);
            return a22;
        },
        "h": v6,
        "f": WeakSet,
    };
    return o27;
}
const v28 = f16(v7, v6, v15, v6);
f16(v8, v28, v28, v28);
f16(v15, v8, v7, v7);
const v33 = new Uint8Array(1311);
v33.sort();
