new Map();
try {
} finally {
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F12(-6652, -19870386, -65537n, F6);
    }
}
new Float32Array(2);
new Int8Array(6);
new Int8Array(128);
const v35 = [];
const o36 = {
};
const v38 = new Proxy(v35, o36);
try {
    o36.g = 2147483647;
    let v40 = 4294967296n;
    --v40;
    const v43 = new Date();
    v43.setMinutes();
    new v38();
} catch(e46) {
} finally {
}
