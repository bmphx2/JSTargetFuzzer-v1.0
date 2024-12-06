function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9, a10) {
        const o11 = {
            "e": a10,
            [a5]: a7,
            ...f6,
        };
        return o11;
    }
    f6(9116n, 3n, f6, 9116n);
    f6(9116n, 3n, this, 0n);
    f6(0n, 0n, 9116n, 3n);
    this.h = 0n;
    this.a = 0n;
    this.f = 3n;
}
const v15 = new F3(3n);
v15.h = 9116n;
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0n;
    this.b = a18;
}
new F16(0n);
new F16(3n);
new F16(3n);
const v22 = new F3(3n);
new F3(v22);
const v31 = eval(eval);
const v33 = new Set();
[v31,[v33,F3],v33];
[v33];
