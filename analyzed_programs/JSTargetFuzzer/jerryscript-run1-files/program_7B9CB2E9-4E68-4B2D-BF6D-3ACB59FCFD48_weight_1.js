function f0() {
}
function f1() {
    const o7 = {
        "d": f0,
        "c": f0,
        10: f0,
        11: f0,
        [f0]: f0,
        1: f0,
        p() {
            const v4 = [this,false,f0,false,this];
            [v4,v4,false];
            const v6 = [v4,f0,this];
            const t12 = false;
            t12[8] = false;
            return v6;
        },
        "b": f0,
    };
    return o7;
}
const v8 = f1();
const v9 = f1();
const v10 = f1();
new Uint16Array(2);
new Uint8Array(42);
new Float32Array(2535);
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a23;
}
new F20(42, 42, 2, v8);
new F20(2, 2, 42, v10);
new F20(2535, 42, 42, v9);
([]).reduceRight(Date, "number");
