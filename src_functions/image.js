exports.handler = (event, context, callback) => {
  const time = Math.round(Date.now() / 1000);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      image: `http://www.edesign.nl/examples/sunlightmap/map.php?custom=${time}`,
    }),
  });
};
