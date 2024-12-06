function f0() {
    let v1 = "toString";
    const o7 = {
        "h": -183569378,
        __proto__: v1,
        get f() {
            v1 = "boolean";
            function f5() {
                return this;
            }
            Object.defineProperty(v1, 6, { enumerable: true, value: f5() });
            v1.length = -183569378;
            return "boolean";
        },
        "f": "boolean",
        [-183569378]: v1,
        "g": -183569378,
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
const v10 = f0();
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a13;
    this.d = v9;
}
new F11(v9);
new F11(v8);
const v16 = new F11(v10);
let v18 = 11627;
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 268435440;
}
const v25 = new F20(v10, 268435440, v9);
const v26 = new F20(v10, F20, v8);
new F20(v16, v25, v9);
v18 = 268435440;
new f0();
for (let v29 = 0; v29 < 32; v29++) {
    v26["p" + v29] = v29;
}
