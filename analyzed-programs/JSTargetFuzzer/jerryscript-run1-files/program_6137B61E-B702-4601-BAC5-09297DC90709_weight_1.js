function f0() {
}
function f1() {
    const o12 = {
        "c": f0,
        "g": f0,
        ...f0,
        [f0]: f0,
        [f0]() {
            let v2 = this;
            v2 <<= v2;
            let v6 = 0;
            while (v6 < 7) {
                try { f1["n"]("n", "n", f1); } catch (e) {}
                v6++;
            }
            return f0;
        },
    };
    return o12;
}
f1();
f1();
f1();
new Int32Array(4);
new BigUint64Array(178);
new Float32Array(8);
("multiline")["x"];
const v42 = Symbol.species;
const t29 = "x";
t29[v42] = 536870887n;
const t31 = 1000n;
t31[9] = 255;
let v43;
try { v43 = v42.toString(255, "x", 1073741824n); } catch (e) {}
v43 = v42;
