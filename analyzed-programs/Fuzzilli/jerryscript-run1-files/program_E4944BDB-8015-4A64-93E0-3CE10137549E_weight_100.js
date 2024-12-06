function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 982477366;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.f = v4;
    this.g = a11;
}
new F9(v3, 4096n);
let v14 = new F9(v5, 6n);
const v15 = new F9(F9, 4096n);
function f16(a17, a18, a19) {
    const o31 = {
        get e() {
            let v20 = this;
            super.g = F9;
            [v20,v14,v20] = a19;
            const v24 = (-5.0) ** -5.0;
            Math.exp(-33594);
            Math.acosh(v24);
            v24 ^ -33594;
            (-33594 >> v24) ^ v24;
            Math.sin(-33594);
            return a17;
        },
    };
    return o31;
}
const v32 = f16(v15, F9, 4096n);
const v33 = f16(20199n, v15, 6n);
const v34 = f16(v4, v32, v33);
v34.f = v14;
const v37 = +F0;
-F0;
let v39 = Math.sin(F0);
v39 |= v37;
v33.__proto__ = v5;
let {"e":v40,} = v33;
Object.defineProperty(v34, v5, { enumerable: true, get: f16, set: f16 });
