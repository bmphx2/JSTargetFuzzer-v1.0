const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v0;
    this.c = v0;
    this.h = v0;
}
const v3 = new F1();
new F1();
new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v3;
    this.d = a8;
    this.g = F1;
}
const v9 = new F6(F1);
new F6(v0);
new F6(v9);
function f15() {
    const t20 = "223928331";
    t20[0] = F6 !== "223928331" ? F6 : "223928331";
    const v20 = Symbol.iterator;
    const o29 = {
        [v20]() {
            let v22 = 10;
            const o28 = {
                next() {
                    v22--;
                    const v26 = v22 == 0;
                    const o27 = {
                        "done": v26,
                        "value": v22,
                    };
                    return o27;
                },
            };
            return o28;
        },
    };
    let v31 = "message";
    const o36 = {
        get a() {
            let v33;
            try { v33 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v31 = v33;
            try {
                super.n();
            } catch(e35) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v31,
    };
    return o36;
}
const v37 = f15();
f15();
const v39 = f15();
[536870889,9,2147483649,-9007199254740990,64,-1736290956,7188];
[16,536870887];
[58823,-15,3203,-58477];
v9.d = F6;
new Float32Array(12);
new Int16Array(2303);
new BigInt64Array(5);
function F55(a57, a58, a59) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a57;
    this.d = 1073741825;
}
const v60 = new F55(v39, v39, 3);
const v61 = new F55(v60, v37, 3);
new F1(v37, v61, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
new Float64Array(1648);
new Float32Array(9);
new Float64Array(64);
