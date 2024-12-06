function f0() {
}
function f1() {
    return f0;
}
const v2 = [-65536,-1,2];
let v3 = [2147483649,-128,2147483648,16];
[14,16,-5,-1073741824,1073741823,2147483647,25602,-4096,-2,64];
const v7 = new Uint32Array(64);
let v9 = 10;
for (; v9--;) {
    try { v2.push(v3); } catch (e) {}
}
new Int32Array(129);
new Float32Array(6);
const v17 = [];
function f21(a22) {
    const o32 = {
        ...v17,
        set b(a24) {
            const o27 = {
                "maxByteLength": 2306,
            };
            const v29 = new ArrayBuffer(9, o27);
            new Int16Array(v29);
        },
        "f": -2147483649n,
        ...v17,
    };
    return o32;
}
const v33 = f21(5n);
const v34 = f21(-2147483649n);
let v35 = f21(8n);
const v38 = new Uint8Array(633);
let {"b":v41,"f":v42,...v43} = v33;
try { v7.entries(); } catch (e) {}
v38.byteLength >>>= v41;
v3 /= v41;
v35 -= v34;
const v45 = new Float64Array(128);
new Int16Array(3027);
const v49 = v38[12];
v33[v49];
v38.byteOffset >>= 128;
function f51(a52, a53, a54) {
    let [v55,v56,v57] = v45;
    try { v49(a53, a53, v38, v55, 5n); } catch (e) {}
    3027 ** a53;
    v56.__proto__;
    return a52;
}
f51(128, 3027, 5n);
