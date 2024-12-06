function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.e = f0;
    this.g = a6;
}
new F4(-12n);
new F4(-12n);
new F4(320131488n);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    a18 != 5n;
}
new F15(-4294967296, -7n);
function f24() {
}
function f25() {
    const o31 = {
        get g() {
            new f24();
            return f24;
        },
        "h": f24,
        ...f24,
        "g": f24,
        "a": f24,
        ...f24,
    };
    return o31;
}
f25();
const v33 = f25();
f25();
let v37 = Int32Array;
let v38 = new v37(4096);
new Uint32Array(129);
let v44 = new Int16Array(512);
[,v37,v44,v38] = v44;
v33.g += 4096;
const v46 = Symbol.iterator;
const o58 = {
    [v46]() {
        let v48 = 10;
        const o57 = {
            next() {
                v48--;
                const v52 = v48 == 0;
                const v54 = [6,6,6,6];
                v54[5] = 6;
                v54[4];
                const o56 = {
                    "done": v52,
                    "value": v48,
                };
                return o56;
            },
        };
        return o57;
    },
};
