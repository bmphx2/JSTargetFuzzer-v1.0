function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 49777;
    this.a = 49777;
    this.g = 49777;
    const v3 = this[268435441];
    try { v3(49777, v3); } catch (e) {}
    new Uint16Array(321);
    new Int32Array(257);
    new Float32Array(0);
}
const v14 = new F0();
const v15 = new F0();
const v16 = new F0();
for (let v17 = 0; v17 < 32; v17++) {
    v14["p" + v17] = v17;
}
const v20 = [v14,v15,v16,v16,F0];
[v20,v14];
for (let v22 = 0; v22 < 32; v22++) {
    v14["p" + v22] = v22;
}
const v25 = [F0];
for (const v27 in v25) {
    try { v16(v27, v25, v16, v27); } catch (e) {}
    const v29 = `-4294967296`;
    for (let v30 = 0; v30 < 32; v30++) {
        v29["p" + v30] = v30;
    }
}
new Int16Array(257);
v20["lastIndexOf"](v14, 53130);
new Uint8ClampedArray(250);
new Uint32Array(88);
const o50 = {
    "g": 10,
};
Object.defineProperty(o50, "g", { enumerable: true, value: 9 });
