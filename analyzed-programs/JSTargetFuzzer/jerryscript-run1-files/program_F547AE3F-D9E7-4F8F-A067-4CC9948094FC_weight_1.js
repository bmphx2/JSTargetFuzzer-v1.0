function f0() {
}
function f1() {
    const o8 = {
        [f0]() {
            Object.defineProperty(this, 1, { writable: true, configurable: true, enumerable: true, get: f0 });
            this[257] &= 536870912;
            Object.defineProperty(this, 157, { get: f1, set: f1 });
            [this,f1,this];
            const t8 = 536870912;
            t8[6] = f0;
            try { this.getFullYear(14, 65535, 65535); } catch (e) {}
            return f0;
        },
        "a": f0,
        [f0]: f0,
        "e": f0,
    };
    return o8;
}
const v9 = f1();
f1();
const v11 = f1();
[65536,2147483649,-15,268435441,8030,536870889,-9007199254740992,874179553,-382447657,268435456];
[16,-1362685733,62838,1024,-1719710529,-1];
[1073741824,-11,15,-1627524973];
function f18(a19, a20) {
    new a20();
    return f18;
}
new Promise(f18);
v11.a **= -59711;
v9.e;
v11[6];
