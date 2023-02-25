class TechnicalFunc {
    random(min,max) {
        let rand =  (((min - 0.5) + Math.random() * (max - min + 0.5)).toFixed())
        return Math.round(rand)    
    }
}

export default new TechnicalFunc()