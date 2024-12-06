function f3(a4) {
    const o14 = {
        "f": a4,
        268435456: f3,
        valueOf(a6) {
            this.toString = 4096;
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a9;
            }
            new F7(a6, a6);
            const v12 = new F7(a6, a6);
            new F7(v12, a4);
            return 4096;
        },
    };
    return o14;
}
const v15 = f3(1);
let v16 = f3(4096);
const v17 = f3(v15);
new f3(4096);
v16 = v17;
typeof f3 === "function";
function f25() {
    return "HRm";
}
const v26 = [];
const v27 = [v26,v26];
const v28 = [v27,v27];
[v27,v28,v27,f25,v27];
function* f39(a40, a41) {
    function f42(a43, a44, a45, a46) {
        Object.defineProperty(v28, 1, { enumerable: true, value: a40 });
        a46[8] |= 4.0;
        return arguments;
    }
    f42();
    const v49 = yield 45279;
    const v51 = ("matchAll")["replace"]("replace", "replace");
    const t40 = "function";
    t40[v51] = v51;
    !"replace";
    Object.defineProperty(v49, "b", { writable: true, configurable: true, get: f42 });
    return 39366;
}
f39(1, 39366);
