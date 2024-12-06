const v5 = new Int16Array(4);
new Uint8ClampedArray(v5);
new Int8Array(512);
const v14 = new BigInt64Array(3278);
new Int32Array(239);
new Int8Array(255);
const v22 = new Int16Array(Int8Array);
let v23 = -268435456n;
function f24() {
    return v14;
}
const o25 = {
    "get": f24,
};
const v27 = new Proxy(v22, o25);
let v28 = "2";
let v30 = -14n in v27;
({"a":v28,"f":v30,} = v27);
v23++;
