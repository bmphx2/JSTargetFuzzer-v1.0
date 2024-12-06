function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -15;
    this.g = -15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new Uint32Array(1430);
const v10 = v8 <= v3;
v4.b = v10;
const v15 = new Uint16Array(10);
v5.f = v15;
let {"a":v16,"f":v17,"g":v18,} = v5;
F0 && 1430;
new Float32Array(257);
new BigUint64Array(3347);
new Uint8Array(207);
new Int32Array(v10);
const v34 = new Date("setUTCDate");
const v35 = v34.__proto__;
try { ("setUTCDate").lastIndexOf(v35); } catch (e) {}
