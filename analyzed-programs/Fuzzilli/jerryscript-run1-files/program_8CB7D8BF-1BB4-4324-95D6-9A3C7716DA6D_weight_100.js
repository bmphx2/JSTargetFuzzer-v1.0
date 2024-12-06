function f3() {
    return 3;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 65345;
    this.f = 3;
}
const v11 = new F7(65345, -1954863255);
const v12 = new F7(-4294967297, -13);
const v13 = new F7(-13, 65345);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F7;
    this.b = v11;
}
const v18 = new F14(v12, 46186);
new F14(v13, -13);
new F14(v11, 3);
try {
    const v21 = new F14(v13, -13);
    typeof v21 === "boolean";
} finally {
    v11.a = 65345;
}
v12.a;
Object.defineProperty(v18, 1, { configurable: true, get: f3 });
