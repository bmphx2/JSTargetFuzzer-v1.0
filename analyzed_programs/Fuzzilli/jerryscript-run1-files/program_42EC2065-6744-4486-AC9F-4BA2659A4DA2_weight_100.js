const v1 = new WeakMap();
class C2 {
    #o(a4) {
        super.b = a4;
        v1.b;
        Object.defineProperty(a4, 7, { configurable: true, enumerable: true, value: this });
        return WeakMap in v1;
    }
    static #c = WeakMap;
    static #h;
    static #a;
    static [WeakMap] = WeakMap;
}
const v7 = new C2();
const v8 = new C2();
new C2();
new Int8Array(0);
new Float64Array(109);
const v18 = new BigInt64Array(4);
for (let v19 of v18) {
    v19 = v8;
}
109 | v18;
for (const v21 in v7) {
    const o24 = {
        "maxByteLength": 4096,
    };
    const v26 = new ArrayBuffer(82, o24);
    new DataView(v26);
}
