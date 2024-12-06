const v0 = [];
function f4() {
    return -65535;
}
function f5() {
    return v0;
}
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a10.b = -65535;
    this.d = v0;
    this.f = -65535;
}
const v11 = new F6(7, 7, 4294967295);
new F6(7, 4294967295, 4294967295);
const v13 = new F6(7, 7, -65535);
function f14() {
    class C15 extends f14 {
        b = v0;
        e = v0;
    }
    new C15();
    new C15();
    new C15();
}
`setPrototypeOf${v11}bind${-65535}min${f14}string${v13}5`;
new f5();
new f4();
v11.d = v0;
const v22 = new f4();
function f23() {
    const o29 = {
        get g() {
            new f23();
            return f14;
        },
        "h": f14,
        ...f14,
        "g": f14,
        "a": f14,
        ...f14,
    };
    return o29;
}
f23();
f23();
const v32 = f23();
let v35 = Int32Array;
let v36 = new v35(4096);
new Uint32Array(129);
for (let i43 = 0; i43 < 3; i43++) {
    const v49 = i43 ** i43;
    try { v32.now(v49, 7, v22); } catch (e) {}
}
let v51 = new Int16Array(512);
[,v35,v51,v36] = v51;
v51.g += 4096;
const v53 = Symbol.iterator;
const o62 = {
    [v53]() {
        let v55 = 10;
        const o61 = {
            next() {
                v55--;
                const v59 = v55 == 0;
                const o60 = {
                    "done": v59,
                    "value": v55,
                };
                return o60;
            },
        };
        return o61;
    },
};
