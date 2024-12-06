function f6(a7, a8) {
    const o21 = {
        "h": a8,
        set a(a10) {
            const v11 = [a8];
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a8;
                this.g = "10000";
            }
            new F12(v11, a8, a7, a10);
            new F12(0.6819718276325696, a8, a7, "undefined");
            new F12(a7, a8, 0.6819718276325696, "256");
        },
        ..."undefined",
        [a8]: 0.6819718276325696,
    };
    return o21;
}
f6(0.6819718276325696, 3.656118915568958e+307);
f6(3.656118915568958e+307, 0.6819718276325696);
f6(0.3371479861924419, 3.656118915568958e+307);
new WeakSet();
("multiline")["x"];
const v47 = Symbol.species;
const t25 = "x";
t25[v47] = 536870887n;
const t27 = 1000n;
t27[9] = 255;
let v48;
try { v48 = v47.toString(255, "x", 1073741824n); } catch (e) {}
v48 = v47;
