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
    const o22 = {
        __proto__: a9,
        ...v4,
        get g() {
            [3,-2147483648,-65536,-34504,3,10,45110];
            const v12 = [-9007199254740990,268435440,998988882,-65536,128,-62712,-9007199254740992];
            let v13 = [52977,-13783,65537,-4294967295];
            function f14(a15, a16, a17) {
                const o18 = {
                    "c": a9,
                    __proto__: this,
                    "g": v4,
                };
                return o18;
            }
            f14(f14(a9, this, v2), v6, 10);
            f14(this, v12, a8);
            v13 = this;
            return v2;
        },
        [v2]: a9,
        "a": a9,
        "b": a8,
    };
    return o22;
}
f7(128, v4);
f7(128, v6);
f7(128, v3);
const v32 = new Uint8Array(78);
try { v4.sort(f7); } catch (e) {}
g = -34917;
v32.reduceRight(Number);
