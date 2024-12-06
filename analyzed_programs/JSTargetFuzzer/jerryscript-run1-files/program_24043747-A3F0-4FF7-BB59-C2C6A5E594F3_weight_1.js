const v1 = new WeakSet();
function f5() {
    return v1;
}
new WeakMap();
const v11 = [];
function f15(a16) {
    const o26 = {
        ...v11,
        set b(a18) {
            const o21 = {
                "maxByteLength": 2306,
            };
            const v23 = new a16(9, o21);
            new Int16Array(v23);
        },
        "f": 8n,
        ...v11,
    };
    return o26;
}
const v27 = f15(5n);
f15(-2147483649n);
f15(8n);
const v32 = new Uint8Array(633);
const v35 = new Float64Array(128);
new Int16Array(3027);
const v39 = v32[12];
v27[v39];
v32.byteOffset >>= 128;
function f41(a42, a43, a44) {
    let [v45,v46,v47] = v35;
    try { v39(a43, a43, v32, v45, 5n); } catch (e) {}
    3027 ** a43;
    v46.__proto__;
    return a42;
}
f41(128, 3027, 5n);
