import { Route,Routes } from "react-router-dom"
import CompanyPage from "../company-page/company-page.component"
import ShowCompanies from "../../components/show-companies/show-companies.component"
import ServicePage from "../../components/service-page/service-page.component"

const CustomerPage = () => {
    return (
 <Routes>
    <Route index element={<ShowCompanies/>} />
    <Route path=':companyId' element={<CompanyPage/>}/>
    <Route path=':companyId/:serviceId' element={<ServicePage/>}/>
 </Routes>
    )
}



export default CustomerPage