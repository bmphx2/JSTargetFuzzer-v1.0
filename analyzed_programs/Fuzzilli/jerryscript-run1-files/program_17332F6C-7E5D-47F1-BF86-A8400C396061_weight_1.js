function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9007199254740992;
    this.a = -9007199254740992;
    this.c = -9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [-9,2,-65537,13,-1767813309,-17189,-22367];
let v7 = [13699,-768931097,9007199254740991,127,4,26311,65536,536870912];
const v8 = [9223372036854775807,12,-48426];
let v10 = 65535;
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -7;
    this.g = v3;
    this.a = a15;
}
new F12(F12, v3, v7);
new F12(-7, v4, v6);
const v19 = new F12(-7, v4, v8);
v3[-1] = v19;
let v20 = v3 || v4;
({"a":v10,"c":v7,"h":v20,} = v5);
v20 in v3;
let v22;
try { v22 = v10(); } catch (e) {}
try { new v10(v6); } catch (e) {}
v22 instanceof F0;
