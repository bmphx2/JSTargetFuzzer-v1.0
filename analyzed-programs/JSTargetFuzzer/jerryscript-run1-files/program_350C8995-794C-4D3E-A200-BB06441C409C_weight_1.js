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
function f13() {
}
function f14() {
    const o20 = {
        get g() {
            new f13();
            return f13;
        },
        "h": f13,
        ...f13,
        "g": f13,
        "a": f13,
        ...f13,
    };
    return o20;
}
f14();
const v22 = f14();
f14();
let v26 = Int32Array;
let v27 = new v26(4096);
new Uint32Array(129);
let v33 = new Int16Array(512);
[,v26,v33,v27] = v33;
v22.g += 4096;
const v35 = Symbol.iterator;
const o47 = {
    [v35]() {
        let v37 = 10;
        const o46 = {
            next() {
                v37--;
                const v41 = v37 == 0;
                const v43 = [6,6,6,6];
                v43[5] = 6;
                v43[4];
                const o45 = {
                    "done": v41,
                    "value": v37,
                };
                return o45;
            },
        };
        return o46;
    },
};
