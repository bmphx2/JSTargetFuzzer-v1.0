const v0 = [-1.144185783117855e+308,0.5814897731445955,3.0,1000000000000.0,NaN,-854.9291385854285,0.9753518039942757,-Infinity,-3.155377818704217,-127.44092783563076];
const v1 = [4.741140248026592e+307,0.7428533053363406,267.31039431616364,1.5113126451397673e+308,2.2250738585072014e-308,267.8897967429284,-1000000000000.0,-Infinity];
const v2 = [0.8347609951209544,2.220446049250313e-16,-1000000000000.0,2.220446049250313e-16,-2.0,3.0,-0.9630583599314946,0.5419332485179313];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
}
new F3(v2, v1);
const v8 = new F3(v0, F3);
new F3(v0, v8);
const v13 = [];
function f17(a18) {
    const o28 = {
        ...v13,
        set b(a20) {
            const o23 = {
                "maxByteLength": 2306,
                __proto__: v13,
                "a": v1,
                100: this,
                "b": a18,
                [v8]: a20,
            };
            const v25 = new ArrayBuffer(9, o23);
            new Int16Array(v25);
        },
        "f": -2147483649n,
        ...v13,
    };
    return o28;
}
const v29 = f17(5n);
f17(-2147483649n);
-2147483649n + 5n;
const o34 = {
    "maxByteLength": 1024,
};
const v36 = new ArrayBuffer(1024, o34);
new Uint8Array(v36);
f17(8n);
const v42 = new Uint8Array(633);
const v45 = new Float64Array(128);
const o51 = {
    "maxByteLength": 1073741824,
};
const v53 = new ArrayBuffer(2, o51);
new Int16Array(v53);
new Int16Array(3027);
const v59 = v42[12];
v29[v59];
v59.byteOffset >>= 128;
function f61(a62, a63, a64) {
    let [v65,v66,v67] = v45;
    try { v59(a63, a63, v42, v65, 5n); } catch (e) {}
    3027 ** a63;
    v66.__proto__;
    return a62;
}
f61(128, 3027, 5n);
