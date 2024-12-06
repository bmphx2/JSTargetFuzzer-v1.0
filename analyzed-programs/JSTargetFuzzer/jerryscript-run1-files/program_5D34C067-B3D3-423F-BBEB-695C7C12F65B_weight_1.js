function f0() {
}
class C1 extends f0 {
    valueOf() {
        const v3 = f0 instanceof f0;
        this.toString = f0;
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a6;
            this.h = a6;
            this.b = v3;
        }
        const v8 = new F4(f0, f0);
        const v9 = new F4(F4, v8);
        const v10 = new F4(v9, v3);
        return v10;
    }
}
new C1();
const v12 = new C1();
const v13 = new C1();
[v13,C1,v13,f0];
[f0,C1,f0,C1,f0];
[C1,f0,v12];
const v20 = -Infinity;
new Int16Array();
v12[v20];
const v28 = [2147483648];
Object.assign(("object").charCodeAt, v28, 2363);
