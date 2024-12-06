function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 6;
    this.h = 6;
    this.d = 6;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.b = a8;
    this.h = a8;
}
const v10 = new F6(v4, F6);
const v11 = new F6(v3, v3);
const v12 = new F6(v4, v5);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F6;
}
new F13(F0, v5, v12);
const v19 = new F13(F13, v3, v11);
new F13(v10, v3, v10);
const v21 = [1024,-536870912,-7939];
const v22 = [127,-4294967296];
const v23 = [1262143293,15,46313,5,2147483649];
function f24() {
    return v23;
}
const v25 = [f24,f24,v22];
const v26 = [v25,v21,f24,v25];
[v26,v26];
v25[F13] = F13;
v25[v19] **= 4096;
[-492462938,128,56213];
[512];
[-16,4,562862124,1734365769,13913,1,268435441,127,5,1580988785];
new Float64Array(v25);
const v36 = new Uint32Array(1);
new f24(2);
const v43 = [65535n,0n,964329252n];
let v44 = [964329252n,964329252n,v43,v43];
const v45 = [v44,v44,v43,964329252n,0n];
const v46 = [65535n,v44];
[v45,0n];
const v48 = [v44];
const t46 = "fdNr";
t46[0] = 65535n;
let v55;
try {
const t0 = "localeCompare";
v55 = new t0(v43, v48, 964329252n, 58270);
} catch (e) {}
async function* f56(a57, a58, a59) {
    ({"length":a57,...v44} = v36);
    await (yield v43);
    yield "fdNr";
    return a57;
}
f56(58270, v46, v55);
