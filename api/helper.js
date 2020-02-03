const Db = new Map();

function rate() { // min and max included 
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

function getAverage(count) {
    let result = Object.values(count).reduce((result, value, index) => {
        result.totalrates = + value * index;
        result.totalnumberOfRates = + value;
        return result;
    }, {})
    return result.totalrates / result.totalnumberOfRates;
}

const create = function (req, res) {
    for (let index = 0; index < 10; index++) {
        let count = {
            start1: rate(),
            start2: rate(),
            start3: rate(),
            start4: rate(),
            start5: rate(),
        }
        Db.set(index, { id: index, product: index, average: getAverage(count), count: count, });
    }
}

create();

module.exports.get = function (req, res) {
    console.log('get ratings');

    var id = req.params.id;
    var ratings = Db.get(parseInt(id));
    res.send({ "ratings": ratings })
}
