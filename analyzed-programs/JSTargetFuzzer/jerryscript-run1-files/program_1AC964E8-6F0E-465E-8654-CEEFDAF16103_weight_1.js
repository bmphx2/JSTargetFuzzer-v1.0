const v6 = ("hasInstance")[1];
const v8 = Symbol.toStringTag;
v6[v8] = v6;
try { ("hasInstance").slice(v6, v6); } catch (e) {}
const v12 = (a13, a14) => {
    try { v6(); } catch (e) {}
    const o16 = {
        "call": Symbol,
        "defineProperty": Symbol,
        "deleteProperty": Symbol,
        "get": Symbol,
        "isExtensible": Symbol,
        "ownKeys": Symbol,
        "preventExtensions": Symbol,
    };
    const v18 = new Proxy("toStringTag", o16);
    return v18;
};
const v19 = new Uint8ClampedArray(23);
const v21 = v8[9];
const t20 = "hasInstance";
t20.toString = v21;
let v22;
try { v22 = v21.deleteProperty(536870912, -5, v21); } catch (e) {}
v19[65536] = 23;
let v23 = 0;
do {
    const t27 = "-950070338";
    t27.length = v23;
    Symbol["hasInstance"];
    ("toStringTag").length;
    v23++;
} while (v23 < 1)
const v29 = ("-950070338")[3309];
const v32 = Symbol.toPrimitive;
const o37 = {
    [v32]() {
        try { this.keyFor(this, v29, v12, v29); } catch (e) {}
        try {
            super.m();
        } catch(e36) {
        }
        return v23;
    },
};
new Float32Array(8);
new Uint32Array(9);
function f44(a45) {
    return arguments;
}
const v47 = f44(5, Uint32Array);
function f48(a49, a50) {
    const o56 = {
        ...v47,
        p(a52, a53) {
            v19.__proto__;
            try { v6(); } catch (e) {}
            return v22;
        },
    };
    return o56;
}
f48();
f48();
