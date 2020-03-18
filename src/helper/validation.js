const Joi = require('@hapi/joi');

const validateObecjt = {
  userName: Joi.string()
    .alphanum()
    .min(2)
    .max(40)
    .required(),
  userEmail: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] }
    })
    .min(7)
    .required(),
  userPassword: Joi.string()
    .min(7)
    .pattern(new RegExp('^[a-zA-Z0-9]'))
    .required(),
  repeatPassword: Joi.ref('userPassword')
};

const schema = Joi.object(validateObecjt);

const validation = data => {
  return schema.validate(data);
};

module.exports = validation;
