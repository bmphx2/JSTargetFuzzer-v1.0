new Uint32Array(2160);
new BigUint64Array(57);
new SyntaxError(8, 2160, BigUint64Array, 2160);
new Int16Array(2160);
new Int16Array(256, SyntaxError);
new Float32Array(2793);
function f18(a19, a20) {
    for (let v21 = 0; v21 < 5; v21++) {
        const v22 = `
            function F23(a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v22);
    }
    return 256;
}
f18(f18, f18);
