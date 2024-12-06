function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
    this.h = a11;
}
const v12 = new F6(15, -2, 255, -9);
const v13 = new F6(-2, -2, v12, -9);
const v14 = new F6(15, -2, v13, 255);
function f15(a16, a17) {
    const o31 = {
        "h": F6,
        "d": F6,
        "c": v14,
        set a(a19) {
            const v21 = Symbol.iterator;
            const o30 = {
                [v21]() {
                    let v23 = 10;
                    const o29 = {
                        next() {
                            v23--;
                            const v27 = v23 == 0;
                            const o28 = {
                                "done": v27,
                                "value": v23,
                            };
                            return o28;
                        },
                    };
                    return o29;
                },
            };
        },
    };
    return o31;
}
const v32 = f15(v13, -9);
const v33 = f15(v13, -9);
const v34 = f15(v32, 1073741823);
function f35() {
}
new Uint8Array(0);
let v49 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v51 = new Int32Array(127);
v49 /= v51;
function f52(a53, a54) {
    const o55 = {
        "e": "2147483647",
        "f": v14,
    };
    return o55;
}
f52(v32, v34);
f52(v32, v33);
f52(v34, v12);
new WeakSet();
let v65 = 0;
do {
    ("2147483647")[Symbol.replace];
    v65++;
} while (v65 < 3)
new BigInt64Array(2);
([5]).reverse();
