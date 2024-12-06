const v3 = [1e-15,5.0,-2.0,5.0,1e-15];
const v4 = [-2.0,5.0,v3,v3,5.0,v3];
const v5 = [-2.0,v4,v4,v4];
const v9 = [5.0,1e-15,v4,v5];
[-1073741824,1e-15,-9223372036854775807,1e-15,-2.0];
[v3,v5,v5,v3];
function f13(a14, a15) {
    try { a14(a14, a15); } catch (e) {}
    const v17 = [-9223372036854775807,2,268435439,0,0,55990];
    const o18 = {
        __proto__: v5,
        [5.0]: -2.0,
        2651: v9,
        [-2.0]: v9,
        "d": -2.0,
    };
    const v20 = new Uint32Array();
    function f21() {
        return Uint32Array;
    }
    v20.find(f21);
    const v24 = new Proxy(v17, o18);
    v24 % 1000000000000.0;
    return a15;
}
f13(f13);
