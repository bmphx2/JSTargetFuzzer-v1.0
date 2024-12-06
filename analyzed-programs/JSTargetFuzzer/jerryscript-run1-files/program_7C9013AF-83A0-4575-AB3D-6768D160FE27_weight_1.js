class C3 {
    static p(a5) {
        -9007199254740991n < a5 ? -9007199254740991n : a5;
        return 4n;
    }
    f;
    #d = -9007199254740991n;
    4 = -9007199254740991n;
    e;
    g;
}
const v8 = new C3();
const v9 = new C3();
const v10 = new C3();
function f11() {
    return v10;
}
class C12 {
    constructor(a14, a15, a16) {
        try { this["setBigInt64"](a14, -9007199254740991n); } catch (e) {}
        this.a = a15;
    }
    #f = -9007199254740991n;
    [4n];
    static e = v9;
    static c = 4n;
    b;
}
const v19 = new C12(4n, 9223372036854775807n, 9223372036854775807n);
const v20 = new C12(9223372036854775807n, 9223372036854775807n, 4n);
new C12(-9007199254740991n, -9007199254740991n, 4n);
const v22 = v8.__proto__;
let v26 = 0;
while (v26 < 8) {
    const v30 = [v19,v20,v22,v22];
    Reflect.apply(C3.p, v9, v30);
    v26++;
}
