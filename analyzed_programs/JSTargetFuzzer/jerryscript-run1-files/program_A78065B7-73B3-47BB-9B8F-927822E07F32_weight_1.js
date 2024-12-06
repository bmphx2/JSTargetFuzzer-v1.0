function f0() {
    const o5 = {
        get d() {
            super.g = this;
            return "source";
        },
        [1073741825]: 8,
        "a": 8,
        __proto__: "source",
        "b": "source",
        "f": "source",
        "e": 8,
    };
    return o5;
}
f0();
f0();
f0();
new WeakSet();
const v17 = [-47.84703007518738,0.28153212009585815,-2765.002986162319,5.121464143211062e+307,-689959.9434435563,52370.156167532085,-4.0,106174.3506570668,0.3673928104761456];
const v19 = new WeakMap();
v19["get"](v17);
