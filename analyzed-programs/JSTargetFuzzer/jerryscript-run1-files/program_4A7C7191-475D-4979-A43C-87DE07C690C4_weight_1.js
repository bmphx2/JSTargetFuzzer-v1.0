const v6 = [129,129,129,7,129];
const v7 = [51042,51042,v6,7];
const v8 = [51042,-1,v7,v7,-1809184654];
function f9(a10, a11) {
    const o18 = {
        "d": -297892649,
        ...a11,
        __proto__: v6,
        [-1809184654](a13, a14, a15, a16) {
            let v17;
            try {
            const t0 = 51042;
            v17 = t0(-297892649);
            } catch (e) {}
            return v17;
        },
        ...v8,
        "c": a11,
        "g": a11,
        [-297892649]: v7,
        "f": v8,
    };
    return o18;
}
f9(v6, v7);
f9(7, v7);
f9(7, v6);
const v23 = new BigUint64Array(BigUint64Array, BigUint64Array, f9);
const v25 = v23.buffer;
v25.slice(v25);
