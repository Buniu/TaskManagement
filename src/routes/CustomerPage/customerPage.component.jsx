import { Route,Routes } from "react-router-dom"
import CompanyPage from "../CompanyPage/companyPage.component"
import ShowCompanies from "../../components/ShowCompanies/showCompanies.component"
import ServicePage from "../../components/ServicePage/servicePage.component"

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