function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870888;
    this.a = 536870888;
}
new F0();
const v4 = new F0();
new F0();
class C10 {
    f = v4;
    [F0];
}
new C10();
new C10();
new C10();
new Int8Array(12);
new Int32Array(8);
new Uint8Array(151);
const t18 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new t18();
