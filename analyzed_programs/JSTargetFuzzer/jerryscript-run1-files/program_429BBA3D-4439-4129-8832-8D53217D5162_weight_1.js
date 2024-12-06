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
f17(8n);
const v34 = new Uint8Array(633);
const v37 = new Float64Array(128);
new Int16Array(3027);
const v41 = v34[12];
v29[v41];
v41.byteOffset >>= 128;
function f43(a44, a45, a46) {
    let [v47,v48,v49] = v37;
    try { v41(a45, a45, v34, v47, 5n); } catch (e) {}
    3027 ** a45;
    v48.__proto__;
    return a44;
}
f43(128, 3027, 5n);
