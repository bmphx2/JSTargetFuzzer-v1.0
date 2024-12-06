let v0 = 65537n;
const v3 = [v0,v0,1073741824n];
[53727n,1073741824n,53727n,v3];
const v5 = [1073741824n,1073741824n,1073741824n,v3];
const o6 = {
};
const v8 = new Proxy(v5, o6);
[v0,v0] = v8;
const v12 = [o6];
const v13 = [1073741824n,2.2250738585072014e-308];
const v14 = [v5,v0,1073741824n];
new Uint32Array(1);
new BigUint64Array(0);
const o22 = {
};
const v24 = new Proxy(v14, o22);
v12[-2.2250738585072014e-308] = v13;
new Uint32Array(4);
const o37 = {
    get d() {
        function F29(a31, a32, a33) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a31;
            this.d = Proxy;
            this.b = this;
        }
        new F29(Uint32Array, v24, 0);
        new F29(Uint32Array, Uint32Array, 4);
        const v36 = new F29(Uint32Array, v24, 4);
        this[v36] *= 255;
        return this;
    },
};
