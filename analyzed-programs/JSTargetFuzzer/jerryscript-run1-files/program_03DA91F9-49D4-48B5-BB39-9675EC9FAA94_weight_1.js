function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = this;
}
const v7 = new F3("re", "string");
const v8 = new F3("string", "string");
const v9 = new F3("string", "re");
function f10(a11, a12, a13) {
    const o21 = {
        "c": a13,
        [v7]: F3,
        __proto__: v8,
        "a": F3,
        1: v7,
        [a12](a15, a16, a17) {
            +a11;
            super.b = a11;
            v7.toString = a11;
            return a13;
        },
        [v9]: v7,
        "f": F3,
        "h": a11,
        get d() {
            let v20;
            try { v20 = this.exp(a11, this, "undefined", "string", F3); } catch (e) {}
            return v20;
        },
        ["undefined"]: a12,
        "a": a11,
        "h": v7,
    };
    return "string";
}
const v22 = f10(v8, v7, "re");
f10(v8, v9, "undefined");
f10(f10, v8, "string");
const v26 = [-50429,8,-49584,3,257,12];
v26.f = undefined;
const v27 = v26.shift();
[-327.65720718506293,784.4694960745715,NaN,-3.0,0.0,-1000.0,0.8141935770951176,0.14026167092391617,2.7788634564179293e+307];
[1e-15,8.399576267713119e+307,-1.0,0.7988244602853982,1.0347451259115843e+308,1.2621455052753398e+308,-757.7689724376513,-8.199311883130317];
[-678883.9270199407,-1.9625495474000516,-8.979069757020113,1000.0,2.0];
`Hg${v22}qiWNT${!"undefined"}charAt${v27}string`;
