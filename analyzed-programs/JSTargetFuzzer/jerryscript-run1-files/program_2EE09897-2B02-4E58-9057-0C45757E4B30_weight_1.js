const v2 = new Uint32Array(26848);
new EvalError(1313);
const v8 = new Uint16Array(42);
function f9(a10, a11, a12) {
    const o20 = {
        [a12]: a10,
        __proto__: v2,
        ...v8,
        set h(a14) {
            new WeakMap();
            for (let v17 = 0; v17 < 32; v17++) {
                v8["p" + v17] = v17;
            }
        },
        "species": a10,
    };
    return o20;
}
f9(42, 42, 42);
f9(42, 1313, 1313);
f9(1313, 26848, 26848, Uint32Array, EvalError);
function F24() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v27 = new F24();
new F24();
const v29 = new F24();
const v33 = [1801814284,v29,1801814284,v27];
[F24];
[v29,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v38 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o39 = {
};
const v41 = new Proxy(v38, o39, Uint32Array, 1313, v33);
const o42 = {
};
new Proxy(v41, o42);
try { F24(); } catch (e) {}
o39.a = v27;
