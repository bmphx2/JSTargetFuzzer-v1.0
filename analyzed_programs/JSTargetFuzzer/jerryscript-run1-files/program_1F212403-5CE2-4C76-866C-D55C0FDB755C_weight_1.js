function f3(a4) {
    const o12 = {
        [a4](a6, a7) {
            let v8;
            try { v8 = a7(this, -1000000000000.0, this); } catch (e) {}
            let v9;
            try { v9 = new v8(); } catch (e) {}
            +v9;
            return -1.0;
        },
        ...a4,
        "g": a4,
        get f() {
            return a4;
        },
        __proto__: a4,
        "f": a4,
        "g": -1000000000000.0,
        "a": a4,
    };
    return o12;
}
f3(-1000000000000.0);
f3(8.92484947852159);
[f3(8.92484947852159),"g","g","g"];
["boolean",[f3],"boolean"];
const v23 = ("-1604200484").__proto__;
delete v23[v23];
