const v3 = [6,-41475,1073741825,-41475,-41475];
const v4 = [v3];
const v5 = [1073741825,v4,v3,1073741825,v4];
v4.c = 6;
let {"length":v6,} = v5;
v4.length;
const v15 = new Uint32Array(2);
const v18 = new Uint8ClampedArray(3010);
new Float32Array(8);
v18.length = 0;
try {
const t0 = 8;
t0(3010);
} catch (e) {}
new Int8Array(10);
new Int16Array(10);
var b = 62974n;
[-2.0];
[5.0,1e-15];
[5.0,1000000000000.0,-3.0,0.5165268958110442];
new BigUint64Array(3977);
const v41 = new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray);
const v42 = `
    function f43(a44, a45) {
        v41[a44] = v42;
        let v46;
        try { v46 = v15.includes(6, a44); } catch (e) {}
        return v46;
    }
    f43(2, f43);
    const v48 = v41.buffer;
    try { v48.resize(v48); } catch (e) {}
`;
eval(v42);
