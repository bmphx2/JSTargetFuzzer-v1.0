new Array(1);
const v8 = new Int16Array(7);
const v11 = new BigInt64Array(21);
const v14 = new Uint32Array(127);
const o15 = {
    __proto__: v14,
    [Int16Array]: 4294967297,
    ...v11,
    "f": 5,
};
const v16 = o15[Int16Array];
try { new v16(...Int16Array, 4294967297, ...v14, -9007199254740992, ...v8); } catch (e) {}
new Uint8ClampedArray(255);
new Int16Array(64);
new Uint16Array(10);
