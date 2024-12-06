function f3(a4, a5) {
    const o13 = {
        [a4]: a4,
        __proto__: a5,
        "h": 1024,
        toString(a7, a8) {
            a8.__proto__ = a8;
            try { a7(-48124, -48124); } catch (e) {}
            return 1024;
        },
        "b": a5,
        "a": a5,
        "f": -48124,
        [1024]: -2147483649,
    };
    return o13;
}
const v14 = f3(1024, -2147483649);
const v15 = f3(1024, -48124);
f3(1024, 1024);
class C17 {
    [f3];
    get g() {
        try { this.getUint8(v15, this, this); } catch (e) {}
        new Array(64);
        return v15;
    }
    a;
    get e() {
        const v24 = [v15,this,v14];
        [v24,v24,this,v24,1024];
        [this];
        return C17;
    }
}
new C17();
new C17();
new C17();
([2.220446049250313e-16,-3.6563428319836785e+307,-344.87920900417566,-1000.0])["keys"]();
