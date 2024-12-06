function f0() {
}
function f1() {
    const o2 = {
        "b": f0,
        "f": f0,
        [f0]: f0,
        "c": f0,
        "g": f0,
        60: f0,
        "d": f0,
        ...f0,
        "h": f0,
        "a": f0,
        "e": f0,
        2: f0,
    };
    return o2;
}
const v3 = f1();
const v4 = f1();
const v5 = f1();
const v9 = [f1];
const v10 = [-2015202321,v9,v5,v9];
const v11 = [7,v5,v3,v4,1000,v3,f0];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
    this.c = f1;
    this.d = a17;
}
new F12(v10, v11, v4, v11);
new F12(v10, v11, v3, v9);
new F12(v9, v10, v5, v10);
const v24 = new BigUint64Array(6, 6);
const v27 = new Uint8Array(2789);
const v29 = [16,6,6];
Reflect.apply(v24.copyWithin, v27, v29);
