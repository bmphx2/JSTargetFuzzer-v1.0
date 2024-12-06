function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -12;
    this.d = -12;
}
new F0();
new F0();
new F0();
function f6(a7) {
    const o15 = {
        get a() {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const t14 = F9(F9, a7);
            t14(a7);
            return F9;
        },
    };
    return a7;
}
f6(f6);
[54783,-268435456,46487,11,-1059659455,16,65537];
gc(10000);
new Uint8ClampedArray(2520);
new Uint32Array(8);
new Int32Array(7);
const v35 = new Uint16Array(16);
v35[5] = v35;
