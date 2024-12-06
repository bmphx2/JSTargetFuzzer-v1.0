function f0() {
}
function f1() {
    const o22 = {
        set e(a3) {
            let v4 = 0;
            while (v4 < 1) {
                v4.f = f0;
                super.b = f1;
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
                f0(a3, a3, this, v4);
                try {
                    super.getMilliseconds(this, this, v4, a3, f0);
                } catch(e20) {
                }
                v4++;
            }
        },
    };
    return f1;
}
const v23 = f0();
const v24 = f1();
const v25 = f1();
[f1,v25,v23,v24,v25];
[v23,v24,v23];
const v28 = [v24];
new Uint32Array(Uint32Array);
new v25(1210);
new Float64Array(10);
("multiline")["x"];
const v55 = Symbol.species;
const t49 = "x";
t49[v28] = 1000n;
const t51 = 1000n;
t51[9] = 255;
let v56;
try { v56 = v55.toString(255, "x", 1073741824n); } catch (e) {}
v56 = v55;
