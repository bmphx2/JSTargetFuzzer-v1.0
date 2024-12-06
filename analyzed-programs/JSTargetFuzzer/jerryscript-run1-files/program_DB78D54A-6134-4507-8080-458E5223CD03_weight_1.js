function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.b = f0;
    this.a = f0;
}
let v3 = new F1();
new F1();
const v5 = new F1();
class C6 extends F1 {
    m(a8, a9) {
        super.c = a9;
        !2147483648;
        v3--;
        const v16 = Array();
        const v18 = [Array];
        Reflect.apply(v16.forEach, Array, v18);
        a8 - 2147483648;
        return v5;
    }
}
new f0();
new C6();
new C6();
const v28 = `
    WeakSet();
`;
9007199254740991 % v28;
