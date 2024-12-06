function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
}
new F3(-1593886410, -1463210737);
new F3(-1593886410, 536870887);
const v9 = new F3(-1593886410, -1463210737);
function f13(a14, a15, a16) {
    const o25 = {
        3967: F3,
        set f(a18) {
            for (let v19 = 0; v19 < 32; v19++) {
                this["p" + v19] = v19;
            }
        },
        "g": v9,
        "c": v9,
        "h": v9,
        "a": a14,
    };
    return o25;
}
f13(1024, -1593886410, 536870887);
f13(2147483648, -1593886410, -1463210737);
f13(536870887, 2147483648, 536870887);
new Uint32Array(3800);
new Float32Array(5);
new Uint8ClampedArray(78);
const v38 = [];
function f42(a43) {
    const o59 = {
        ...v38,
        set b(a45) {
            const o46 = {
            };
            new Proxy(this, o46);
            typeof a43 === "function";
            const o54 = {
                "maxByteLength": 2306,
            };
            const v56 = new ArrayBuffer(9, o54);
            new Int16Array(v56);
        },
        "f": -2147483649n,
        ...v38,
    };
    return o59;
}
const v60 = f42(5n);
f42(-2147483649n);
f42(8n);
const v65 = new Uint8Array(633);
const v68 = new Float64Array(128);
function F71(a73) {
    if (!new.target) { throw 'must be called with new'; }
}
const v74 = new F71(F71);
const o75 = {
};
const v77 = new Proxy(v74, o75);
v77.__proto__;
new Int16Array(3027);
const v80 = v65[12];
v60[v80];
v65.byteOffset >>= 128;
function f82(a83, a84, a85) {
    let [v86,v87,v88] = v68;
    try { v80(a84, a84, v65, v86, 5n); } catch (e) {}
    3027 ** a84;
    v87.__proto__;
    return a83;
}
f82(128, 3027, 5n);
