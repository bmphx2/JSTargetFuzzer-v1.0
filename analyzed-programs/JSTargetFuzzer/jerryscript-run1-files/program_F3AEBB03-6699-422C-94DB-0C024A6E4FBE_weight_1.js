function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -57536886;
    this.e = -57536886;
    this.h = -57536886;
}
new F0();
new F0();
new F0();
new Uint8Array(121);
new BigInt64Array(7);
new Int16Array(1024);
new Int8Array(1000);
new Int8Array(7);
new Int32Array(10);
const v27 = [5];
try { v27.flatMap(v27); } catch (e) {}
