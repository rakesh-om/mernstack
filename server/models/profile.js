const mongoose = require('mongoose');
const { Schema } = mongoose;

// Sub-schemas
const experienceSchema = new Schema({
  company: String,
  position: String,
  duration: String,
  description: String
}, { _id: false });

const educationSchema = new Schema({
  institution: String,
  degree: String,
  year: String
}, { _id: false });

const certificationSchema = new Schema({
  title: String,
  issuer: String,
  year: String
}, { _id: false });

const portfolioSchema = new Schema({
  name: String,
  category: String
}, { _id: false });

const contactSchema = new Schema({
  email: String,
  phone: String,
  social: {
    github: String,
    linkedin: String,
    instagram: String,
    facebook: String
  }
}, { _id: false });

const ctaSchema = new Schema({
  hire_me: Boolean,
  download_cv: Boolean
}, { _id: false });

const extraSchema = new Schema({
  availability: String,
  relocation: String,
  strengths: [String]
}, { _id: false });

const skillItemSchema = new Schema({
  name: String,
  image: String
}, { _id: false });

const skillsSchema = new Schema({
  Tools: [skillItemSchema],
  "Frameworks & Libraries": [skillItemSchema],
  Databases: [skillItemSchema]
}, { _id: false });

// Main Profile Schema
const profileSchema = new Schema({
  employeeId: { type: String, required: true },
  name: String,
  title: String,
  bio: String,
  summary: String,

  experience: [experienceSchema],
  experienceSummary: String,
  projectSummary: String,
  clients: String,
  services: [String],

  skills: skillsSchema,

  portfolio: [portfolioSchema],
  education: [educationSchema],
  certifications: [certificationSchema],

  languages: [String],
  interests: [String],

  contact: contactSchema,
  cv_link: String,
  avatar: String,
  cta: ctaSchema,
  extra: extraSchema
});

module.exports = mongoose.model('Profile', profileSchema);