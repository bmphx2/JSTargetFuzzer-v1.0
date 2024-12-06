[];
new Float32Array(10, Float32Array);
new Uint8Array(83);
new Uint8ClampedArray(25);
function f13() {
    return Uint8ClampedArray;
}
function F17() {
    if (!new.target) { throw 'must be called with new'; }
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v23 = new F19();
    Date["now"](v23, 2, -482972643, ..."now");
}
new F17();
