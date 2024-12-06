function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "throw";
}
const v7 = new F3("throw", "throw");
([[]]).toLocaleString();
const v11 = new F3("throw", "throw");
new F3("832487973", v7);
function f13() {
    return v11;
}
function F20() {
    if (!new.target) { throw 'must be called with new'; }
}
const v22 = new F20();
new F20();
const v24 = new F20();
const v27 = new Array(3565);
const v29 = new WeakSet();
function f33(a34, a35, a36, a37) {
    const o44 = {
        "g": v27,
        ["e"]: a34,
        __proto__: a34,
        valueOf(a39, a40) {
            const v41 = this != a39;
            try { a37(v41); } catch (e) {}
            a40.length += 6.387594296892118;
            return a34;
        },
        "c": a36,
    };
    return o44;
}
const v45 = f33("1176243804", v24, v24);
const v47 = f33("1176243804", v29, f33("d", v24, v24), v45);
function f48(a49, a50) {
    const v51 = new f33(..."1176243804", ...a49, v22, ..."1176243804");
    typeof v51 === "function";
    v29[256];
    return a50;
}
f48("1176243804");
for (let v57 = 0; v57 < 5; v57++) {
    v47["p" + v57] = v57;
}
