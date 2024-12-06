function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 5;
    this.length = 0;
    try { F0(); } catch (e) {}
    this.__proto__ = this[4096];
    this.f = 5;
    this.b = 5;
}
const v6 = new F0();
new F0();
const v8 = new F0();
try { v6.toString(); } catch (e) {}
v8[6];
new Float64Array(127);
new BigInt64Array(16);
new Int32Array(2395);
new Float32Array(15);
new Uint8ClampedArray(3536);
new Int32Array(2811);
const v37 = -9223372036854775807 / F0;
-F0;
Math.hypot(v37);
9007199254740991 % "j";
