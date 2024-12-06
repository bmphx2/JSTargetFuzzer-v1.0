function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 7;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[-1.0,0.4940734353030771,-4.9106464480081975,2.220446049250313e-16];
const v10 = [-1e-15,0.4578708762180598,718597.9952636682,-3.2262077590917464,-3.9767115686756465e+307];
const v11 = [806804.8113578954,-8.400235583902651,-2.0,6.054965441408498,-6.515190413986003,-1000.0,-4.0,-0.0];
function f12(a13, a14, a15) {
    const o25 = {
        "e": v3,
        p(a17, a18, a19) {
            v5 < a17 ? v5 : a17;
            return v4;
        },
        64: a13,
        __proto__: v5,
        131: a15,
    };
    return o25;
}
f12(v11, v5, "number");
f12(v11, "o", "o");
const v28 = f12(v10, "36124", "36124");
function f29() {
    const v30 = -Infinity;
    const o38 = {
        "g": 255,
        valueOf(a34) {
            a34.valueOf = a34;
            for (const v35 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v30);
                } catch(e37) {
                }
            }
            return 255;
        },
        [v30]: v30,
        "d": -1033928124,
    };
    return o38;
}
const v39 = f29();
const v40 = f29();
const v41 = f29();
function f45(a46, a47, a48, a49) {
    const o66 = {
        ...v40,
        "g": 4.0,
        set a(a51) {
            a51[a46] = a51;
            try { a51(this); } catch (e) {}
            for (let v56 = 0; v56 < 32; v56++) {
                const t56 = "36124";
                t56["p" + v56] = v56;
            }
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o66;
}
const v67 = f45(v41, 1000000000000.0, 1000000000000.0, 1000000.0);
f45(v40, 1000000000000.0, 1000000000000.0, 1000000.0);
const v69 = f45(v39, 4.0, 4.0, 1000000000000.0);
const o73 = {
    __proto__: v67,
    4037: v40,
    "a": v41,
};
const o74 = {
    "h": v28,
    ...v69,
    "f": f45,
    "c": f45,
    "b": v39,
};
