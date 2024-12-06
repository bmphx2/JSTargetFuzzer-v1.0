new TypeError(127);
new Uint8ClampedArray(512);
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
v22[-583.1760893759623];
