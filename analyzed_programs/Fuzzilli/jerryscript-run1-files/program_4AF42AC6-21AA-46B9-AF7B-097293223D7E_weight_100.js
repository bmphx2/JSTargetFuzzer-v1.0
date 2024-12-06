function f0() {
    const o16 = {
        2879525856: -2.0,
        "f": "o",
        m(a5, a6) {
            new Int16Array(1213);
            new Uint8ClampedArray(4096);
            new Float64Array(11);
            return this;
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
const v20 = [v19,v19];
const v21 = [v17,v20,v20,v18,v20];
const v22 = [v18,v21,v21,v17,v21];
const v30 = [];
const v31 = v17.m;
Reflect.apply(v31, v22, v30);
try { new v31(-9007199254740990n, v30); } catch (e) {}
v30 >>> 1918419036;
const o38 = {
    "apply": f0,
    "getOwnPropertyDescriptor": f0,
    "isExtensible": f0,
    "set": f0,
};
new Proxy(v20, o38);
