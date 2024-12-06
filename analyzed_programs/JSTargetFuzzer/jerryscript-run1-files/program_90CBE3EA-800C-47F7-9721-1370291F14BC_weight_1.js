function f6() {
    return -1000000000.0;
}
new Float32Array(0);
new Uint32Array(11);
const o16 = {
    valueOf() {
        try { this["join"]("join", -1.2984385672399057); } catch (e) {}
        return 11;
    },
};
new Int32Array(3820);
const v20 = [1024,-536870912,-7939];
const v21 = [127,-4294967296];
const v22 = [1262143293,15,46313,5,2147483649];
function f23() {
    return v22;
}
const v24 = [f23,f23,v21];
const v25 = [v24,v20,f23,v24];
[v25,v25];
new Float64Array(v24);
const v32 = new Uint32Array(1);
new f23(2);
const v39 = [65535n,0n,964329252n];
let v40 = [964329252n,964329252n,v39,v39];
const v41 = [v40,v40,v39,964329252n,0n];
const v42 = [65535n,v40];
[v41,0n];
const v44 = [v40];
const t27 = "fdNr";
t27[0] = 65535n;
let v51;
try {
const t0 = "localeCompare";
v51 = new t0(v39, v44, 964329252n, 58270);
} catch (e) {}
async function* f52(a53, a54, a55) {
    ({"length":a53,...v40} = v32);
    const v56 = yield v39;
    v32.find(...v21, -6.488103910134853e+307, a55, a55, v56, a55);
    const o58 = {
        "apply": f6,
        "call": f6,
        "deleteProperty": f23,
        "get": f6,
        "getPrototypeOf": f6,
        "has": f6,
        "isExtensible": f23,
        "ownKeys": f6,
        "set": f52,
        "setPrototypeOf": f52,
    };
    new Proxy(v41, o58);
    await v56;
    yield "fdNr";
    return a53;
}
v24.length = 10000;
v20.valueOf = f6;
const v65 = Symbol.iterator;
const o74 = {
    [v65]() {
        let v67 = 10;
        const o73 = {
            next() {
                v67--;
                const v71 = v67 == 0;
                const o72 = {
                    "done": v71,
                    "value": v67,
                };
                return o72;
            },
        };
        return o73;
    },
};
f52(58270, v42, v51);
