function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [36013,1143693799,10000];
const v7 = [7];
const v8 = [8,-4294967297,-10];
function f9(a10, a11) {
    const o12 = {
        16: f9,
        "a": v7,
        ...a11,
        "c": v7,
        [a11]: v8,
        "a": a10,
        "h": v5,
        "c": v4,
        __proto__: a11,
        "b": a10,
        "g": v3,
        11: a10,
        "f": a11,
        ...a10,
        "d": v3,
        "g": v8,
        "e": F0,
        "d": v7,
        ...v4,
        ...a11,
        [a10]: a10,
    };
    return o12;
}
f9(v6, v7);
f9(v7, v7);
f9(v6, v7);
const v16 = [1024,-536870912,-7939];
const v17 = [127,-4294967296];
const v18 = [1262143293,15,46313,5,2147483649];
function f19() {
    return v18;
}
const v20 = [f19,f19,v17];
const v21 = [v3,v16,f19,v20];
[v21,v21];
new Float64Array(v20);
const v28 = new Uint32Array(1);
new f19(2);
const v35 = [65535n,964329252n,964329252n];
let v36 = [964329252n,964329252n,v35,v35];
const v37 = [v36,v36,v35,964329252n,0n];
const v38 = [65535n,v36];
[v37,0n];
const v40 = [v36];
const t55 = "fdNr";
t55[0] = 65535n;
let v47;
try {
const t0 = "localeCompare";
v47 = new t0(v35, v40, 964329252n, 58270);
} catch (e) {}
async function* f48(a49, a50, a51) {
    ({"length":a49,...v36} = v28);
    await (yield v35);
    yield "fdNr";
    return a49;
}
f48(58270, v38, v47);
