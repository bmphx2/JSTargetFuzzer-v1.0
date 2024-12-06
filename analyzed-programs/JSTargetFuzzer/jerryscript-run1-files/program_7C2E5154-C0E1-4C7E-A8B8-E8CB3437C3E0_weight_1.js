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
const o21 = {
    ...f20,
    ...f20,
};
function f22() {
    return f22;
}
class C23 extends f22 {
}
try {
    function f24() {
        return C23;
    }
    function f25(a26, a27, a28, a29) {
        const o30 = {
            "construct": f24,
        };
        return a27;
    }
} finally {
}
