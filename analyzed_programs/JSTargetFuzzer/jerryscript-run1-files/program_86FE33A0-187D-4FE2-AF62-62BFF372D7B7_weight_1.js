function f0() {
}
function f1() {
    const o8 = {
        "h": f0,
        ...f0,
        [f0]: f0,
        __proto__: f0,
        o() {
            try { this["toDateString"](); } catch (e) {}
            typeof f0 === "bigint";
            return "bigint";
        },
    };
    return o8;
}
f1();
f1();
f1();
const v19 = new Date();
const t20 = RegExp.bind();
t20(v19);
