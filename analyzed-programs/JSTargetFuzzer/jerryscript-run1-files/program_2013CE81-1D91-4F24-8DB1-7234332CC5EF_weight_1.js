function f0() {
}
let v1 = 2147483648;
let v9 = -25178n;
function f10() {
    return 383275434n;
}
class C11 {
    static d;
    static set c(a13) {
        a13[Symbol.toPrimitive] = v9;
    }
    static [f0] = 23505;
    o(a17, a18, a19, a20) {
        const v21 = `
            v9 = -256n;
            v1 -= a18;
            this.toString = f0;
        `;
        eval(v21);
        return this;
    }
}
new C11();
new C11();
new C11();
C11[4];
const v34 = ([-16,4]).slice(45103);
const v37 = new BigInt64Array(2863);
v37[9] = v34;
