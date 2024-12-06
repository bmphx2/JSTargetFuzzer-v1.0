function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1000;
    this.h = 1000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new F0(6);
const v11 = new Int32Array(2288);
const v14 = new BigUint64Array(0);
const v18 = [65535n,0n,964329252n];
let v19 = [964329252n,964329252n,v18,v18];
try {
    2288 ** 6;
} catch(e21) {
    function F22(a24, a25, a26) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a24;
        this.h = e21;
    }
    new F22(v14, v3, e21);
    new F22(964329252n, v5, e21);
    new F22(v19, v4, 6);
} finally {
    v11.b = v11;
}
const v30 = [v19,v19,v18,964329252n,0n];
const v31 = [65535n,v19];
[v30,0n];
const v33 = [v19];
let v38;
try {
const t0 = 2147483648n;
v38 = t0(Int32Array, 2147483648n, 2147483648n, BigUint64Array, v18);
} catch (e) {}
v38 instanceof BigUint64Array;
const t36 = "fdNr";
t36[0] = 65535n;
let v45;
try {
const t0 = "localeCompare";
v45 = new t0(v18, v33, v33, 58270);
} catch (e) {}
async function* f46(a47, a48, a49) {
    ({"length":a47,...v19} = a48);
    yield v18;
    await a47;
    yield "fdNr";
    return a47;
}
f46(58270, v31, v45);
