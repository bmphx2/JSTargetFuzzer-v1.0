new Float64Array(126);
new Uint8Array(2);
new Int32Array(5);
const o22 = {
    valueOf() {
        const v13 = 2 & 126;
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = 126;
            this.g = v13;
        }
        new F14(126, v13, 9);
        new F14(9, 126, v13);
        new F14(v13, -268435456, 5);
        return 126;
    },
};
