const v0 = [];
function f1() {
    const o9 = {
        "a": v0,
        "e": v0,
        [v0]: v0,
        get h() {
            this.b = this;
            v0[138] = v0;
            return v0;
        },
    };
    return o9;
}
const v10 = f1();
const v11 = f1();
const v12 = f1();
function f13(a14) {
    const o23 = {
        n(a16, a17, a18) {
            const v19 = a16 in a17;
            Object.defineProperty(this, 928012.2499373632, { writable: true, enumerable: true, get: a14 });
            v10.a **= 928012.2499373632;
            return v19;
        },
        __proto__: v0,
        [v10]: v11,
        [f1]: v10,
        "a": f13,
    };
    return o23;
}
const v24 = f13(v11);
const v25 = f13(v12);
f13(v24);
new Int16Array(1000);
new BigUint64Array(1);
new Int8Array(2);
const v36 = f13(v11);
function F37(a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    new Uint8Array(3);
    new Uint8Array(42);
    new Int16Array(33);
    this.h = v0;
}
new F37(v12, v25, v11);
new F37(v11, v25, v25);
let v53 = new F37(v24, v36, v10);
const o57 = {
    get c() {
        v53 = arguments;
        return undefined;
    },
};
const o58 = {
    ...o57,
};
