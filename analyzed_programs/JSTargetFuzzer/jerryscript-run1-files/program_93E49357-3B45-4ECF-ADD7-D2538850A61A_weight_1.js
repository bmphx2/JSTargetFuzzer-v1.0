function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.d = v3;
}
const v10 = new F6(F6, v3);
const v11 = new F6(F6, v5);
const v12 = new F6(f0, v4);
let v14 = 23630;
function f16(a17, a18) {
    const o39 = {
        [v4](a20, a21) {
            function f22() {
                const o24 = {
                    [a18]() {
                    },
                };
                return o24;
            }
            f22();
            const v27 = Symbol.toStringTag;
            this[v27];
            [-10,-18451];
            [9007199254740990,4294967295,-1206642156];
            const v31 = [7,-2,4294967295,-1024,-65537,60955,1073741825];
            a18 <<= 39655n;
            [a17,-65537n | 268435439n,-9007199254740990,v31,v27];
            [v10,a18];
            [v27,v11,this];
            return v12;
        },
        "h": a17,
        [v10]: f16,
    };
    return o39;
}
f16(v14, v14);
const t45 = f16(v3, v10);
t45[v11] = v12;
function F47(a49, a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    a51.d = a52;
    this.f = a49;
}
new F47(-4294967296, 5n, "-16", "-16");
++v14;
const v56 = 536870888 + 536870888;
v56 ** v56;
f16(F1, 9);
const v59 = [];
const v60 = [2,-1149901742,1030320580,6];
v60["unshift"]([v60,v60,v60], v59);
