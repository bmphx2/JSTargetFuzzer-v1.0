function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 65535;
    this.f = 65535;
}
const v3 = new F0();
new F0();
new F0();
[-3.0];
const v10 = [0.5581691067688234];
let v11 = 0;
while (v11 < 5) {
    try { v3.clz32(-59262, v10, v11); } catch (e) {}
    v11++;
}
[NaN,-940.727337336059,1000.0,-3.0,-398.5763275491512,-1000000000.0,-2.220446049250313e-16,0.7169687094202657];
function f20() {
}
function f21() {
    const o27 = {
        get g() {
            new f20();
            return f20;
        },
        "h": f20,
        ...f20,
        "g": f20,
        "a": f20,
        ...f20,
    };
    return o27;
}
f21();
const v29 = f21();
const v30 = f21();
let v33 = Int32Array;
let v34 = new v33(4096);
new Uint32Array(129);
let v40 = new Int16Array(512);
[,v33,v40,v34] = v40;
v29.g += 4096;
const v42 = Symbol.iterator;
const o64 = {
    [v42]() {
        let v44 = 10;
        const o63 = {
            next() {
                v44--;
                const v48 = v44 == 0;
                const o49 = {
                    "done": v48,
                    "value": v44,
                };
                return o49;
            },
            p(a51, a52, a53, a54) {
                let v56 = 24794;
                const v58 = v56--;
                +a52;
                v58 - v44;
                -v58;
                v30 ** v30;
                return -651.9212312509067;
            },
        };
        return o63;
    },
};
