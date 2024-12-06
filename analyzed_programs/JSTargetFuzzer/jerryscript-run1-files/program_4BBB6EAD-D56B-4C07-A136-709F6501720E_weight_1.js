function f0() {
    const o12 = {
        get g() {
            ("b").__proto__;
            function F6(a8) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a8;
                this.e = "unicode";
                this.h = this;
            }
            const v9 = new F6(f0);
            new F6("b");
            new F6(v9);
            return "b";
        },
        "f": "unicode",
        "g": "b",
        "h": "unicode",
    };
    return o12;
}
f0();
f0();
f0();
new Uint8ClampedArray(16);
new Uint32Array(9);
new BigUint64Array(16);
function f35(a36, a37) {
    const o38 = {
    };
    return "p";
}
([8,536870912])["find"](f35, "find");
