function f0() {
    let v1 = -9388;
    const o7 = {
        get g() {
            const v5 = "g" * 268435456;
            --v1;
            return v5;
        },
        65537: 268435456,
        3: 268435456,
        __proto__: "g",
        "h": "g",
        ["g"]: "g",
    };
    return o7;
}
f0();
f0();
const v10 = f0();
function f11() {
    return v10;
}
[536870888];
[-6];
([])["sort"]();
[-2,268435439];
const o22 = {
    get g() {
        return this;
    },
};
let v23 = [o22,o22,o22,o22];
let v24 = --v23;
let v25 = ++v24;
Object.defineProperty(o22, "g", { value: --v25 });
