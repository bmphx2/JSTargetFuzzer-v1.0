function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = "2";
}
new F4("raw", "raw");
new F4("raw", "2");
new F4("find", "find");
for (let v13 = 0; v13 < 32; v13++) {
    const t10 = "2";
    t10["p" + "raw"] = v13;
}
const v18 = new Set();
const o26 = {
    toString(a20, a21, a22, a23) {
        Proxy();
        return v18;
    },
};
async function f27(a28, a29) {
    return 1073741823 >>> o26;
}
f27();
