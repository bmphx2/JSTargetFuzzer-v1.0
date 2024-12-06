function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [-1e-15,0.2897357409158642,-432.1243953960394,-5.0,2.2250738585072014e-308];
const v7 = [3.8066503422787363,226.18852157563606,-0.0];
const v8 = [1.7484700761175907e+308,-1000000000000.0];
function f9(a10, a11) {
    const o26 = {
        __proto__: v3,
        [v7]: a10,
        "a": f9,
        "f": f9,
        ...a10,
        set c(a13) {
            const o16 = {
                "maxByteLength": 255,
            };
            const v18 = new ArrayBuffer(255, o16);
            new Uint16Array(v18);
        },
        "b": a11,
        set d(a22) {
            v5 | f9;
            try {
                super.p(v3, a22);
            } catch(e25) {
            }
        },
        /*
        __proto__: a11,
        */
        [a10]: v6,
    };
    return o26;
}
f9(f9(v3, v7), v8);
f9(v3, v7);
new Int32Array(16);
const v35 = new Int8Array(F0);
new Float64Array(1024);
v35[v3] = Int32Array;
v4.length = 1024;
Math.trunc(0.0);
