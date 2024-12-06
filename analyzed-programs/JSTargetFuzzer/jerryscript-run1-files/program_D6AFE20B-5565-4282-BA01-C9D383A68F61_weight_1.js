function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v7 = new F3("m", "m");
const v8 = new F3("number", "m");
const v9 = new F3("m", v8);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a15;
    this.a = "c";
}
const v16 = new F10("m", v8, v8, "number");
const v17 = new F10("c", v8, v9, "c");
const v18 = new F10("c", v17, v7, "c");
try { v16.all(v8, v17, "number"); } catch (e) {}
const v20 = v9 >> v9;
try { ("c").charAt(v20); } catch (e) {}
const v23 = Symbol.iterator;
const o32 = {
    [v23]() {
        let v25 = 10;
        const o31 = {
            next() {
                v25--;
                const v29 = v25 == 0;
                const o30 = {
                    "done": v29,
                    "value": v25,
                };
                return o30;
            },
        };
        return o31;
    },
};
function f33() {
    return v18;
}
with (v9) {
}
const t41 = "number";
delete t41[280];
Math.trunc(0.5680262004501945);
