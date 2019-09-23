import faker from "faker";

const countries = ["NZ", "AU", "NZ/AU"];
const types = ["Observer", "In Training", "Support", "Lead"];

const randomPick = items => {
  return items[genNum(items.length)];
};

const genNum = num => {
  return Math.floor(Math.random() * num);
};

export const genData = num => {
  let data = [];
  for (var i = 0; i < num; i++) {
    data.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      mobile: faker.phone.phoneNumber(),
      type: randomPick(types),
      country: randomPick(countries),
      amountOfAudits: {
        nz: {
          observer: genNum(4 + 1),
          inTraining: genNum(4 + 1),
          support: genNum(4 + 1),
          lead: genNum(10)
        },
        au: {
          observer: genNum(4 + 1),
          inTraining: genNum(4 + 1),
          support: genNum(4 + 1),
          lead: genNum(10)
        }
      }
    });
  }
  return data;
};
