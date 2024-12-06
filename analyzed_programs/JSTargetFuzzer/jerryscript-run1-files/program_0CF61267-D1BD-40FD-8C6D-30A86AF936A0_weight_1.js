function f0() {
}
function f1() {
    const o9 = {
        ...f0,
        set c(a3) {
            a3[Symbol.toPrimitive] = this;
        },
        [f0]: f0,
        0: f0,
        2147483648: f0,
    };
    return o9;
}
const v10 = f1();
const v11 = f1();
let v12 = f1();
class C13 extends f1 {
    1;
    constructor(a15, a16) {
        super();
        v12 = a16;
        this.toString = f1;
    }
    2 = f0;
    static m(a18) {
        const v19 = v12 || this;
        for (let v20 = 0; v20 < 32; v20++) {
            v19["p" + v20] = v20;
        }
        return this;
    }
}
new C13(v11, v10);
new C13(v10, v11);
new C13(v11, v10);
new Int16Array(129);
new Uint16Array(256);
Math.log(Math);
class C37 extends v11.constructor {
}
new BigInt64Array(3238);
function F39() {
    if (!new.target) { throw 'must be called with new'; }
}
const v41 = new F39();
const v42 = new F39();
const v43 = [v42];
[v41,v43,v43];
class C45 {
    valueOf(a47, a48, a49, a50) {
    }
}
const v51 = new C45();
0.0 ** 11;
0.0 & 11;
0.0 * v51;
new BigInt64Array(3847);
