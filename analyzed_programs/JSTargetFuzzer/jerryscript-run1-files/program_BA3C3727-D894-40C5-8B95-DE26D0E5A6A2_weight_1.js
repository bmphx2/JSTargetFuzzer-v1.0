const v0 = [];
function f4(a5) {
    const o14 = {
        "e": a5,
        valueOf(a7, a8) {
            const o9 = {
            };
            new String(this, o9);
            const v12 = super.b;
            try { v12(); } catch (e) {}
            return a5;
        },
        "a": 4.0,
        [NaN]: NaN,
    };
    return o14;
}
const v15 = f4(4.0);
const v16 = f4(NaN);
const v17 = f4(1000000.0);
const v21 = [-15,v15];
const v22 = [NaN,NaN,v21,v16,1108444890];
[v17,v22,NaN,v0,v22,v21,v22];
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    a30 != 5n;
}
new F27(-4294967296, -7n);
