const v0 = [];
class C1 {
    constructor() {
        this[v0] = this;
        const v3 = super.b;
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = v3;
            this.d = this;
            this.f = a7;
        }
        new F4(this, v0);
        new F4(F4, F4);
        new F4(this, v0);
    }
}
const v11 = new C1();
new C1();
const v13 = new C1();
function f15(a16, a17, a18) {
    const o35 = {
        268435440: a17,
        set h(a20) {
            const v21 = v11[a17];
            let [] = a18;
            new C1();
            try { v21(a17, a16); } catch (e) {}
        },
        "d": v13,
        __proto__: a17,
        get e() {
            const o31 = {
                "apply": 1000000000.0,
                "call": f15,
                "construct": f15,
                "deleteProperty": f15,
                "get": f15,
                "getOwnPropertyDescriptor": 1000000000.0,
                "getPrototypeOf": f15,
                "has": f15,
                "isExtensible": f15,
                "ownKeys": f15,
                "set": f15,
                "setPrototypeOf": f15,
            };
            new Proxy(v0, o31);
            Object.defineProperty(this, "d", { writable: true, configurable: true, value: a18 });
            a16.b = a17;
            C1.length = 1;
            return false;
        },
    };
    return o35;
}
f15(v11, v13, C1);
f15(C1, v13, f15(v13, C1, v11));
[-4294967296,64,15,536870887,25980,10000,-1];
[-4294967296,-12,-12425];
[-9007199254740991,-6,2,6909];
const v42 = [1000000000.0,-6.226410718148294,2.0];
for (let i45 = 0; i45 < 8; i45++) {
    const v51 = i45 % v42;
    try { ("g").includes(v51); } catch (e) {}
}
