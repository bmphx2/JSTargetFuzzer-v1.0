let v0 = "-1184223404";
function f3() {
    const v5 = ["toTimeString",v0];
    const v7 = new WeakSet();
    try {
        new Date(4087n, v7);
    } catch(e11) {
    } finally {
    }
    Reflect.apply(("129").padStart, "toTimeString", v5);
    v0--;
    return "toTimeString";
}
function f15() {
    return "129";
}
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = "129";
    this.h = f3;
    this.g = v0;
}
const v20 = new F16(f15, "toTimeString");
const v21 = new F16(v20, "toTimeString");
const v22 = new F16(v21, "toTimeString");
try {
    const v27 = Symbol.iterator;
    const o36 = {
        [v27]() {
            let v29 = 10;
            const o35 = {
                next() {
                    v29--;
                    const v33 = v29 == 0;
                    const o34 = {
                        "done": v33,
                        "value": v29,
                    };
                    return o34;
                },
            };
            return o35;
        },
    };
} finally {
    function f37() {
        return v0;
    }
}
async function f38(a39, a40) {
    const o47 = {
        "h": a40,
        [v0]: a39,
        [f38]: 2.2250738585072014e-308,
        "f": v22,
        "g": "129",
        p() {
            return this;
        },
        set b(a43) {
        },
    };
    return a40;
}
