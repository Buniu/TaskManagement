import './companyPage.styles.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectCompaniesList, selectCompanyById } from '../../store/companies/companies.selector'
import CompanyDetails from '../../components/CompanyDetails/companyDetails.component'
import ModifyCompany from '../../components/ModifyCompany/modifyCompany.component'
import ShowCompanyServices from '../../components/ShowCompanyServices/showCompanyServices.component'

const CompanyPage = () => {
    const {companyId} = useParams()
    const company = useSelector(state => selectCompanyById(state,companyId))
    const [selectedNavigationComponent,setSelectedNavigationComponent] = useState('company-details')

    const renderComponent = () => {
        switch(selectedNavigationComponent) {
            case 'company-details':
                return <CompanyDetails company={company}/>
            case 'company-services':
                return <ShowCompanyServices company={company}/>
            case 'company-modify menu':
                return <ModifyCompany company={company}/>   
            default: 
            return null          
        }
    }

    return (
        <div className='company-page-container'>
            <div className='company-page-navigation'>
                <button onClick={()=>{setSelectedNavigationComponent('company-details')}}>Company</button>
                <button onClick={()=>{setSelectedNavigationComponent('company-services')}}>Services</button>
                <button onClick={()=>{setSelectedNavigationComponent('company-modify menu')}}>Modify Company</button>
            </div>


            {renderComponent()}


        </div>
    )
}

export default CompanyPage