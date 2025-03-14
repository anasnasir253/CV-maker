import * as actionTypes from "../types/CvGeneratorTypes";
const initialState = {
  config: {
    footerEnabler: true,
  },
  cvData: {
    firstName: "John",
    lastName: "Doe",
    email: "johndeo@example.com",
    jobTitle: "",
    physicalAddress: "",
    country: "",
    zipCode: "",
    phone: "+090078601",
    drivingLicense: "",
    profileImage: "",
    DOB: "2022 01 01",
    twitter: "www.twitter.com/",
    linkedin: "www.linkedin.com/",
    github: "www.github.com/",
    stackOverflow: "www.stackoverflow.com/",
    website: "www.link-to-your-portfolio.com/",
    saveAs: "Skriv inn CV-navn",
    lastModified: "2022 01 01",
    cvScreenShot: "my inital state",
    displayProgressBar: true,
  },
  saveData: "<p></p>",
  education: [
    // {
    //   school: "",
    //   study: "",
    //   location: "",
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   additionalInformation: "",
    //   enableAccordian: true,
    // },
  ],
  experiance: [
    // {
    //   jobTitle: "",
    //   employer: "",
    //   location: "",
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   additionalInformation: "",
    //   enableAccordian: true,
    // },
  ],
  sliderData: [{ name: "", value: 50, enableAccordian: true }],
  language: [{ name: "", value: "", enableAccordian: true }],
  properties: [{ name: "", value: 50, enableAccordian: true }],
  courses: [
    // { name: "", startDate: "", endDate: "", enableAccordian: true },
  ],
  references: [{ name: "", companyName: "", email: "", enableAccordian: true }],
  additionalAccordian: {
    Kurs: false,
    Praksisplasser: false,
    Hobbyer: false,
    Referanser: false,
  },
  internships: [
    // {
    //   jobTitle: "",
    //   companyName: "",
    //   location: "",
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   additionalInformation: "",
    //   enableAccordian: true,
    // },
  ],
  hobbies: [{ name: "", value: 50, enableAccordian: true }],

  refrenceToggle:false,
  datePresent:false,
};

export const CV_DATA = (state) => state.CvGeneratorReducer.cvData;
export const Education_DATA = (state) => state.CvGeneratorReducer.education;
export const Experiance_Data = (state) => state.CvGeneratorReducer.experiance;
export const sliderData = (state) => state.CvGeneratorReducer.sliderData;
export const languageData = (state) => state.CvGeneratorReducer.language;
export const propertiesData = (state) => state.CvGeneratorReducer.properties;
export const coursesData = (state) => state.CvGeneratorReducer.courses;
export const profileRichTextData = (state) => state.CvGeneratorReducer.saveData;
export const referenceData = (state) => state.CvGeneratorReducer.references;
export const configData = (state) => state.CvGeneratorReducer.config;
export const getAdditionalAccordian = (state) => state.CvGeneratorReducer.additionalAccordian;
export const getInternships = (state) => state.CvGeneratorReducer.internships;
export const getHobbies = (state) => state.CvGeneratorReducer.hobbies;
export const getRefToggle = (state) => state.CvGeneratorReducer.refrenceToggle;
export const getPresentDate =(state) => state.CvGeneratorReducer.datePresent;

export default function CvGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CVGENERATORDATA:
      action.payload.lastModified = new Date();
      return {
        ...state,
        cvData: action.payload,
      };
    case actionTypes.ADDEDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITEDUCATION:
      return {
        ...state,
        education: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.REMOVEEDUCATION:
      return {
        ...state,
        education: state.education.filter((item, index) => index !== action.payload),
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.UPDATEEDUCATIONTOGGLE:

      return {
        ...state,
        education: state.education.map((item, index) => index === action.payload.accordianIndex ? { ...item , toggle: action.payload.nextChecked } : item),
       
      };
    case actionTypes.ADDWORKEXPERIANCE:
      return {
        ...state,
        experiance: [...state.experiance, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITWORKEXPERIANCE:
      return {
        ...state,
        experiance: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.REMOVEWORKEXPERIANCE:
      return {
        ...state,
        experiance: state.experiance.filter((item, index) => index !== action.payload),
        cvData: { ...state.cvData, lastModified: new Date() },
      };
      case actionTypes.UPDATEEXPERIENCETOGGLE:

      return {
        ...state,
        experiance: state.experiance.map((item, index) => index === action.payload.accordianIndex ? { ...item , toggle: action.payload.nextChecked } : item),
       
      };
    case actionTypes.ADDSLIDER:
      return {
        ...state,
        sliderData: [...state.sliderData, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.DELETESLIDER:
      return {
        ...state,
        sliderData: state.sliderData.filter((item, index) => index !== action.payload),
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITSLIDER:
      return {
        ...state,
        sliderData: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.ADDLANGUAGE:
      return {
        ...state,
        language: [...state.language, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITLANGUAGE:
      return {
        ...state,
        language: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case action.DELETELANGUAGE:
      return {
        ...state,
        language: state.language.filter((item, index) => index !== action.payload),
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.ADDPROPERTY:
      return {
        ...state,
        properties: [...state.properties, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITPROPERTY:
      return {
        ...state,
        properties: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.ADDCOURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITCOURSE:
      return {
        ...state,
        courses: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.SAVEDATA:
      return {
        ...state,
        saveData: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.ADDREFERENCE:
      return {
        ...state,
        references: [...state.references, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITREFERENCE:
      return {
        ...state,
        references: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITCONFIG:
      return {
        ...state,
        config: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITADDITIONALACCORDIAN:
      return {
        ...state,
        additionalAccordian: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITHOBBIES:
      return {
        ...state,
        hobbies: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.EDITINTERNSHIPS:
      return {
        ...state,
        internships: action.payload,
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.DELETEINTERNSHIP:
      return {
        ...state,
        internships: state.internships.filter((item, index) => index !== action.payload),
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.ADDINTERNSHIP:
      return {
        ...state,
        internships: [...state.internships, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };

      case actionTypes.UPDATEINTERNSHIPTOGGLE:

      return {
        ...state,
        internships: state.internships.map((item, index) => index === action.payload.accordianIndex ? { ...item , toggle: action.payload.nextChecked } : item),
       
      };
    case actionTypes.DELETEHOBBY:
      return {
        ...state,
        hobbies: state.hobbies.filter((item, index) => index !== action.payload),
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.ADDHOBBY:
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload],
        cvData: { ...state.cvData, lastModified: new Date() },
      };
    case actionTypes.REFTOGGLE:
      return {
        ...state,
        refrenceToggle: action.payload,
       
      };
    case actionTypes.DATEPRESENT:
      return {
        ...state,
        datePresent: action.payload,
       
      };
    default:
      return state;
  }
}
