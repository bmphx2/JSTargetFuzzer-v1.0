function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    function f10(a11, a12) {
        const o13 = {
        };
        return o13;
    }
    const v14 = f10(f10, f10);
    Object.defineProperty(f10(v14, v14), 6, { configurable: true, get: f10 });
    for (let i = 0; i < 5; i++) {
        for (let v16 = 0; v16 < 32; v16++) {
            v14["p" + v16] = v16;
        }
    }
    this.h = a8;
}
new F6(13, 13);
new F6(4294967297, -48404);
new F6(4294967297, -4);
const v22 = `
    [-2.220446049250313e-16,-436.0343166790291];
    const v24 = \`
    \`;
`;
