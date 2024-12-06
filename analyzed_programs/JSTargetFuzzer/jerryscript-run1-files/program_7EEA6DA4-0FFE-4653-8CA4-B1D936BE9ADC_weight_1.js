new WeakMap();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -975423184;
    this.f = a8;
    this.d = 17613;
}
new F5(17613, 17613);
new F5(17613, -5545);
new F5(-5545, 17613);
new WeakSet();
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
("multiline")["x"];
const v45 = Symbol.species;
const t31 = "x";
t31[v45] = 536870887n;
const t33 = 1000n;
t33[9] = 255;
let v46;
try { v46 = v45.toString(255, "x", 1073741824n); } catch (e) {}
v46 = v45;
