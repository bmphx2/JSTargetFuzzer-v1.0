const v17 = new Int8Array(52654);
const v20 = new BigUint64Array(3);
const o21 = {
    ...v20,
    [v17]: 1000n,
};
try { o21.getFloat32(); } catch (e) {}
