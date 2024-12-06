function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -12;
    this.h = a5;
}
new F3(-12);
const v7 = new F3(2147483647);
new F3(2068073939);
function f9() {
    return v7;
}
const v16 = [1024,-536870912,-7939];
const v17 = [127,-4294967296];
const v18 = [1262143293,15,46313,5,2147483649];
function f19() {
    return v18;
}
const v20 = [f19,f19,v17];
const v21 = [v20,v16,f19,v20];
[v21,v21];
const v25 = new Float64Array(v20);
const v28 = new Uint32Array(1);
new f19(2);
const v35 = [65535n,0n,v25];
let v36 = [964329252n,964329252n,v35,v35];
const v37 = [v36,v36,v35,964329252n,0n];
const v38 = [65535n,v36];
[v37,0n];
const v40 = [v36];
const t27 = "fdNr";
t27[0] = 65535n;
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
f48(58270, v38, v47, -536870912, v21);
