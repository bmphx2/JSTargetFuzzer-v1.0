function f0() {
}
const v3 = new Float64Array(9);
const v6 = new Int16Array(255);
const v9 = new Int8Array(10);
function f10(a11, a12, a13) {
    const o14 = {
        __proto__: v9,
        "c": a12,
    };
    return o14;
}
f10(255, 10, 255);
const v16 = f10(9, 10, 255);
f10(10, 10, 255);
for (const v23 in v6) {
    const v24 = v3.byteLength;
    v9["join"](...v3, v23, v23, 1073741824, v24, v24);
}
const v28 = [65535n,0n,964329252n];
let v29 = [255,964329252n,v28,v28];
const v30 = [v29,v29,v28,964329252n,0n];
const v31 = [65535n,v29];
const v32 = [v30,0n];
v32[v32] = v28;
let {"length":v33,} = v32;
const v34 = v32.length;
f0();
e = v34;
const v36 = [v29];
for (let i43 = 0; i43 < 2; i43++) {
    i43 **= i43;
}
print(1300);
const t33 = "fdNr";
t33[0] = 65535n;
let v53;
try {
const t0 = "localeCompare";
v53 = new t0(v28, v36, v36, 58270);
} catch (e) {}
async function* f54(a55, a56, a57) {
    ({"length":a55,...v29} = a56);
    yield v28;
    await a55;
    yield "fdNr";
    const o63 = {
        "maxByteLength": a57,
    };
    const v65 = new ArrayBuffer(6, o63);
    v16.__proto__;
    v65.maxByteLength;
    new Int32Array(1000);
    new Uint8Array(4025);
    new BigInt64Array(0);
    new Int8Array(v65);
    return a55;
}
f54(58270, v31, v53);
