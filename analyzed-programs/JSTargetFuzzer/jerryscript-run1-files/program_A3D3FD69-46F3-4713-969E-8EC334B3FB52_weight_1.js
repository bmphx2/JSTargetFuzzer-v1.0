function f3() {
    return 512;
}
class C13 {
    get g() {
        this[4294967295] = this;
        let v15;
        try { v15 = new C13(536870888, this, -62017, 7); } catch (e) {}
        return v15;
    }
    valueOf(a17, a18) {
        super.a = 7;
        const v20 = Symbol.iterator;
        const o29 = {
            [v20]() {
                let v22 = 10;
                const o28 = {
                    next() {
                        v22--;
                        const v26 = v22 == 0;
                        const o27 = {
                            "done": v26,
                            "value": v22,
                        };
                        return o27;
                    },
                };
                return o28;
            },
        };
        return o29;
    }
}
new C13();
new C13();
new C13();
function f34() {
    return -2.0;
}
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
}
const v41 = new F35(F35, F35, F35, F35);
const v42 = new F35();
const o43 = {
    "deleteProperty": f34,
};
const v45 = new Proxy(v42, o43);
const v46 = [9,-1314550274,-6,-21927,11,39852,15,1816348659,0,4];
delete v45[108704231];
Reflect.apply(v46.slice, v41);
