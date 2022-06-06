import { CompanyPipe } from './company.pipe';

describe('CompanyPipe', () => {
  it('create an instance', () => {
    const pipe = new CompanyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return array filterde by "yoigo"', () => {
    const clients = [
      {
        "name": "Myra Breitenberg",
        "username": "Bailee_Kozey91",
        "email": "Magdalen.Kautzer86@gmail.com",
        "phone": "(638) 621-9341 x59667",
        "website": "deven.info",
        "company": {
            "name": "Yoigo"
        },
      },
      {
        "name": "Forrest Miller",
        "username": "Juston.Oberbrunner39",
        "email": "Eryn_Parisian@hotmail.com",
        "phone": "958.504.4785",
        "website": "abraham.name",
        "company": {
            "name": "XXX"
        },
      }
    ]
    const pipe = new CompanyPipe();
    const filteredClients = pipe.transform(clients, 'yoigo');
    expect(filteredClients.length).toBe(1);
  })
});
