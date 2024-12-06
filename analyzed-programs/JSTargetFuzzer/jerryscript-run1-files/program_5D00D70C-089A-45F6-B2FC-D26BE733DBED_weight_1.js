class C3 {
    static ["isFrozen"] = "isFrozen";
    #f;
    static set h(a5) {
        try {
            const t5 = "isFrozen";
            t5.#f = -65535;
        } catch(e6) {
        }
        const v7 = this["isFrozen"];
        function F8(a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = v7;
        }
        new F8(v7, v7, -65535);
        const v14 = new F8(a5, F8, this);
        new F8(a5, v14, v14);
    }
}
new C3();
const v17 = new C3();
const v18 = new C3();
class C20 extends C3 {
    8 = undefined;
    ["deref"];
    static toString(a22, a23) {
        const v24 = a22.__proto__;
        if (v24) {
            a23 = v24;
        } else {
            const v25 = a22.a;
            try { new v25(a23, v25); } catch (e) {}
        }
        return v17;
    }
    a;
    static [-65535] = v18;
}
const v27 = new C20();
new C20();
const v29 = new C20();
function f30() {
    return v27;
}
[-1449248128,65537,-37593,9007199254740992];
let v32 = [10,26484,65537,-268435456,-44494,16,-316912532,-9223372036854775808,7];
[-65535,9007199254740991,4294967297,-1024,-3,268435440,5];
({"f":C3,"g":v32,} = v18);
f30 = WeakSet;
function f35() {
    for (let v37 = 0; v37 < 32; v37++) {
        v29["p" + v37] = v37;
    }
    return arguments;
}
f35("deref");
