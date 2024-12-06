const v0 = [2.2899013859782045,4.0,0.02471336034308802,4.0];
const v1 = [-Infinity];
const v2 = [0.22096619193953038,1.0896834671379084e+308,-0.34745950590455976,-915.068384260749,0.9184623108439567,8.487322851918368];
function f6(a7, a8, a9, a10) {
    const o21 = {
        "a": a7,
        [a8](a12, a13, a14, a15) {
            let v16;
            try { v16 = a10(v0, "h"); } catch (e) {}
            try { new v16(a15, v16, v1); } catch (e) {}
            return a8[Symbol.asyncIterator];
        },
        "c": "string",
        [v2]: "string",
    };
    return o21;
}
let v22 = f6(v1, "h", v2, "h");
const v23 = f6(v2, "string", v0, v1);
const v24 = f6(v2, "268435456", v1, v2);
let v25 = v24 | "h";
[v22,,v25] = v0;
function f29(a30, a31, a32) {
    const o39 = {
        __proto__: v1,
        get b() {
            try {
                super.p(this);
            } catch(e35) {
            }
            new Int8Array([]);
            return "h";
        },
        "e": a32,
        ...a30,
        "b": v24,
    };
    return o39;
}
f29(f29("string", v2, "string", v23, v25, f29), v1, "string");
f29(v0, v0, "h");
const v44 = new Map();
v44.get();
