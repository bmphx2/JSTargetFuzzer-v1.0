const v5 = Symbol.iterator;
const o14 = {
    [v5]() {
        let v7 = 10;
        const o13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                const o12 = {
                    "done": v11,
                    "value": v7,
                };
                return o12;
            },
        };
        return o13;
    },
};
const v23 = [1000000.0,1000000.0,-1.7976931348623157e+308,9.418601764512612,0.43710117488578093];
let v25 = 1000000000000.0;
++v25;
Math.min(v25 * v23);
