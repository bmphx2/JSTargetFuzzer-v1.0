new TypeError(127);
new Date(512, TypeError, TypeError);
new Uint16Array(4);
const o18 = {
    valueOf() {
        const o13 = {
            "maxByteLength": 536870888,
        };
        const v15 = new ArrayBuffer(0, o13);
        new Int16Array(v15);
        return 127;
    },
};
const v22 = new Int16Array();
v22[-1e-15];
