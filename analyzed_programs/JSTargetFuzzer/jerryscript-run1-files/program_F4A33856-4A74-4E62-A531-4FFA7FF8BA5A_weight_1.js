function f0() {
}
const v1 = [22769,-30182,1073741823,1073741824,9007199254740990];
const v2 = [-14,-4294967297,-855100258,5,-536870912,-4294967295,-536870912];
const v3 = [1073741823,1073741825,2,-2147483648,65536];
function f4(a5) {
    const o18 = {
        "d": a5,
        [v2]: a5,
        __proto__: a5,
        n(a7, a8) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = v3;
            }
            new F9(a5, a8, a5, a5);
            new F9(v3, v2, v3, v2);
            new F9(a7, a7, a7, a5);
            return f0;
        },
    };
    return o18;
}
f4(v1);
f4(v3);
const v21 = [];
function f22() {
    Object.defineProperty(v21, "d", { value: 1e-15 });
    return 1e-15;
}
f22();
f22();
f4(v1);
const v31 = new Set();
v31.delete(v31["add"]());
