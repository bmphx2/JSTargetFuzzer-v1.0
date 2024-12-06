let v2 = 536870888;
const v3 = [10,v2,10,10,v2];
const v4 = [v3,128,v2,v3,v3];
if (v2) {
    v2 = 128;
} else {
    delete v4[v2];
}
const v6 = [v3];
function f7(a8, a9) {
    const o35 = {
        __proto__: a9,
        ...v4,
        get g() {
            super.d = [3,-2147483648,-65536,-34504,3,10,45110];
            const v12 = this - this;
            new f7(a9, v12, f7, v12);
            const v15 = Symbol.iterator;
            const o24 = {
                [v15]() {
                    let v17 = 10;
                    const o23 = {
                        next() {
                            v17--;
                            const v21 = v17 == 0;
                            const o22 = {
                                "done": v21,
                                "value": v17,
                            };
                            return o22;
                        },
                    };
                    return o23;
                },
            };
            const v25 = [-9007199254740990,268435440,998988882,-65536,128,-62712,-9007199254740992];
            let v26 = [52977,-13783,65537,-4294967295];
            function f27(a28, a29, a30) {
                const o31 = {
                    "c": a9,
                    __proto__: v3,
                    "g": v4,
                };
                return o31;
            }
            f27(f27(a9, this, v2), v6, 10);
            f27(this, v25, a8);
            v26 = this;
            return 10;
        },
        [v2]: a9,
        "a": a8,
        "b": a8,
    };
    return o35;
}
f7(128, f7(128, v4));
f7(128, v3);
const v45 = new Uint8Array(78);
try { v4.sort(f7); } catch (e) {}
g = -34917;
v45.reduceRight(Number);
