const v1 = new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a4;
    this.a = a4;
    this.e = a4;
}
new F2(F2);
new F2(v1);
new F2(WeakMap);
new F2();
class C20 {
    get e() {
        const v22 = `
            const o25 = {
                "maxByteLength": 451053062,
            };
            const v27 = new SharedArrayBuffer(this, o25);
            new DataView(v27);
        `;
        eval(this);
        return v1;
    }
}
new C20();
new C20();
new C20();
const v42 = new Map();
Math.pow(-2147483648, -54662);
Math.tanh(-2147483648 - v42);
Math.fround(v42);
