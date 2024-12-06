class C3 {
    static #f = "c";
    static #o(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return this;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
function f21(a22, a23, a24) {
    const o27 = {
        "e": v20,
        __proto__: a23,
        "d": 127,
        "h": "c",
        "a": "function",
        "c": a24,
        "g": "function",
        "f": a24,
        get b() {
            const v26 = this.__proto__;
            v26[C3] *= v26;
            a24.f = v18;
            return v19;
        },
    };
    return o27;
}
f21(v20, v20, C3);
const v29 = f21(v18, f21, C3);
const v30 = f21("c", "c", v20);
class C31 {
    static #b;
    set f(a33) {
        super.f;
        try {
            v29.#b = a33;
        } catch(e35) {
        }
    }
    #toString(a37, a38, a39, a40) {
        function f41() {
            return v20;
        }
        this.__proto__;
        let v43;
        try { v43 = v29.getMinutes(f41); } catch (e) {}
        v43?.["c"];
        return v18;
    }
}
const v45 = new C31();
new C31();
const v47 = new C31();
try { v18.clz32(v47, v30, v20, v45, v47); } catch (e) {}
const v49 = v29[65537];
const v51 = Symbol.toPrimitive;
C31[v51] = C31;
v51[C31] &&= 127;
const v52 = f21(v20, "function", v19);
[] = "function";
v30[v52] = v47;
try { v49(v19, v20, C3); } catch (e) {}
