function f3(a4) {
    const o34 = {
        valueOf(a6, a7) {
            this - a6;
            return a6;
        },
        [a4]() {
            let v10 = 10;
            const o20 = {
                next() {
                    const v12 = v10--;
                    const v14 = v10 == 0;
                    const o19 = {
                        __proto__: this,
                        "h": a4,
                        p(a16, a17) {
                            return a16.valueOf(this, this);
                        },
                        "done": v14,
                        "h": "5i",
                        2683: v14,
                        "e": a4,
                        "a": a4,
                        ...this,
                        "value": v10,
                    };
                    return v12;
                },
            };
        },
        o(a22) {
            function F23(a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                Object.defineProperty(a26, 129, { set: f3 });
                this.g = "680998363";
                this.h = "5i";
            }
            const v31 = new F23("-12", "680998363");
            new F23("680998363", a4);
            const v33 = new F23(v31, a22);
            return v33;
        },
        "h": "-12",
        __proto__: "-12",
    };
    return o34;
}
f3("680998363");
f3("5i");
f3("-12");
new Int32Array(236);
new Int16Array(1);
new Uint8Array(2499);
const v49 = new Uint32Array(181);
let v51 = BigUint64Array;
let v52 = new v51(1);
let v53 = 253;
let v54 = 0;
v54++;
let v57;
try { v57 = undefined.o(undefined, undefined, undefined); } catch (e) {}
const v59 = [,,];
function f60(a61, a62) {
    return f60;
}
Object.defineProperty(v59, -9.980181287646149, { configurable: true, get: f60, set: v57 });
[v53,,v51,v52] = v49;
try { v51["abs"](181, v53, v51); } catch (e) {}
new TypeError();
Symbol.toStringTag;
new Int8Array(55);
new Uint16Array(v53);
for (let i82 = 0; i82 < 2; i82++) {
    const v88 = new Function("x");
    v88.name;
}
Function();
