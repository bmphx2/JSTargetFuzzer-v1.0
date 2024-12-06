function f0() {
    const o12 = {
        "g": 2,
        [2]: "1073741824",
        get e() {
            const v6 = Symbol.toPrimitive;
            const o11 = {
                [v6]() {
                    [-0.7532645752859004,2,this];
                    [2,Symbol,-0.7532645752859004];
                    [v6,2];
                    return 2;
                },
            };
            return "1073741824";
        },
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v15 = f0();
const v16 = [v15];
const v17 = [v15,v16];
const v18 = [v16,f0,v17,f0];
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    v13.d = a24;
    this.a = a25;
}
new F22(v17, "string", v17);
new F22(f0, "string", v13);
new F22(v14, "f", v18);
const o31 = {
};
Reflect.has(v15);
