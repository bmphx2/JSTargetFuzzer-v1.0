function f3(a4) {
    const o15 = {
        [a4](a6, a7) {
            let v8;
            try { v8 = a7(this, -1000000000000.0, this); } catch (e) {}
            let v9;
            try { v9 = new v8(); } catch (e) {}
            const v10 = +v9;
            [,,a6] = a4;
            try { v8.seal(f3, 8.92484947852159, 8.92484947852159, f3, v8); } catch (e) {}
            Object.defineProperty(this, a7, { writable: true, configurable: true, set: f3 });
            try { a6.some(v10, -1.0, -1.0); } catch (e) {}
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
    return o15;
}
f3(-1000000000000.0);
f3(8.92484947852159);
[f3(8.92484947852159),"g","g","g"];
["boolean",[f3],"boolean"];
const v26 = ("-1604200484").__proto__;
delete v26[v26];
