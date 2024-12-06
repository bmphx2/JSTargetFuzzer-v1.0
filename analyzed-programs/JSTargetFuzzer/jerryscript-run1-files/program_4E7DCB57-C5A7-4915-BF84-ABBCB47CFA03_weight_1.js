class C3 {
    constructor(a5) {
        let v4 = this;
        v4 = a5;
    }
    static get c() {
        let v6 = this;
        const v7 = v6++;
        function F8(a10) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a10;
            this.h = v7;
            this.f = -345.1709824648925;
        }
        const v11 = new F8(v6);
        new F8(v7);
        const v13 = new F8(v11);
        return v13;
    }
}
const v14 = new C3(C3);
const v15 = new C3(v14);
new C3(v15);
new Set();
function f20() {
    return f20;
}
function f21() {
    const o24 = {
        "b": f20,
        "e": f21,
        p() {
            for (const v23 in this) {
                break;
            }
            return f20;
        },
    };
    return o24;
}
const v27 = f21().p();
Object.defineProperty(v27, v27, { writable: true, value: 512 });
const v31 = new Date();
v31.getUTCMonth();
