const v0 = [7,-55647,-7,6,268435440,9];
const v1 = [28923,128,15823,1481721535,257];
const v2 = [-1840319037,-56912,-2147483647,9007199254740990,9007199254740992,2147483648,-4294967297,1073741825,127,9007199254740990];
function f3(a4) {
    const o15 = {
        "f": v1,
        ...v0,
        "b": a4,
        n(a6, a7) {
            const v9 = a4["some"](...v2, a7, ...a7, ...a4, ...a4);
            let v10 = 0;
            while (v10 < 6) {
                let v13;
                try { v13 = a7.toLocaleString(v9, v0); } catch (e) {}
                this[2] = v13;
                v10++;
            }
            return a4;
        },
    };
    return o15;
}
f3(v2);
const v17 = f3(v0);
f3(v1);
const v20 = [v1,f3];
[v20,f3];
[v2,v17,f3];
for (const v26 of v20) {
}
const o30 = {
    "maxByteLength": 1024,
};
const v32 = new SharedArrayBuffer(1024, o30);
new Float32Array(v32);
