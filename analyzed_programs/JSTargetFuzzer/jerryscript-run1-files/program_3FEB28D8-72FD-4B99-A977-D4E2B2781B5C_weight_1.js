function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -27524;
}
let v3 = new F0();
const v4 = new F0();
let v5 = v3[4294967296];
v5 = v4;
v3.__proto__ = v4;
const v6 = v3--;
try { v5.sort(); } catch (e) {}
new F0();
new Uint16Array(10);
new Int8Array(16);
new Int8Array(124);
([[]]).every(parseFloat);
[-16,65536,-5,14315,1,-9223372036854775808];
[-2,-536870912,-9223372036854775808,-4527,-65185];
[-605429220,-38030,9007199254740990,-31419,10000];
Math.pow(v6, v6);
const v28 = !-6;
Math.tan(v6);
v6 | v28;
