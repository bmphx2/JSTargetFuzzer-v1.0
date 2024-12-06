const v0 = [];
function f7() {
    return -4.0;
}
const v8 = [-918325233];
const v9 = [v8,-918325233,-918325233,-918325233];
const v10 = [v0,v9,-3.0,v8,-4.0];
v10[536870889] = f7;
const v11 = v10 >>> -918325233;
Object.defineProperty(v0, "g", { writable: true, configurable: true, enumerable: true, set: f7 });
const o23 = {
    valueOf() {
        const v14 = v10.length;
        try { v0.toLocaleString(v9, v8); } catch (e) {}
        function F16(a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = this;
            this.d = 48154;
            this.h = a19;
        }
        new F16(v14, -3.0);
        new F16(v14, 3.0);
        new F16(v11, -3.0);
        return -3.0;
    },
};
