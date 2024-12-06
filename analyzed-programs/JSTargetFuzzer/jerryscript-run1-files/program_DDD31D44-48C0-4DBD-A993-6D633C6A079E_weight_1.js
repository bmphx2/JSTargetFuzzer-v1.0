class C3 {
    constructor(a5) {
    }
    set g(a10) {
        function f11() {
            return this;
        }
        typeof "toString" !== "boolean";
        -this;
    }
}
const v16 = new C3(536870912);
const v17 = new C3(v16);
const v18 = new C3(C3);
const v19 = [v17,v16];
const v20 = [v17,v19];
const v21 = [v17,v17,v20,v20,v20,v19,v20,v18];
function f22(a23, a24, a25) {
    const o31 = {
        "c": -9007199254740992,
        [a23](a27, a28) {
            return v16;
            a23.__proto__ = v20;
            Object.defineProperty(this, "c", { value: v19 });
            try {
                super.valueOf("toString", a23, this, "toString");
            } catch(e30) {
            }
            return a28;
        },
        "e": "toString",
        "h": v21,
        [536870912]: v17,
    };
    return o31;
}
const v32 = f22(v19, v21, C3);
f22(v21, v32, v16);
f22(v20, v32, v18);
const t37 = Symbol.species;
t37.description <<= 2006448021;
