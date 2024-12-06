function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1;
}
new F0();
const v4 = new F0();
new F0();
let v8 = -40040;
const v14 = new Uint32Array(249);
new BigInt64Array(256);
const v20 = new Uint16Array(16);
const v22 = v14["entries"](v4, 55044, "entries", ..."entries");
v4[55044] %= 256;
v8 += 2;
v20[v22] &= 16;
Object.defineProperty("entries", 1816, { enumerable: true, value: 2 });
const v24 = Symbol.replace;
const t17 = "entries";
t17[v24] = v20;
const t19 = "entries";
t19[v24] %= v8;
