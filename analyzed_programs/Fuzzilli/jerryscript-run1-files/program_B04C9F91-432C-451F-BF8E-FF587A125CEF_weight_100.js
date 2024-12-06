let v6 = 4096;
const v8 = new BigInt64Array(v6);
const v11 = new BigUint64Array(3373);
const v14 = new Uint8Array(1024);
v11 in v14;
const o16 = {
};
const v18 = new Proxy(v8, o16);
try { o16.o(v18, -128, v14, 9007199254740991); } catch (e) {}
v6 = 9007199254740991;
