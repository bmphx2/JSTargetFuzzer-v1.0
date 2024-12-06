const v0 = [3.0,-339597.2497599673,1.7872244160178655e+307,3.0];
const v1 = [2.0,4.131743220702978e+306,-3.8613968755626438,3.0,-339437.4008582919,-705765.8587076704,5.0,3.5871611857171217];
const v2 = [-1000000.0,6.117747406177209,2.2250738585072014e-308,-970683.8444662143,-3.0,169246.89291063487,4.927693275065657e+307];
function f3(a4, a5) {
    const o12 = {
        "a": v1,
        ...v0,
        __proto__: v0,
        [v2]: a4,
        [a4]: v1,
        "h": a4,
        [a4](a7) {
            /[\c1]?/m;
            return "9007199254740990";
        },
        "e": a5,
        [v1]: v0,
        ...v0,
        "h": a5,
    };
    return o12;
}
const v13 = f3(v0, v2);
f3(v2, v2);
const v15 = f3(v0, v1);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a18;
    function F20(a22, a23, a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a19;
    }
    new F20(a18, v1, v2, v13);
    new F20(v15, a18, v0, v15);
    new F20(v15, v1, v2, a18);
}
new F16(v0, v1);
new F16(v2, v2);
new F16(v0, v1);
class C34 extends (5).constructor {
}
new C34();
