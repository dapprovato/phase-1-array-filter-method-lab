function findMatching(drivers, string) {
   return drivers.filter(function(driver) {
    return string.toLowerCase() === driver.toLowerCase()
   })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver){
        return driver.startsWith(string)
    })
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name === string
    })
}