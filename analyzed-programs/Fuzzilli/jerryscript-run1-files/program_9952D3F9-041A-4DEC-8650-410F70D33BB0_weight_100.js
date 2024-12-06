function f0() {
    const o10 = {
        __proto__: "o",
        "c": "o",
        64: "o",
        get d() {
            super.e = this;
            let v5;
            try {
            const t0 = "-65536";
            v5 = t0("o", "-65536", "hasInstance", this, this);
            } catch (e) {}
            v5?.g;
            let {"d":v7,"g":v8,"length":v9,} = "o";
            return v9;
        },
        "a": "-65536",
        0: "-65536",
        "e": "hasInstance",
        ["-65536"]: "-65536",
    };
    return o10;
}
const v11 = f0();
f0();
const v13 = f0();
const v22 = new BigUint64Array(255);
const v25 = new Float64Array(49);
const v28 = new BigUint64Array(10);
v13[9] = v28;
function f29(a30, a31) {
    const v32 = delete v11[2925740513];
    let v33;
    try { v33 = v13.p(v32, a31); } catch (e) {}
    return v33;
}
const v34 = f29(49, v13);
f0 *= v34;
Object.defineProperty(v22, v25, { configurable: true, set: f29 });
v25.toString = v34;
