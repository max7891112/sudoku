class TechnicalFunc {
    random(max) {
        let min = 0;
        let rand =  (((min - 0.5) + Math.random() * (max - min + 1)));
        console.log(`
        min: 0;
        max: ${max};
        value: ${Math.round(rand)};
        `)
        return Math.round(rand);    
    }
}

export default new TechnicalFunc();