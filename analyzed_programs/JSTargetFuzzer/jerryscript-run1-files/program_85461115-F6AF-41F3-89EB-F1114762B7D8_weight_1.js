function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 2209;
}
new F0();
new F0();
new F0();
new Float64Array(3085);
`multiline${3085}bigint${WeakMap}boolean${256}Ys1r`;
new BigInt64Array([-6n]);
new Uint32Array(7);
new Uint16Array(5);
function f23(a24) {
    const o25 = {
        "a": "setBigInt64",
    };
    return o25;
}
const v26 = f23("setBigInt64");
const o27 = {
    "get": f23,
    "set": f23,
};
const v29 = new Proxy(v26, o27);
v29.a *= -1000000000000.0;
