function f0() {
}
function f4(a5) {
    const o9 = {
        ["valueOf"]: a5,
        "e": "object",
        ["valueOf"]: "o",
        "g": a5,
        [f0](a7) {
            a5[this] = a7;
            this.e >>>= this;
            Object.defineProperty(a7, "h", { enumerable: true, value: "o" });
            return "valueOf" % a7;
        },
    };
    return o9;
}
f4("o");
f4("o");
f4("o");
const v16 = [-1];
const o17 = {
    __proto__: v16,
};
new Date(0, o17);
