function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 20691;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v9 = [-1000000000.0,424710.52245742595,NaN];
const v10 = [2.2250738585072014e-308,-1.243233025064585,0.0,-2.0,150.58581480105795,-1000.0];
const v11 = [972.5800721250407,-1e-15,1000000.0,2.2250738585072014e-308,611640.6378262923];
const v17 = new Map();
function f18(a19, a20, a21) {
    const o22 = {
        ...a19,
        __proto__: v17,
    };
    return o22;
}
f18(v11, f18(v9, v5, f18(v11, v3, v10)), v11);
