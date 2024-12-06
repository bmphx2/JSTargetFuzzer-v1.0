function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -536870912;
}
new F0();
new F0();
new F0();
[-Infinity,0.39822613010939345,5.0,0.3646469831611102,4.8998479882293715,-2.220446049250313e-16,0.6877502876660512];
[-1000000.0,0.34510428807204463,7.837075837910103];
[1000000000000.0,-1000.0,5.0,-1000000000.0,101.72922813097557];
[-391936.2559975956,4.952524269701565e+307,704.3594902266775];
[2.2250738585072014e-308];
const v11 = [0.39859889885956623,-9.999453555034476];
function f12() {
    return v11;
}
function f13() {
}
function f14() {
    const o20 = {
        get g() {
            new f13();
            return f13;
        },
        "h": f13,
        ...f14,
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
let v31 = 512;
let v33 = new Int16Array(v31);
[,v26,v33,v27] = v33;
v22.g += 4096;
const v35 = Symbol.iterator;
const o44 = {
    [v35]() {
        const o43 = {
            next() {
                v31--;
                const v41 = 10 == 0;
                const o42 = {
                    "done": v41,
                    "value": 10,
                };
                return o42;
            },
        };
        return o43;
    },
};
