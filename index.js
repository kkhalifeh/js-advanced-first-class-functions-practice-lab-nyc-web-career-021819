
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(arr) {arr.forEach(function(el) {
  console.log(el["name"]) }
)}

function logDriversByHometown (arr, hometown) {
  arr.forEach(function (el) {
    if (el["hometown"] === hometown) {
      console.log(el["name"]);
    }
  });
};

function driversByRevenue(arr) {
  return arr.slice().sort(function (a,b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(arr) {
  return arr.slice().sort(function (a,b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
}

function totalRevenue(arr) {
  var initialValue = 0;
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue;
  },initialValue)
}

function averageRevenue(arr) {
  let total = totalRevenue(arr)
  return total / arr.length
}
