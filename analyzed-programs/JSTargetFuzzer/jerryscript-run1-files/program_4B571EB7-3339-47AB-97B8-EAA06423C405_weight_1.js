const v2 = new Array(149);
const v6 = new Array(149);
Object.defineProperty(Array, v2, { value: 149 });
const v9 = Symbol.iterator;
const o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o16 = {
                    "done": v15,
                    "value": v11,
                };
                return o16;
            },
        };
        return o17;
    },
};
new Int32Array(7);
new Float64Array(512);
new Float64Array(10);
const v29 = Array(512);
let v30;
try { v30 = Array.isArray(v29); } catch (e) {}
v29.length;
if (v30) {
} else {
    for (let v35 = 0; v35 < 32; v35++) {
        v6["p" + v35] = v35;
    }
}
const v43 = [6.587821035819711e+307,4294967297n];
try { v43.toLocaleString(v43, v43); } catch (e) {}
[-2.0,-1000000.0];
[-94384.72587446368,0.19661115638478244,-193215.82292199798,-1.6803468766988842e+308,1.7976931348623157e+308,2.220446049250313e-16,-1000000000000.0,-347.67855623830474,0.806695452909416];
[0.9390298697874851,5.469293838195666,1.0,3.0];
const v50 = new Date();
v50.getUTCMinutes();
