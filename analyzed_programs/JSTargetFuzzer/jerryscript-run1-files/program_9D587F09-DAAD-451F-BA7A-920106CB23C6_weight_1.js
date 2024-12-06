new Int16Array(505);
const v5 = new Float32Array(2);
const v8 = new Uint32Array(4096);
function f9(a10, a11) {
    const o27 = {
        ...v5,
        "e": a11,
        get d() {
            let {"a":v13,"b":v14,"d":v15,...v16} = a10;
            v15[v8] = v15;
            return v5;
        },
        "d": 2,
        [2](a21, a22) {
            this.length = 4;
            return 9007199254740991;
        },
        "b": v5,
        [Float32Array]: a10,
        "g": a10,
        [2]: 4096,
    };
    return o27;
}
f9(v5, 2);
f9(Float32Array, 2);
f9(v5, 505);
[-Infinity,0.1288692175716849,8.952096677518741e+307,5.0,5.0,-1.0,-7.10797832318828,482709.19252826343];
[0.009770805117064962];
[1000000000.0,8.557451335399865,1000.0,1e-15,-563571.230137544];
function F34(a36) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol();
}
new F34(F34);
