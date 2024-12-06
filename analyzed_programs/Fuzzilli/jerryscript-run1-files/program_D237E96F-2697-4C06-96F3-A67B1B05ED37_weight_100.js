function f0() {
}
function f1() {
    const o8 = {
        2: f0,
        "c": f0,
        [f0]: f0,
        valueOf() {
            let v3 = 10;
            for (; v3--;) {
                this[Symbol.toStringTag];
            }
            return f0;
        },
    };
    return o8;
}
const v9 = f1();
const v10 = f1();
const v11 = f1();
let v13 = "global";
function f15(a16, a17, a18) {
    const o24 = {
        __proto__: "536870888",
        get g() {
            a17 = this * this;
            return f1;
        },
        "f": a17,
        [v10]: v11,
        2031810666: a17,
    };
    return o24;
}
const v25 = f15(v11, v11, v10);
f15(v13, f0, f15(v25, f15, v11));
if (v25) {
    v13++;
    Math.sinh(f15);
    v9 | f15;
    Math.atan2(f15, -4096);
    Math.atan(v13);
    Math.acos(f15);
    ~v9;
} else {
    function f38() {
        return "1073741825";
    }
}
