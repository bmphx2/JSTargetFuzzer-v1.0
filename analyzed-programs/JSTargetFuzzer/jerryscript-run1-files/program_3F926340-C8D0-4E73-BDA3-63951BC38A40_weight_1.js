function f3() {
    return "bigint";
}
function f10(a11, a12) {
    const o20 = {
        ...a12,
        __proto__: "o",
        toString(a14, a15, a16, a17) {
            a12[ArrayBuffer.unscopables] = -2;
            return a12;
        },
        "g": "toString",
        "a": "toString",
        "e": 65535,
    };
    return o20;
}
f10(-2, "o");
f10(-11, "toString");
f10(536870889, "bigint");
const v24 = [-1945728469,65535,-60512,15,58172,4294967295,-4096,1000];
const v25 = [127,-4294967296];
const v26 = [1262143293,15,46313,5,2147483649];
function f27() {
    return v26;
}
const v28 = [f27,f27,v25];
const v29 = [v28,v24,f27,v28];
[v29,v29];
new Float64Array(v28);
const v36 = new Uint32Array(1);
new f27(2);
const v43 = [65535n,0n,1073741824n];
let v44 = [1073741824n,1073741824n,v43,v43,v36];
const v45 = [v44,v44,v43,1073741824n,0n];
const v46 = [65535n,v44];
[v45,0n];
const v48 = [v44];
const t36 = "fdNr";
t36[0] = 65535n;
let v55;
try {
const t0 = "localeCompare";
v55 = new t0(v43, v48, 1073741824n, 58270);
} catch (e) {}
async function* f56(a57, a58, a59) {
    ({"length":a57,...v44} = v36);
    await (yield v43);
    yield "fdNr";
    return a57;
}
f56(58270, v46, v55);
