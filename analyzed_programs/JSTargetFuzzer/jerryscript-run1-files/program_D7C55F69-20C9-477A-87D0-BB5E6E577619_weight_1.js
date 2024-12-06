function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    if (this == a11) {
        [a12,a12];
        [[this],16n,F9];
    } else {
        -9.09959015455838 < a14;
    }
    this.e = a11;
    this.d = -4096n;
    this.a = 16n;
    function f20() {
        return a12;
    }
    f20 in this;
    const o22 = {
        "apply": f20,
        "call": f20,
        "construct": f20,
        "defineProperty": f20,
        "deleteProperty": f20,
        "get": f20,
        "getOwnPropertyDescriptor": f20,
        "getPrototypeOf": f20,
        "has": f20,
        "isExtensible": f20,
        "preventExtensions": f20,
        "set": f20,
        "setPrototypeOf": f20,
    };
    new Proxy(this, o22);
}
new F9(0.0, -5.0, 0.0, 16n);
const v26 = new F9(0.0, -5.0, "p", -4096n);
new F9(-5.0, -5.0, v26, -4096n);
const v30 = new Float32Array(512);
Math.hypot(v30);
