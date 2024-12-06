function f0() {
}
function f1() {
    const o2 = {
        "b": f1,
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
const v10 = [-2015202321,v9,v5,v9,v4,v5];
const v11 = [7,v5,v3,v4,1000,v3,f0];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.EPSILON = a14;
    this.c = f1;
    this.d = a17;
}
new F12(v10, v11, v4, v11);
const v20 = new Int8Array(Int8Array, Int8Array, Int8Array);
v20.includes(v20, v20).toString();
new F12(v10, v11, v3, v9);
new F12(v9, v10, v5, v10);
const v28 = new BigUint64Array(6, 16);
const v31 = new Uint8Array(2789);
const v33 = [16,6,6,v10,Uint8Array];
Reflect.apply(v28.copyWithin, v31, v33);
