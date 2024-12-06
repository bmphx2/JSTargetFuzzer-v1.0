function f0() {
    const o17 = {
        set g(a5) {
            let v4 = this;
            ({"a":a5,"b":v4,} = a5);
        },
        "e": -1.0911986798027903e+308,
        [-1.0911986798027903e+308]: "log10",
        [-1.0911986798027903e+308](a7) {
            new Uint32Array(255);
            new Float32Array(4024);
            new BigInt64Array(193);
            return Uint32Array;
        },
    };
    return o17;
}
f0();
const v19 = f0();
f0();
const v26 = new BigInt64Array(1802);
const v29 = new Int32Array(0);
new Float64Array(217, Float64Array, v29, 0);
const v36 = [65535n,0n,964329252n];
let v37 = [964329252n,964329252n,v36,v36];
const v38 = [v37,v37,v36,964329252n,0n];
const v39 = [65535n,v37];
[v38,0n];
const v41 = [v37,v26,v19];
const o45 = {
    "apply": f0,
    "call": f0,
    "construct": f0,
    "defineProperty": f0,
    "getOwnPropertyDescriptor": f0,
    "has": f0,
    "isExtensible": f0,
    "ownKeys": f0,
    "set": f0,
};
new Proxy(v39, o45);
const t41 = "fdNr";
t41[0] = 217;
let v51;
try {
const t0 = "localeCompare";
v51 = new t0(v36, v41, v41, 58270);
} catch (e) {}
async function* f52(a53, a54, a55) {
    ({"length":a53,...v37} = a54);
    yield v36;
    yield await a53;
    return a53;
}
f52(58270, v39, v51);
