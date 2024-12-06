function f0() {
    const o12 = {
        ["p"]: 7,
        1073741825: 7,
        ...7,
        0: 7,
        toString(a5) {
            function F6(a8) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = this;
                this.c = a5;
            }
            const v9 = new F6(F6);
            new F6(v9);
            const v11 = new F6(F6);
            return v11;
        },
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v15 = f0();
new Date();
function f21(a22, a23) {
    const o30 = {
        "b": v14,
        ...Date,
        "g": v15,
        8: -259450850,
        get c() {
            Object.defineProperty(this, "c", { configurable: true, enumerable: true, value: a22 });
            Object.defineProperty(v13, 3, { value: a23 });
            return v14 === Date ? v14 : Date;
        },
    };
    return o30;
}
f21(v15, v13);
f21(f21(v13, v15), v14);
function f36() {
    return -20593;
}
class C37 extends f36 {
    constructor(a39, a40) {
        const v41 = -20593 != this;
        v41 ? -20593 : a39;
        this[v41] = a40.__proto__;
    }
}
