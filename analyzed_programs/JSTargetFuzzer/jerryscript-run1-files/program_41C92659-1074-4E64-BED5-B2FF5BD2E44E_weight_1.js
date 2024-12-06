new Uint8Array(14);
new Uint32Array(0);
new Uint16Array(6);
class C9 extends Uint32Array {
    static set a(a11) {
        const o12 = {
        };
        new Proxy(Uint32Array, o12);
        function F15(a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = o12;
        }
        new F15(6, 0, a11);
        new F15(6, 0, 6);
        new F15(14, 14, 0);
    }
}
const v25 = new Float32Array(9);
async function f26(a27, a28, a29) {
    for (let [v30,v31,v32] of v25) {
    }
    return Float32Array;
}
f26();
new C9();
new C9();
new C9();
const v38 = new Int16Array();
new Uint8ClampedArray([4.0,0.7137662539774001,800.1465636629484]);
try {
    const t30 = 14;
    new t30();
} catch(e43) {
} finally {
}
const o44 = {
};
async function f45(a46, a47, a48) {
    Object.defineProperty(o44, "a", { writable: true, configurable: true, get: v38 });
    return a46;
}
f45(Int16Array, Int16Array, f45);
