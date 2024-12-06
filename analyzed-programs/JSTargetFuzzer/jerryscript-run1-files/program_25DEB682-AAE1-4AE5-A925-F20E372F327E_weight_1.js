function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4096;
}
new F0();
new F0();
new F0();
const v12 = [1024,-536870912,-7939];
const v13 = [127,-4294967296];
const v14 = [1262143293,15,46313,5,2147483649];
const v15 = [];
const v17 = Symbol.species;
for (let v18 = 0; v18 < 5; v18++) {
    let v19 = 0;
    while (v19 < 7) {
        [[v19,v19,v19,v19,v19],v15,v19,[v17,v19]];
        v19++;
    }
}
function f26() {
    return v14;
}
const v27 = [f26,f26,v13];
const v28 = [v27,v12,f26,v27];
[v28,v28];
new Float64Array(v27);
const v35 = new Uint32Array(1);
new f26(2);
const v42 = [65535n,0n,964329252n];
let v43 = [964329252n,964329252n,v42,v42];
const v44 = [v43,v43,v42,964329252n,0n];
const v45 = [65535n,v43];
[v44,0n];
const v47 = [v43];
const t32 = "fdNr";
t32[0] = 65535n;
let v54;
try {
const t0 = "localeCompare";
v54 = new t0(v42, v47, 964329252n, 58270);
} catch (e) {}
async function* f55(a56, a57, a58) {
    ({"length":a56,...v43} = v35);
    await (yield v42);
    yield "fdNr";
    return a56;
}
f55(58270, v45, v54);
