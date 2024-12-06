function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870912;
    this.b = 536870912;
    this.f = 536870912;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v6 = [F0,v3];
const v7 = [v5,F0,F0,v6];
const v8 = [v7];
const v11 = new BigInt64Array(1);
new Uint8ClampedArray(1);
new BigUint64Array(1004);
const v18 = new Uint8ClampedArray(v7);
let v19;
try { v19 = v18.find(v6, v5); } catch (e) {}
const t18 = 1;
t18[2] = F0;
const v20 = v19?.[1024];
try { v19(v20, v11); } catch (e) {}
with (v8) {
    const v23 = length + length;
    v23 !== 1004 ? v23 : 1004;
}
