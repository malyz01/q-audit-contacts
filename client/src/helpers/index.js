import faker from "faker";

const genNum = num => {
  return Math.ceil(Math.random() * num) + 1;
};

export const genData = num => {
  let data = [];
  for (var i = 0; i < num; i++) {
    data.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      mobile: faker.phone.phoneNumber(),
      amountOfAudits: {
        nz: {
          observer: genNum(4),
          inTraining: genNum(4),
          support: genNum(4),
          lead: genNum(4)
        },
        au: {
          observer: genNum(4),
          inTraining: genNum(4),
          support: genNum(4),
          lead: genNum(4)
        }
      }
    });
  }
  return data;
};
