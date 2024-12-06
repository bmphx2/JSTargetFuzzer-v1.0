const v9 = [256];
const v10 = [-44663];
const v15 = 421.93655852749794 ** 421.93655852749794;
~(+v15);
v15 && v15;
[-9];
let v20;
try { v20 = new v10(); } catch (e) {}
try { v9.find(v20, v9); } catch (e) {}
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a39;
    const t12 = 5n;
    t12.f = -4294967296;
}
new F34(-4294967296, 5n, "global", "-16");
new F34(-4294967296, -7n, "-16", "global");
const v42 = new F34(-4294967296, 5n, "global", "global");
if ("function" == v42) {
} else {
    function F47(a49, a50, a51) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a51;
    }
    const v52 = new F47(F47, "global", "function");
    new F47(v52, "global", "function", v52, v52);
    new F47(v52, "global", "function");
}
