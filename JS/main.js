import {getRoles, getCompanies} from './modules/salaryData.js';
import {getAverageSalaryByRole, getSalaryAtCompany, getIndustryAverageSalary, getAverageSalaryByCompany} from './modules/workAroundModule.js';
import formatNumbers from './modules/utilities.js';
const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');