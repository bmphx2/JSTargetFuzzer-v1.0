const v3 = ["bigint","bigint","size","-9007199254740991"];
[[v3,v3,v3,v3],"size","bigint"];
const v11 = new Uint16Array(1024);
try { Uint16Array(v11); } catch (e) {}
new Int32Array(9);
new BigInt64Array(207);
const v28 = [65535n,0n,964329252n];
let v29 = [964329252n,964329252n,v28,v28];
const v30 = [v29,v29,v28,964329252n,0n];
const v31 = [65535n,v29];
[v30,0n];
const v33 = [v29];
const t12 = "fdNr";
t12[0] = 65535n;
let v40;
try {
const t0 = "localeCompare";
v40 = new t0(v28, v33, v33, 58270);
} catch (e) {}
async function* f41(a42, a43, a44) {
    ({"length":a42,...v29} = a43);
    yield v28;
    await a42;
    yield "fdNr";
    return a42;
}
f41(58270, v31, v40);
