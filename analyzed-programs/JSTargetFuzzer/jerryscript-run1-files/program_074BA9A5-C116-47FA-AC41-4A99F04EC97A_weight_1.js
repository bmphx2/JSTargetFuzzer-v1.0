function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -2113822061;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    4 = v4;
    constructor(a8) {
        super();
        v3.__proto__ = this;
        delete this[536870889];
    }
    static h;
    get g() {
        v4[this] = this;
        const o13 = {
            "maxByteLength": 4096,
        };
        const v15 = new ArrayBuffer(255, o13);
        const v17 = new Uint8Array(v15);
        return v17;
    }
}
new C6(v5);
new C6(C6);
new C6(v4);
new Int16Array(16);
new Uint8ClampedArray(9);
new Uint8Array(512);
async function f30(a31, a32, a33) {
    let v35 = 0;
    new Array(v35 **= a33);
    return v35;
}
f30();
