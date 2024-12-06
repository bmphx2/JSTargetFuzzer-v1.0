const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
    this.f = v0;
}
const v3 = new F1();
let v4 = new F1();
const v5 = new F1();
v5.c = v4;
v4 = v3;
new Uint8Array(257);
const v14 = new Int8Array(128);
const v17 = new BigInt64Array(64);
[-2147483648,-1421386702,3,2147483647,9];
const v19 = [2,49172,3,34177,7,10];
[9007199254740991,7713,-268435456,1073741823,536870912,268435441];
const v21 = [1024,-536870912,-7939];
const v22 = [127,-4294967296];
const v23 = [1262143293,15,46313,5,2147483649];
function f24() {
    return v23;
}
const v25 = [f24,f24,v22];
const v26 = [v25,v21,f24,v25];
[v26,v26];
new Float64Array(v25);
const v33 = new Uint32Array(1);
new f24(2);
const v40 = [65535n,0n,964329252n];
let v41 = [964329252n,964329252n,v40,v40];
const v42 = [v41,v41,v40,964329252n,0n];
const v43 = v25[3698769860];
let v44;
try { v44 = v43(v3, 257, ...v14, 1, ...v19); } catch (e) {}
Object.defineProperty(v17, v44, { writable: true, configurable: true, value: 4096 });
new F1();
Object.defineProperty(v23, 8, { configurable: true, enumerable: true, set: f24 });
const v46 = [65535n,v41];
[v42,0n];
const v48 = [v41];
const t38 = "fdNr";
t38[0] = 65535n;
let v55;
try {
const t0 = "localeCompare";
v55 = new t0(v40, v48, 964329252n, 58270);
} catch (e) {}
async function* f56(a57, a58, a59) {
    ({"length":a57,...v41} = v33);
    await (yield v40);
    yield "fdNr";
    return a57;
}
f56(58270, v46, v55);
