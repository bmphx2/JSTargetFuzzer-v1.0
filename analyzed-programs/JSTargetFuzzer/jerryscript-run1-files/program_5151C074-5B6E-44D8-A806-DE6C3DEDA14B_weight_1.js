function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 8;
}
new F0();
new F0();
new F0();
[2,257,10,1073741824];
[-268435456,-45276,-10,-1911765280,1];
[2011166071];
[0.1880909646011264,-644.2551048276492,2.0];
[-1e-15,-306834.4162475349,-6.2573112441857965,-2.220446049250313e-16];
[2.2250738585072014e-308,70.28438925152363,-Infinity,2.2250738585072014e-308,-Infinity,-1000000000.0];
new Uint16Array(0);
new Float32Array(0);
new Int16Array(14);
function f21() {
}
function f22() {
    const o28 = {
        get g() {
            new f21();
            return f21;
        },
        "h": f21,
        ...f21,
        "g": f21,
        "a": f21,
        ...f21,
    };
    return o28;
}
f22();
const v30 = f22();
f22();
function f32() {
    return arguments;
}
const v34 = f32();
function f35() {
    const o36 = {
        ...v34,
    };
    return o36;
}
f35();
f35();
let v41 = Int32Array;
let v42 = new v41(4096);
new Uint32Array(129);
let v48 = new Int16Array(512);
[,v41,v48,v42] = v48;
v30.g += 4096;
const v50 = Symbol.iterator;
const o59 = {
    [v50]() {
        let v52 = 10;
        const o58 = {
            next() {
                v52--;
                const v56 = v52 == 0;
                const o57 = {
                    "done": v56,
                    "value": v52,
                };
                return o57;
            },
        };
        return o58;
    },
};
