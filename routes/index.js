const fibo = require('../fibonacci');
function fibonacciRoutes(app, port){
  app.get('/', (request, response) => {
    response.send(`
      <h1 style='text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: normal'>
      Place a number after the url to see it's fibonnacci number
      </h1>
      <h2 style='text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: normal'>
      <br/>
      Example: <a href='http://localhost:${port}/6'>http://localhost:${port}/<strong><u>6</u></strong></a>
      <br/>
      </h2>
      <br/>
      <h1 style='text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: normal'>
      Also you can use this route http://localhost:${port}/json/:number to get a JSON
      </h1>
      <h2 style='text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: normal'>
      <br/>    
      Example: <a href='http://localhost:${port}/json/6'>http://localhost:${port}/json/<strong><u>6</u></strong></a>    
      `);
  });
  
  app.get('/json/:number', (request, response, next) => {
    const { number } = request.params;
    if (typeof parseInt(number) === 'number') {
      try {
        const result = fibo(number)
        response.status(200).json({
          data: result,
          message: `result of fibonacci of ${number}`,
        });
      } catch (err) {
        next(err);
      }
    }
  });
  
  app.get('/:number', (request, response) => {
    const { number } = request.params;
    if (typeof parseInt(number) === 'number') {
      const result = fibo(number)
      response.send(`
      <h2 style='text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: normal'>
      The fibonnacci of ${ number } is <strong><u>${ result }</u></strong>
      </h2>
      `);
    }else {
      response.send(`
      <h2 style='text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: normal'>
      "${number }" is not a number
      </h2>`);
    }
  });
}

module.exports = fibonacciRoutes
