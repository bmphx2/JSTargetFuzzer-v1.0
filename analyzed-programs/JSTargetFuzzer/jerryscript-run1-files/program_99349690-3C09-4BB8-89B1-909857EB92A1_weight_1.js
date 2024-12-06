function f0() {
}
const o5 = {
    __proto__: ArrayBuffer,
    0: 1024,
    "f": ArrayBuffer,
    "g": f0,
    "e": Uint16Array,
    "maxByteLength": 1760973780,
};
for (let v6 = 0; v6 < 32; v6++) {
    ArrayBuffer["p" + v6] = v6;
}
const v10 = new ArrayBuffer(3362, o5);
const v12 = new Int16Array(v10);
const v13 = new Uint16Array(1024);
const v15 = new WeakSet();
Object.defineProperty(v10, "e", { configurable: true, enumerable: true, get: f0, set: f0 });
v15 % Int16Array;
v15[f0];
v10.a = v10;
typeof 1024 === "function";
v13["indexOf"](v12);
try { v12.copyWithin(3362, 1760973780, 3362); } catch (e) {}
new BigInt64Array(1121);
new Int8Array(129);
[10018,-2,536870912,536870912,4294967297];
[-65537,10000,318343887,-256,-1034543881,-1,65535];
[-908487564];
let v33 = 4087n;
v33 **= v33;
v33 /= -2147483649n;
