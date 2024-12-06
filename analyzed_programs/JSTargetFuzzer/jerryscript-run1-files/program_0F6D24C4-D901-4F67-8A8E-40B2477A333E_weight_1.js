new Array(2641);
const v5 = new Float64Array(105);
new BigUint64Array(127);
const v11 = new Int32Array(255);
const v16 = [14n,14n,127,Int32Array];
const v18 = [v5,Array,v16,65536n,[127,v11,65536n,65536n,255]];
const o19 = {
    __proto__: v5,
    "b": 255,
    "e": Int32Array,
    [2n]: 255,
    [v16]: v18,
};
const v21 = new Proxy(Array, o19);
v21();
