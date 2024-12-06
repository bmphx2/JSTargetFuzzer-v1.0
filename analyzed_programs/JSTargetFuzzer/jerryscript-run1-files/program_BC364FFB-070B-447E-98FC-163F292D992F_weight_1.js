const v1 = [,,];
[,,];
[,v1,,v1,,];
new Uint32Array(1024);
new BigInt64Array(128);
new Uint8ClampedArray(256);
("multiline")["x"];
const v35 = new Int8Array(2);
const v38 = new BigUint64Array(300);
const o39 = {
    ...v38,
    [v35]: 2,
};
try { o39.getFloat32(); } catch (e) {}
const v41 = Symbol.species;
const t15 = "x";
t15[v41] = 536870887n;
const t17 = 1000n;
t17[9] = 255;
let v42;
try { v42 = v41.toString(255, "x", 1073741824n); } catch (e) {}
v42 = v41;
