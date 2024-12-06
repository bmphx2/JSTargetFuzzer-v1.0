let v0 = "-1184223404";
function f3() {
    const v5 = ["toTimeString",v0];
    Reflect.apply(("129").padStart, "toTimeString", v5);
    v0--;
    return "toTimeString";
}
function f9() {
    return "129";
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = "129";
    this.h = f3;
    this.g = v0;
}
const v14 = new F10(f9, "toTimeString");
const v15 = new F10(v14, "toTimeString");
new F10(v15, "toTimeString");
try {
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
} finally {
    function f31() {
        return v0;
    }
}
async function f32(a33, a34) {
    const o41 = {
        p() {
            return this;
        },
        set b(a37) {
        },
    };
    return a34;
}
