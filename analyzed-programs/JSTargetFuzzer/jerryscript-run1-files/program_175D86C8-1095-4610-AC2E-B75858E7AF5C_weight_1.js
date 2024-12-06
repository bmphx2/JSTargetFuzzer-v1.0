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
let v14 = new F0();
const v15 = new F0();
const v16 = new F0();
for (let v17 = 0; v17 < 32; v17++) {
    v14["p" + v17] = v17;
}
const v20 = [v14,v15,v16,v16,F0];
let v21 = [v20,v14];
for (let v22 = 0; v22 < 32; v22++) {
    v14["p" + v22] = v22;
}
const v25 = [F0];
v25[8] = v20;
v14 = v15;
for (const v30 in v25) {
    v20.length = 53130;
    function F31(a33, a34, a35) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a34;
        this.c = v21;
    }
    const v36 = new F31(-31531n, v30, -31531n);
    new F31(-1652550211n, v36, -1024n);
    new F31(-1024n, F0, -31531n);
    try { v16(v30, v25, v16, v30); } catch (e) {}
    const v40 = `-4294967296`;
    for (let v41 = 0; v41 < 32; v41++) {
        v40["p" + v41] = v41;
    }
}
const v47 = Symbol.toPrimitive;
const o51 = {
    [v47]() {
        v21 = this;
        try {
            super.splice(this, this, this);
        } catch(e50) {
        }
        return 52639;
    },
};
new Int16Array(257);
v20["lastIndexOf"](v14, 53130);
new Uint8ClampedArray(250);
new Uint32Array(88);
const o67 = {
    "g": 10,
};
Object.defineProperty(o67, "g", { enumerable: true, value: 9 });
