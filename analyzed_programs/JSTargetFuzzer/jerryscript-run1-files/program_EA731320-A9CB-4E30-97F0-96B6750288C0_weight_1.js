function f3(a4, a5) {
    const o14 = {
        [a5]: a4,
        __proto__: a4,
        [9n](a7, a8) {
            try { this.toString(a4, 536870889n, a7); } catch (e) {}
            a7 **= a8;
            this[536870889n] = a8;
            ReferenceError.apply();
            try { a4["n"](a4, "n"); } catch (e) {}
            return 9n;
        },
        [-256n]: -256n,
        ...a4,
        [a4]: 536870889n,
    };
    return o14;
}
f3(f3(-256n, -256n), -256n);
f3(f3, -256n);
const v27 = new Uint32Array(181);
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v27;
try { v29["abs"](181, v31, v29); } catch (e) {}
new Uint16Array(v31);
for (let i44 = 0; i44 < 2; i44++) {
    const v50 = new Function("xX7QN");
    v50.name;
}
Function();
