const v8 = Symbol.toPrimitive;
const o10 = {
    [v8]() {
        a = -1659848436;
        return 1663073265;
    },
};
class C16 {
}
const v17 = new C16();
const v18 = [-1000.0,-Infinity,-3.0];
function* f19(a20, a21) {
    yield* v17;
    return f19;
}
const v22 = f19();
const v23 = [8,0,4294967297,-33048,6,1000,983207413];
try { v18["splice"](...v23, ...v22); } catch (e) {}
