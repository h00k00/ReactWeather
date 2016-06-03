function getTempCallback (location, callback) {
  callback(undefined, 23);
  callback('City not found');
}

getTempCallback('Turku' , function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);  
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(43);
    reject('City not found');
  });
}

getTempPromise('Turku').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);  
})