function f3(a4, a5) {
    const o17 = {
        "f": 0,
        __proto__: a4,
        "b": 255,
        [a4]: a5,
        100: 255,
        get a() {
            this[1235727211] = this;
            const v8 = new WeakMap();
            super.c = v8;
            this[0];
            const o12 = {
                "maxByteLength": 2776115529,
            };
            const v14 = new ArrayBuffer(8, o12);
            const v16 = new Uint32Array(v14);
            return v16;
        },
    };
    return o17;
}
const v18 = f3(f3, 255);
const v19 = f3(1235727211, 255);
const v20 = f3(f3, 1235727211);
class C24 extends f3 {
    get h() {
        e = this || v20;
        v19[268435441] <<= 1235727211;
        const v28 = Symbol.iterator;
        const o41 = {
            [v28]() {
                let v30 = 10;
                const o40 = {
                    next() {
                        const o32 = {
                        };
                        C24(C24);
                        const o35 = {
                            ...this,
                        };
                        v30--;
                        const v38 = v30 == 0;
                        const o39 = {
                            "done": v38,
                            "value": v30,
                        };
                        return o39;
                    },
                };
                return o40;
            },
        };
        return v18;
    }
}
new C24();
new C24();
new C24();
function F45() {
    if (!new.target) { throw 'must be called with new'; }
}
const v47 = new F45();
class C48 extends F45 {
}
const v49 = new C48();
const v50 = [F45,F45,F45,F45];
const v51 = [v49,v49];
const v53 = v51[536870912];
let v54;
try { v54 = v53(); } catch (e) {}
const v56 = new Uint8Array(v51, v53, v54);
let v58 = [268435440,3,-695766318,-382622812,-4294967295,-64409,14,-1476108821,-6,-128];
function F59(a61, a62) {
    if (!new.target) { throw 'must be called with new'; }
}
[v58,F59] = v50;
(3).toString(5);
const v66 = new Uint8ClampedArray(C48, v54, v54);
const v67 = ("seal").replaceAll(v54, v54);
v66["set"](v47);
const v70 = v56[v50];
try { new Uint8Array(v67, v49, v70, v70, ...v54); } catch (e) {}
