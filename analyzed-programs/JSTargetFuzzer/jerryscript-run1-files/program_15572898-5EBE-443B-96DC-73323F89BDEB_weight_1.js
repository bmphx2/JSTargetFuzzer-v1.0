const v2 = new Float32Array(0);
const v5 = new Int32Array(8);
const v8 = new Uint8ClampedArray(512);
function f9(a10, a11, a12, a13) {
    const o46 = {
        "f": v5,
        "d": Float32Array,
        "a": a13,
        [a13](a15, a16, a17, a18) {
            delete this[0];
            let {"a":v20,"d":v21,"f":v22,...v23} = this;
            function f25() {
                const o32 = {
                    "a": 434997.50268014264,
                    "b": 434997.50268014264,
                    p(a29, a30) {
                        return a29.valueOf(this, this);
                    },
                    ..."hasInstance",
                };
                return o32;
            }
            f25();
            let v34 = -16;
            const v36 = new BigUint64Array();
            const v37 = new BigUint64Array(v36);
            const o39 = {
                valueOf() {
                    return v37;
                },
            };
            v34 = o39;
            const v40 = f25();
            const o41 = {
                "construct": f25,
            };
            new Proxy(v40, o41);
            return v20;
        },
        "h": a13,
        "c": v2,
    };
    return a12;
}
f9(v8, 8, 8, 0);
f9(v5, 0, 8, 0);
f9(v8, 512, 512, Float32Array);
const v53 = [65535n,0n,964329252n];
let v54 = [0n,964329252n,v53,v53];
const v55 = [v54,v54,v53,964329252n,0n];
const v56 = [65535n,Int32Array];
[v55,0n];
const v58 = [v53];
const t53 = "fdNr";
t53[0] = 65535n;
let v65;
try {
const t0 = "localeCompare";
v65 = new t0(v53, v58, v58, 58270);
} catch (e) {}
async function* f66(a67, a68, a69) {
    v8[v56] = f66;
    let {"length":v70,} = "o";
    f66 & 65535n;
    Int32Array[v2.search];
    ({"length":a67,...v54} = a68);
    yield v53;
    await a67;
    yield "fdNr";
    return a67;
}
f66(v55, v56, v65);
