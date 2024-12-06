new Int8Array(87);
new Uint32Array(10);
new BigInt64Array(6);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 6;
}
new F12();
new F12();
new F12();
new Int8Array(10);
new Uint32Array(255);
new BigInt64Array(4096);
const v31 = new Date();
const v34 = new Uint32Array();
Object.defineProperty(v34, "b", { configurable: true, enumerable: true, get: Date, set: Date });
const v37 = new Uint32Array(1075);
new Int16Array(4);
new Uint8Array(2247);
class C44 {
    static n(a46, a47, a48, a49) {
        const v51 = Symbol.iterator;
        const o62 = {
            [v51]() {
                let v53 = 10;
                const o61 = {
                    next() {
                        const o55 = {
                            __proto__: v37,
                            4: this,
                        };
                        v37 & Uint8Array;
                        const v57 = v53--;
                        const v59 = v53 == 0;
                        const o60 = {
                            "done": v59,
                            "value": v31,
                            "f": this,
                            "g": a47,
                            "callee": Uint8Array,
                            "h": a49,
                            "a": v57,
                        };
                        return this;
                    },
                };
                return o61;
            },
        };
        return o62;
    }
}
new C44();
new C44();
new C44();
new C44();
const o71 = {
    "maxByteLength": 1000,
};
const v73 = new ArrayBuffer(182, o71);
new Uint8Array(v73);
const v77 = new Uint32Array(1075);
class C78 {
    [4];
    static [v77];
}
function F79(a81, a82) {
    if (!new.target) { throw 'must be called with new'; }
}
