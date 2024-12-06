function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
new F1();
new F1(F1, F1);
const v5 = new F1();
new Date();
new Int8Array(2);
const v19 = new Int8Array(7);
const v22 = new BigUint64Array(3611);
const v25 = new Int32Array(11);
new Uint16Array(2);
new Int8Array(1812);
v25[268435441] <<= 11;
if (Int8Array < v22) {
    function f34(a35, a36) {
        const o59 = {
            [a36](a38, a39) {
                function f40(a41, a42, a43) {
                    return a43;
                }
                function f44() {
                    Date["UTC"]();
                    return "UTC";
                }
                const v48 = [-14,-1731844252,7,-6,10,11,2147483649];
                const v49 = [9,-65535];
                function f50(a51, a52) {
                    v49["keys"](...v48, a52, ...f40);
                    return f40;
                }
                const v56 = new Promise(f50);
                v56["catch"](f44);
            },
        };
        return o59;
    }
    const v63 = -v25;
    +(v25 / v63);
    ("includes").matchAll("includes") >> 1024;
    const v71 = new Set();
    v71.has(v5);
    const v73 = +-63039444;
    0.7287685177565071 && v25;
    +v63;
    v73 + 937;
} else {
    v19[v19];
}
