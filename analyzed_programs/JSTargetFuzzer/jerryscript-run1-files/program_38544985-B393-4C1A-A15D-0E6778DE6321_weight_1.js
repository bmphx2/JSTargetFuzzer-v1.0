const o16 = {
    valueOf() {
        for (let v13 = 0; v13 < 32; v13++) {
            this["p" + v13] = v13;
        }
        return 15;
    },
};
const v21 = Function();
const v24 = new Float32Array(127);
v24["filter"](v21);
