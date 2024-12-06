const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
    this.d = a5;
}
new F2(F2, v1);
const v7 = new F2(WeakMap, v1);
new F2(v7, v7);
class C9 {
    set g(a11) {
        let v10 = this;
        const v12 = [v1,v10,v7];
        const v13 = [v7,a11,v12,v7,v10];
        const t14 = [v13];
        t14[128] *= a11;
        ({"b":a11,"length":v10,...F2} = v12);
        v13 == a11;
    }
    #b = F2;
    1 = F2;
    static c;
    static e;
    static f;
    #h;
}
const v16 = new C9();
new C9();
const v18 = new C9();
v18.valueOf = v7[3];
"kN3pB" & -7.759710495427301;
v16.valueOf = ("kN3pB")[1];
let v32 = v1 ^ 632.9136947574439;
2.3475689699005464 || -7;
++v32;
-632.9136947574439;
