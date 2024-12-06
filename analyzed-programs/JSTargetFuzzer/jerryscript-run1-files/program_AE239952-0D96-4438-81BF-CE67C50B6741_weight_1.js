const v3 = [-1024,-14,-14,-289352496];
const v4 = [v3];
const v5 = [-14,v4];
function f6(a7, a8) {
    const o15 = {
        [a7]: -14,
        "h": -1024,
        set b(a10) {
            try { a10(); } catch (e) {}
            [] = v3;
            new Array(10);
        },
        ...a7,
        __proto__: v5,
    };
    return o15;
}
f6(v4, v5);
const v17 = f6(v4, v3);
const v18 = f6(v5, v4);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v18;
    this.c = -14;
    this.b = v17;
}
new F19(v5, v4);
new F19(v3, v3);
new F19(v3, v5);
function f26() {
    return f26;
}
const v27 = [-14,-1731844252,7,-6,10,11,2147483649];
const v28 = [9,-65535];
function f29(a30, a31) {
    v28["keys"](...v27);
}
const v35 = new Promise(f29);
const v36 = [1000.0,6.850766073020413,1000000000000.0];
const v37 = [-2.3616640551925634e+307,0.02455573492666774];
const o38 = {
};
const v40 = new Proxy(v37, o38);
v40.__proto__ = v36;
v35["catch"](f26);
