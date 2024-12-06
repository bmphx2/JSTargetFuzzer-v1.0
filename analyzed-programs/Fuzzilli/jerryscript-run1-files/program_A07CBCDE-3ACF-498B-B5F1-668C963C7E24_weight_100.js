function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1.5951432425812695e+308;
    this.e = a6;
    this.b = a6;
}
const v7 = new F4(-1000000000000.0);
let v8 = new F4(1.5951432425812695e+308);
const v9 = new F4(1.5951432425812695e+308);
function f10(a11, a12, a13, a14) {
    const o32 = {
        set d(a16) {
            const v17 = -2.220446049250313e-16;
            super.a?.g;
            this[3607] = v17;
        },
        "c": v8,
        "h": F4,
        "a": F4,
        o(a21, a22, a23, a24) {
            super.h = F4;
            v8 = a11;
            const o27 = {
                "maxByteLength": 1775394704,
            };
            const v29 = new ArrayBuffer(1206, o27);
            new Int32Array(v29);
            return v9;
        },
    };
    return o32;
}
f10(f0, -1000000000000.0, 2.220446049250313e-16, v9);
const v35 = f10(-1000000000000.0, f10(v7, 1.5951432425812695e+308, 2.220446049250313e-16, v7), v8, v9);
[Infinity,0.967742518671359];
[-183.42340215735237,-4.381592354305464,-777220.4130827849,2.0,-Infinity,Infinity,-1000000000.0,1e-15];
[-2.220446049250313e-16,705.4172083946423,-0.0,1.0,-1.589526125663146e+308,-210083.71181583358,-2.0,-274.2274987472781];
v35 > v7;
class C40 {
    m(a42, a43) {
        const o44 = {
            "call": f10,
            "setPrototypeOf": f10,
        };
        new Proxy(this, o44);
        return this;
    }
}
new C40();
new C40();
new C40();
