function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 6;
}
new F0();
new F0();
new F0();
new Int8Array(14);
new Uint32Array(255);
new BigInt64Array(4096);
const v19 = new Date();
const v22 = new Uint32Array();
Object.defineProperty(v22, "b", { configurable: true, enumerable: true, get: Date, set: Date });
const v25 = new Uint32Array(1075);
const v28 = new Int16Array(4);
new Uint8Array(2247);
class C32 {
    static n(a34, a35, a36, a37) {
        const v39 = Symbol.iterator;
        const o50 = {
            [v39]() {
                let v41 = 10;
                const o49 = {
                    next() {
                        const o43 = {
                            __proto__: v25,
                            4: this,
                        };
                        v25 & Uint8Array;
                        const v45 = v41--;
                        const v47 = v41 == 0;
                        const o48 = {
                            "done": v47,
                            "value": v19,
                            "f": this,
                            "g": a35,
                            "callee": Uint8Array,
                            "h": a37,
                            "a": v45,
                        };
                        return this;
                    },
                };
                return o49;
            },
        };
        return v28;
    }
}
new C32();
new C32();
new C32();
new C32();
const o59 = {
    "maxByteLength": 1000,
};
const v61 = new ArrayBuffer(182, o59);
new Uint8Array(v61);
const v65 = new Uint32Array(4);
class C66 {
    [4];
    static [v65];
}
function F67(a69, a70) {
    if (!new.target) { throw 'must be called with new'; }
}
