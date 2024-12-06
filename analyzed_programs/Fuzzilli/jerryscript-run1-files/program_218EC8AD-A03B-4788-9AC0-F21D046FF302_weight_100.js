function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 65535;
    this.a = 65535;
    this.b = 65535;
}
const v3 = new F0();
const v4 = new F0();
new F0();
class C6 {
    a = v4;
    static [v4] = v3;
    268435456 = v4;
    set f(a8) {
        const v9 = this ** a8;
        v4[v9] = v9;
    }
    static h = v3;
    c = F0;
    static #f;
    static [v3] = F0;
}
new C6();
const v11 = new C6();
new C6();
new Uint16Array(4);
const v18 = new Int16Array(196);
const v21 = new Int32Array(6);
v21[6] ||= ~v21;
v11[v18];
const o26 = {
    "maxByteLength": 2215,
};
const v28 = new ArrayBuffer(2215, o26);
new BigUint64Array(v28);
