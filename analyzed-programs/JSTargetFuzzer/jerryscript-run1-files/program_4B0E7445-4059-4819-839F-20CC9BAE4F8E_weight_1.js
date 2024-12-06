function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -65535;
    this.d = -65535;
    this.f = -65535;
}
new F0();
new F0();
const o5 = {
};
async function f6(a7, a8, a9, a10) {
    return await a7;
}
f6(o5);
new F0();
function f23(a24, a25) {
    for (let v26 = 0; v26 < 5; v26++) {
        const v27 = `
            function F28(a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v27);
    }
    return a24;
}
f23(f23, f23);
