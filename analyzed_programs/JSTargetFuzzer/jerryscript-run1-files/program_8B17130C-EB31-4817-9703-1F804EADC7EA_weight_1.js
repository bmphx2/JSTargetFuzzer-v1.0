function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
function f6(a7) {
    const o8 = {
        ...a7,
        ...v3,
        [f0]: a7,
        __proto__: v4,
        "g": v4,
        1: F1,
        "h": v4,
        "f": a7,
        "b": v3,
        "a": v4,
        "e": f0,
    };
    let v10 = 58354n;
    v10 <<= 39655n;
    +null;
    return o8;
}
const v13 = [-1745717045,-65537,-193322565,1073741824,-986345720,5864,-15];
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F14();
const o18 = {
};
const v20 = new Proxy(v17, o18);
const o21 = {
    [v20]: v13,
};
const v22 = f6(v3);
const v23 = `
    let v25;
    try { v25 = WeakSet(WeakSet); } catch (e) {}
    v25[v25] = v25;
    class C26 {
    }
    new Set();
    new Int32Array(77);
    let v33 = 10;
    v33--;
    function f35(a36, a37) {
        const v38 = new v25(a37);
        return v38;
    }
    WeakSet();
`;
9007199254740991 % v23;
f6(v22);
f6(v4);
String();
function F46(a48, a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
}
const v53 = [-16,4];
try { v53.sort(Set); } catch (e) {}
new Map();
function f57(a58, a59, a60) {
    const o74 = {
        [a59](a62, a63) {
            for (let v64 = 0; v64 < 5; v64++) {
                let v65 = -10n;
                v65--;
                const o71 = {
                    m(a68, a69, a70) {
                        return v65;
                    },
                };
                o71.m;
                `CjJ7x${v64}boolean`;
            }
        },
    };
    return f57;
}
