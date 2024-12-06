function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 31006;
}
const v3 = new F0();
const v4 = new F0();
v3.f = v4;
const v6 = Symbol.iterator;
const o15 = {
    [v6]() {
        let v8 = 10;
        const o14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                const o13 = {
                    "done": v12,
                    "value": v8,
                };
                return o13;
            },
        };
        return o14;
    },
};
const v16 = new F0();
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a19;
}
new F17(F17);
const v21 = new F17(F17);
const v22 = new F17(v4);
let v25 = -4294967295;
v16.f;
v4[2545];
({"e":v25,} = v22);
try { v25(o15, g, 512); } catch (e) {}
class C33 {
    constructor(a35, a36, a37, a38) {
        const v40 = Symbol.iterator;
        const o49 = {
            [v40]() {
                let v42 = 10;
                const o48 = {
                    next() {
                        v42--;
                        const v46 = v42 == 0;
                        const o47 = {
                            "done": v46,
                            "value": v42,
                        };
                        return o47;
                    },
                };
                return o48;
            },
        };
    }
}
new C33("1296425688", v21, "1296425688", "1296425688");
new C33("FrXx", v21, "FrXx", "1296425688");
new C33("512", v22, "FrXx", "1296425688");
const v54 = ([0.031158032500497646]).entries();
let v58 = -38769;
const v59 = v58 >> 512;
const v60 = v58--;
+v59;
v59 & v60;
new Uint8Array(v54);
