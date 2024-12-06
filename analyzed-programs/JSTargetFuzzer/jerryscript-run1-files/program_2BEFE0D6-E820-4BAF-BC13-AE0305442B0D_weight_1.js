new Set();
new Uint16Array(3);
new Float64Array(127);
new Int32Array(1000);
Number(536870887n);
const v18 = RegExp.bind(RegExp);
const o19 = {
    ...v18,
};
function f20() {
    return f20;
}
class C21 extends f20 {
}
try {
    function f22() {
        return C21;
    }
    function f23(a24, a25, a26, a27) {
        const o28 = {
            "construct": f22,
        };
        return a25;
    }
} finally {
}
