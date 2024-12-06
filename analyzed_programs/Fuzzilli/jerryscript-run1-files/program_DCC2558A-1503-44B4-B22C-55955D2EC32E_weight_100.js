let v4 = -4096;
class C6 {
    valueOf(a8, a9) {
        let v10;
        try {
        const t0 = -22987;
        v10 = new t0(a9, a8, this);
        } catch (e) {}
        try {
            super.o(1.3578333733084881e+308, 584.2341880084425, v10, -22987, v10);
        } catch(e12) {
        }
        return 6.1570345604365215;
    }
    #b = 584.2341880084425;
    static 2 = v4;
}
new C6();
const v14 = new C6();
new C6();
v4 = -22987;
const v17 = Symbol.toPrimitive;
const o23 = {
    [v17]() {
        Symbol(v14);
        const o20 = {
            "deleteProperty": Symbol,
            "ownKeys": Symbol,
            "set": Symbol,
            "setPrototypeOf": Symbol,
        };
        new Proxy(this, o20);
        return v4;
    },
};
