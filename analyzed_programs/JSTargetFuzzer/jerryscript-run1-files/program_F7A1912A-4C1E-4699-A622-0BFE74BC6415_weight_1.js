function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.g = -10;
}
const v7 = new F3(-4294967295, 2147483649);
const v8 = new F3(v7, -10);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v7;
    this.g = a12;
    this.c = v7;
}
const v13 = new F9(-10, -4294967295);
new F9(-4294967295, v13);
new F9(-10, v13);
const v16 = new F3(v8, 2147483649);
class C17 extends F3 {
    constructor(a19, a20) {
        super(v16, -10, F3, F3, v8);
        v16[Symbol.unscopables];
    }
    static m(a25, a26, a27) {
        const v29 = Symbol.species;
        this[v16] = 2147483649;
        return v29.__proto__;
    }
}
new C17(2147483649, v8);
const v32 = [-894.1614607655206,492456.8169117365,-1e-15,1e-15,-617295.771918849,1.3943333321474277e+308,Infinity,4.0,1.0];
const v33 = [-1000.0,7.034592294388261e+307];
{
    for (let v35 = 0; v35 < 32; v35++) {
        v13["p" + v35] = v35;
    }
}
const v39 = new BigUint64Array(Array);
Object.defineProperty(v32, v39, { enumerable: true, value: v33 });
new C17(2147483649, C17);
const v41 = new C17(2147483649, v8);
(1.1973589163466798 ^ 2147483649) * -4.473924600681509;
C17[5];
v32[1868];
v33.length;
v41[10] >= F3;
