try {
} finally {
    function F11(a13, a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
    }
}
const v21 = new Int8Array(2);
const v24 = new BigUint64Array(300);
const o25 = {
    ...v24,
    [v21]: 2,
};
try { o25.getFloat32(); } catch (e) {}
